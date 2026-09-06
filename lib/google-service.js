import { LocalAdmin } from './service.js';
import { GitHub } from './github.js';
import { BrowserStore } from './storage.js';
import { HttpError } from './errors.js';
export class GoogleAdmin extends LocalAdmin {
  constructor(repository,siteOrigin,apiOrigin){super(repository,siteOrigin);this.apiOrigin=apiOrigin;}
  async connect(credential){
    this.disconnect();
    if(!this.apiOrigin)throw new HttpError(503,'Google 로그인 서버 설정이 아직 완료되지 않았습니다.');
    const env={...this.repository,GITHUB_TOKEN:credential};
    const proxy=async(url,options={})=>{
      const target=new URL(url),prefix=`/repos/${this.repository.GITHUB_OWNER}/${this.repository.GITHUB_REPO}`;
      if(target.origin!=='https://api.github.com'||!target.pathname.startsWith(prefix))throw new Error('Invalid API target');
      return fetch(this.apiOrigin+'/github'+target.pathname.slice(prefix.length)+target.search,{...options,headers:{...options.headers,Authorization:`Bearer ${env.GITHUB_TOKEN}`}});
    };
    const response=await fetch(this.apiOrigin+'/session',{headers:{Authorization:`Bearer ${credential}`},credentials:'omit',cache:'no-store',redirect:'error'});
    if(!response.ok)throw new HttpError(response.status,'jayyoungjunkim@gmail.com 계정으로 로그인해 주세요.');
    const user=await response.json();
    const github=new GitHub(env,proxy);
    await github.request('');
    if(!this.store)this.store=new BrowserStore();await this.store.ready;
    this.github=github;return user;
  }
}
