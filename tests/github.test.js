import test from 'node:test';
import assert from 'node:assert/strict';
import { GitHub, isPage, toBase64 } from '../server/github.js';
const sha = 'a'.repeat(40), fileSha='b'.repeat(40);
const env={GITHUB_TOKEN:'not-a-real-token',GITHUB_OWNER:'jayyoungjun-kim',GITHUB_REPO:'jayyoungjun-kim.github.io',GITHUB_BRANCH:'master'};
function transport(race=false) {
  const calls=[];
  return { calls, fetch:async (url, options) => {
    const path=new URL(url).pathname.replace('/repos/jayyoungjun-kim/jayyoungjun-kim.github.io','');
    const body=options.body?JSON.parse(options.body):null;calls.push({path,method:options.method,body});
    let result;
    if(path==='/git/ref/heads/master')result={object:{sha}};
    else if(path===`/git/commits/${sha}`)result={tree:{sha:'c'.repeat(40)}};
    else if(path==='/contents/info.html')result={type:'file',encoding:'base64',size:10,sha:fileSha,content:toBase64(new TextEncoder().encode('old'))};
    else if(path==='/git/trees')result={sha:'d'.repeat(40)};
    else if(path==='/git/commits')result={sha:'e'.repeat(40)};
    else if(path==='/git/refs/heads/master') { if(race)return Response.json({}, {status:422}); result={}; }
    else throw new Error(path);
    return Response.json(result);
  }};
}
test('publishes a single atomic commit on latest master without force push', async () => {
  const mock=transport();const github=new GitHub(env,mock.fetch);
  const result=await github.publish({page:'info.html',source:'new',baseSha:fileSha});
  assert.equal(result.sha,'e'.repeat(40));
  assert.deepEqual(mock.calls.find(c=>c.path==='/git/commits').body.parents,[sha]);
  assert.deepEqual(mock.calls.at(-1).body,{sha:'e'.repeat(40),force:false});
  assert.equal(mock.calls.find(c=>c.path==='/git/trees').body.tree[0].path,'info.html');
});
test('stale file or concurrent branch advance never overwrites someone else',async()=>{
  const mock=transport();
  await assert.rejects(new GitHub(env,mock.fetch).publish({page:'info.html',source:'new',baseSha:'stale'}),{status:409});
  assert.ok(mock.calls.every(c=>c.method==='GET'));
  const race=transport(true);
  await assert.rejects(new GitHub(env,race.fetch).publish({page:'info.html',source:'new',baseSha:fileSha}),{status:409});
  assert.equal(race.calls.at(-1).body.force,false);
});
test('does not publish arbitrary repository paths or delete core pages',async()=>{
  for(const path of ['../index.html','.github/workflows/deploy.yml','css/style.css','server/auth.js','admin/index.html'])assert.equal(isPage(path),false);
  await assert.rejects(new GitHub(env,()=>{throw new Error('unexpected request')}).publish({page:'index.html',deleting:true}),{status:422});
});
