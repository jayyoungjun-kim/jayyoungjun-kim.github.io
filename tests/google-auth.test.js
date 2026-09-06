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
 const original=globalThis.fetch,originalStorage=globalThis.localStorage,calls=[],saved=new Map(),sessionToken='ps_'+'a'.repeat(64);
 globalThis.localStorage={getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v),removeItem:k=>saved.delete(k)};
 globalThis.fetch=async(url,options)=>{calls.push({url,options});return Response.json(url.endsWith('/session')?{login:'jayyoungjunkim@gmail.com',sessionToken}:{full_name:'jayyoungjun-kim/jayyoungjun-kim.github.io'});};
 try{
  const admin=new GoogleAdmin({GITHUB_OWNER:'jayyoungjun-kim',GITHUB_REPO:'jayyoungjun-kim.github.io',GITHUB_BRANCH:'master'},origin,'https://worker.invalid');
  admin.store={ready:Promise.resolve()};
  await admin.connect('google-proof');
  assert.deepEqual(calls.map(c=>c.url),['https://worker.invalid/session','https://worker.invalid/github']);
  assert.equal(calls[0].options.method,'POST');assert.equal(calls[0].options.headers.Authorization,'Bearer google-proof');assert.equal(calls[1].options.headers.Authorization,'Bearer '+sessionToken);
  assert.ok(![...saved.values()].includes('google-proof'));
  const github=admin.github;admin.disconnect();assert.equal(github.env.GITHUB_TOKEN,'');assert.equal(admin.github,null);
  await admin.connect();assert.equal(calls[2].options.method,'GET');assert.equal(calls[2].options.headers.Authorization,'Bearer '+sessionToken);
  await admin.logout();assert.equal(saved.size,0);assert.equal(admin.github,null);
  globalThis.fetch=async()=>new Response('',{status:401});await assert.rejects(admin.connect('expired'));assert.equal(admin.github,null);
 }finally{globalThis.fetch=original;globalThis.localStorage=originalStorage;}
});

test('persistent sessions survive Google expiry, store only hashes, and revoke on logout',async()=>{
 const data=new Map();let googleValid=true;
 const configured={...env,ADMIN_SESSIONS:{get:async k=>data.has(k)?JSON.parse(data.get(k)):null,put:async(k,v,opts)=>{assert.equal(opts,undefined);data.set(k,v);},delete:async k=>data.delete(k)}};
 const handler=createHandler({verify:async()=>{if(!googleValid)throw Error();return{login:'jayyoungjunkim@gmail.com'};},fetcher:async()=>Response.json({ok:true})});
 const issued=await handler(request('/session','POST'),configured);assert.equal(issued.status,200);
 const {sessionToken}=await issued.json();assert.match(sessionToken,/^ps_[a-f0-9]{64}$/);assert.ok(![...data.keys(),...data.values()].join('').includes(sessionToken));
 googleValid=false;
 const sessionRequest=(path,method='GET',token=sessionToken)=>new Request('https://worker.invalid'+path,{method,headers:{Origin:origin,Authorization:'Bearer '+token}});
 assert.equal((await handler(sessionRequest('/session'),configured)).status,200);
 assert.equal((await handler(sessionRequest('/github'),configured)).status,200);
 assert.equal((await handler(sessionRequest('/session','GET','ps_'+'f'.repeat(64)),configured)).status,401);
 assert.equal((await handler(sessionRequest('/logout','POST'),configured)).status,200);
 assert.equal((await handler(sessionRequest('/session'),configured)).status,401);
 assert.equal((await handler(sessionRequest('/github'),configured)).status,401);
});
