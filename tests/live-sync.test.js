import test from 'node:test';
import assert from 'node:assert/strict';
import {syncDecision,startLiveSync} from '../admin/live-sync.js';
test('external edits refresh clean pages but never replace typing or saved drafts',()=>{
 const current={page:'work.html',baseSha:'old',revision:0};
 assert.equal(syncDecision(current,{},[{path:'work.html',sha:'old'}]),'none');
 assert.equal(syncDecision(current,{},[{path:'work.html',sha:'new'}]),'refresh');
 assert.equal(syncDecision(current,{field:'typing'},[{path:'work.html',sha:'new'}]),'conflict');
 assert.equal(syncDecision({...current,revision:1},{},[{path:'work.html',sha:'new'}]),'conflict');
 assert.equal(syncDecision(current,{},[]),'removed');
 assert.equal(syncDecision(current,{field:'typing'},[]),'conflict');
 assert.equal(syncDecision({...current,baseSha:null,revision:1},{},[{path:'work.html',draft:true}]),'none');
});
test('poller skips inactive screens, prevents overlapping requests and stops on logout',async()=>{
 let active=false,count=0,release,scheduled=0;
 const sync=startLiveSync({active:()=>active,check:async()=>{count++;await new Promise(r=>release=r);},schedule:()=>++scheduled,cancel(){}});
 await sync.tick();assert.equal(count,0);
 active=true;const pending=sync.tick();await sync.tick();assert.equal(count,1);
 sync.stop();release();await pending;
 const after=scheduled;await sync.tick();assert.equal(count,1);assert.equal(scheduled,after);
});
