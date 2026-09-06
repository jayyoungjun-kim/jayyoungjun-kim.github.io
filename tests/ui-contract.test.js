import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { parse } from 'parse5';

const html=readFileSync(new URL('../admin/index.html',import.meta.url),'utf8');
const bundle=readFileSync(new URL('../admin/app.bundle.js',import.meta.url),'utf8');
function boot(origin) {
  const elements=new Map(),closes=[],listeners={};
  const element=()=>({textContent:'',hidden:false,disabled:false,dataset:{},append(){},addEventListener(){}});
  const visit=n=>{
    const attrs=Object.fromEntries((n.attrs||[]).map(a=>[a.name,a.value]));
    if(attrs.id)elements.set(attrs.id,element());
    if(attrs['data-close'])closes.push({...element(),dataset:{close:attrs['data-close']}});
    for(const child of n.childNodes||[])visit(child);
  };visit(parse(html));
  const document={getElementById:id=>{assert.ok(elements.has(id),`Missing element: ${id}`);return elements.get(id);},
    querySelectorAll:()=>closes,createElement:()=>element()};
  const context={document,location:{origin,hostname:origin==='null'?'':new URL(origin).hostname},
    window:{addEventListener:(name,fn)=>{listeners[name]=fn;}},URL,Blob,TextEncoder,TextDecoder,atob,btoa,
    fetch:()=>{throw new Error('Network access before explicit connection');},setTimeout,clearTimeout,crypto};
  try { runInNewContext(bundle,context); } catch(error) { throw new Error(`Bundle boot failed: ${error.message}`); }
  return {elements,listeners};
}
test('static bundle starts without any account server or network request',()=>{
  const {elements}=boot('https://jayyoungjun-kim.github.io');
  assert.equal(elements.get('token-form').hidden,false);
  assert.match(elements.get('connection').textContent,/토큰은 저장/);
});
test('opening the local HTML file shows an online link instead of accepting a token',()=>{
  const {elements}=boot('null');
  assert.equal(elements.get('token-form').hidden,true);
  assert.match(elements.get('connection').textContent,/로컬 파일/);
});
test('CSP permits only GitHub API connections and the served page uses the bundled script',()=>{
  assert.ok(html.includes('connect-src https://api.github.com;'));
  assert.ok(html.includes('script-src \'self\';'));
  assert.ok(html.includes('./app.bundle.js'));
  assert.ok(!html.includes('accounts.google.com'));
});
