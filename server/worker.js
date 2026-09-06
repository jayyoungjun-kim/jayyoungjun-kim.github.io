import { authenticate, ADMIN_EMAIL } from './auth.js';
import { inspect, applyEdits, changeBlock, cloneProject, preview, INTRO_PATH } from './content.js';
import { GitHub, isPage, isCorePage } from './github.js';
import { HttpError, requireValue } from './errors.js';

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' },
});
const now = () => new Date().toISOString();
const MAX_SOURCE = 650000;
async function body(request) {
  requireValue(request.headers.get('Content-Type')?.startsWith('application/json'), 415, 'JSON 요청이 필요합니다.');
  requireValue(Number(request.headers.get('Content-Length') || 0) <= 750000, 413, '요청이 너무 큽니다.');
  const bytes = await readLimited(request, 750000);
  try { return JSON.parse(new TextDecoder().decode(bytes)); } catch { throw new HttpError(400, '요청 내용을 읽을 수 없습니다.'); }
}
async function readLimited(request, limit) {
  const reader = request.body?.getReader();
  if (!reader) return new Uint8Array();
  const chunks = []; let size = 0;
  while (true) {
    const { done, value } = await reader.read(); if (done) break;
    size += value.length;
    if (size > limit) { await reader.cancel(); throw new HttpError(413, '파일 또는 요청이 너무 큽니다.'); }
    chunks.push(value);
  }
  const result = new Uint8Array(size); let offset = 0;
  for (const chunk of chunks) { result.set(chunk, offset); offset += chunk.length; }
  return result;
}
async function draft(env, page, owner) {
  return env.DB.prepare('SELECT * FROM drafts WHERE page = ? AND owner = ?').bind(page, owner).first();
}
async function saveDraft(env, { page, owner, baseSha, source, revision, draftId }) {
  requireValue(source.length < MAX_SOURCE, 413, '페이지가 너무 큽니다.');
  let result;
  if (revision === 0) result = await env.DB.prepare(
    'INSERT INTO drafts(page,owner,base_sha,source,revision,updated_at,draft_id) VALUES(?,?,?,?,1,?,?) ON CONFLICT(page) DO NOTHING'
  ).bind(page, owner, baseSha, source, now(), crypto.randomUUID()).run();
  else result = await env.DB.prepare(
    'UPDATE drafts SET source=?, revision=revision+1, updated_at=? WHERE page=? AND owner=? AND revision=? AND draft_id=?'
  ).bind(source, now(), page, owner, revision, draftId).run();
  requireValue(result.meta.changes === 1, 409, '다른 창에서 초안이 변경되었습니다. 다시 불러와 주세요.');
  return draft(env, page, owner);
}
async function currentEdit(env, github, page, owner, revision, baseSha, draftId) {
  requireValue(Number.isInteger(revision) && revision >= 0, 422, '초안 버전이 필요합니다.');
  const saved = await draft(env, page, owner);
  if (saved) {
    requireValue(saved.revision === revision && saved.draft_id === draftId && saved.base_sha === baseSha, 409, '초안이 변경되었습니다. 다시 불러와 주세요.');
    return saved;
  }
  requireValue(revision === 0, 409, '초안이 이미 발행되거나 삭제되었습니다.');
  const file = await github.file(page);
  requireValue(file.sha === baseSha, 409, '원격 파일이 변경되었습니다. 다시 불러와 주세요.');
  return { source: file.source, base_sha: file.sha, revision: 0 };
}
function documentData(row, page, remoteSha) {
  const { fields, ...data } = inspect(row.source, page);
  return { ...data, page, fields: fields.map(({ start, end, kind, ...f }) => f),
    revision: row.revision, draftId: row.draft_id || null, baseSha: row.base_sha, updatedAt: row.updated_at || null,
    conflict: remoteSha !== undefined && remoteSha !== row.base_sha };
}

