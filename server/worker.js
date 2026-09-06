import { createRemoteJWKSet, jwtVerify } from 'jose';
const keys=createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'));
const ORIGIN='https://jayyoungjun-kim.github.io';
const REPO='jayyoungjun-kim/jayyoungjun-kim.github.io';
const EMAIL='jayyoungjunkim@gmail.com';
export async function authenticate(credential,env,keySet=keys) {
  const {payload}=await jwtVerify(credential,keySet,{audience:env.GOOGLE_CLIENT_ID,issuer:['https://accounts.google.com','accounts.google.com'],algorithms:['RS256'],requiredClaims:['sub','exp','iat','email','email_verified']});
  if(payload.email!==EMAIL||payload.email_verified!==true)throw new Error('Forbidden account');
  return {login:EMAIL};
}
export function allowedRoute(path,method) {
  if(method==='GET')return path===''||/^\/git\/(ref\/heads\/master|commits\/[a-f0-9]{40}|trees\/[a-f0-9]{40})$/.test(path)||/^\/contents\/(?:[a-z0-9][a-z0-9-]{0,79}\.html|JavaScript\/script\.js|assets\/uploads\/[a-f0-9-]+\.(?:png|jpg|gif|webp|pdf|mp4))$/.test(path)||path==='/actions/runs';
  if(method==='POST')return ['/git/blobs','/git/trees','/git/commits'].includes(path);
  return method==='PATCH'&&path==='/git/refs/heads/master';
}
export function createHandler({verify=authenticate,fetcher=fetch}={}) {
 return async(request,env)=>{
  const headers={'Access-Control-Allow-Origin':ORIGIN,'Vary':'Origin','Cache-Control':'no-store','Content-Type':'application/json','X-Content-Type-Options':'nosniff'};
  const reply=(status,error)=>new Response(JSON.stringify({error}),{status,headers});
  if(request.headers.get('Origin')!==ORIGIN)return reply(403,'허용되지 않은 관리자 주소입니다.');
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:{...headers,'Access-Control-Allow-Methods':'GET, POST, PATCH, OPTIONS','Access-Control-Allow-Headers':'Authorization, Content-Type, X-GitHub-Api-Version','Access-Control-Max-Age':'600'}});
  if(!env.GOOGLE_CLIENT_ID||!env.GITHUB_TOKEN)return reply(503,'관리자 서버 연결 설정이 필요합니다.');
  const credential=request.headers.get('Authorization')?.match(/^Bearer (.+)$/)?.[1];
  let user;try{user=await verify(credential,env);}catch{return reply(401,'허용된 Google 계정으로 다시 로그인해 주세요.');}
  const url=new URL(request.url);
  if(url.pathname==='/session'&&request.method==='GET')return new Response(JSON.stringify(user),{headers});
  if(!url.pathname.startsWith('/github'))return reply(404,'지원하지 않는 요청입니다.');
  const path=url.pathname.slice(7);
  if(!allowedRoute(path,request.method))return reply(403,'지원하지 않는 저장소 작업입니다.');
  let body;
  if(['POST','PATCH'].includes(request.method)){
   // Limit before buffering the entire request, including requests without Content-Length.
   const reader=request.body?.getReader();if(!reader)return reply(400,'요청 내용이 없습니다.');
   const chunks=[];let size=0;
   for(;;){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>12*1024*1024){await reader.cancel();return reply(413,'요청이 너무 큽니다.');}chunks.push(value);}
   const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
   try{body=JSON.parse(new TextDecoder().decode(bytes));}catch{return reply(400,'잘못된 요청입니다.');}
   if(path==='/git/refs/heads/master'&&(body.force!==false||!/^[a-f0-9]{40}$/.test(body.sha||'')))return reply(403,'강제 덮어쓰기는 허용되지 않습니다.');
   if(path==='/git/trees'&&(!Array.isArray(body.tree)||body.tree.some(item=>!(/^[a-z0-9][a-z0-9-]{0,79}\.html$/.test(item.path)||item.path==='JavaScript/script.js'||/^assets\/uploads\/[a-f0-9-]+\.(png|jpg|gif|webp|pdf|mp4)$/.test(item.path))||item.mode!=='100644'||item.type!=='blob'||(item.sha===null&&['index.html','about.html','info.html','JavaScript/script.js'].includes(item.path)))))return reply(403,'허용되지 않은 콘텐츠 경로입니다.');
  }
  try{
   const upstream=await fetcher(`https://api.github.com/repos/${REPO}${path}${url.search}`,{method:request.method,headers:{Authorization:`Bearer ${env.GITHUB_TOKEN}`,Accept:'application/vnd.github+json','Content-Type':'application/json','X-GitHub-Api-Version':'2022-11-28','User-Agent':'portfolio-admin'},redirect:'manual',...(body?{body:JSON.stringify(body)}:{})});
   if(!upstream.ok)return reply(upstream.status===401?503:upstream.status,'GitHub 연결 권한 또는 원본 변경 여부를 확인해 주세요.');
   return new Response(upstream.body,{status:upstream.status,headers});
  }catch{return reply(502,'GitHub 연결에 실패했습니다. 발행 이력을 확인한 뒤 다시 시도해 주세요.');}
 };
}
export default {fetch:createHandler()};
