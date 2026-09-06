import {parse} from 'parse5';
import {inspect,applyEdits,preview} from './content.js';
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
// Keep actual page markup and stylesheet references. Only editor chrome is inserted.
export function canvasDocument(source,page,changes={},origin='https://jayyoungjun-kim.github.io',selected='',intro=''){
 origin=origin.replace(/\/$/,'');
 const original=inspect(source,page),edited=applyEdits(source,page,changes),model=inspect(edited,page);
 const roots=model.sections.filter(s=>!s.parent&&s.kind!=='settings');
 const patches=[];
 const stable=s=>original.sections[model.sections.indexOf(s)]?.id||s.id;
 const doc=parse(edited,{sourceCodeLocationInfo:true}),nodes=new Map();
 const walk=n=>{if(n.sourceCodeLocation?.startTag)nodes.set(n.sourceCodeLocation.startOffset,n);for(const c of n.childNodes||[])walk(c);};walk(doc);
 for(const s of model.sections){if(s.kind==='settings')continue;const n=nodes.get(s.start);if(!n||s.virtual)continue;
  const at=n.sourceCodeLocation.startTag.endOffset-1;patches.push({start:at,end:at,value:` data-editor-section="${esc(stable(s))}"`});
 }
 roots.forEach((s,i)=>{
  const key=stable(s),add=position=>`<div class="cms-gap"><button data-cms-add="${esc(key)}" data-position="${position}">＋ 여기에 블록 추가</button></div>`;
  const controls=s.movable?`<button draggable="true" data-cms-drag="${esc(key)}" aria-label="블록 ${i+1} 순서 이동">⠿ 이동</button><button data-cms-action="up" data-id="${esc(key)}">↑</button><button data-cms-action="down" data-id="${esc(key)}">↓</button><button data-cms-action="duplicate" data-id="${esc(key)}">복제</button><button data-cms-action="remove" data-id="${esc(key)}">삭제</button>`:'';
  patches.push({start:s.start,end:s.start,edge:1,value:`${i===0&&model.rootKinds.length?add('before'):''}<section class="cms-module${selected===key?' cms-selected':''}" data-cms-block="${esc(key)}"><div class="cms-bar"><span>${i+1} · ${esc(s.title)}</span><div>${controls}<button data-cms-edit="${esc(key)}">편집</button></div></div><div class="cms-original">`});
  patches.push({start:s.end,end:s.end,value:`</div></section>${model.rootKinds.length?add('after'):''}`});
 });
 let html=edited;for(const p of patches.sort((a,b)=>b.start-a.start||(b.edge||0)-(a.edge||0)))html=html.slice(0,p.start)+p.value+html.slice(p.end);
 html=preview(html,page,origin,intro).replace(/<video\b[^>]*>/gi,tag=>tag.replace(/\s(?:autoplay|preload)(?:="[^"]*")?/gi,'').replace('>',' preload="none">'));
 const css=`<style>
 .cms-module{position:relative;outline:1px solid #dce3ec;border-radius:6px;margin:0!important;min-width:0;background:white}.cms-module:hover{outline:2px solid #8eaef4}.cms-module.cms-selected{outline:2px solid #346ee8}.cms-bar{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px;background:#f4f6f9;border-radius:6px 6px 0 0;font:12px/1.5 system-ui,sans-serif;color:#536175;position:relative;z-index:2}.cms-bar>span{max-width:55%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cms-bar>div{display:flex;gap:5px}.cms-bar button,.cms-gap button{font:12px/1.5 system-ui,sans-serif;border:1px solid #d5deeb;border-radius:5px;padding:5px 9px;background:white;color:#375278;cursor:pointer}.cms-gap{text-align:center;padding:12px 0;clear:both}.cms-gap button{border-style:dashed;background:#f6f9ff}.cms-original{cursor:pointer;overflow:hidden}.cms-original a{pointer-events:none}.cms-original [data-editor-section]:hover{outline:1px dashed #9db7eb;outline-offset:2px}.cms-original img{pointer-events:none}.cms-original .main-header-title:empty:before{content:'홈 타이핑 소개 · 별도 편집';font:16px system-ui;color:#8793a4}.cms-original video{pointer-events:none}.cms-module img{height:auto}.cms-original img[src=""],.cms-original img:not([src]){min-height:160px;background:#eef2f7;outline:1px dashed #aebed4}.cms-original section[data-cms-section]{display:block}body{overflow-x:hidden!important}.cms-readonly .cms-bar,.cms-readonly .cms-gap{display:none}.cms-readonly .cms-module{outline:0}.cms-readonly .cms-original{cursor:default}
 </style>`;
 return html.replace('</head>',css+'</head>');
}