export function createHandler({ verify = authenticate, githubFactory = env => new GitHub(env) } = {}) {
  return async function handle(request, env) {
    let response;
    const origin = request.headers.get('Origin');
    try {
      requireValue(env.ADMIN_ORIGIN && origin === env.ADMIN_ORIGIN, 403, '허용된 관리자 화면에서 접속해 주세요.');
      if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(origin) });
      const url = new URL(request.url), path = url.pathname;
      if (path === '/api/config' && request.method === 'GET') return jsonCors({
        clientId: env.GOOGLE_CLIENT_ID || '', allowedEmail: ADMIN_EMAIL,
        ready: !!(env.GOOGLE_CLIENT_ID && env.GITHUB_TOKEN && env.DB && env.UPLOADS),
      }, origin);
      const user = await verify(request, env);
      requireValue(env.DB, 503, '초안 저장소 연결이 아직 완료되지 않았습니다.');
      const github = githubFactory(env), owner = user.sub;
      if (path === '/api/session' && request.method === 'GET') return jsonCors(user, origin);
      if (path === '/api/pages' && request.method === 'GET') {
        const remote = await github.pages();
        const saved = (await env.DB.prepare('SELECT page, revision, updated_at, base_sha FROM drafts WHERE owner=?').bind(owner).all()).results;
        const map = new Map(remote.pages.map(p => [p.path, { ...p, core: isCorePage(p.path) }]));
        for (const d of saved) map.set(d.page, { ...map.get(d.page), path: d.page, draft: true,
          newPage: !d.base_sha, revision: d.revision, updatedAt: d.updated_at, core: isCorePage(d.page) });
        return jsonCors({ pages: [...map.values()], head: remote.head.sha }, origin);
      }
      if (path === '/api/history' && request.method === 'GET') {
        const rows = await github.request(`/commits?sha=${encodeURIComponent(env.GITHUB_BRANCH)}&per_page=15`);
        return jsonCors({ commits: rows.map(c => ({ sha: c.sha, message: c.commit.message, date: c.commit.committer.date, url: c.html_url })) }, origin);
      }
      if (path === '/api/deployment' && request.method === 'GET') {
        const sha = url.searchParams.get('sha');
        requireValue(/^[a-f0-9]{40}$/.test(sha || ''), 422, '발행 번호를 확인해 주세요.');
        const result = await github.request(`/actions/runs?head_sha=${sha}&per_page=20`);
        const run = result.workflow_runs.find(r => /pages/i.test(r.name));
        return jsonCors({ status: run?.status || 'queued', conclusion: run?.conclusion || null,
          url: run?.html_url || `https://github.com/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/actions` }, origin);
      }
      if (path === '/api/uploads' && request.method === 'POST') {
        requireValue(env.UPLOADS, 503, '파일 저장소 연결이 필요합니다.');
        const bytes = await readLimited(request, 8 * 1024 * 1024);
        const type = request.headers.get('Content-Type') || '';
        const ext = detectFile(bytes, type);
        const name = `${crypto.randomUUID()}.${ext}`;
        await env.UPLOADS.put(`pending/${owner}/${name}`, bytes, { httpMetadata: { contentType: type } });
        return jsonCors({ url: `/assets/uploads/${name}`, name }, origin);
      }
      if (path.startsWith('/api/uploads/') && request.method === 'GET') {
        const name = path.slice('/api/uploads/'.length);
        requireValue(/^[a-f0-9-]{36}\.(png|jpg|gif|webp|pdf|mp4)$/.test(name), 422, '파일 주소를 확인해 주세요.');
        const object = await env.UPLOADS.get(`pending/${owner}/${name}`);
        requireValue(object, 404, '임시 파일을 찾을 수 없습니다.');
        return new Response(object.body, { headers: { ...cors(origin), 'Content-Type': object.httpMetadata.contentType,
          'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
      }
      if (path === '/api/projects' && request.method === 'POST') {
        const input = await body(request);
        requireValue(isPage(input.page) && !isCorePage(input.page) && isPage(input.template) && !isCorePage(input.template), 422, '프로젝트 파일 이름을 확인해 주세요.');
        requireValue(typeof input.title === 'string' && input.title.trim() && input.title.length < 200, 422, '프로젝트 제목을 입력해 주세요.');
        requireValue(!await github.optionalFile(input.page) && !await draft(env, input.page, owner), 409, '같은 주소의 프로젝트가 있습니다.');
        const template = await github.file(input.template);
        const source = cloneProject(template.source, input.page, input.title.trim());
        const saved = await saveDraft(env, { page: input.page, owner, baseSha: null, source, revision: 0 });
        return jsonCors(documentData(saved, input.page), origin);
      }
      const page = url.searchParams.get('page');
      requireValue(isPage(page || ''), 422, '페이지를 선택해 주세요.');
      if (path === '/api/page' && request.method === 'GET') {
        const saved = await draft(env, page, owner), file = await github.optionalFile(page);
        requireValue(saved || file, 404, '페이지를 찾을 수 없습니다.');
        return jsonCors(documentData(saved || { source: file.source, base_sha: file.sha, revision: 0 }, page, file?.sha || null), origin);
      }
      if (path === '/api/remote' && request.method === 'GET') {
        const file = await github.file(page);
        return jsonCors({ ...documentData({ source: file.source, base_sha: file.sha, revision: 0 }, page), source: file.source }, origin);
      }
      if (path === '/api/draft' && request.method === 'DELETE') {
        const input = await body(request);
        const result = await env.DB.prepare('DELETE FROM drafts WHERE page=? AND owner=? AND revision=? AND draft_id=?').bind(page, owner, input.revision, input.draftId || '').run();
        requireValue(result.meta.changes === 1, 409, '초안이 바뀌었거나 이미 삭제되었습니다.');
        return jsonCors({ ok: true }, origin);
      }
      if (['/api/draft', '/api/preview', '/api/block'].includes(path) && request.method === 'POST') {
        const input = await body(request);
        const row = await currentEdit(env, github, page, owner, input.revision, input.baseSha, input.draftId);
        let source = applyEdits(row.source, page, input.changes || {});
        if (path === '/api/preview') {
          let intro = '';
          if (page === 'index.html') {
            const introDraft = await draft(env, INTRO_PATH, owner);
            intro = inspect(introDraft?.source || (await github.file(INTRO_PATH)).source, INTRO_PATH).fields[0].value;
          }
          return jsonCors({ html: preview(source, page, env.SITE_ORIGIN, intro) }, origin);
        }
        if (path === '/api/block') {
          const before = inspect(row.source, page).blocks;
          const index = before.findIndex(b => b.id === input.operation?.id);
          requireValue(index >= 0, 422, '블록을 다시 선택해 주세요.');
          source = changeBlock(source, page, { ...input.operation, id: inspect(source, page).blocks[index].id });
        }
        const saved = await saveDraft(env, { page, owner, baseSha: row.base_sha, source, revision: row.revision, draftId: row.draft_id });
        return jsonCors(documentData(saved, page), origin);
      }
      if (path === '/api/publish' && request.method === 'POST') {
        const input = await body(request), row = await draft(env, page, owner);
        requireValue(row && row.revision === input.revision && row.draft_id === input.draftId, 409, '발행할 초안을 먼저 저장해 주세요.');
        const assets = [];
        const names = [...new Set([...row.source.matchAll(/\/assets\/uploads\/([a-f0-9-]{36}\.(?:png|jpg|gif|webp|pdf|mp4))/g)].map(m => m[1]))];
        requireValue(names.length <= 20, 422, '한 페이지에서 새 파일은 한 번에 20개까지 발행할 수 있습니다.');
        let assetBytes = 0;
        for (const name of names) {
          const object = await env.UPLOADS.get(`pending/${owner}/${name}`);
          if (object) {
            assetBytes += object.size;
            requireValue(assetBytes <= 24*1024*1024, 413, '한 번에 발행할 새 파일은 합계 24MB까지입니다.');
            assets.push({ path: `assets/uploads/${name}`, bytes: new Uint8Array(await object.arrayBuffer()) });
          } else {
            try { await github.request(`/contents/assets/uploads/${name}?ref=${encodeURIComponent(env.GITHUB_BRANCH)}`); }
            catch (e) {
              if (e.status === 404) throw new HttpError(422, '초안의 업로드 파일이 없습니다. 파일을 다시 업로드한 뒤 발행해 주세요.');
              throw e;
            }
          }
        }
        requireValue(assets.reduce((n,a) => n+a.bytes.length,0) <= 24*1024*1024, 413, '한 번에 발행할 새 파일은 합계 24MB까지입니다.');
        const result = await github.publish({ page, source: row.source, baseSha: row.base_sha, assets });
        // If finalization fails, the commit is still successful; never report it as a failed publish.
        let cleanupPending = false;
        try {
          await env.DB.batch([
            env.DB.prepare('INSERT INTO audit_log VALUES(?,?,?,?,?,?)').bind(crypto.randomUUID(), user.email, page, result.sha, 'publish', now()),
            env.DB.prepare('DELETE FROM drafts WHERE page=? AND owner=? AND revision=? AND draft_id=?').bind(page, owner, row.revision, row.draft_id),
          ]);
        } catch { cleanupPending = true; }
        return jsonCors({ ...result, cleanupPending, siteUrl: `${env.SITE_ORIGIN}/${page === INTRO_PATH ? 'index.html' : page}` }, origin);
      }
      if (path === '/api/unpublish' && request.method === 'POST') {
        requireValue(!isCorePage(page), 422, '기본 페이지는 내릴 수 없습니다.');
        requireValue(!await draft(env, page, owner), 409, '초안을 먼저 정리한 뒤 페이지를 내려 주세요.');
        const input = await body(request);
        const result = await github.publish({ page, baseSha: input.baseSha, deleting: true });
        return jsonCors({ ...result, message: '공개 페이지 파일을 내렸습니다. 홈 카드와 다른 페이지의 링크도 정리해 주세요. Git 이력은 남아 있습니다.' }, origin);
      }
      throw new HttpError(404, '요청한 기능을 찾을 수 없습니다.');
    } catch (error) {
      response = json({ error: error instanceof HttpError ? error.message : '요청을 완료하지 못했습니다. 잠시 후 다시 시도해 주세요.' }, error.status || 500);
    }
    if (origin === env.ADMIN_ORIGIN) for (const [key, value] of Object.entries(cors(origin))) response.headers.set(key, value);
    return response;
  };
}

function cors(origin) { return { 'Access-Control-Allow-Origin': origin, Vary: 'Origin',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS', 'Access-Control-Allow-Headers': 'Authorization, Content-Type',
  'Access-Control-Max-Age': '600', 'Cache-Control': 'no-store' }; }
function jsonCors(data, origin) { const response = json(data); for (const [k,v] of Object.entries(cors(origin))) response.headers.set(k,v); return response; }
export function detectFile(bytes, type) {
  const head = String.fromCharCode(...bytes.subarray(0, 12));
  if (type === 'image/png' && bytes[0] === 137 && head.slice(1,8) === 'PNG\r\n\x1a\n') return 'png';
  if (type === 'image/jpeg' && bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255) return 'jpg';
  if (type === 'image/gif' && /^GIF8[79]a/.test(head)) return 'gif';
  if (type === 'image/webp' && head.startsWith('RIFF') && head.slice(8) === 'WEBP') return 'webp';
  if (type === 'application/pdf' && head.startsWith('%PDF-')) return 'pdf';
  if (type === 'video/mp4' && head.slice(4, 8) === 'ftyp') return 'mp4';
  throw new HttpError(422, 'PNG, JPG, GIF, WebP, PDF, MP4 파일만 업로드할 수 있습니다.');
}
export default { fetch: createHandler() };
