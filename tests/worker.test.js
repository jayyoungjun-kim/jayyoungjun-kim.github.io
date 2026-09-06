import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { createHandler, detectFile } from '../server/worker.js';
import { inspect } from '../server/content.js';
const origin='https://jayyoungjun-kim.github.io';
function fixture() {
  const sqlite=new DatabaseSync(':memory:');sqlite.exec(readFileSync(new URL('../server/migrations/0001_admin.sql',import.meta.url),'utf8'));
  sqlite.exec(readFileSync(new URL('../server/migrations/0002_draft_generation.sql',import.meta.url),'utf8'));
  const DB={prepare(sql){let args=[];const s=sqlite.prepare(sql);const statement={bind(...v){args=v;return statement;},async first(){return s.get(...args)||null;},async all(){return {results:s.all(...args)};},async run(){const result=s.run(...args);return{meta:{changes:result.changes}};}};return statement;},async batch(statements){sqlite.exec('BEGIN');try{const results=[];for(const s of statements)results.push(await s.run());sqlite.exec('COMMIT');return results;}catch(e){sqlite.exec('ROLLBACK');throw e;}}};
  const files=new Map(['index.html','info.html','29cm-gift-curation.html','JavaScript/script.js'].map(p=>[p,{sha:p,source:readFileSync(new URL('../'+p,import.meta.url),'utf8')}]));
  const writes=[];const github={
    async file(page){return structuredClone(files.get(page));},async optionalFile(page){return files.has(page)?structuredClone(files.get(page)):null;},
    async pages(){return{head:{sha:'a'.repeat(40)},pages:[...files].map(([path,f])=>({path,sha:f.sha}))};},
    async publish(input){writes.push(input);assert.equal(files.get(input.page)?.sha||null,input.baseSha);files.set(input.page,{source:input.source,sha:'newsha'});return{sha:'f'.repeat(40)};}
  };
  const handle=createHandler({verify:async()=>({sub:'user',email:'jayyoungjunkim@gmail.com'}),githubFactory:()=>github});
  const env={ADMIN_ORIGIN:origin,SITE_ORIGIN:origin,GOOGLE_CLIENT_ID:'client',GITHUB_TOKEN:'test',DB,UPLOADS:{}};
  const request=(path,method='GET',body)=>handle(new Request('https://worker.example'+path,{method,headers:{Origin:origin,...(body?{'Content-Type':'application/json'}:{})},...(body?{body:JSON.stringify(body)}:{})}),env);
  return{request,DB,files,writes,handle,env};
}
test('edit → private draft → preview → publish works without changing public source before publish',async()=>{
  const {request,files,writes,DB}=fixture();
  const original=files.get('info.html').source;
  let data=await (await request('/api/page?page=info.html')).json();
  const field=data.fields.find(f=>f.type==='text'&&f.value.includes('디자인 스튜디오'));
  let response=await request('/api/draft?page=info.html','POST',{revision:0,baseSha:data.baseSha,changes:{[field.id]:'새 소개'}});
  assert.equal(response.status,200);data=await response.json();assert.equal(data.revision,1);
  assert.equal(files.get('info.html').source,original);assert.equal(writes.length,0);
  response=await request('/api/preview?page=info.html','POST',{revision:1,draftId:data.draftId,baseSha:data.baseSha,changes:{}});
  const rendered=await response.json();assert.ok(rendered.html.includes('새 소개'));assert.ok(!rendered.html.includes('<script'));
  response=await request('/api/publish?page=info.html','POST',{revision:1,draftId:data.draftId});assert.equal(response.status,200);
  assert.equal(writes.length,1);assert.ok(files.get('info.html').source.includes('새 소개'));
  assert.equal(await DB.prepare('SELECT * FROM drafts').first(),null);
});
test('stale tabs cannot overwrite saved drafts',async()=>{
  const {request}=fixture();
  const data=await (await request('/api/page?page=info.html')).json();
  const input={revision:0,baseSha:data.baseSha,changes:{}};
  assert.equal((await request('/api/draft?page=info.html','POST',input)).status,200);
  assert.equal((await request('/api/draft?page=info.html','POST',input)).status,409);
  assert.equal((await request('/api/publish?page=info.html','POST',{revision:0})).status,409);
});
test('deleted and recreated drafts reject old tab generations even at the same revision',async()=>{
  const {request}=fixture();
  const page=await (await request('/api/page?page=info.html')).json();
  const input={revision:0,baseSha:page.baseSha,changes:{}};
  const first=await (await request('/api/draft?page=info.html','POST',input)).json();
  assert.equal((await request('/api/draft?page=info.html','DELETE',{revision:first.revision,draftId:first.draftId})).status,200);
  const second=await (await request('/api/draft?page=info.html','POST',input)).json();
  assert.equal(first.revision,second.revision);assert.notEqual(first.draftId,second.draftId);
  assert.equal((await request('/api/publish?page=info.html','POST',{revision:first.revision,draftId:first.draftId})).status,409);
  assert.equal((await request('/api/draft?page=info.html','POST',{...input,revision:first.revision,draftId:first.draftId})).status,409);
  assert.equal((await request('/api/draft?page=info.html','DELETE',{revision:first.revision,draftId:first.draftId})).status,409);
});
test('block operations remain correctly targeted when text edits change source offsets',async()=>{
  const {request,DB}=fixture();const page='index.html';
  const data=await (await request('/api/page?page='+page)).json();
  const block=data.blocks[1], field=data.fields.find(f=>f.type==='text');
  const response=await request('/api/block?page='+page,'POST',{revision:0,baseSha:data.baseSha,changes:{[field.id]:'A much longer title changes all following offsets'},operation:{id:block.id,action:'duplicate'}});
  assert.equal(response.status,200);
  const row=await DB.prepare('SELECT * FROM drafts WHERE page=?').bind(page).first();
  const blocks=inspect(row.source,page).blocks;assert.equal(blocks[1].label,block.label);assert.equal(blocks[2].label,block.label);
});
test('new projects stay private until publish, and cannot replace existing files',async()=>{
  const {request,files}=fixture();const input={page:'new-project.html',template:'29cm-gift-curation.html',title:'새 프로젝트'};
  const response=await request('/api/projects','POST',input);assert.equal(response.status,200);
  assert.equal(files.has(input.page),false);
  assert.equal((await request('/api/projects','POST',input)).status,409);
  assert.equal((await request('/api/projects','POST',{...input,page:'index.html'})).status,422);
});
test('origin restrictions are enforced before any authenticated action',async()=>{
  const {handle,env}=fixture();
  for(const headers of [{},{Origin:'https://evil.example'}])assert.equal((await handle(new Request('https://api.example/api/pages',{headers}),env)).status,403);
});
test('uploads reject active SVG/HTML and disguised MIME types',()=>{
  assert.throws(()=>detectFile(new TextEncoder().encode('<svg onload="alert(1)">'),'image/svg+xml'),{status:422});
  assert.throws(()=>detectFile(new TextEncoder().encode('<html>'),'image/png'),{status:422});
  assert.equal(detectFile(new TextEncoder().encode('%PDF-1.5 test'),'application/pdf'),'pdf');
});
