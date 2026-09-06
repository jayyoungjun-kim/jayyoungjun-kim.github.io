import test from 'node:test';import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {parse} from 'parse5';
import {canvasDocument} from '../lib/canvas.js';import {inspect} from '../lib/content.js';import {changeStructure,structure} from '../lib/sections.js';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const nodes=(root,fn)=>[...(fn(root)?[root]:[]),...(root.childNodes||[]).flatMap(c=>nodes(c,fn))];const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
test('canvas uses actual page stylesheet and root modules, with executable source removed',()=>{
 for(const p of ['index.html','about.html','info.html','29cm-gift-curation.html']){
 const src=read(p),html=canvasDocument(src,p),doc=parse(html),roots=inspect(src,p).sections.filter(s=>!s.parent&&s.kind!=='settings');
 const modules=nodes(doc,n=>attr(n,'data-cms-block'));assert.equal(modules.length,roots.length);assert.equal(nodes(doc,n=>n.tagName==='script'||n.tagName==='iframe').length,0);assert.ok(html.includes('css/style.css'));assert.ok(html.includes("default-src &#39;none&#39;")||html.includes("default-src 'none'"));
 for(const m of modules)assert.ok(!nodes(m,n=>n!==m&&attr(n,'data-cms-block')).length,'root modules must not nest');
 }
});
test('unsaved prose edits render immediately with stable click targets and without changing source',()=>{
 const src=read('about.html'),m=inspect(src,'about.html'),f=m.fields.find(f=>f.rich&&f.label.includes('body kr'));
 const html=canvasDocument(src,'about.html',{[f.id]:'Visual update<br>Second line'});assert.ok(html.includes('Visual update<br>Second line'));assert.ok(html.includes(`data-editor-section="${m.sections.find(s=>s.kind==='aboutItem').id}"`));assert.ok(!src.includes('Visual update'));
});
test('add between blocks honors the selected gap and rejects a different parent target',()=>{
 const p='about.html',src=read(p),groups=structure(src,p).sections.filter(s=>s.kind==='aboutGroup');
 const out=changeStructure(src,p,{action:'add',template:'aboutGroup',title:'Middle',target:groups[0].id,position:'after'});assert.deepEqual(structure(out,p).sections.filter(s=>s.kind==='aboutGroup').map(s=>s.title),[groups[0].title,'Middle',groups[1].title,groups[2].title]);
 assert.throws(()=>changeStructure(src,p,{action:'add',template:'aboutGroup',title:'Invalid',target:structure(src,p).sections.find(s=>s.kind==='aboutItem').id}));
});
