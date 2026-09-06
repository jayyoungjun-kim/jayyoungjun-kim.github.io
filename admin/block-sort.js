export function insertionAt(items,y){
 const next=items.find(item=>y<item.top+item.height/2);
 return next?{target:next.id,position:'before'}:items.length?{target:items.at(-1).id,position:'after'}:null;
}
export function changesOrder(ids,id,target,position){
 const next=ids.filter(x=>x!==id),index=next.indexOf(target);
 if(index<0)return false;
 next.splice(index+(position==='after'?1:0),0,id);
 return next.join('|')!==ids.join('|');
}
export function bindBlockSort({root,handleSelector,itemSelector,canDrop,commit}){
 let drag,raf;
 const controller=new AbortController();
 const listen=(node,type,fn)=>node.addEventListener(type,fn,{signal:controller.signal});
 const items=()=>[...root.querySelectorAll(itemSelector)].filter(n=>n.getBoundingClientRect().width>0);
 const id=n=>n.dataset.sortId||n.dataset.cmsBlock;
 function stop(apply=false){
  if(!drag)return;
  const d=drag;drag=null;cancelAnimationFrame(raf);
  if(d.capture?.hasPointerCapture(d.pointer))d.capture.releasePointerCapture(d.pointer);
  d.node.style.display=d.display;d.placeholder?.remove();d.ghost?.remove();
  document.body.classList.remove('block-sorting');
  if(apply&&!d.outside&&d.slot&&changesOrder(d.ids,id(d.node),d.slot.target,d.slot.position))commit(id(d.node),d.slot.target,d.slot.position);
 }
 function begin(){
  const d=drag,rect=d.node.getBoundingClientRect();
  d.started=true;d.ids=items().map(id);d.display=d.node.style.display;
  d.placeholder=document.createElement('div');d.placeholder.className='block-insertion-slot';
  d.placeholder.textContent='여기에 놓기';d.placeholder.setAttribute('role','status');
  d.placeholder.style.cssText='height:'+Math.min(180,Math.max(72,rect.height))+'px;box-sizing:border-box;border:2px dashed #487de0;border-radius:10px;background:#edf4ff;color:#3468c9;display:flex;align-items:center;justify-content:center;margin:12px 0;pointer-events:none;font:600 14px system-ui;';
  d.node.before(d.placeholder);d.node.style.display='none';
  d.ghost=document.createElement('div');d.ghost.textContent=d.label;
  d.ghost.style.cssText='position:fixed;z-index:2147483647;pointer-events:none;padding:14px 22px;background:white;border:1px solid #739be9;border-radius:10px;box-shadow:0 10px 35px #172c5540;max-width:340px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font:600 14px system-ui;color:#294b85;';
  document.body.append(d.ghost);document.body.classList.add('block-sorting');
  scroll();
 }
 function place(){
  const d=drag;if(!d?.started)return;
  d.ghost.style.left=d.x+14+'px';d.ghost.style.top=d.y+14+'px';
  const bounds=(root.host||root).getBoundingClientRect();d.outside=d.x<bounds.left||d.x>bounds.right;
  if(d.outside)return;
  const slotRect=d.placeholder.getBoundingClientRect();
  if(d.y>=slotRect.top&&d.y<=slotRect.bottom)return;
  const targets=items().filter(n=>n!==d.node&&canDrop(id(d.node),id(n)));
  const slot=insertionAt(targets.map(n=>{const r=n.getBoundingClientRect();return{id:id(n),top:r.top,height:r.height};}),d.y);
  if(!slot||d.slot?.target===slot.target&&d.slot?.position===slot.position)return;
  const target=targets.find(n=>id(n)===slot.target),before=targets.map(n=>[n,n.getBoundingClientRect().top]);
  d.slot=slot;
  if(slot.position==='before')target.before(d.placeholder);else target.after(d.placeholder);
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches)for(const [n,top]of before){
   const delta=top-n.getBoundingClientRect().top;
   if(delta)n.animate([{transform:'translateY('+delta+'px)'},{transform:'translateY(0)'}],{duration:160,easing:'ease-out'});
  }
 }
 function scroll(){
  if(!drag?.started)return;
  let node=drag.node.parentElement,scroller;
  while(node){if(node.scrollHeight>node.clientHeight+4&&/auto|scroll/.test(getComputedStyle(node).overflowY)){scroller=node;break;}node=node.parentElement;}
  const rect=scroller?.getBoundingClientRect()||{top:0,bottom:innerHeight};
  const delta=drag.y<rect.top+70?-Math.min(18,(rect.top+70-drag.y)/4):drag.y>rect.bottom-70?Math.min(18,(drag.y-rect.bottom+70)/4):0;
  if(delta){if(scroller)scroller.scrollTop+=delta;else window.scrollBy(0,delta);place();}
  raf=requestAnimationFrame(scroll);
 }
 listen(root,'pointerdown',e=>{
  const handle=e.target.closest(handleSelector);if(!handle||e.button!==0)return;
  const node=handle.closest(itemSelector);if(!node)return;
  e.preventDefault();stop();drag={node,label:node.querySelector('.cms-bar>span')?.textContent||handle.getAttribute('aria-label')||'블록 이동',pointer:e.pointerId,startX:e.clientX,startY:e.clientY,x:e.clientX,y:e.clientY,display:node.style.display,capture:root.host||root};drag.capture.setPointerCapture?.(e.pointerId);
 });
 listen(window,'pointermove',e=>{
  if(!drag||e.pointerId!==drag.pointer)return;
  drag.x=e.clientX;drag.y=e.clientY;
  if(!drag.started&&Math.hypot(drag.x-drag.startX,drag.y-drag.startY)<5)return;
  e.preventDefault();if(!drag.started)begin();place();
 });
 listen(window,'pointerup',e=>{if(drag&&e.pointerId===drag.pointer)stop(true);});
 listen(window,'pointercancel',()=>stop());
 listen(window,'blur',()=>stop());
 listen(window,'keydown',e=>{if(e.key==='Escape'&&drag){e.preventDefault();stop();}});
 return ()=>{stop();controller.abort();};
}
