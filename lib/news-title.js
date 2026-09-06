import {parseFragment} from 'parse5';
import {plainRich,cleanRich} from './rich-text.js';
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function readNewsTitle(html){
 const root=parseFragment(html);let link;
 const walk=n=>{if(n.tagName==='a'&&!link)link=n;for(const child of n.childNodes||[])walk(child);};walk(root);
 return {title:plainRich(html).trim().replace(link?/\s*↗\s*$/:/$^/,''),href:link?.attrs.find(a=>a.name==='href')?.value||''};
}
export function newsTitleHTML(title,href){
 const text=escape(title);return href.trim()?'<a href="'+escape(href.trim())+'" target="_blank" rel="noreferrer">'+text+'</a><span class="outbound-link">↗</span>':text;
}
export function normalizeNewsTitle(html){
 const {title,href}=readNewsTitle(cleanRich(html));
 return newsTitleHTML(title,href);
}
