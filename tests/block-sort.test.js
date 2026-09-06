import test from 'node:test';
import assert from 'node:assert/strict';
import {insertionAt,changesOrder} from '../admin/block-sort.js';
test('insertion follows gaps including first and last positions',()=>{
 const rows=[{id:'a',top:100,height:100},{id:'b',top:220,height:300}];
 assert.deepEqual(insertionAt(rows,90),{target:'a',position:'before'});
 assert.deepEqual(insertionAt(rows,205),{target:'b',position:'before'});
 assert.deepEqual(insertionAt(rows,600),{target:'b',position:'after'});
 assert.equal(insertionAt([],100),null);
});
test('dropping at original position is a no-op and downward movement has no index error',()=>{
 assert.equal(changesOrder(['a','b','c'],'b','c','before'),false);
 assert.equal(changesOrder(['a','b','c'],'b','a','after'),false);
 assert.equal(changesOrder(['a','b','c'],'a','c','after'),true);
 assert.equal(changesOrder(['a','b','c'],'c','a','before'),true);
});
