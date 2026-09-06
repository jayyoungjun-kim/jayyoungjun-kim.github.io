import {renderVisualCanvas,disposeVisualCanvas} from './visual-canvas.js';
import {cleanRich} from '../lib/rich-text.js';
import { allowedTemplates, templateNames } from '../lib/sections.js';
let pendingSelection;
export function revealSection(id){pendingSelection=id;}
let page='',selectedIndex=0,previousData,selection,dragging,view='content';
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;};
const button=(text,fn,cls='')=>{const b=el('button',cls,text);b.type='button';b.onclick=fn;return b;};
const names={participants:'참여자 목록',participant:'참여자',navigation:'프로젝트 연결',projectLink:'프로젝트 연결',category:'카테고리',card:'작업',aboutGroup:'섹션',infoGroup:'섹션',aboutItem:'소개',infoItem:'내용',news:'소식',detail:'섹션',part:'내용',fixed:'기본 정보',settings:'설정'};
export function fieldLabel(f){
 if(f.attribute==='alt')return '이미지 설명';if(f.attribute==='poster')return '영상 표지 이미지';
 if(f.url)return f.type==='meta'?(f.label.includes('image')?'공유 이미지':'공유 주소'):f.tag==='a'?'연결 주소':f.tag==='iframe'?'YouTube · Vimeo 임베드 주소':['source','video'].includes(f.tag)?'영상 주소':'이미지 주소';
 const l=f.label;
 if(/stakeholder title/.test(l))return '역할';if(/stakeholder body/.test(l))return '참여자 이름';if(/pagination.*project/.test(l))return '프로젝트 표시 이름';if(/pagination/.test(l))return '이동 링크 문구';
 if(/og:title/.test(l))return '공유 제목';if(/description/.test(l))return '검색 · 공유 설명';if(/og:type/.test(l))return '콘텐츠 유형';
 if(/list title/.test(l))return '작업 제목';if(/list category/.test(l))return '작업 분류';if(/main content title/.test(l))return '카테고리 이름';
 if(/footnote/.test(l))return '캡션';if(/date/.test(l))return '날짜';if(/footnote/.test(l))return '각주';if(/body.*kr|profile kr/.test(l))return '본문 · 한국어';if(/body.*en|profile en/.test(l))return '본문 · English';
 if(/title/.test(l))return '제목';if(/spec/.test(l))return '프로젝트 정보';if(/label/.test(l))return '소제목';if(/footer/.test(l))return '하단 문구';if(/menu/.test(l))return '메뉴 이름';if(/download/.test(l))return '다운로드 이름';if(/link/.test(l))return '링크 이름';if(/badge/.test(l))return '상태 표시';if(/header j/.test(l))return '첫 화면 이니셜';
 return f.type==='meta'?'페이지 제목':'내용';
}
export function renderSectionEditor(host,ctx,mode='content'){
 if(mode==='content'&&ctx.current.source&&ctx.current.page!=='JavaScript/script.js')return renderVisualCanvas(host,ctx,renderFormEditor,revealSection);
 disposeVisualCanvas();return renderFormEditor(host,ctx,mode);
}
export function renderFormEditor(host,ctx,mode='content'){
 const {current,changes,update,act,upload,api,pages}=ctx;view=mode;
 if(page!==current.page){page=current.page;selectedIndex=0;selection=null;}
 const all=current.sections||[];
 if(previousData!==current&&selection){const matches=all.filter(s=>s.kind===selection.kind&&s.title===selection.title&&s.thumbnail===selection.thumbnail);const match=matches[Math.min(selection.occurrence,matches.length-1)];if(match)selectedIndex=all.indexOf(match);}
 if(pendingSelection){const index=all.findIndex(s=>s.id===pendingSelection);if(index>=0)selectedIndex=index;pendingSelection=null;}
 previousData=current;
 const visible=all.filter(s=>mode==='settings'?s.kind==='settings':s.kind!=='settings');
 let selected=all[selectedIndex];if(!visible.includes(selected))selected=visible[0];
 if(selected){selectedIndex=all.indexOf(selected);selection={title:selected.title,kind:selected.kind,thumbnail:selected.thumbnail,occurrence:all.filter(s=>s.kind===selected.kind&&s.title===selected.title&&s.thumbnail===selected.thumbnail).indexOf(selected)};}
 host.replaceChildren();host.className='section-workbench';
 if(!selected&&mode==='settings'){host.append(el('p','empty','이 페이지에는 별도 설정이 없습니다.'));return;}
 const outline=el('aside','section-outline');outline.setAttribute('aria-label','페이지 섹션');
 const heading=el('div','outline-heading');heading.append(el('h2','',mode==='settings'?'페이지 설정':'페이지 구성'),el('span','count',String(visible.filter(s=>!s.parent).length)));outline.append(heading);
 if(mode==='content')outline.append(el('p','outline-help','⠿ 손잡이를 드래그해 순서를 바꾸세요.'));
 const select=s=>{selectedIndex=all.indexOf(s);selection={title:s.title,kind:s.kind,thumbnail:s.thumbnail,occurrence:all.filter(x=>x.kind===s.kind&&x.title===s.title&&x.thumbnail===s.thumbnail).indexOf(s)};renderFormEditor(host,ctx,mode);};
 const descendants=s=>[s,...s.children.flatMap(k=>descendants(all.find(x=>x.id===k)))];
 const runOperation=async op=>{await act(op);};
 function canDrop(from,to){return from&&from.id!==to.id&&((from.parent===to.parent&&from.movable&&to.movable&&(from.kind===to.kind||from.kind==='detail'||['infoItem','news'].includes(from.kind)&&['infoItem','news'].includes(to.kind)))||from.kind==='card'&&(to.kind==='category'||to.kind==='card'));}
 function dropZone(node,s){
  node.ondragover=e=>{const from=all.find(x=>x.id===dragging);if(!canDrop(from,s))return;e.preventDefault();e.stopPropagation();node.classList.add('drop-target');e.dataTransfer.dropEffect='move';};
  node.ondragleave=()=>node.classList.remove('drop-target');
  node.ondrop=e=>{e.preventDefault();e.stopPropagation();node.classList.remove('drop-target');const from=all.find(x=>x.id===dragging);dragging=null;if(!canDrop(from,s))return;
   if(from.kind==='card'&&(s.kind==='category'||from.parent!==s.parent))runOperation({action:'transfer',id:from.id,parent:s.kind==='category'?s.id:s.parent,target:s.kind==='card'?s.id:undefined,position:e.clientY>node.getBoundingClientRect().top+node.getBoundingClientRect().height/2?'after':'before'});
   else runOperation({action:'move',id:from.id,target:s.id,position:e.clientY>node.getBoundingClientRect().top+node.getBoundingClientRect().height/2?'after':'before'});
  };
 }
 function handle(s){const h=button('⠿',()=>{},'drag-handle');h.draggable=true;h.title='드래그하여 이동 · 키보드 ↑ ↓';h.setAttribute('aria-label',`${s.title} 순서 이동`);
  h.ondragstart=e=>{dragging=s.id;e.stopPropagation();e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',s.id);};h.ondragend=()=>{dragging=null;host.querySelectorAll('.drop-target').forEach(n=>n.classList.remove('drop-target'));};
  h.onkeydown=e=>{if(!['ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();move(s,e.key==='ArrowUp'?-1:1);};return h;}
 function peersFor(s){return all.filter(x=>x.parent===s.parent&&x.movable&&(x.kind===s.kind||s.kind==='detail'||['infoItem','news'].includes(s.kind)&&['infoItem','news'].includes(x.kind)));}
 function move(s,delta){const peers=peersFor(s),target=peers[peers.indexOf(s)+delta];if(target)runOperation({action:'move',id:s.id,target:target.id,position:delta<0?'before':'after'});}
 function actions(s){const wrap=el('div','section-actions');if(!s.movable)return wrap;
  for(const [label,fn]of[['↑',()=>move(s,-1)],['↓',()=>move(s,1)],['복제',()=>runOperation({action:'duplicate',id:s.id})],['삭제',()=>runOperation({action:'remove',id:s.id})]]){if(s.kind==='projectLink'&&label!=='삭제')continue;const b=button(label,fn,label==='삭제'?'quiet danger':'quiet');b.setAttribute('aria-label',`${s.title} ${label==='↑'?'위로 이동':label==='↓'?'아래로 이동':label}`);if(label==='↑'||label==='↓'){const peers=peersFor(s);b.disabled=label==='↑'?peers.indexOf(s)===0:peers.indexOf(s)===peers.length-1;}wrap.append(b);}return wrap;}
 function row(s,depth){const r=el('div','outline-row'+(selected?.id===s.id?' selected':''));r.style.setProperty('--depth',depth);if(s.movable)r.append(handle(s));else r.append(el('span','row-icon',s.kind==='settings'?'⚙':'•'));
  if(s.thumbnail){const thumb=el('img','outline-thumb');thumb.alt='';thumb.loading='lazy';thumb.referrerPolicy='no-referrer';try{const url=new URL(s.thumbnail,ctx.siteOrigin);if(['https:','http:'].includes(url.protocol))thumb.src=url.href;}catch{}thumb.onerror=()=>{thumb.hidden=true;};r.append(thumb);}
  const number=s.kind==='detail'?String(all.filter(x=>x.kind==='detail').indexOf(s)+1).padStart(2,'0')+' · ':'';
  const b=button(number+s.title,()=>select(s),'section-select');b.setAttribute('aria-current',String(selected?.id===s.id));r.append(b);dropZone(r,s);outline.append(r);
  // Fine-grained content blocks are edited inline, so the outline stays short.
  for(const k of s.children){const child=all.find(x=>x.id===k);if(!['part','detailPart'].includes(child.kind))row(child,depth+1);}
 }
 visible.filter(s=>!s.parent).forEach(s=>row(s,0));
 if(mode==='content'&&current.rootKinds?.length)outline.append(button(page==='index.html'?'+ 카테고리 추가':'+ 섹션 추가',()=>ctx.add(null,current.rootKinds),'add-outline'));
 if(mode==='content'&&page==='index.html')outline.append(button('영어 타이핑 소개 편집 ↗',()=>ctx.openIntro(),'intro-shortcut'));
 const inspector=el('section','section-inspector');inspector.setAttribute('aria-label','선택한 섹션 편집');host.append(outline,inspector);
 if(!selected){inspector.append(el('h2','','첫 섹션을 추가하세요'),el('p','muted','왼쪽의 추가 버튼에서 원하는 구성을 선택하세요.'));return;}
 const top=el('div','inspector-heading');const titles=el('div');titles.append(el('p','eyebrow',names[selected.kind]),el('h2','',selected.title));top.append(titles,actions(selected));inspector.append(top);
 const search=document.getElementById('field-search').value.toLowerCase();
 function imagePreview(url,container){if(!url)return;const img=el('img','asset-preview');img.alt='이미지 미리보기';img.loading='lazy';img.referrerPolicy='no-referrer';img.onerror=()=>{img.hidden=true;container.append(el('span','image-fallback','이미지를 불러올 수 없습니다. 새 파일이나 주소를 선택하세요.'));};container.append(img);
  if(url.startsWith('/assets/uploads/'))ctx.localImage(url).then(src=>{if(img.isConnected)img.src=src;});else{try{const u=new URL(url,ctx.siteOrigin);if(['https:','http:'].includes(u.protocol))img.src=u.href;}catch{img.hidden=true;}}
 }
 function fieldsFor(s,container){const fields=s.fieldIds.map(id=>current.fields.find(f=>f.id===id)).filter(Boolean);let count=0;
  for(const f of fields){if(search&&!`${s.title} ${fieldLabel(f)} ${changes[f.id]??f.value}`.toLowerCase().includes(search))continue;count++;
   const wrap=el('div','edit-field');const label=el('label','field-label',fieldLabel(f));label.htmlFor=f.id;wrap.append(label);
   const value=changes[f.id]??f.value;
   if(f.type==='media'&&f.url&&f.tag==='img')imagePreview(value,wrap);
   if(f.rich&&/title|date|label/.test(f.label)&&!value.includes('<a ')){
    const input=el('input');input.id=f.id;input.value=f.plain??value;input.oninput=()=>{const next=input.value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');if(next===f.value)delete changes[f.id];else changes[f.id]=next;update();};if(changes[f.id]!==undefined)input.value=changes[f.id].replaceAll('&lt;','<').replaceAll('&gt;','>').replaceAll('&amp;','&');wrap.append(input);container.append(wrap);continue;
   }
   if(f.rich){
    const editor=el('div','rich-editor');editor.contentEditable='true';editor.setAttribute('role','textbox');editor.setAttribute('aria-multiline','true');editor.setAttribute('aria-label',fieldLabel(f));editor.id=f.id;editor.innerHTML=value;
    const changed=()=>{const next=cleanRich(editor.innerHTML);if(next===f.value)delete changes[f.id];else changes[f.id]=next;update();};
    const toolbar=el('div','rich-toolbar');
    for(const [name,command]of [['굵게','bold'],['기울임','italic'],['목록','insertUnorderedList'],['링크 해제','unlink']]){const b=button(name,()=>{editor.focus();document.execCommand(command);changed();},'quiet');b.onmousedown=e=>e.preventDefault();toolbar.append(b);}
    const link=button('링크',()=>{const href=window.prompt('연결할 주소를 입력하세요. 글을 선택한 상태에서 링크를 연결할 수 있습니다.','https://');if(!href)return;try{cleanRich('<a href="'+href.replaceAll('"','&quot;')+'">링크</a>');editor.focus();document.execCommand('createLink',false,href);changed();}catch{window.alert('올바른 웹 주소 또는 이메일 주소를 입력해 주세요.');}},'quiet');link.onmousedown=e=>e.preventDefault();toolbar.append(link);
    editor.oninput=changed;editor.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();document.execCommand('insertLineBreak');changed();}};
    editor.onpaste=e=>{e.preventDefault();document.execCommand('insertText',false,e.clipboardData.getData('text/plain'));changed();};
    wrap.append(toolbar,editor);container.append(wrap);continue;
   }
   const long=f.type==='text'&&value.length>65||/본문|각주|설명/.test(fieldLabel(f))&&!f.url;const input=el(long?'textarea':'input');input.id=f.id;input.value=value;if(long)input.rows=Math.min(12,Math.max(3,Math.ceil(value.length/75)));
   input.oninput=()=>{if(input.value===f.value)delete changes[f.id];else changes[f.id]=input.value;update();};wrap.append(input);
   if(f.url&&f.tag!=='iframe'){const tools=el('div','field-tools');if(s.kind!=='projectLink')tools.append(button(['img','video','source'].includes(f.tag)?'파일 선택 · 교체':'파일 연결',()=>upload(f.id),'upload'));
    if(f.tag==='a'&&['card','projectLink'].includes(s.kind)){const select=el('select');select.setAttribute('aria-label','연결할 상세 페이지');select.append(new Option('상세 페이지 선택…',''));for(const p of pages.filter(p=>p.path.endsWith('.html')&&!['index.html','about.html','info.html'].includes(p.path))){select.append(new Option(p.path.replace('.html','').replaceAll('-',' '),p.path));}select.value=value;select.onchange=()=>{if(!select.value)return;input.value=select.value;input.oninput();};tools.append(select);}
    wrap.append(tools);
   }container.append(wrap);
  }return count;
 }
 fieldsFor(selected,inspector);
 if(selected.kind==='card'){
  if(!selected.fieldIds.some(id=>current.fields.find(f=>f.id===id)?.tag==='a')){const label=el('label','category-picker','연결할 상세 페이지');const link=el('select');link.append(new Option('페이지 선택…',''));for(const p of pages.filter(p=>p.path.endsWith('.html')&&!['index.html','about.html','info.html'].includes(p.path)))link.append(new Option(p.path.replace('.html','').replaceAll('-',' '),p.path));link.onchange=()=>{if(link.value)runOperation({action:'linkCard',id:selected.id,href:link.value});};label.append(link);inspector.append(label);}
  const picker=el('label','category-picker','소속 카테고리');const select=el('select');for(const s of all.filter(s=>s.kind==='category'))select.append(new Option(s.title,s.id));select.value=selected.parent;select.onchange=()=>runOperation({action:'transfer',id:selected.id,parent:select.value});picker.append(select);inspector.append(picker);
 }
 for(const childId of selected.children){const child=all.find(s=>s.id===childId);
  if(child.kind==='part'){
   const box=el('section','semantic-field');fieldsFor(child,box);const more=el('details','field-options');more.append(el('summary','','항목 구성'),actions(child));box.append(more);inspector.append(box);
  }else if(['detailPart','participant','projectLink'].includes(child.kind)){
   const box=el('section','inline-block');const h=el('div','inline-heading');if(child.kind!=='projectLink')h.append(handle(child));h.append(el('h3','',child.kind==='projectLink'?child.title:child.kind==='participant'?'참여자':child.thumbnail?'이미지':fieldLabel(current.fields.find(f=>f.id===child.fieldIds[0])||{label:'',type:'text'})),actions(child));box.append(h);fieldsFor(child,box);dropZone(box,child);inspector.append(box);
  }else{
   const card=el('article',child.kind==='card'?'work-card':'child-card');const h=el('div','child-heading');h.append(handle(child),button(child.title,()=>select(child),'child-title'),actions(child));card.append(h);if(child.kind==='card')imagePreview(child.thumbnail,card);else card.append(el('p','child-summary',descendants(child).flatMap(s=>s.fieldIds).map(id=>current.fields.find(f=>f.id===id)).filter(f=>f?.type==='text').map(f=>f.plain??f.value).join(' ').slice(0,180)));card.append(button('내용 편집 →',()=>select(child),'edit-child'));dropZone(card,child);inspector.append(card);
  }
 }
 const choices=allowedTemplates(selected,page);if(selected.kind==='navigation'){for(const choice of choices)inspector.append(button('+ '+templateNames[choice]+' 추가',()=>ctx.add(selected,[choice]),'add-block'));}
 else if(choices.length)inspector.append(button(selected.kind==='participants'?'+ 참여자 추가':selected.kind==='category'?'+ 작업 카드 추가':'+ 내용 블록 추가',()=>ctx.add(selected,choices),'add-block'));
 if(selected.kind==='card')inspector.append(el('p','editor-tip','카드는 홈 화면의 썸네일입니다. 상세 페이지 본문은 왼쪽 프로젝트 메뉴에서 편집하세요.'));
 if(selected.kind==='detail')inspector.append(el('p','muted','이미지와 텍스트는 하나의 섹션으로 함께 이동합니다. 아래 추가 버튼으로 이미지나 설명을 더 넣을 수 있습니다.'));
}
