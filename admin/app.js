import { REPOSITORY, SITE_ORIGIN, GOOGLE_CLIENT_ID, API_ORIGIN } from './config.js';
import { renderSectionEditor, revealSection } from './section-editor.js';
import { templateNames } from '../lib/sections.js';
import { GoogleAdmin } from '../lib/google-service.js';
const service = new GoogleAdmin(REPOSITORY, SITE_ORIGIN, API_ORIGIN);

const $ = id => document.getElementById(id);
let token = false, pages = [], current = null, changes = {}, activeTab = 'content', busy = false, uploadField;
let pollingTimer;
const objectURLs = new Set();
const names = { 'index.html': 'HOME', 'about.html': 'ABOUT', 'info.html': 'INFO', 'JavaScript/script.js': '홈 타이핑 소개' };
const core = path => path in names;


function notice(message, error = false) { $('notice').textContent = message; $('notice').className = error ? 'error' : ''; }
function dirty() { return Object.keys(changes).length > 0; }
function updateButtons() {
  const disabled = busy || !token || !current;
  for (const id of ['save', 'preview', 'export-draft']) $(id).disabled = disabled;
  $('undo-structure').disabled=disabled||!current?.undoAvailable;
  $('save').disabled=disabled||!dirty();
  $('publish').disabled = disabled || (!dirty() && !current?.revision) || current?.conflict;
  $('discard').disabled = disabled || !current?.revision;
  $('unpublish').hidden = !current || core(current.page) || !current.baseSha;
  $('unpublish').disabled = disabled || current?.conflict || !!current?.revision || dirty();
  $('unpublish').title = '저장한 초안과 미저장 내용을 먼저 정리한 뒤 페이지를 내릴 수 있습니다.';
  if (current) $('draft-status').textContent = dirty() ? '저장하지 않은 변경사항이 있습니다.' : current.revision ?
    `이 브라우저의 초안 · ${new Date(current.updatedAt).toLocaleString('ko-KR')}` : '현재 발행된 내용';
}
async function run(fn) {
  if (busy) return;
  busy = true;
  $('workspace').inert = true;
  $('project-form').inert = true;
  $('logout').disabled = true;
  const controls = [...document.querySelectorAll('#workspace button, #workspace input, #workspace textarea, #project-dialog button')];
  const disabled = controls.map(el => el.disabled);
  controls.forEach(el => el.disabled = true);
  try { await fn(); } catch (e) { notice(e.message || '요청을 완료하지 못했습니다.', true); }
  finally { busy = false; $('workspace').inert = false; $('project-form').inert = false; $('logout').disabled = false; controls.forEach((el, i) => el.disabled = disabled[i]); updateButtons(); }
}
async function api(path, options = {}) {
  try { return await service.request(path, options); }
  catch (e) {
    if (e.status === 401) showLogin(true);
    if (e instanceof TypeError) throw new Error('GitHub에 연결하지 못했습니다. 발행 중이었다면 수정 이력에서 반영 여부를 먼저 확인해 주세요.');
    throw e;
  }
}
function showLogin(expired = false) {
  token = false; service.disconnect();
  $('login').hidden = false; $('workspace').hidden = true; $('logout').hidden = true;
  $('account').textContent = '';
  if (expired) notice('연결이 해제되었습니다. Google로 다시 로그인하면 편집하던 내용을 계속 사용할 수 있습니다.', true);
  updateButtons();
}
async function login(credential) {
  await run(async () => {
    try {
      const user = await service.connect(credential);
      credential = '';
      token = true;
      $('account').textContent = user.login;
      $('login').hidden = true; $('workspace').hidden = false; $('logout').hidden = false;
      await loadPages();
      if (!current) await openPage('index.html');
      notice('Google로 로그인했습니다. 초안은 이 브라우저에만 저장됩니다.');
    } catch (e) { showLogin(); throw e; }
  });
}
function setup() {
  if(location.origin!==SITE_ORIGIN) {
    $('connection').textContent='관리자 화면은 온라인 홈페이지에서 열어 주세요. 로컬 파일에서는 로그인할 수 없습니다.';
    return;
  }
  if(!GOOGLE_CLIENT_ID||!API_ORIGIN){$('connection').textContent='Google 로그인 연결을 준비 중입니다. 최초 서비스 설정이 완료되면 로그인 버튼이 표시됩니다.';return;}
  $('connection').textContent='Google 로그인 버튼을 불러오고 있습니다.';
  const script=document.createElement('script');script.src='https://accounts.google.com/gsi/client';script.async=true;
  script.onload=()=>{google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:result=>login(result.credential),auto_select:false});google.accounts.id.renderButton($('google-login'),{type:'standard',theme:'outline',size:'large',text:'signin_with'});$('connection').textContent='jayyoungjunkim@gmail.com 계정으로 로그인하세요.';};
  script.onerror=()=>{$('connection').textContent='Google 로그인 버튼을 불러오지 못했습니다. 인터넷 연결을 확인하고 새로고침해 주세요.';};
  document.head.append(script);
}
async function loadPages() { pages = (await api('/api/pages')).pages; renderPages(); }
function renderPages() {
  $('pages').replaceChildren();
  const search = $('page-search').value.toLowerCase();
  for (const isCore of [true, false]) {
    const heading = document.createElement('p'); heading.className = 'group-name'; heading.textContent = isCore ? '기본 페이지' : '프로젝트'; $('pages').append(heading);
    const list = pages.filter(p => core(p.path) === isCore && `${names[p.path] || ''} ${p.path}`.toLowerCase().includes(search));
    list.sort((a,b) => isCore ? Object.keys(names).indexOf(a.path) - Object.keys(names).indexOf(b.path) : a.path.localeCompare(b.path));
    for (const page of list) {
      const b = document.createElement('button'); b.className = current?.page === page.path ? 'active' : '';
      b.textContent = names[page.path] || page.path.replace('.html','').replaceAll('-',' ');
      if (page.draft) { const dot = document.createElement('span'); dot.className = 'draft-dot'; dot.textContent = page.newPage ? '새 초안' : '초안'; b.append(dot); }
      b.onclick = () => run(async () => { if (await leavePage()) await openPage(page.path); }); $('pages').append(b);
    }
  }
}
async function leavePage() { return !dirty() || await confirmAction('저장하지 않은 변경사항', '저장하지 않은 내용을 버리고 이동할까요? 저장한 초안은 유지됩니다.', '이동'); }
async function openPage(page) {
  current = await api(`/api/page?page=${encodeURIComponent(page)}`); changes = {}; activeTab='content'; for(const tab of $('tabs').children)tab.setAttribute('aria-selected',String(tab.dataset.tab==='content')); $('field-search').value = '';
  $('page-title').textContent = names[page] || current.title.replace(' — Jay Youngjun Kim', '');
  $('page-path').textContent = page;
  $('conflict').hidden = !current.conflict;
  renderPages(); renderFields(); updateButtons();
}
const imageCache=new Map();
async function localImage(path){
 if(imageCache.has(path))return imageCache.get(path);
 try{const blob=await api('/api/uploads/'+path.split('/').pop());const url=URL.createObjectURL(blob);objectURLs.add(url);imageCache.set(path,url);return url;}catch{return new URL(path,SITE_ORIGIN).href;}
}
function renderFields(){if(!current)return;
 renderSectionEditor($('fields'),{current,changes,pages,siteOrigin:SITE_ORIGIN,localImage,api,
  update:updateButtons,upload:id=>{uploadField=id;$('file-upload').click();},
  act:performStructure,add:openAdd,openIntro:()=>run(async()=>{if(await leavePage())await openPage('JavaScript/script.js');})},activeTab);
}
async function performStructure(operation){await run(async()=>{
 const section=current.sections.find(s=>s.id===operation.id);
 if(operation.action==='remove'&&!await confirmAction('섹션 삭제',`“${section?.title||'선택한 섹션'}”과 안의 내용을 초안에서 삭제할까요? 발행 전까지 홈페이지는 유지됩니다.`, '삭제'))return;
 current=await api(`/api/structure?page=${encodeURIComponent(current.page)}`,{method:'POST',body:{...payload(),operation}});
 changes={};
 if(operation.action==='add'){
 const title=operation.title||templateNames[operation.template];
 const candidates=current.sections.filter(s=>s.title===title);
 if(candidates.length)revealSection(candidates.at(-1).id);
 }
 await loadPages();renderFields();notice('구성을 초안에 저장했습니다. 발행하면 홈페이지에 반영됩니다.');
});}
let addParent;
function openAdd(parent,types){addParent=parent?.id||null;$('section-form').reset();const options=$('section-type');options.replaceChildren();for(const type of types)options.append(new Option(templateNames[type],type));$('section-dialog-title').textContent=parent?`${parent.title}에 추가`:'새 섹션 추가';$('section-dialog').showModal();}
$('section-form').onsubmit=e=>{e.preventDefault();const operation={action:'add',parent:addParent,template:$('section-type').value,title:$('section-name').value};$('section-dialog').close();performStructure(operation);};
$('undo-structure').onclick=()=>run(async()=>{
 if(dirty()&&!await confirmAction('구성 되돌리기','현재 편집 중인 문구와 마지막 구성 변경을 이전 상태로 되돌릴까요?','되돌리기'))return;
 current=await api(`/api/undo?page=${encodeURIComponent(current.page)}`,{method:'POST',body:{...payload(),changes:{}}});changes={};await loadPages();renderFields();notice('마지막 구성 변경을 되돌렸습니다.');
});
function payload() { return { revision: current.revision, draftId: current.draftId, baseSha: current.baseSha, changes }; }
async function save() {
  current = await api(`/api/draft?page=${encodeURIComponent(current.page)}`, { method: 'POST', body: payload() });
  changes = {}; await loadPages(); renderFields();
}
function confirmAction(title, message, label = '확인') {
  return new Promise(resolve => {
    const dialog = $('confirm-dialog'); $('confirm-title').textContent = title; $('confirm-message').textContent = message; $('confirm-yes').textContent = label;
    let finished = false;
    const done = value => { if (finished) return; finished = true; dialog.close(); resolve(value); };
    $('confirm-yes').onclick = () => done(true); $('confirm-no').onclick = () => done(false);
    dialog.oncancel = e => { e.preventDefault(); done(false); }; dialog.showModal();
  });
}

