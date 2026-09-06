import { parse } from 'parse5';
import { requireValue } from './errors.js';
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value;
const cls=n=>(attr(n,'class')||'').split(/\s+/);
const has=(n,c)=>cls(n).includes(c);
const loc=n=>n.sourceCodeLocation;
const children=n=>(n.childNodes||[]).filter(n=>n.tagName&&loc(n));
const text=n=>['sup','sup-about'].includes(n.tagName)?'':n.nodeName==='#text'?n.value:(n.childNodes||[]).map(text).join(' ');
const find=(n,fn)=>{if(fn(n))return n;for(const c of n.childNodes||[]){const x=find(c,fn);if(x)return x;}};
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const id=n=>'s'+loc(n).startOffset;
const kinds={category:'작업 카테고리',card:'작업 카드',aboutGroup:'소개 섹션',infoGroup:'정보 섹션',aboutItem:'소개 항목',infoItem:'내용 블록',news:'소식',detail:'본문 섹션',part:'내용 요소',fixed:'페이지 기본 정보'};
export function structure(source,page,fields=[]) {
 if(page==='JavaScript/script.js')return {sections:[{id:'intro',title:'움직이는 영어 소개',kind:'fixed',parent:null,fieldIds:fields.map(f=>f.id),children:[],movable:false}],rootKinds:[]};
 const doc=parse(source,{sourceCodeLocationInfo:true}),contents=find(doc,n=>has(n,'contents'));
 const root=page==='index.html'||['about.html','info.html'].includes(page)?contents:find(doc,n=>has(n,'project-container'));
 const items=[],nodes=new Map();
 function add(n,kind,parent=null,movable=true){if(!loc(n))return;
  const preferred=find(n,x=>cls(x).some(c=>/^(main-content-title|main-content-list-title|about-title(-first)?|info-title(-first)?|about-section-title|info-section-public-title|project-body-title|project-header-title)$/.test(c)));
  const image=find(n,x=>x.tagName==='img');
  const s={id:id(n),kind,parent,title:(preferred?text(preferred):text(n)).trim().replace(/\s+/g,' ').slice(0,72)|| (image?'이미지':kinds[kind]||'텍스트'),thumbnail:image?attr(image,'src')||'':'',movable,start:loc(n).startOffset,end:loc(n).endOffset,children:[],fieldIds:[]};
  if(['detail','detailPart'].includes(kind)&&!preferred)s.title=image?'이미지':find(n,x=>['video','iframe'].includes(x.tagName))?'영상':s.title;
  if(kind==='detail'&&(has(n,'project-body-empty')||has(n,'project-body-between')))s.title='여백';
  if(has(n,'project-stakeholder-container'))s.title='프로젝트 참여자';
  if(has(n,'project-pagination-container'))s.title='이전 · 다음 프로젝트';
  items.push(s);nodes.set(s.id,n);if(parent)items.find(x=>x.id===parent)?.children.push(s.id);return s;
 }
 if(root){for(const n of children(root)){
  if(has(n,'footer'))continue;
  if(page==='index.html'){
   if(has(n,'main-content')){const s=add(n,'category');const list=find(n,x=>has(x,'main-content-list'));for(const c of children(list||{}))if(has(c,'main-content-list-img'))add(c,'card',s.id);}
   else if(has(n,'main-header')||has(n,'main-profile')){const s=add(n,'fixed',null,false);if(s)s.title=has(n,'main-header')?'첫 화면 · 각주':'소개 문구';}
  }else if(['about.html','info.html'].includes(page)){
   const family=page==='about.html'?'about':'info';
   if(cls(n).some(c=>c===family+'-container'||c===family+'-container-last')){
    const s=add(n,family+'Group');
    for(const c of children(n))if(has(c,family+'-section')||has(c,'info-section-activity')){
     const child=add(c,has(c,'info-section-activity')?'news':family==='about'?'aboutItem':'infoItem',s.id);
     // Editable blocks inside an item preserve its original layout and inline markup.
     for(const part of children(c))if(!has(part,'divider')&&!has(part,'divider-dashed'))add(part,'part',child.id);
    }
   }
  }else if(!['script','style','noscript'].includes(n.tagName))add(n,'detail',null,!has(n,'project-header')&&!has(n,'project-pagination-container'));
 }}
 if(root&&!['index.html','about.html','info.html'].includes(page)){
  items.length=0;nodes.clear();let pending=[];
  const space=n=>has(n,'project-body-empty')||has(n,'project-body-between');
  const body=n=>has(n,'project-body-container')||has(n,'project__bodytext');
  const fixed=n=>has(n,'project-header')||has(n,'project-pagination-container')||has(n,'project-stakeholder-container');
  function group(list,wrapper){if(!list.length&&!wrapper)return;
   const meaningful=list.filter(n=>!space(n));if(!meaningful.length&&!wrapper)return;
   const first=wrapper||list[0],last=wrapper||list.at(-1),heading=list.map(n=>find(n,x=>has(x,'project-body-title'))).find(Boolean);
   const images=list.reduce((v,n)=>v+(find(n,x=>x.tagName==='img')?1:0),0);
   const s={id:'g'+loc(first).startOffset,kind:'detail',parent:null,title:heading?text(heading).trim():images?'이미지 섹션':'콘텐츠 섹션',thumbnail:attr(find(first,x=>x.tagName==='img')||{},'src')||'',movable:true,start:loc(first).startOffset,end:loc(last).endOffset,children:[],fieldIds:[],virtual:!wrapper,insertAt:wrapper?loc(wrapper).endTag.startOffset:loc(last).endOffset};
   items.push(s);if(wrapper)nodes.set(s.id,wrapper);
   for(const n of meaningful)add(n,'detailPart',s.id);
  }
  const flush=()=>{group(pending);pending=[];};
  for(const n of children(root)){
   if(['script','style','noscript'].includes(n.tagName)||has(n,'footer'))continue;
   if(attr(n,'data-cms-section')){flush();group(children(n),n);continue;}
   if(fixed(n)){flush();add(n,'fixed',null,false);continue;}
   if(!space(n)&&pending.some(body))flush();pending.push(n);
  }flush();
 }
 // Fields belong to the deepest section. Shared navigation / SEO stay out of the content flow.
 for(const f of fields){const owners=items.filter(s=>f.start>=s.start&&f.end<=s.end);const owner=owners.at(-1);if(owner)owner.fieldIds.push(f.id);}
 const owned=new Set(items.flatMap(s=>s.fieldIds));
 for(const [key,title,test]of[['settings','검색 · 공유 설정',f=>f.type==='meta'],['shared','메뉴 · 푸터',()=>true]]){const list=fields.filter(f=>!owned.has(f.id)&&test(f));if(list.length){items.push({id:key,title,kind:'settings',parent:null,fieldIds:list.map(f=>f.id),children:[],movable:false});list.forEach(f=>owned.add(f.id));}}
 return {sections:items,rootKinds:page==='index.html'?['category']:page==='about.html'?['aboutGroup']:page==='info.html'?['infoGroup']:root?['story','gallery','text']:[],_nodes:nodes,_root:root,_doc:doc};
}
export const templateNames={story:'이미지 + 텍스트',gallery:'이미지 모음',category:'작업 카테고리',card:'작업 카드',aboutGroup:'소개 섹션',infoGroup:'정보 섹션',aboutItem:'제목 + 한국어·영어 본문',infoItem:'한국어·영어 본문',links:'링크 목록',news:'날짜 + 소식',text:'제목 + 본문',image:'이미지',video:'영상',twoImages:'이미지 2열',spacer:'여백',paragraph:'본문 문단',list:'목록',link:'링크',footnote:'각주'};
export function allowedTemplates(s,page){if(!s)return structure('',page).rootKinds;
 if(s.kind==='detail')return ['image','twoImages','video','text'];
 if(s.kind==='category')return ['card'];if(s.kind==='aboutGroup')return ['aboutItem'];if(s.kind==='infoGroup')return ['infoItem','links','news'];
 if(['aboutItem','infoItem','news'].includes(s.kind))return ['paragraph','list','link','footnote'];return [];
}
function template(type,page,title=''){
 const t=esc(title.trim()||templateNames[type]);const family=page==='about.html'?'about':'info';
 const body=p=>`<div class="${p}-kr">내용을 입력하세요.</div><div class="${p}-en">Add your text here.</div>`;
 switch(type){
 case'category':return `<div class="main-content"><div class="main-content-title">${t}</div><div class="main-content-list"></div></div>`;
 case'card':return `<div class="main-content-list-img"><a href="index.html" class="main-content-list-link"><img class="content__img" src="" alt="${t}"><div class="main-content-list-title">${t}</div><div class="main-content-list-category">작업 분류</div></a></div>`;
 case'aboutGroup':case'infoGroup':return `<div class="${family}-container"><div class="divider"></div><div class="${family}-title">${t}</div></div>`;
 case'aboutItem':return `<div class="about-section"><div class="about-section-title">${t}</div>${body('about-section-body')}</div>`;
 case'infoItem':return `<div class="info-section">${body('info-section-body')}</div>`;
 case'links':return `<div class="info-section"><div class="info-section-link"><a href="https://example.com/" target="_blank" rel="noreferrer">${t}</a><span class="outbound-link">↗</span></div></div>`;
 case'news':return `<div class="info-section-activity"><div class="info-section-date">${new Date().toISOString().slice(0,10)}</div><div class="info-section-public-title">${t}</div>${body('info-section-public-body')}</div>`;
 case'story':return `<section data-cms-section="true" style="padding-bottom:80px">${template('image',page,title)}${template('text',page,title).replace('class="project-body-container"','class="project-body-container" style="padding-bottom:0"')}</section>`;
 case'gallery':return `<section data-cms-section="true" style="padding-bottom:80px">${template('twoImages',page,title)}</section>`;
 case'text':return `<div class="project-body-container"><div class="project-body-label">섹션</div><div class="project-body-title">${t}</div>${body('project-body')}</div>`;
 case'image':return '<div class="project__img"><img src="" alt=""></div>';
 case'twoImages':return '<div class="project-body-grid-2"><div class="project__img"><img src="" alt=""></div><div class="project__img"><img src="" alt=""></div></div>';
 case'video':return '<div class="project-img video"><video controls playsinline src="" poster=""></video></div>';
 case'spacer':return '<div class="project-body-empty"></div>';
 case'paragraph':return `<div class="${family}-section-body-kr">${t}</div>`;
 case'list':return `<div class="${family}-section-body-kr"><ul><li>${t}</li><li>목록 내용</li></ul></div>`;
 case'link':return `<div class="${family==='info'?'info-section-link':'about-section-body-footnote'}"><a href="https://example.com/" target="_blank" rel="noreferrer">${t}</a></div>`;
 case'footnote':return `<div class="${family}-section-body-${family==='about'?'footnote':'kr'}">${t}</div>`;
 default:throw new Error('추가할 섹션 유형을 선택해 주세요.');
 }
}
function edits(source,list){for(const e of list.sort((a,b)=>b.start-a.start))source=source.slice(0,e.start)+e.text+source.slice(e.end);return source;}
export function changeStructure(source,page,op){
 const model=structure(source,page),all=model.sections,byId=new Map(all.map(s=>[s.id,s]));
 const s=byId.get(op.id),target=byId.get(op.target),parent=byId.get(op.parent);
 let result=source;
 const containing=s?.parent?byId.get(s.parent):null;
 if(containing?.virtual){
  const wrapped=source.slice(0,containing.start)+'<section data-cms-section="true">'+source.slice(containing.start,containing.end)+'</section>'+source.slice(containing.end);
  const next=structure(wrapped,page).sections,operation={...op};
  for(const key of ['id','parent','target'])if(operation[key])operation[key]=next[all.findIndex(x=>x.id===operation[key])]?.id;
  return changeStructure(wrapped,page,operation);
 }
 if(op.action==='add'){
  requireValue(typeof op.title==='string'&&op.title.length<=180,422,'섹션 제목을 확인해 주세요.');
  requireValue(op.parent?parent:!!model._root,422,'추가할 위치를 확인해 주세요.');
  requireValue((parent?allowedTemplates(parent,page):[...model.rootKinds,'image','video','twoImages','spacer']).includes(op.template),422,'이 위치에 추가할 수 없는 유형입니다.');
  if(parent?.virtual){
   const snippet=source.slice(parent.start,parent.end);
   // Preserve existing sibling markup; the wrapper only records the editorial boundary.
   const addition=template(op.template,page,op.title);
   const firstText=all.find(x=>x.parent===parent.id&&has(model._nodes.get(x.id),'project-body-container'));
   const offset=op.template==='text'?snippet.length:(firstText?firstText.start-parent.start:snippet.length);
   const wrapped='<section data-cms-section="true">'+snippet.slice(0,offset)+addition+snippet.slice(offset)+'</section>';
   result=source.slice(0,parent.start)+wrapped+source.slice(parent.end);
   requireValue(result.length<650000,413,'페이지가 너무 큽니다.');return result;
  }
  let container=parent?model._nodes.get(parent.id):model._root;
  if(parent?.kind==='category')container=find(container,n=>has(n,'main-content-list'));
  requireValue(loc(container)?.endTag,422,'섹션의 추가 위치를 찾지 못했습니다.');
  const footer=children(container).find(n=>has(n,'footer')||has(n,'project-pagination-container')||has(n,'project-stakeholder-container'));
  const firstText=parent?.kind==='detail'&&op.template!=='text'?children(container).find(n=>has(n,'project-body-container')):null;
  requireValue(!op.target||(target&&target.parent===(parent?.id||null)),422,'추가할 블록 위치를 다시 선택해 주세요.');
  const at=target?(op.position==='before'?target.start:target.end):firstText?loc(firstText).startOffset:footer?loc(footer).startOffset:loc(container).endTag.startOffset;
  let addition=template(op.template,page,op.title);
  if(!parent&&page!=='index.html'&&!['about.html','info.html'].includes(page)&&!['story','gallery'].includes(op.template))addition='<section data-cms-section="true">'+addition+'</section>';
  result=source.slice(0,at)+'\n'+addition+'\n'+source.slice(at);
 }else{
  requireValue(s&&s.movable,422,'이 섹션은 구조를 변경할 수 없습니다.');
  const node=model._nodes.get(s.id),raw=source.slice(s.start,s.end),snippet=s.virtual&&['move','duplicate'].includes(op.action)?'<section data-cms-section="true">'+raw+'</section>':raw;
  if(op.action==='remove')result=edits(source,[{start:s.start,end:s.end,text:''}]);
  else if(op.action==='duplicate')result=source.slice(0,s.end)+'\n'+snippet+source.slice(s.end);
  else if(op.action==='move'){
   requireValue(target&&target.id!==s.id&&target.movable&&s.parent===target.parent&&(s.kind===target.kind||s.kind==='detail'||['infoItem','news'].includes(s.kind)&&['infoItem','news'].includes(target.kind)),422,'같은 목록 안의 섹션끼리 이동해 주세요.');
   const at=op.position==='after'?target.end:target.start;
   result=edits(source,[{start:s.start,end:s.end,text:''},{start:at,end:at,text:snippet+'\n'}]);
  }else if(op.action==='transfer'){
   requireValue(s.kind==='card'&&parent?.kind==='category'&&parent.id!==s.parent,422,'작업 카드는 다른 카테고리로 이동할 수 있습니다.');
   const container=find(model._nodes.get(parent.id),n=>has(n,'main-content-list'));requireValue(loc(container)?.endTag,422,'작업 목록을 찾지 못했습니다.');
   requireValue(!op.target||(target?.kind==='card'&&target.parent===parent.id),422,'이동할 작업 위치를 확인해 주세요.');
   const at=target?(op.position==='after'?target.end:target.start):loc(container).endTag.startOffset;result=edits(source,[{start:s.start,end:s.end,text:''},{start:at,end:at,text:'\n'+snippet+'\n'}]);
  }else if(op.action==='linkCard'){
   requireValue(s.kind==='card'&&typeof op.href==='string'&&/^[a-z0-9][a-z0-9-]*\.html$/.test(op.href),422,'연결할 상세 페이지를 선택해 주세요.');
   requireValue(!find(node,n=>n.tagName==='a'),422,'기존 연결 주소에서 수정해 주세요.');
   result=edits(source,[{start:loc(node).startTag.endOffset,end:loc(node).startTag.endOffset,text:`<a class="main-content-list-link" href="${esc(op.href)}">`},{start:loc(node).endTag.startOffset,end:loc(node).endTag.startOffset,text:'</a>'}]);
  }else throw new Error('지원하지 않는 섹션 작업입니다.');
 }
 requireValue(result.length<650000,413,'페이지가 너무 큽니다.');
 return normalize(result,page);
}
// Separator positions belong to the ordered list, not to an individual news item.
function normalize(source,page){
 if(!['about.html','info.html'].includes(page))return source;
 const m=structure(source,page),patches=[],family=page==='about.html'?'about':'info',groups=m.sections.filter(s=>s.kind===family+'Group');
 groups.forEach((s,i)=>{const n=m._nodes.get(s.id),a=loc(n).attrs.class;patches.push({start:a.startOffset,end:a.endOffset,text:`class="${family}-container${i===groups.length-1?'-last':''}"`});
  const divider=children(n).find(x=>has(x,'divider'));
  if(i===0&&divider)patches.push({start:loc(divider).startOffset,end:loc(divider).endOffset,text:''});
  if(i>0&&!divider)patches.push({start:loc(n).startTag.endOffset,end:loc(n).startTag.endOffset,text:'<div class="divider"></div>'});
  const heading=children(n).find(x=>cls(x).some(c=>c===family+'-title'||c===family+'-title-first'));if(heading){const l=loc(heading).attrs.class;patches.push({start:l.startOffset,end:l.endOffset,text:`class="${family}-title${i===0?'-first':''}"`});}
  const news=children(n).filter(x=>has(x,'info-section-activity'));{for(const d of children(n).filter(x=>has(x,'divider-dashed')))patches.push({start:loc(d).startOffset,end:loc(d).endOffset,text:''});news.slice(1).forEach(x=>patches.push({start:loc(x).startOffset,end:loc(x).startOffset,text:'<div class="divider-dashed"></div>\n'}));}
 });return edits(source,patches);
}
