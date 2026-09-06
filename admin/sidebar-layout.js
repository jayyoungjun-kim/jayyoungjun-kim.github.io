// Account for notices above the workspace and the sidebar's current sticky offset.
export function fitSidebar(){
 const sidebar=document.querySelector('.sidebar');if(!sidebar)return;
 let frame;
 const update=()=>{
  cancelAnimationFrame(frame);
  frame=requestAnimationFrame(()=>{
   if(!sidebar.getClientRects().length)return;
   const available=Math.max(120,window.innerHeight-Math.max(0,sidebar.getBoundingClientRect().top)-12);
   sidebar.style.setProperty('--sidebar-available-height',available+'px');
  });
 };
 const observer=new ResizeObserver(update);
 for(const node of document.querySelectorAll('.topbar,#notice'))observer.observe(node);
 window.addEventListener('resize',update,{passive:true});
 window.addEventListener('scroll',update,{passive:true});
 update();
 return update;
}
