import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';
import {inspect,applyEdits} from '../lib/content.js';import {structure,changeStructure} from '../lib/sections.js';import {cleanRich} from '../lib/rich-text.js';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
test('ABOUT exposes whole title Korean English and caption without separate footnote numbers',()=>{
 const src=read('about.html'),m=inspect(src,'about.html'),item=m.sections.find(s=>s.kind==='aboutItem');const fields=m.sections.filter(s=>s.parent===item.id).flatMap(s=>s.fieldIds).map(id=>m.fields.find(f=>f.id===id));
 assert.equal(fields.length,4);assert.ok(fields.every(f=>f.rich));assert.match(fields[1].plain,/핵심가치가 있었습니다/);assert.ok(!fields.some(f=>f.value==='1'));assert.match(fields[3].value,/<a href="https:\/\/www.facebook.com/);assert.equal(applyEdits(src,'about.html',{}),src);
});
test('INFO retains line breaks in one field and rich edits safely publish breaks and links',()=>{
 const src=read('info.html'),m=inspect(src,'info.html'),f=m.fields.find(f=>f.rich&&f.label.includes('body kr'));
 assert.match(f.value,/<br>/);assert.equal(cleanRich('첫 줄\n둘째 줄'),'첫 줄<br>둘째 줄');assert.equal(cleanRich('첫 줄<div>둘째 줄</div>'),'첫 줄<br>둘째 줄');const value='첫 줄<br>둘째 줄 <strong>강조</strong> <a href="https://example.com/">링크</a>';
 const out=applyEdits(src,'info.html',{[f.id]:value});assert.match(out,/첫 줄<br>둘째 줄 <strong>강조/);assert.match(out,/href="https:\/\/example.com\/"/);
 assert.equal(cleanRich('<img src=x onerror=alert(1)><script>alert(1)</script><b onclick="evil()">Safe</b>'),'<b>Safe</b>');assert.throws(()=>cleanRich('<a href="javascript:alert(1)">bad</a>'));
});
test('a project section can contain multiple images and text, reorder atomically, and survive emptying',()=>{
 const p='29cm-gift-curation.html';let src=read(p);src=changeStructure(src,p,{action:'add',template:'story',title:'Combined'});
 let m=structure(src,p),s=m.sections.find(s=>s.title==='Combined'&&s.kind==='detail');assert.equal(s.children.length,2);
 src=changeStructure(src,p,{action:'add',parent:s.id,template:'image',title:''});m=structure(src,p);s=m.sections.find(s=>s.title==='Combined'&&s.kind==='detail');assert.equal(s.children.length,3);
 const snippet=src.slice(s.start,s.end);src=changeStructure(src,p,{action:'move',id:s.id,target:m.sections.find(s=>s.kind==='detail').id,position:'before'});assert.ok(src.includes(snippet));
 m=structure(src,p);s=m.sections.find(s=>s.title==='Combined'&&s.kind==='detail');assert.equal(m.sections.filter(s=>s.kind==='detail')[0].title,'Combined');
 for(let i=0;i<3;i++){src=changeStructure(src,p,{action:'remove',id:s.children[0]});m=structure(src,p);s=m.sections.find(x=>x.id===s.id);}
 assert.equal(s.children.length,0);src=changeStructure(src,p,{action:'add',parent:s.id,template:'image',title:''});assert.equal(structure(src,p).sections.find(x=>x.id===s.id).children.length,1);
});
test('editing a legacy project child does not merge neighboring sections',()=>{
 const p='29cm-gift-curation.html';let src=read(p),m=structure(src,p),groups=m.sections.filter(s=>s.kind==='detail'),s=groups[1];const body=m.sections.find(x=>x.parent===s.id&&x.title===s.title);assert.ok(body);
 src=changeStructure(src,p,{action:'remove',id:body.id});const next=structure(src,p).sections.filter(s=>s.kind==='detail');assert.equal(next.length,groups.length);assert.equal(next[2].title,groups[2].title);
});
