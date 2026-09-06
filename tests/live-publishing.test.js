import test from 'node:test';
import assert from 'node:assert/strict';
import {LiveContent,liveFile,publicPath} from '../server/live-content.js';
import {createHandler} from '../server/worker.js';
test('live revision is durable and broadcasts after GitHub head changes',async()=>{
 const original=globalThis.fetch,storage=new Map(),messages=[];let sha='a'.repeat(40);
 globalThis.fetch=async()=>Response.json({object:{sha}});
 const ctx={storage:{get:async k=>storage.get(k),put:async(k,v)=>storage.set(k,v),setAlarm:async()=>{}},getWebSockets:()=>[{send:m=>messages.push(JSON.parse(m))}]};
 try{
  const live=new LiveContent(ctx,{GITHUB_TOKEN:'secret'});
  await live.refresh();assert.deepEqual(messages,[{revision:sha}]);
  await live.refresh();assert.equal(messages.length,1);
  sha='b'.repeat(40);await live.refresh();assert.equal(messages.at(-1).revision,sha);
  const restored=new LiveContent(ctx,{GITHUB_TOKEN:'secret'});assert.equal((await(await restored.fetch(new Request('https://live/revision'))).json()).revision,sha);
  storage.set('checkedAt',0);sha='c'.repeat(40);assert.equal((await(await restored.fetch(new Request('https://live/revision'))).json()).revision,sha);
  globalThis.fetch=async()=>new Response('',{status:503});await assert.rejects(live.refresh());assert.equal(storage.get('revision'),sha);
 }finally{globalThis.fetch=original;}
});
test('public live files only read whitelisted committed content and never leak credentials',async()=>{
 let calls=0;const fetcher=async(url,options)=>{calls++;assert.ok(url.endsWith('info.html?ref='+'a'.repeat(40)));assert.equal(options.headers.Authorization,'Bearer secret');return new Response('<html>Published</html>');};
 const env={GITHUB_TOKEN:'secret'};
 for(const path of ['admin/app.js','.env','../info.html','assets/uploads/library.json']){assert.equal(publicPath(path),false);assert.equal((await liveFile(new Request('https://live/live/file?path='+encodeURIComponent(path)+'&revision='+'a'.repeat(40)),env,fetcher,null)).status,404);}
 assert.equal(calls,0);
 const response=await liveFile(new Request('https://live/live/file?path=info.html&revision='+'a'.repeat(40)),env,fetcher,null);
 assert.equal(response.status,200);assert.equal(await response.text(),'<html>Published</html>');assert.ok(![...response.headers.values()].join('').includes('secret'));
});
test('only successful authenticated publication notifies live viewers',async()=>{
 let refreshes=0;
 const env={GOOGLE_CLIENT_ID:'client',GITHUB_TOKEN:'secret',LIVE_CONTENT:{idFromName:()=>1,get:()=>({fetch:async()=>{refreshes++;return Response.json({revision:'a'.repeat(40)});}})}};
 const request=()=>new Request('https://worker/github/git/refs/heads/master',{method:'PATCH',headers:{Origin:'https://jayyoungjun-kim.github.io',Authorization:'Bearer proof','Content-Type':'application/json'},body:JSON.stringify({sha:'a'.repeat(40),force:false})});
 let handler=createHandler({verify:async()=>({login:'owner'}),fetcher:async()=>Response.json({object:{sha:'a'.repeat(40)}})});
 assert.equal((await handler(request(),env)).status,200);assert.equal(refreshes,1);
 handler=createHandler({verify:async()=>({login:'owner'}),fetcher:async()=>new Response('',{status:409})});
 assert.equal((await handler(request(),env)).status,409);assert.equal(refreshes,1);
 handler=createHandler({verify:async()=>{throw Error();}});assert.equal((await handler(request(),env)).status,401);assert.equal(refreshes,1);
});
