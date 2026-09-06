// A clean editor follows remote updates; drafts and typing always win.
export function syncDecision(current,changes,pages){
 if(!current)return 'none';
 const remote=pages.find(p=>p.path===current.page);
 if(remote?.sha===current.baseSha||!remote?.sha&&!current.baseSha)return 'none';
 if(current.revision||Object.keys(changes).length)return 'conflict';
 return remote?'refresh':'removed';
}
export function startLiveSync({check,active,interval=15000,schedule=setTimeout,cancel=clearTimeout}){
 let timer,stopped=false,running=false;
 async function tick(){
  if(stopped||running)return;
  cancel(timer);running=true;
  try{if(active())await check();}finally{running=false;if(!stopped)timer=schedule(tick,interval);}
 }
 timer=schedule(tick,interval);
 return {tick,stop(){stopped=true;cancel(timer);}};
}
