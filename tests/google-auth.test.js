import test from 'node:test';
import assert from 'node:assert/strict';
import {generateKeyPair,SignJWT} from 'jose';
import {authenticate,createHandler,allowedRoute} from '../server/worker.js';
const env={GOOGLE_CLIENT_ID:'test-client',GITHUB_TOKEN:'server-secret'};
const origin='https://jayyoungjun-kim.github.io';
const {privateKey,publicKey}=await generateKeyPair('RS256');
async function signed(overrides={}){return new SignJWT({sub:'user-1',email:'jayyoungjunkim@gmail.com',email_verified:true,...overrides}).setProtectedHeader({alg:'RS256'}).setIssuer('https://accounts.google.com').setAudience('test-client').setIssuedAt().setExpirationTime('1h').sign(privateKey);}
test('Google JWT requires trusted signature, audience, issuer, expiry and exact verified email',async()=>{
 assert.deepEqual(await authenticate(await signed(),env,publicKey),{login:'jayyoungjunkim@gmail.com'});
 for(const claims of [{email:'other@gmail.com'},{email_verified:false}])await assert.rejects(authenticate(await signed(claims),env,publicKey));
 await assert.rejects(authenticate(await signed(),{GOOGLE_CLIENT_ID:'wrong'},publicKey));
 const {publicKey:otherKey}=await generateKeyPair('RS256');await assert.rejects(authenticate(await signed(),env,otherKey));
 const expired=await new SignJWT({sub:'x',email:'jayyoungjunkim@gmail.com',email_verified:true}).setProtectedHeader({alg:'RS256'}).setIssuer('https://accounts.google.com').setAudience('test-client').setIssuedAt().setExpirationTime(1).sign(privateKey);await assert.rejects(authenticate(expired,env,publicKey));
 const forged=await new SignJWT({sub:'x',email:'jayyoungjunkim@gmail.com',email_verified:true}).setProtectedHeader({alg:'RS256'}).setIssuer('https://evil.invalid').setAudience('test-client').setIssuedAt().setExpirationTime('1h').sign(privateKey);await assert.rejects(authenticate(forged,env,publicKey));
});
function request(path,method='GET',body,source=origin){return new Request('https://worker.invalid'+path,{method,headers:{Origin:source,Authorization:'Bearer google-proof','Content-Type':'application/json'},...(body?{body:JSON.stringify(body)}:{})});}
test('proxy authenticates before any GitHub call and never returns server credential',async()=>{
 let calls=0;
 const denied=createHandler({verify:async()=>{throw Error();},fetcher:async()=>{calls++;}});
 assert.equal((await denied(request('/github'),env)).status,401);assert.equal(calls,0);
 const handler=createHandler({verify:async()=>({login:'jayyoungjunkim@gmail.com'}),fetcher:async(url,options)=>{calls++;assert.equal(url,'https://api.github.com/repos/jayyoungjun-kim/jayyoungjun-kim.github.io');assert.equal(options.headers.Authorization,'Bearer server-secret');assert.equal(options.redirect,'manual');return Response.json({full_name:'repo'});}});
 const response=await handler(request('/github'),env);assert.equal(response.status,200);assert.equal(response.headers.get('Access-Control-Allow-Origin'),origin);assert.ok(!(await response.text()).includes('server-secret'));
 assert.equal((await handler(request('/github','GET',null,'https://evil.invalid'),env)).status,403);assert.equal(calls,1);
 assert.equal((await handler(request('/session'),env)).status,200);
});
test('proxy rejects arbitrary endpoints, force pushes, core deletion and code writes',async()=>{
 const handler=createHandler({verify:async()=>({login:'owner'}),fetcher:async()=>{throw Error('must not fetch');}});
 for(const path of ['/github/issues','/github/git/refs/heads/other','/github//evil.invalid','/github/contents/.env'])assert.equal((await handler(request(path),env)).status,403);
 assert.equal((await handler(request('/github/git/refs/heads/master','PATCH',{sha:'a'.repeat(40),force:true}),env)).status,403);
 for(const path of ['admin/app.bundle.js','index.html'])assert.equal((await handler(request('/github/git/trees','POST',{tree:[{path,mode:'100644',type:'blob',sha:null}]}),env)).status,403);
 assert.ok(allowedRoute('/contents/JavaScript/script.js','GET'));assert.ok(allowedRoute('/git/refs/heads/master','PATCH'));
});

test('Google client routes session and GitHub calls through Worker and clears credentials on disconnect',async()=>{
 const {GoogleAdmin}=await import('../lib/google-service.js');
 const original=globalThis.fetch,calls=[];
 globalThis.fetch=async(url,options)=>{calls.push({url,options});return Response.json(url.endsWith('/session')?{login:'jayyoungjunkim@gmail.com'}:{full_name:'jayyoungjun-kim/jayyoungjun-kim.github.io'});};
 try{
  const admin=new GoogleAdmin({GITHUB_OWNER:'jayyoungjun-kim',GITHUB_REPO:'jayyoungjun-kim.github.io',GITHUB_BRANCH:'master'},origin,'https://worker.invalid');
  admin.store={ready:Promise.resolve()};
  await admin.connect('google-proof');
  assert.deepEqual(calls.map(c=>c.url),['https://worker.invalid/session','https://worker.invalid/github']);
  assert.ok(calls.every(c=>c.options.headers.Authorization==='Bearer google-proof'));
  const github=admin.github;admin.disconnect();assert.equal(github.env.GITHUB_TOKEN,'');assert.equal(admin.github,null);
  globalThis.fetch=async()=>new Response('',{status:401});await assert.rejects(admin.connect('expired'));assert.equal(admin.github,null);
 }finally{globalThis.fetch=original;}
});
