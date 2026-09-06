import {parseFragment} from 'parse5';
import {requireValue} from './errors.js';
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const allowed=new Set(['br','strong','b','em','i','u','a','ul','ol','li']);
export function cleanRich(value,{source=false}={}){
 const root=parseFragment(value);
 function render(n){
  if(n.nodeName==='#text')return source?escape(n.value.replace(/\s+/g,' ')):escape(n.value).replace(/\r?\n/g,'<br>');
  if(['script','style','iframe','object','svg','sup','sup-about'].includes(n.tagName))return '';
  const body=(n.childNodes||[]).map(render).join('');
  if(['div','p'].includes(n.tagName))return '<br>'+body;
  if(!allowed.has(n.tagName))return body;
  if(n.tagName==='br')return '<br>';
  if(n.tagName==='a'){
   const href=n.attrs.find(a=>a.name==='href')?.value||'';
   const url=new URL(href,'https://jayyoungjun-kim.github.io/');
   requireValue(['https:','http:','mailto:','tel:'].includes(url.protocol)&&!url.username&&!url.password&&!/[\u0000-\u0020\u007f\\]/.test(href),422,'올바른 링크 주소를 입력해 주세요.');
   return `<a href="${escape(href)}" target="_blank" rel="noreferrer">${body}</a>`;
  }
  return `<${n.tagName}>${body}</${n.tagName}>`;
 }
 return root.childNodes.map(render).join('').trim().replace(/^(?:<br>)+|(?:<br>)+$/g,'');
}
export function plainRich(value){const root=parseFragment(value);const read=n=>n.nodeName==='#text'?n.value:n.tagName==='br'?'\n':(n.childNodes||[]).map(read).join('');return read(root);}