$('logout').onclick = async () => {
  if (busy) return;
  if (!await leavePage()) return;
  clearTimeout(pollingTimer);
  current = null; changes = {}; pages = []; imageCache.clear(); $('preview-frame').srcdoc = ''; $('fields').replaceChildren(); $('pages').replaceChildren();
  for (const u of objectURLs) URL.revokeObjectURL(u); objectURLs.clear(); showLogin(); notice('로그아웃했습니다.');
};
$('page-search').oninput = renderPages; $('field-search').oninput = renderFields;
$('tabs').onclick = e => { const b = e.target.closest('[data-tab]'); if (!b) return; activeTab = b.dataset.tab;
  for (const tab of $('tabs').children) tab.setAttribute('aria-selected', String(tab === b)); renderFields(); };
$('save').onclick = () => run(async () => { await save(); notice('초안을 저장했습니다. 홈페이지에는 아직 반영되지 않았습니다.'); });
$('publish').onclick = () => run(async () => {
  if (!await confirmAction('홈페이지에 발행', `${current.page}의 초안을 공개 홈페이지에 반영할까요? 변경사항과 업로드 파일은 공개 GitHub 저장소에 기록됩니다.`, '발행')) return;
  if (dirty() || !current.revision) await save();
  const result = await api(`/api/publish?page=${encodeURIComponent(current.page)}`, { method: 'POST', body: { revision: current.revision, draftId: current.draftId } });
  notice(result.unchanged ? '발행된 내용과 같습니다.' : 'GitHub에 반영했습니다. 홈페이지 배포 상태를 확인하고 있습니다.');
  if (result.cleanupPending) notice('GitHub 반영은 완료되었습니다. 초안 정리에 실패했으므로 수정 이력을 확인한 뒤 초안을 정리해 주세요.');
  await loadPages(); await openPage(current.page);
  if (!result.unchanged) pollDeployment(result.sha, 0);
});
async function pollDeployment(sha, count) {
  clearTimeout(pollingTimer);
  try {
    const result = await api(`/api/deployment?sha=${sha}`);
    if (result.status === 'completed') {
      notice(result.conclusion === 'success' ? '홈페이지 배포가 완료되었습니다.' : 'GitHub에는 저장했지만 홈페이지 배포가 완료되지 않았습니다. 배포 이력을 확인해 주세요.', result.conclusion !== 'success');
      const link = document.createElement('a'); link.href = result.url; link.textContent = '배포 이력 ↗'; link.target = '_blank'; link.rel = 'noopener'; $('notice').append(link); return;
    }
    if (count < 20 && token) pollingTimer = setTimeout(() => pollDeployment(sha, count+1), 10000);
    else notice('GitHub에 저장했습니다. 배포가 계속 진행 중입니다. GitHub Actions에서 상태를 확인해 주세요.');
  } catch { notice('GitHub에 저장했습니다. 배포 상태는 GitHub Actions에서 확인해 주세요.'); }
}
$('preview').onclick = () => run(async () => {
  let { html } = await api(`/api/preview?page=${encodeURIComponent(current.page)}`, { method: 'POST', body: payload() });
  for (const u of objectURLs) URL.revokeObjectURL(u); objectURLs.clear(); imageCache.clear();
  const paths = [...new Set(html.match(/\/assets\/uploads\/[a-f0-9-]{36}\.(?:png|jpg|gif|webp|pdf|mp4)/g) || [])];
  for (const path of paths) {
    try { const blob = await api(`/api/uploads/${path.split('/').at(-1)}`, { blob: true }); const u = URL.createObjectURL(blob); objectURLs.add(u); html = html.replaceAll(path, u); }
    catch { /* Already published assets resolve against the live site base URL. */ }
  }
  $('preview-frame').srcdoc = html; $('preview-dialog').showModal();
});
$('mobile-preview').onclick = () => { const mobile = $('preview-frame').classList.toggle('mobile'); $('mobile-preview').textContent = mobile ? '전체 폭' : '모바일 폭'; };
for (const b of document.querySelectorAll('[data-close]')) b.onclick = () => $(b.dataset.close).close();
$('discard').onclick = () => run(async () => {
  if (!await confirmAction('초안 버리기', '저장한 초안과 화면의 미저장 변경사항을 버릴까요? 현재 발행된 홈페이지는 유지됩니다.', '초안 버리기')) return;
  await api(`/api/draft?page=${encodeURIComponent(current.page)}`, { method: 'DELETE', body: { revision: current.revision, draftId: current.draftId } });
  const wasNew = !current.baseSha; changes = {}; await loadPages(); await openPage(wasNew ? 'index.html' : current.page); notice('초안을 버렸습니다.');
});
$('unpublish').onclick = () => run(async () => {
  if (!await confirmAction('공개 페이지 내리기', '이 주소의 페이지가 더 이상 열리지 않게 됩니다. 홈 카드와 다른 페이지의 연결은 별도로 정리해야 합니다. GitHub의 과거 이력은 공개 상태로 남습니다.', '페이지 내리기')) return;
  const result = await api(`/api/unpublish?page=${encodeURIComponent(current.page)}`, { method: 'POST', body: { baseSha: current.baseSha } });
  changes = {}; current = null; await loadPages(); await openPage('index.html'); notice(result.message);
});
$('new-project').onclick = () => run(async () => {
  if (!await leavePage()) return;
  $('project-form').reset(); const select = $('project-form').elements.template; select.replaceChildren();
  for (const page of pages.filter(p => !core(p.path) && !p.newPage)) { const option = document.createElement('option'); option.value = page.path; option.textContent = page.path; select.append(option); }
  $('project-dialog').showModal();
});
$('project-form').onsubmit = e => { e.preventDefault(); run(async () => {
  const form = new FormData(e.target); const page = form.get('slug')+'.html';
  await api('/api/projects', { method: 'POST', body: { title: form.get('title'), page, template: form.get('template') } });
  $('project-dialog').close(); changes = {}; await loadPages(); await openPage(page); notice('새 프로젝트 초안을 만들었습니다. 복제된 문구·이미지·링크를 수정해 주세요.');
}); };
$('file-upload').onchange = () => { const file = $('file-upload').files[0]; $('file-upload').value = ''; if (!file) return;
  run(async () => {
    if (file.size > 8*1024*1024) throw new Error('파일은 8MB 이하로 업로드해 주세요. 큰 영상은 외부 영상 주소로 연결할 수 있습니다.');
    const result = await api('/api/uploads', { method: 'POST', headers: { 'Content-Type': file.type }, body: file });
    changes[uploadField] = result.url; renderFields(); notice('파일을 이 브라우저에 저장했습니다. 발행하면 GitHub에 업로드됩니다.');
  });
};
$('history').onclick = () => window.open('https://github.com/jayyoungjun-kim/jayyoungjun-kim.github.io/commits/master/', '_blank', 'noopener');
$('remote-preview').onclick = () => window.open(`https://jayyoungjun-kim.github.io/${current.page === 'JavaScript/script.js' ? 'index.html' : current.page}`, '_blank', 'noopener');
$('export-draft').onclick = () => run(async () => {
  const content = await api(`/api/backup?page=${encodeURIComponent(current.page)}`, {method:'POST',body:payload()});
  const url = URL.createObjectURL(new Blob([JSON.stringify(content,null,2)], { type: 'application/json' }));
  const a = document.createElement('a'); a.href = url; a.download = `${current.page.replaceAll('/','-')}-draft.json`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  notice('초안과 연결된 임시 파일을 백업했습니다. 토큰은 포함되지 않습니다.');
});
window.addEventListener('pagehide', () => { service.disconnect(); token=false; });
window.addEventListener('pageshow', e => { if(e.persisted)showLogin(true); });
window.addEventListener('beforeunload', e => { if (dirty()) { e.preventDefault(); e.returnValue = ''; } });
setup();
