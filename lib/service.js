import { inspect, applyEdits, changeBlock, cloneProject, preview, INTRO_PATH } from './content.js';
import { GitHub, isPage, isCorePage, toBase64 } from './github.js';
import { BrowserStore } from './storage.js';
import { HttpError, requireValue } from './errors.js';

export class LocalAdmin {
  constructor(repository, siteOrigin, { store, githubFactory } = {}) {
    this.repository=repository;this.siteOrigin=siteOrigin;this.store=store;
    this.githubFactory=githubFactory || (env => new GitHub(env));this.github=null;
  }
  async connect(token) {
    requireValue(/^github_pat_[A-Za-z0-9_]+$/.test(token),401,'이 저장소 전용 fine-grained 토큰(github_pat_로 시작)을 입력해 주세요.');
    this.disconnect();
    const github=this.githubFactory({...this.repository,GITHUB_TOKEN:token});
    const user=await github.connect();
    if(!this.store)this.store=new BrowserStore();
    await this.store.ready;
    this.github=github;return user;
  }
  disconnect() { if(this.github)this.github.env.GITHUB_TOKEN='';this.github=null; }
  async edit(page,input) {
    const row=await this.store.get('drafts',page);
    if(row){requireValue(row.revision===input.revision&&row.draftId===input.draftId&&row.baseSha===input.baseSha,409,'초안이 변경되었습니다. 다시 불러와 주세요.');return row;}
    requireValue(input.revision===0,409,'초안이 이미 발행되거나 삭제되었습니다.');
    const file=await this.github.file(page);
    requireValue(file.sha===input.baseSha,409,'GitHub 원본이 변경되었습니다. 다시 불러와 주세요.');
    return {page,source:file.source,baseSha:file.sha,revision:0};
  }
  data(row, remoteSha) {
    const {fields,...data}=inspect(row.source,row.page);
    return {...data,page:row.page,fields:fields.map(({start,end,kind,...f})=>f),revision:row.revision,
      draftId:row.draftId||null,baseSha:row.baseSha,updatedAt:row.updatedAt||null,
      conflict:remoteSha!==undefined&&remoteSha!==row.baseSha};
  }
  async request(route,{method='GET',body:input={}}={}) {
    requireValue(this.github,401,'GitHub에 먼저 연결해 주세요.');
    const github=this.github,url=new URL(route,'https://admin.invalid'),path=url.pathname;
    if(path==='/api/pages') {
      const remote=await github.pages(),saved=await this.store.all('drafts');
      const pages=new Map(remote.pages.map(p=>[p.path,{...p,core:isCorePage(p.path)}]));
      for(const row of saved)pages.set(row.page,{...pages.get(row.page),path:row.page,draft:true,newPage:!row.baseSha,revision:row.revision,core:isCorePage(row.page)});
      return{pages:[...pages.values()],head:remote.head.sha};
    }
    if(path==='/api/deployment') {
      const sha=url.searchParams.get('sha');requireValue(/^[a-f0-9]{40}$/.test(sha||''),422,'발행 번호를 확인해 주세요.');
      const result=await github.request(`/actions/runs?head_sha=${sha}&per_page=20`);
      const run=result.workflow_runs.find(r=>/pages/i.test(r.name));
      return{status:run?.status||'queued',conclusion:run?.conclusion||null,url:run?.html_url||`https://github.com/${this.repository.GITHUB_OWNER}/${this.repository.GITHUB_REPO}/actions`};
    }
    if(path==='/api/uploads'&&method==='POST') {
      requireValue(input instanceof Blob&&input.size<=8*1024*1024,413,'파일은 8MB 이하로 선택해 주세요.');
      const ext=detectFile(new Uint8Array(await input.slice(0,16).arrayBuffer()),input.type);
      const name=`${crypto.randomUUID()}.${ext}`;
      await this.store.mutate('uploads',name,()=>({name,blob:input}));
      return{name,url:`/assets/uploads/${name}`};
    }
    if(path.startsWith('/api/uploads/')) {
      const row=await this.store.get('uploads',path.slice('/api/uploads/'.length));
      requireValue(row,404,'이 브라우저에 임시 파일이 없습니다.');return row.blob;
    }
    if(path==='/api/projects'&&method==='POST') {
      requireValue(isPage(input.page)&&!isCorePage(input.page)&&isPage(input.template)&&!isCorePage(input.template),422,'프로젝트 주소를 확인해 주세요.');
      requireValue(typeof input.title==='string'&&input.title.trim()&&input.title.length<200,422,'프로젝트 제목을 입력해 주세요.');
      requireValue(!await github.optionalFile(input.page),409,'같은 주소의 프로젝트가 있습니다.');
      const template=await github.file(input.template);
      return this.data(await this.store.save({page:input.page,baseSha:null,source:cloneProject(template.source,input.page,input.title.trim())},{revision:0}));
    }
    const page=url.searchParams.get('page');requireValue(isPage(page||''),422,'페이지를 선택해 주세요.');
    if(path==='/api/page') {
      const row=await this.store.get('drafts',page),file=await github.optionalFile(page);
      requireValue(row||file,404,'페이지를 찾을 수 없습니다.');
      return this.data(row||{page,source:file.source,baseSha:file.sha,revision:0},file?.sha||null);
    }
    if(path==='/api/draft'&&method==='DELETE'){await this.store.remove(page,input);return{ok:true};}
    if(['/api/draft','/api/preview','/api/block','/api/backup'].includes(path)&&method==='POST') {
      const row=await this.edit(page,input);
      let source=applyEdits(row.source,page,input.changes||{});
      requireValue(source.length<650000,413,'페이지가 너무 큽니다.');
      if(path==='/api/backup') {
        const uploads=[];
        for(const name of uploadNames(source)) {
          const file=await this.store.get('uploads',name);
          if(file)uploads.push({name,type:file.blob.type,base64:toBase64(new Uint8Array(await file.blob.arrayBuffer()))});
        }
        return{format:'jay-portfolio-backup-v1',page,baseSha:row.baseSha,savedAt:new Date().toISOString(),source,uploads};
      }
      if(path==='/api/preview') {
        let intro='';
        if(page==='index.html'){
          const draft=await this.store.get('drafts',INTRO_PATH);
          intro=inspect(draft?.source||(await github.file(INTRO_PATH)).source,INTRO_PATH).fields[0].value;
        }
        return{html:preview(source,page,this.siteOrigin,intro)};
      }
      if(path==='/api/block') {
        const index=inspect(row.source,page).blocks.findIndex(b=>b.id===input.operation?.id);
        requireValue(index>=0,422,'블록을 다시 선택해 주세요.');
        source=changeBlock(source,page,{...input.operation,id:inspect(source,page).blocks[index].id});
      }
      return this.data(await this.store.save({...row,source},input));
    }
    if(path==='/api/publish'&&method==='POST') {
      const row=await this.store.get('drafts',page);
      requireValue(row&&row.revision===input.revision&&row.draftId===input.draftId,409,'발행할 초안을 먼저 저장해 주세요.');
      const assets=[];let size=0;
      const names=uploadNames(row.source);requireValue(names.length<=20,422,'한 페이지에서 업로드 파일은 최대 20개까지 연결할 수 있습니다.');
      for(const name of names) {
        const file=await this.store.get('uploads',name);
        if(file){
          size+=file.blob.size;requireValue(size<=24*1024*1024,413,'한 번에 발행하는 파일은 합계 24MB까지입니다.');
          assets.push({path:`assets/uploads/${name}`,bytes:new Uint8Array(await file.blob.arrayBuffer())});
        }else{
          try{await github.request(`/contents/assets/uploads/${name}?ref=${encodeURIComponent(this.repository.GITHUB_BRANCH)}`);}
          catch(e){if(e.status===404)throw new HttpError(422,'초안의 임시 파일을 찾을 수 없습니다. 다시 선택한 뒤 발행해 주세요.');throw e;}
        }
      }
      const result=await github.publish({page,source:row.source,baseSha:row.baseSha,assets});
      let cleanupPending=false;
      try{await this.store.remove(page,input);}catch{cleanupPending=true;}
      return{...result,cleanupPending,siteUrl:`${this.siteOrigin}/${page===INTRO_PATH?'index.html':page}`};
    }
    if(path==='/api/unpublish'&&method==='POST') {
      requireValue(!isCorePage(page)&&!await this.store.get('drafts',page),409,'초안을 정리한 뒤 프로젝트 페이지를 내려 주세요.');
      const result=await github.publish({page,baseSha:input.baseSha,deleting:true});
      return{...result,message:'공개 페이지 파일을 내렸습니다. 홈 카드와 다른 페이지의 링크도 정리해 주세요. Git 이력은 남아 있습니다.'};
    }
    throw new HttpError(404,'요청한 기능을 찾을 수 없습니다.');
  }
}
function uploadNames(source){return[...new Set([...source.matchAll(/\/assets\/uploads\/([a-f0-9-]{36}\.(?:png|jpg|gif|webp|pdf|mp4))/g)].map(m=>m[1]))];}
export function detectFile(bytes,type){
  const head=String.fromCharCode(...bytes.subarray(0,12));
  if(type==='image/png'&&bytes[0]===137&&head.slice(1,8)==='PNG\r\n\x1a\n')return'png';
  if(type==='image/jpeg'&&bytes[0]===255&&bytes[1]===216&&bytes[2]===255)return'jpg';
  if(type==='image/gif'&&/^GIF8[79]a/.test(head))return'gif';
  if(type==='image/webp'&&head.startsWith('RIFF')&&head.slice(8)==='WEBP')return'webp';
  if(type==='application/pdf'&&head.startsWith('%PDF-'))return'pdf';
  if(type==='video/mp4'&&head.slice(4,8)==='ftyp')return'mp4';
  throw new HttpError(422,'PNG, JPG, GIF, WebP, PDF, MP4 파일만 선택할 수 있습니다.');
}
