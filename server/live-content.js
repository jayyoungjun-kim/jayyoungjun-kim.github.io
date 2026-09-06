const REPO='jayyoungjun-kim/jayyoungjun-kim.github.io';
export const liveStub=env=>env.LIVE_CONTENT.get(env.LIVE_CONTENT.idFromName('portfolio'));
export const publicPath=path=>/^[a-z0-9][a-z0-9-]{0,79}\.html$/.test(path)||['css/style.css','JavaScript/script.js'].includes(path)||/^assets\/uploads\/[a-f0-9-]{36}\.(png|jpg|webp|gif|mp4|pdf)$/.test(path);
export class LiveContent {
 constructor(ctx,env){this.ctx=ctx;this.env=env;this.queue=Promise.resolve();}
 refresh(){
  const run=async()=>{
   const r=await fetch('https://api.github.com/repos/'+REPO+'/git/ref/heads/master',{headers:{Authorization:'Bearer '+this.env.GITHUB_TOKEN,'User-Agent':'portfolio-live','Cache-Control':'no-cache'}});
   if(!r.ok)throw Error('Cannot read published revision');
   const sha=(await r.json()).object.sha,old=await this.ctx.storage.get('revision');
   if(old!==sha){await this.ctx.storage.put('revision',sha);await this.ctx.storage.put('published',[sha,...(await this.ctx.storage.get('published')||[])].slice(0,32));for(const socket of this.ctx.getWebSockets())try{socket.send(JSON.stringify({revision:sha}));}catch{}}
   return sha;
  };
  const result=this.queue.then(run,run);this.queue=result.catch(()=>{});return result;
 }
 async fetch(request){
  const path=new URL(request.url).pathname;
  if(path==='/refresh')return Response.json({revision:await this.refresh(),published:await this.ctx.storage.get('published')||[]});
  let revision=await this.ctx.storage.get('revision');
  if(!revision)revision=await this.refresh();
  if(path==='/socket'&&request.headers.get('Upgrade')?.toLowerCase()==='websocket'){
   const [client,server]=Object.values(new WebSocketPair());this.ctx.acceptWebSocket(server);
   server.send(JSON.stringify({revision}));
   await this.ctx.storage.setAlarm(Date.now()+30000);
   return new Response(null,{status:101,webSocket:client});
  }
  return Response.json({revision});
 }
 async alarm(){
  try{await this.refresh();}finally{if(this.ctx.getWebSockets().length)await this.ctx.storage.setAlarm(Date.now()+30000);}
 }
 webSocketClose(socket,code){socket.close(code);}
 webSocketError(socket){socket.close(1011,'Reconnect');}
}
export async function liveFile(request,env,fetcher=fetch,cache=globalThis.caches?.default){
 const url=new URL(request.url),path=url.searchParams.get('path')||'',revision=url.searchParams.get('revision')||'';
 if(!publicPath(path)||!/^[a-f0-9]{40}$/.test(revision))return new Response('Not found',{status:404});
 const key=new Request(url.origin+'/live/file?path='+encodeURIComponent(path)+'&revision='+revision);
 let response=cache&&await cache.match(key);
 if(!response){
  const upstream=await fetcher('https://api.github.com/repos/'+REPO+'/contents/'+path+'?ref='+revision,{headers:{Authorization:'Bearer '+env.GITHUB_TOKEN,Accept:'application/vnd.github.raw+json','User-Agent':'portfolio-live'}});
  if(!upstream.ok)return new Response('Content unavailable',{status:upstream.status===404?404:503,headers:{'Access-Control-Allow-Origin':'*','Cache-Control':'no-store'}});
  const ext=path.split('.').pop(),types={html:'text/html; charset=utf-8',css:'text/css; charset=utf-8',js:'text/javascript; charset=utf-8',png:'image/png',jpg:'image/jpeg',webp:'image/webp',gif:'image/gif',mp4:'video/mp4',pdf:'application/pdf'};
  const bytes=await upstream.arrayBuffer();
  response=new Response(bytes,{headers:{'Content-Length':String(bytes.byteLength),'Content-Type':types[ext],'Cache-Control':'public, max-age=31536000, immutable','Access-Control-Allow-Origin':'*','X-Content-Type-Options':'nosniff'}});
  if(cache){await cache.put(key,response.clone());response=await cache.match(key)||response;}
 }
 // Cache API serves byte ranges from the complete cached representation.
 if(request.headers.has('Range')&&cache){const ranged=await cache.match(new Request(key,{headers:{Range:request.headers.get('Range')}}));if(ranged)return ranged;}
 return response;
}
