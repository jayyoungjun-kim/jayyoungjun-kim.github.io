import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {inspect} from '../lib/content.js';
import {structure,changeStructure} from '../lib/sections.js';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const select=(src,p,k)=>structure(src,p).sections.filter(s=>s.kind===k);
test('every original editable field has exactly one section owner',()=>{
 for(const p of readdirSync(new URL('..',import.meta.url)).filter(p=>p.endsWith('.html'))){const m=inspect(read(p),p),ids=m.sections.flatMap(s=>s.fieldIds);assert.equal(ids.length,m.fields.length,p);assert.equal(new Set(ids).size,ids.length,p);}
});
test('home categories and cards reorder independently and transfer to a chosen position',()=>{
 const p='index.html',src=read(p);let cats=select(src,p,'category'),cards=select(src,p,'card'),a=cards.find(s=>s.parent===cats[0].id),b=cards.find(s=>s.parent===cats[1].id);
 let out=changeStructure(src,p,{action:'transfer',id:a.id,parent:cats[1].id,target:b.id,position:'before'});
 cats=select(out,p,'category');cards=select(out,p,'card');assert.deepEqual(cards.filter(s=>s.parent===cats[1].id).slice(0,2).map(s=>s.title),[a.title,b.title]);
 out=changeStructure(out,p,{action:'move',id:cats[1].id,target:cats[0].id,position:'before'});assert.equal(select(out,p,'category')[0].title,cats[1].title);
 assert.equal(select(out,p,'card').length,select(src,p,'card').length);
});
test('about groups can be emptied, recreated and composed from ordered blocks',()=>{
 const p='about.html';let out=read(p);while(select(out,p,'aboutGroup').length)out=changeStructure(out,p,{action:'remove',id:select(out,p,'aboutGroup')[0].id});
 out=changeStructure(out,p,{action:'add',template:'aboutGroup',title:'New <section>'});assert.match(out,/New &lt;section&gt;/);
 let g=select(out,p,'aboutGroup')[0];out=changeStructure(out,p,{action:'add',parent:g.id,template:'aboutItem',title:'Heading'});
 const item=select(out,p,'aboutItem')[0];out=changeStructure(out,p,{action:'add',parent:item.id,template:'list',title:'List'});
 let parts=select(out,p,'part');out=changeStructure(out,p,{action:'move',id:parts.at(-1).id,target:parts[0].id,position:'before'});assert.match(select(out,p,'part')[0].title,/List/);
});
test('info separators follow news order and disappear when the final news is deleted',()=>{
 const p='info.html';let out=read(p),news=select(out,p,'news');out=changeStructure(out,p,{action:'move',id:news.at(-1).id,target:news[0].id,position:'before'});assert.equal(select(out,p,'news')[0].title,news.at(-1).title);
 while(select(out,p,'news').length)out=changeStructure(out,p,{action:'remove',id:select(out,p,'news')[0].id});assert.ok(!out.includes('class="divider-dashed"'));
});
test('project supports mixed text image video columns and spacer sections without rewriting existing content',()=>{
 const p='29cm-gift-curation.html',src=read(p);let out=src;
 for(const template of ['text','image','video','twoImages','spacer'])out=changeStructure(out,p,{action:'add',template,title:'Added'});
 let sections=select(out,p,'detail');assert.equal(sections.length,select(src,p,'detail').length+5);
 const added=sections.find(s=>s.title==='Added'),target=sections.find(s=>s.movable);out=changeStructure(out,p,{action:'move',id:added.id,target:target.id,position:'before'});assert.equal(select(out,p,'detail').filter(s=>s.movable)[0].title,'Added');
 assert.throws(()=>changeStructure(out,p,{action:'remove',id:select(out,p,'fixed')[0].id}));
});
test('invalid moves and executable card connections are rejected',()=>{
 const p='index.html',src=read(p),cards=select(src,p,'card'),cat=select(src,p,'category')[0];assert.throws(()=>changeStructure(src,p,{action:'move',id:cards[0].id,target:cat.id}));
 const bare='<div class="contents"><div class="main-content"><div class="main-content-title">C</div><div class="main-content-list"><div class="main-content-list-img"><img src="x.jpg"><div>Work</div></div></div></div></div>';
 const id=select(bare,p,'card')[0].id;assert.throws(()=>changeStructure(bare,p,{action:'linkCard',id,href:'javascript:alert(1)'}));assert.match(changeStructure(bare,p,{action:'linkCard',id,href:'new-work.html'}),/href="new-work.html"/);
});
test('participant role and names move and delete together, and empty lists can be refilled',()=>{
 const p='29cm-gift-curation.html',src=read(p);
 let out=src,entries=select(out,p,'participant');
 assert.equal(entries.length,5);
 const first=entries[0],second=entries[1],last=entries.at(-1);
 out=changeStructure(out,p,{action:'move',id:first.id,target:last.id,position:'after'});
 assert.equal(select(out,p,'participant').at(-1).title,first.title);
 const moved=select(out,p,'participant').at(-1);
 assert.match(out.slice(moved.start,moved.end),/Jongwan Han/);
 out=changeStructure(out,p,{action:'remove',id:moved.id});
 assert.ok(!out.includes('Jongwan Han'));
 assert.equal(select(out,p,'participant')[0].title,second.title);
 while(select(out,p,'participant').length)out=changeStructure(out,p,{action:'remove',id:select(out,p,'participant')[0].id});
 out=changeStructure(out,p,{action:'add',parent:select(out,p,'participants')[0].id,template:'participant',title:'New Person'});
 assert.equal(select(out,p,'participant').length,1);
 const m=inspect(out,p),entry=m.sections.find(s=>s.kind==='participant');
 assert.equal(entry.fieldIds.length,2);
 assert.ok(m.fields.find(f=>f.id===entry.fieldIds[1]).rich);
 assert.equal(select(out,p,'detail').length,select(src,p,'detail').length);
});
test('previous and next links can be independently removed and restored without duplicates',()=>{
 const p='29cm-gift-curation.html';let out=read(p);
 out=changeStructure(out,p,{action:'add',parent:select(out,p,'navigation')[0].id,template:'next',title:'Next Work'});
 assert.deepEqual(select(out,p,'projectLink').map(s=>s.direction),['next','previous']);
 assert.match(out,/project-pagination-grid/);
 assert.throws(()=>changeStructure(out,p,{action:'add',parent:select(out,p,'navigation')[0].id,template:'next',title:'Duplicate'}));
 assert.throws(()=>changeStructure(out,p,{action:'duplicate',id:select(out,p,'projectLink')[0].id}));
 out=changeStructure(out,p,{action:'remove',id:select(out,p,'projectLink')[0].id});
 assert.match(out,/29cm-style-onboarding.html/);
 while(select(out,p,'projectLink').length)out=changeStructure(out,p,{action:'remove',id:select(out,p,'projectLink')[0].id});
 out=changeStructure(out,p,{action:'add',parent:select(out,p,'navigation')[0].id,template:'previous',title:'Restored'});
 assert.equal(select(out,p,'projectLink')[0].direction,'previous');
});
test('projects without credits or navigation can create both groups',()=>{
 const p='new-work.html';let out='<div class="project-container"><div class="project-header">Title</div></div>';
 for(const template of ['participants','navigation'])out=changeStructure(out,p,{action:'add',template,title:''});
 assert.equal(select(out,p,'participants').length,1);
 assert.equal(select(out,p,'navigation').length,1);
 assert.ok(!structure(out,p).rootKinds.includes('navigation'));
 out=changeStructure(out,p,{action:'add',parent:select(out,p,'participants')[0].id,template:'participant',title:'Person'});
 assert.equal(select(out,p,'participant').length,1);
});
