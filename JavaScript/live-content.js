(()=>{
 const API='https://jay-portfolio-admin-auth.jay-portfolio-content-admin.workers.dev';
 const path=location.pathname==='/'?'index.html':location.pathname.slice(1);
 if(!/^[a-z0-9][a-z0-9-]{0,79}\.html$/.test(path))return;
 const file=(p,r)=>API+'/live/file?path='+encodeURIComponent(p)+'&revision='+r;
 let socket,timer,wanted='',applied=document.querySelector('meta[name="portfolio-revision"]')?.content||'',lastHTML=document.querySelector('.contents')?.innerHTML||'',working=false,stopped=false;
 async function show(revision){
  wanted=revision;if(working||revision===applied)return;working=true;
  try{
   const response=await fetch(file(path,revision));
   if(response.status===404){const container=document.querySelector('.contents');if(container)container.textContent='페이지를 찾을 수 없습니다.';applied=revision;return;}
   if(!response.ok)throw Error();
   const doc=new DOMParser().parseFromString(await response.text(),'text/html'),next=doc.querySelector('.contents');
   if(!next)throw Error();
   if(wanted!==revision)return;
   if(next.innerHTML!==lastHTML){
    lastHTML=next.innerHTML;
    for(const n of next.querySelectorAll('script,noscript'))n.remove();
    for(const n of next.querySelectorAll('*'))for(const attr of [...n.attributes]){
     if(attr.name.startsWith('on'))n.removeAttribute(attr.name);
     else if(['src','poster','href'].includes(attr.name)){
      const target=new URL(attr.value,location.origin+'/');
      if(target.origin===location.origin&&/^\/assets\/uploads\//.test(target.pathname))n.setAttribute(attr.name,file(target.pathname.slice(1),revision));
      else if(['javascript:','data:'].includes(target.protocol))n.removeAttribute(attr.name);
     }
    }
    const current=document.querySelector('.contents');
    if(current)current.replaceWith(next);else{const shell=doc.querySelector('.container');if(shell)document.body.append(shell);}
   }
   document.title=doc.title;
   for(const meta of doc.querySelectorAll('meta[property^="og:"],meta[name="description"]')){
    const key=meta.hasAttribute('property')?'property':'name',existing=document.head.querySelector('meta['+key+'="'+meta.getAttribute(key)+'"]');
    if(existing)existing.content=meta.content;else document.head.append(meta);
   }
   const css=document.querySelector('link[href*="css/style.css"],link[data-live-css]');
   if(css){css.dataset.liveCss='';css.href=file('css/style.css',revision);}
   if(path==='index.html'){
    const r=await fetch(file('JavaScript/script.js',revision));
    if(r.ok&&wanted===revision){const text=await r.text(),match=/const text = ('[^']*'|"(?:\\.|[^"\\])*");/.exec(text),target=document.querySelector('.main-header-title');
     if(match&&target){const value=match[1][0]==='"'?JSON.parse(match[1]):match[1].slice(1,-1);target.replaceChildren();for(const char of value){if(/[123]/.test(char)){const sup=document.createElement('sup-main-header');sup.textContent=char;target.append(sup);}else target.append(document.createTextNode(char));}}
    }
   }
   applied=revision;document.documentElement.dataset.liveRevision=revision;
  }catch{clearTimeout(timer);timer=setTimeout(()=>show(wanted),2000);}
  finally{working=false;if(wanted!==revision)show(wanted);}
 }
 function connect(){
  if(stopped||socket?.readyState===0||socket?.readyState===1)return;
  socket=new WebSocket(API.replace('https:','wss:')+'/live/socket');
  socket.onmessage=e=>{try{const {revision}=JSON.parse(e.data);if(/^[a-f0-9]{40}$/.test(revision))show(revision);}catch{}};
  socket.onclose=()=>{if(!stopped){clearTimeout(timer);timer=setTimeout(connect,2000);}};
  socket.onerror=()=>socket.close();
 }
 window.addEventListener('pagehide',()=>{stopped=true;clearTimeout(timer);socket?.close();});
 window.addEventListener('pageshow',()=>{stopped=false;connect();});
 document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')connect();});
 connect();
})();
