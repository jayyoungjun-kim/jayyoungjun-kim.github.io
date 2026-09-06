import { LocalAdmin } from './service.js';
import { GitHub } from './github.js';
import { BrowserStore } from './storage.js';
import { HttpError } from './errors.js';
export class GoogleAdmin extends LocalAdmin {
  constructor(repository,siteOrigin,apiOrigin){super(repository,siteOrigin);this.apiOrigin=apiOrigin;this.sessionKey='portfolio-admin-session:'+apiOrigin;}
  savedSession(){try{return globalThis.localStorage?.getItem(this.sessionKey)||null;}catch{return null;}}
  forgetSession(){try{globalThis.localStorage?.removeItem(this.sessionKey);}catch{}}
  async logout(){
    const credential=this.savedSession();
    if(credential){const response=await fetch(this.apiOrigin+'/logout',{method:'POST',headers:{Authorization:`Bearer ${credential}`},credentials:'omit',cache:'no-store',redirect:'error'});if(!response.ok&&response.status!==401)throw new HttpError(response.status,'로그아웃에 실패했습니다. 다시 시도해 주세요.');}
    this.forgetSession();this.disconnect();
  }
  async connect(credential=this.savedSession()){
    this.disconnect();
    if(!this.apiOrigin)throw new HttpError(503,'Google 로그인 서버 설정이 아직 완료되지 않았습니다.');
    const restoring=/^ps_[a-f0-9]{64}$/.test(credential||'');
    const env={...this.repository,GITHUB_TOKEN:credential};
    const proxy=async(url,options={})=>{
      const target=new URL(url),prefix=`/repos/${this.repository.GITHUB_OWNER}/${this.repository.GITHUB_REPO}`;
      if(target.origin!=='https://api.github.com'||!target.pathname.startsWith(prefix))throw new Error('Invalid API target');
      return fetch(this.apiOrigin+'/github'+target.pathname.slice(prefix.length)+target.search,{...options,headers:{...options.headers,Authorization:`Bearer ${env.GITHUB_TOKEN}`}});
    };
    const response=await fetch(this.apiOrigin+'/session',{method:restoring?'GET':'POST',headers:{Authorization:`Bearer ${credential}`},credentials:'omit',cache:'no-store',redirect:'error'});
    if(!response.ok){if(restoring&&response.status===401)this.forgetSession();throw new HttpError(response.status,'jayyoungjunkim@gmail.com 계정으로 로그인해 주세요.');}
    const user=await response.json();
    if(!restoring){
      if(!/^ps_[a-f0-9]{64}$/.test(user.sessionToken||''))throw new HttpError(503,'로그인 유지 세션을 생성하지 못했습니다.');
      env.GITHUB_TOKEN=user.sessionToken;
      try{globalThis.localStorage?.setItem(this.sessionKey,user.sessionToken);}catch{throw new HttpError(503,'브라우저 저장소를 허용해야 로그인을 유지할 수 있습니다.');}
    }
    const github=new GitHub(env,proxy);
    await github.request('');
    if(!this.store)this.store=new BrowserStore();await this.store.ready;
    this.github=github;return user;
  }
}
