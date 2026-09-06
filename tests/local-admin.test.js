import test from 'node:test';
import assert from 'node:assert/strict';
import { IDBFactory } from 'fake-indexeddb';
import { readFileSync } from 'node:fs';
import { BrowserStore } from '../lib/storage.js';
import { LocalAdmin } from '../lib/service.js';
import { GitHub } from '../lib/github.js';
const repository={GITHUB_OWNER:'jayyoungjun-kim',GITHUB_REPO:'jayyoungjun-kim.github.io',GITHUB_BRANCH:'master'};
const site='https://jayyoungjun-kim.github.io';
async function fixture() {
  const indexedDB=new IDBFactory(),store=new BrowserStore(indexedDB);
  const files=new Map(['index.html','info.html','29cm-gift-curation.html','JavaScript/script.js'].map(page=>[page,{sha:page,source:readFileSync(new URL('../'+page,import.meta.url),'utf8')}]));
  const writes=[];
  const github={env:{},async connect(){return{login:'jayyoungjun-kim'};},async file(page){assert.ok(files.has(page));return structuredClone(files.get(page));},async optionalFile(page){return files.has(page)?structuredClone(files.get(page)):null;},
    async pages(){return{head:{sha:'a'.repeat(40)},pages:[...files].map(([path,f])=>({path,sha:f.sha}))};},
    async publish(input){assert.equal(files.get(input.page)?.sha||null,input.baseSha);writes.push(input);files.set(input.page,{source:input.source,sha:'newsha'});return{sha:'f'.repeat(40)};},async request(){throw Object.assign(new Error('not found'),{status:404});}};
  const admin=new LocalAdmin(repository,site,{store,githubFactory:env=>{github.env=env;return github;}});
  await admin.connect('github_pat_testonly');
  return{admin,store,indexedDB,files,writes,github};
}
test('local draft, preview, backup and publish preserve the live source until publish',async()=>{
  const {admin,store,files,writes}=await fixture();
  const original=files.get('info.html').source;
  const data=await admin.request('/api/page?page=info.html');
  const field=data.fields.find(f=>f.value.includes('디자인 스튜디오'));
  const saved=await admin.request('/api/draft?page=info.html',{method:'POST',body:{...data,changes:{[field.id]:'새 문구'}}});
  assert.equal(files.get('info.html').source,original);assert.equal(writes.length,0);
  const rendered=await admin.request('/api/preview?page=info.html',{method:'POST',body:{...saved,changes:{}}});
  assert.ok(rendered.html.includes('새 문구'));assert.ok(!rendered.html.includes('<script'));
  const backup=await admin.request('/api/backup?page=info.html',{method:'POST',body:{...saved,changes:{}}});
  assert.ok(backup.source.includes('새 문구'));assert.ok(!JSON.stringify(backup).includes('github_pat_'));
  await admin.request('/api/publish?page=info.html',{method:'POST',body:saved});
  assert.equal(writes.length,1);assert.equal(await store.get('drafts','info.html'),null);
});
test('drafts survive a new browser-store connection; credentials do not persist',async()=>{
  const {admin,store,indexedDB,github}=await fixture();
  const data=await admin.request('/api/page?page=info.html');
  await admin.request('/api/draft?page=info.html',{method:'POST',body:{...data,changes:{}}});
  admin.disconnect();assert.equal(github.env.GITHUB_TOKEN,'');
  await assert.rejects(admin.request('/api/pages'),{status:401});
  const reopened=new BrowserStore(indexedDB);
  assert.ok(await reopened.get('drafts','info.html'));
  assert.ok(!JSON.stringify(await store.all('drafts')).includes('github_pat_'));
});
test('IndexedDB transactions prevent stale and simultaneously competing draft writes',async()=>{
  const {store}=await fixture();const row={page:'info.html',source:'old',baseSha:'sha'};
  const outcomes=await Promise.allSettled([store.save(row,{revision:0}),store.save({...row,source:'other'},{revision:0})]);
  assert.equal(outcomes.filter(r=>r.status==='fulfilled').length,1);
  const first=await store.get('drafts','info.html');await store.remove('info.html',first);
  const second=await store.save(row,{revision:0});assert.notEqual(first.draftId,second.draftId);
  await assert.rejects(store.save(row,first),{status:409});await assert.rejects(store.remove('info.html',first),{status:409});
});
test('upload bytes are local, included in backups and published atomically with the page',async()=>{
  const {admin,store,writes}=await fixture();
  const file=new Blob(['%PDF-1.5 example'],{type:'application/pdf'});
  const upload=await admin.request('/api/uploads',{method:'POST',body:file});assert.equal(writes.length,0);
  assert.equal(await (await admin.request('/api/uploads/'+upload.name)).text(),await file.text());
  let data=await admin.request('/api/page?page=info.html');const field=data.fields.find(f=>f.url&&f.value.includes('.pdf'));
  data=await admin.request('/api/draft?page=info.html',{method:'POST',body:{...data,changes:{[field.id]:upload.url}}});
  const backup=await admin.request('/api/backup?page=info.html',{method:'POST',body:{...data,changes:{}}});assert.equal(backup.uploads.length,1);
  await admin.request('/api/publish?page=info.html',{method:'POST',body:data});assert.equal(writes[0].assets.length,1);
  assert.equal(new TextDecoder().decode(writes[0].assets[0].bytes),await file.text());
  assert.ok(await store.get('uploads',upload.name));
});
test('new projects stay local and dirty field edits do not mis-target block operations',async()=>{
  const {admin,files}=await fixture();
  const created=await admin.request('/api/projects',{method:'POST',body:{page:'new-project.html',template:'29cm-gift-curation.html',title:'New Project'}});
  assert.equal(created.baseSha,null);assert.equal(files.has('new-project.html'),false);
  const home=await admin.request('/api/page?page=index.html');
  const updated=await admin.request('/api/block?page=index.html',{method:'POST',body:{...home,changes:{[home.fields[0].id]:'Long changed page title'},operation:{id:home.blocks[1].id,action:'duplicate'}}});
  assert.equal(updated.blocks[1].label,updated.blocks[2].label);
});
test('connection verifies GitHub account and refuses another user',async()=>{
  const calls=[];
  const github=new GitHub({...repository,GITHUB_TOKEN:'github_pat_testonly'},async(url,options)=>{
    calls.push({url,options});return Response.json(url.endsWith('/user')?{login:'jayyoungjun-kim'}:{full_name:'jayyoungjun-kim/jayyoungjun-kim.github.io'});
  });
  assert.equal((await github.connect()).login,'jayyoungjun-kim');
  assert.ok(calls.every(c=>c.url.startsWith('https://api.github.com/')&&c.options.redirect==='error'&&c.options.credentials==='omit'));
  await assert.rejects(new GitHub({...repository,GITHUB_TOKEN:'test'},async()=>Response.json({login:'another-user'})).connect(),{status:403});
});
test('invalid token format, executable uploads and arbitrary repository paths are rejected',async()=>{
  const {admin}=await fixture();
  await assert.rejects(admin.request('/api/uploads',{method:'POST',body:new Blob(['<svg onload="alert(1)">'],{type:'image/svg+xml'})}),{status:422});
  await assert.rejects(admin.request('/api/page?page=server/auth.js'),{status:422});
  await assert.rejects(admin.connect('a-password'),{status:401});
});

test('section edits remap dirty offsets, persist undo and reject stale requests',async()=>{
 const {admin,store,writes}=await fixture();const original=await admin.request('/api/page?page=index.html');
 const card=original.sections.find(s=>s.kind==='card');
 const changed=await admin.request('/api/structure?page=index.html',{method:'POST',body:{...original,changes:{[original.fields[0].id]:'Changed longer title'},operation:{action:'duplicate',id:card.id}}});
 assert.equal(changed.sections.filter(s=>s.kind==='card').length,original.sections.filter(s=>s.kind==='card').length+1);assert.equal(changed.undoAvailable,true);
 await assert.rejects(admin.request('/api/structure?page=index.html',{method:'POST',body:{...original,operation:{action:'remove',id:card.id}}}),{status:409});
 const undone=await admin.request('/api/undo?page=index.html',{method:'POST',body:{...changed,changes:{}}});assert.equal(undone.sections.filter(s=>s.kind==='card').length,original.sections.filter(s=>s.kind==='card').length);assert.equal(undone.title,'Changed longer title');assert.equal(undone.undoAvailable,false);assert.equal(writes.length,0);assert.ok(await store.get('drafts','index.html'));
});
