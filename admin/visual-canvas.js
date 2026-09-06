import {bindBlockSort} from './block-sort.js';
import bundledSiteCSS from '../css/style.css';
import {canvasDocument} from '../lib/canvas.js';
let siteCSS=bundledSiteCSS;
export function updateCanvasStyles(css){siteCSS=css;for(const frame of document.querySelectorAll('.site-canvas')){const style=frame.shadowRoot?.querySelector('[data-site-style]');if(style)style.textContent=css.replaceAll('@media only screen and','@container canvas');}}
let savedPage='',selectedIndex=-1,viewport='desktop',readonly=false,lastHeight=1000,cleanup;
const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls||'';if(text!==undefined)n.textContent=text;return n;};
const btn=(text,fn)=>{const b=el('button','',text);b.type='button';b.onclick=fn;return b;};
export function disposeVisualCanvas(){cleanup?.();cleanup=null;}
export function renderVisualCanvas(host,ctx,renderForm,reveal){
 cleanup?.();let disposed=false,timer,observer,bodyObserver,generation=0,intro='',events,sortCleanup;
 if(savedPage!==ctx.current.page){savedPage=ctx.current.page;selectedIndex=-1;lastHeight=1000;}
 const all=ctx.current.sections;let selected=all[selectedIndex];if(selected?.kind==='settings')selected=null;
 host.replaceChildren();host.className='visual-workbench';
 const area=el('section','canvas-area'),toolbar=el('div','canvas-toolbar'),stage=el('div','canvas-stage'),frame=el('div','site-canvas');
 frame.setAttribute('aria-label','실제 페이지 블록 편집');frame.attachShadow({mode:'open'});
 const note=el('p','canvas-note','블록을 클릭해 편집하세요. 블록 사이의 ＋로 추가하고 ⠿로 순서를 바꿀 수 있습니다.');
 toolbar.append(el('strong','','화면으로 편집'));
 const desktop=btn('PC',()=>{viewport='desktop';fit();syncButtons();}),mobile=btn('모바일',()=>{viewport='mobile';fit();syncButtons();}),view=btn('화면만 보기',()=>{readonly=!readonly;frame.shadowRoot.querySelector('.canvas-page')?.classList.toggle('cms-readonly',readonly);syncButtons();fit();});
 const hide=btn('편집 패널 닫기',()=>{selectedIndex=-1;selected=null;panel.hidden=true;host.classList.remove('with-inspector');fit();});
 toolbar.append(desktop,mobile,view);if(ctx.current.rootKinds.length)toolbar.append(btn('＋ 블록 추가',()=>ctx.add(null,ctx.current.rootKinds)));if(ctx.current.page==='index.html')toolbar.append(btn('타이핑 소개',ctx.openIntro));area.append(toolbar,note,stage);stage.append(frame);
 const panel=el('aside','canvas-inspector');panel.setAttribute('aria-label','블록 내용 편집');const panelHead=el('div','canvas-panel-heading');panelHead.append(el('strong','','블록 편집'),hide);const form=el('div');panel.append(panelHead,form);host.append(area,panel);
 function syncButtons(){desktop.setAttribute('aria-pressed',String(viewport==='desktop'));mobile.setAttribute('aria-pressed',String(viewport==='mobile'));view.setAttribute('aria-pressed',String(readonly));view.textContent=readonly?'블록 편집으로':'화면만 보기';}
 function fit(){if(disposed)return;const width=Math.max(280,stage.clientWidth),design=viewport==='mobile'?390:Math.max(1000,width),scale=Math.min(1,width/design);frame.style.width=design+'px';frame.style.transform=`scale(${scale})`;const doc=frame.shadowRoot;const body=doc?.querySelector('.canvas-page');if(body){const height=Math.max(body.scrollHeight,300);lastHeight=height;}stage.style.height=lastHeight*scale+'px';}
 function select(id){let s=all.find(x=>x.id===id);if(s?.kind==='part')s=all.find(x=>x.id===s.parent);if(!s)return;selected=s;selectedIndex=all.indexOf(s);openForm();highlight();}
 function highlight(){const doc=frame.shadowRoot;if(!doc)return;let root=selected;while(root?.parent)root=all.find(x=>x.id===root.parent);doc.querySelectorAll('[data-cms-block]').forEach(n=>n.classList.toggle('cms-selected',n.dataset.cmsBlock===root?.id));}
 function openForm(){panel.hidden=!selected;host.classList.toggle('with-inspector',!!selected);if(!selected){fit();return;}reveal(selected.id);renderForm(form,{...ctx,update:()=>{ctx.update();clearTimeout(timer);timer=setTimeout(draw,350);}},'content');fit();}
 function operate(id,action){const s=all.find(x=>x.id===id);if(!s)return;if(action==='up'||action==='down'){const peers=all.filter(x=>x.movable&&!x.parent),i=peers.indexOf(s),target=peers[i+(action==='up'?-1:1)];if(target)ctx.act({action:'move',id,target:target.id,position:action==='up'?'before':'after'});}else ctx.act({action,id});}
 function bind(){events?.abort();events=new AbortController();const doc=frame.shadowRoot;if(!doc?.querySelector('.canvas-page'))return;doc.querySelector('.canvas-page').classList.toggle('cms-readonly',readonly);highlight();const listen=(type,fn)=>doc.addEventListener(type,fn,{signal:events.signal});
  listen('click',e=>{e.preventDefault();if(readonly)return;const target=e.target;
   const add=target.closest('[data-cms-add]');if(add){ctx.add(null,ctx.current.rootKinds,{target:add.dataset.cmsAdd,position:add.dataset.position});return;}
   const action=target.closest('[data-cms-action]');if(action){operate(action.dataset.id,action.dataset.cmsAction);return;}
   const edit=target.closest('[data-cms-edit]');const section=target.closest('[data-editor-section]');const block=target.closest('[data-cms-block]');select(edit?.dataset.cmsEdit||section?.dataset.editorSection||block?.dataset.cmsBlock);
  });
  sortCleanup?.();
  doc.querySelectorAll('[data-cms-drag]').forEach(h=>{h.draggable=false;h.style.touchAction='none';h.style.cursor='grab';});
  sortCleanup=bindBlockSort({root:doc,handleSelector:'[data-cms-drag]',itemSelector:'[data-cms-block]',canDrop:(from,to)=>{const a=all.find(x=>x.id===from),b=all.find(x=>x.id===to);return a&&b&&a.id!==b.id&&a.movable&&b.movable&&a.parent===b.parent&&(a.kind===b.kind||a.kind==='detail');},commit:(id,target,position)=>ctx.act({action:'move',id,target,position})});
  doc.querySelectorAll('[data-cms-drag]').forEach(h=>h.addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();operate(h.dataset.cmsDrag,e.key==='ArrowUp'?'up':'down');}}));
  doc.querySelectorAll('img').forEach(img=>{img.addEventListener('load',fit);img.addEventListener('error',fit);});document.fonts?.ready.then(fit);
  bodyObserver?.disconnect();bodyObserver=new ResizeObserver(fit);bodyObserver.observe(doc.querySelector('.canvas-page'));fit();
 }
 async function draw(){if(document.body.classList.contains('block-sorting')){clearTimeout(timer);timer=setTimeout(draw,150);return;}const epoch=++generation;try{let html=canvasDocument(ctx.current.source,ctx.current.page,ctx.changes,ctx.siteOrigin,selected?.id,intro);
  const paths=[...new Set(html.match(/\/assets\/uploads\/[a-f0-9-]{36}\.(?:png|jpg|gif|webp|pdf|mp4)/g)||[])];for(const path of paths){const url=await ctx.localImage(path);html=html.replaceAll(path,url);}
  if(disposed||epoch!==generation)return;const parsed=new DOMParser().parseFromString(html,'text/html');
  parsed.querySelectorAll('script,iframe,object,embed,form,svg,math,template').forEach(n=>n.remove());
  for(const n of parsed.querySelectorAll('[src],[href],[poster]'))for(const key of ['src','href','poster'])if(n.hasAttribute(key)){const value=n.getAttribute(key);if(value)n.setAttribute(key,new URL(value,ctx.siteOrigin.replace(/\/$/,'')+'/').href);}
  const root=frame.shadowRoot;root.replaceChildren();
  const siteStyle=el('style');siteStyle.dataset.siteStyle='';siteStyle.textContent=siteCSS.replaceAll('@media only screen and','@container canvas');
  const style=el('style');style.textContent=Array.from(parsed.querySelectorAll('head style')).map(n=>n.textContent).join('\n')+'\n:host{display:block;color:#111;font-family:Pretendard,Arial,sans-serif}.canvas-viewport{container-type:inline-size;container-name:canvas}.canvas-page{display:flow-root;background:white}.canvas-page *{box-sizing:border-box}';
  const shell=el('div','canvas-viewport'),body=el('div','canvas-page');while(parsed.body.firstChild)body.append(parsed.body.firstChild);shell.append(body);root.append(siteStyle,style,shell);for(const link of parsed.querySelectorAll('head link[rel="stylesheet"]'))if(!link.href.endsWith('/css/style.css')){link.onload=fit;root.prepend(link);}
  bind();
 }catch(e){note.textContent='화면 반영을 기다리는 중: '+e.message;}}
 if(ctx.current.page==='index.html'&&ctx.api)ctx.api('/api/page?page=JavaScript/script.js').then(data=>{if(!disposed){intro=data.fields[0].value;draw();}}).catch(()=>{});
 observer=new ResizeObserver(fit);observer.observe(stage);syncButtons();openForm();draw();
 cleanup=()=>{sortCleanup?.();disposed=true;events?.abort();clearTimeout(timer);observer?.disconnect();bodyObserver?.disconnect();};
}
