import { HttpError, requireValue } from './errors.js';
import { INTRO_PATH } from './content.js';

export const isPage = path => typeof path === 'string' && (/^[a-z0-9][a-z0-9-]{0,79}\.html$/.test(path) || path === INTRO_PATH);
export const isCorePage = path => ['index.html', 'about.html', 'info.html', INTRO_PATH].includes(path);
const encode = path => path.split('/').map(encodeURIComponent).join('/');
export const fromBase64 = value => new TextDecoder().decode(Uint8Array.from(atob(value.replace(/\s/g, '')), c => c.charCodeAt(0)));
export function toBase64(bytes) {
  let binary = '';
  for (let i = 0; i < bytes.length; i += 8192) binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  return btoa(binary);
}

export class GitHub {
  constructor(env, fetcher = fetch) { this.env = env; this.fetcher = fetcher; }
  async request(path, method = 'GET', body) {
    requireValue(this.env.GITHUB_TOKEN, 503, 'GitHub 발행 연결이 아직 완료되지 않았습니다.');
    const response = await this.fetcher(`https://api.github.com/repos/${encode(this.env.GITHUB_OWNER)}/${encode(this.env.GITHUB_REPO)}${path}`, {
      method,
      headers: { Authorization: `Bearer ${this.env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json' },
      credentials: 'omit', cache: 'no-store', redirect: 'error',
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    if (!response.ok) {
      if (response.status === 401) throw new HttpError(401, '토큰이 만료되었거나 유효하지 않습니다. 다시 연결해 주세요.');
      if (response.status === 403) throw new HttpError(403, '토큰의 저장소 권한 또는 GitHub 요청 한도를 확인해 주세요.');
      if (response.status === 404) throw new HttpError(404, 'GitHub 파일이나 저장소를 찾을 수 없습니다.');
      if ([409, 422].includes(response.status)) throw new HttpError(409, '원격 내용이 바뀌었습니다. 최신 내용을 확인한 뒤 다시 발행해 주세요.');
      throw new HttpError(502, 'GitHub 요청을 완료하지 못했습니다. 권한·요청 한도를 확인한 뒤 다시 시도해 주세요.');
    }
    return response.status === 204 ? null : response.json();
  }
  async head() {
    const ref = await this.request(`/git/ref/heads/${encode(this.env.GITHUB_BRANCH)}`);
    const commit = await this.request(`/git/commits/${ref.object.sha}`);
    return { sha: ref.object.sha, tree: commit.tree.sha };
  }
  async connect() {
    const response = await this.fetcher('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${this.env.GITHUB_TOKEN}`, Accept: 'application/vnd.github+json' },
      credentials: 'omit', cache: 'no-store', redirect: 'error',
    });
    requireValue(response.ok, 401, 'GitHub 토큰을 확인해 주세요.');
    const user = await response.json();
    requireValue(user.login === this.env.GITHUB_OWNER, 403, `${this.env.GITHUB_OWNER} 계정의 토큰만 사용할 수 있습니다.`);
    const repo = await this.request('');
    requireValue(repo.full_name === `${this.env.GITHUB_OWNER}/${this.env.GITHUB_REPO}`, 403, '연결할 저장소를 확인해 주세요.');
    return { login: user.login };
  }
  async pages() {
    const head = await this.head();
    const tree = await this.request(`/git/trees/${head.tree}?recursive=1`);
    requireValue(!tree.truncated, 502, '저장소 파일 목록이 너무 큽니다.');
    return { head, pages: tree.tree.filter(f => f.type === 'blob' && isPage(f.path)).map(f => ({ path: f.path, sha: f.sha })) };
  }
  async file(path, ref = this.env.GITHUB_BRANCH) {
    requireValue(isPage(path), 422, '허용되지 않은 파일입니다.');
    const file = await this.request(`/contents/${encode(path)}?ref=${encodeURIComponent(ref)}`);
    requireValue(file.type === 'file' && file.encoding === 'base64' && file.size < 700000, 422, '편집할 수 있는 파일 크기를 초과했습니다.');
    return { sha: file.sha, source: fromBase64(file.content) };
  }
  async optionalFile(path, ref) {
    try { return await this.file(path, ref); } catch (e) { if (e.status === 404) return null; throw e; }
  }
  async publish({ page, source, baseSha, assets = [], deleting = false }) {
    requireValue(isPage(page) && (!deleting || !isCorePage(page)), 422, '이 파일은 발행하거나 내릴 수 없습니다.');
    const head = await this.head();
    const current = await this.optionalFile(page, head.sha);
    requireValue((current?.sha || null) === baseSha, 409,
      'GitHub Desktop 또는 다른 창에서 이 페이지를 수정했습니다. 초안을 보관하고 최신 페이지와 비교해 주세요.');
    if (!deleting && current?.source === source && !assets.length) return { sha: head.sha, unchanged: true };
    const tree = [];
    for (const asset of assets) {
      const blob = await this.request('/git/blobs', 'POST', { encoding: 'base64', content: toBase64(asset.bytes) });
      tree.push({ path: asset.path, mode: '100644', type: 'blob', sha: blob.sha });
    }
    tree.push(deleting ? { path: page, mode: '100644', type: 'blob', sha: null } :
      { path: page, mode: '100644', type: 'blob', content: source });
    const newTree = await this.request('/git/trees', 'POST', { base_tree: head.tree, tree });
    const commit = await this.request('/git/commits', 'POST', {
      message: `content: ${deleting ? 'unpublish' : 'update'} ${page} via admin`, tree: newTree.sha, parents: [head.sha],
    });
    // A concurrent writer creates a sibling commit; force:false refuses to overwrite it.
    await this.request(`/git/refs/heads/${encode(this.env.GITHUB_BRANCH)}`, 'PATCH', { sha: commit.sha, force: false });
    return { sha: commit.sha, unchanged: false };
  }
}
