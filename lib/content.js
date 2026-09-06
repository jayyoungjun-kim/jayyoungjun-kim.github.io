import {normalizeNewsTitle} from './news-title.js';
import { cleanRich, plainRich } from './rich-text.js';
import { parse } from 'parse5';
import { structure } from './sections.js';
import { requireValue } from './errors.js';

export const INTRO_PATH = 'JavaScript/script.js';
const blocked = new Set(['script', 'style', 'noscript', 'template', 'svg']);
const repeatClasses = new Set(['main-content-list-img', 'project-body-container', 'project__img', 'info-section', 'about-section']);
const escText = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const escAttr = s => escText(s).replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const attr = (n, name) => n.attrs?.find(a => a.name === name)?.value;
const classes = n => (attr(n, 'class') || '').split(/\s+/);
function walk(n, fn, parents = []) {
  fn(n, parents);
  if (!blocked.has(n.tagName)) for (const c of n.childNodes || []) walk(c, fn, [n, ...parents]);
}
function parseDocument(source) { return parse(source, { sourceCodeLocationInfo: true }); }
function label(n, parents) {
  const context = [n, ...parents].find(x => attr(x, 'class'));
  return (attr(context || n, 'class') || n.tagName || '문구').replaceAll('-', ' ');
}
function introField(source) {
  const match = /const text = ('[^']*'|"(?:\\.|[^"\\])*");/.exec(source);
  requireValue(match, 422, '홈 소개 스크립트 형식을 확인해 주세요.');
  const literal = match[1];
  const value = literal.startsWith('"') ? JSON.parse(literal) : literal.slice(1, -1);
  const start = match.index + 'const text = '.length;
  return { id: 'intro', type: 'text', label: '홈 영어 소개 · 숫자 1, 2, 3은 각주로 표시', value,
    start, end: start + literal.length, kind: 'js-string' };
}

export function inspect(source, page) {
  if (page === INTRO_PATH) { const fields=[introField(source)]; return {title:'홈 타이핑 소개',fields,blocks:[],...structure(source,page,fields)}; }
  const doc = parseDocument(source), fields = [], blocks = [];
  const richNodes=[];
  walk(doc,(n,parents)=>{if(!n.sourceCodeLocation?.endTag||parents.some(p=>richNodes.includes(p)))return;
    if(classes(n).some(c=>/^(about-section-(title|body.*)|info-section-(body.*|public-title|public-body.*|date)|project-stakeholder-(title|body)|project-body-(title|kr|en|label)|project-header-body-(kr|en))$/.test(c)))richNodes.push(n);
  });
  let title = page;
  walk(doc, (n, parents) => {
    const loc = n.sourceCodeLocation;
    if (!loc || parents.some(p => blocked.has(p.tagName)||richNodes.includes(p))) return;
    if(richNodes.includes(n)){
      const value=cleanRich(source.slice(loc.startTag.endOffset,loc.endTag.startOffset),{source:true});
      fields.push({id:`r${loc.startOffset}`,type:'text',label:label(n,parents),value,plain:plainRich(value),rich:true,newsTitle:classes(n).includes('info-section-public-title'),start:loc.startTag.endOffset,end:loc.endTag.startOffset,kind:'rich'});
      return;
    }
    if (n.tagName === 'title') title = n.childNodes?.map(c => c.value || '').join('') || page;
    if ((n.nodeName === '#text' && n.value.trim()) || (n.nodeName === '#comment' && n.data === 'cms-empty')) {
      // Navigation labels are content, but their structure/classes are never editable.
      const type = parents.some(p => p.tagName === 'head') ? 'meta' : 'text';
      fields.push({ id: `t${loc.startOffset}`, type, label: label(parents[0], parents.slice(1)),
        value: n.value?.trim() || '', start: loc.startOffset, end: loc.endOffset, kind: 'text' });
    }
    for (const a of n.attrs || []) {
      let type;
      if (['img', 'source', 'video'].includes(n.tagName) && ['src', 'poster', 'alt'].includes(a.name)) type = 'media';
      if (n.tagName === 'iframe' && a.name === 'src') type = 'media';
      if (n.tagName === 'a' && a.name === 'href') type = 'link';
      if (n.tagName === 'meta' && a.name === 'content' &&
          (/^og:/.test(attr(n, 'property') || '') || attr(n, 'name') === 'description')) type = 'meta';
      if (n.tagName === 'link' && a.name === 'href' && /icon/.test(attr(n, 'rel') || '')) type = 'media';
      if (!type) continue;
      // The GTM noscript iframe is skipped by traversal, not exposed as content.
      const al = loc.attrs?.[a.name];
      if (!al) continue;
      fields.push({ id: `a${al.startOffset}`, type, label: `${n.tagName === 'meta' ? attr(n, 'property') || attr(n, 'name') : label(n, parents)} · ${a.name}`,
        value: a.value, start: al.startOffset, end: al.endOffset, kind: 'attr', attribute: a.name,
        tag: n.tagName, url: ['href', 'src', 'poster'].includes(a.name) ||
          (n.tagName === 'meta' && ['og:image', 'og:url'].includes(attr(n, 'property'))) });
    }
    const cls = classes(n).find(c => repeatClasses.has(c));
    if (cls && loc.endTag) {
      const text = [];
      walk(n, c => { if (c.nodeName === '#text' && c.value.trim()) text.push(c.value.trim()); });
      const parent = parents[0]?.sourceCodeLocation;
      blocks.push({ id: `b${loc.startOffset}`, label: text.join(' ').slice(0, 95) || cls,
        className: cls, start: loc.startOffset, end: loc.endOffset,
        parent: parent?.startOffset ?? -1 });
    }
  });
  const {sections,rootKinds}=structure(source,page,fields);
  return { title, fields, blocks, sections, rootKinds };
}

export function validateURL(value, field) {
  requireValue(typeof value === 'string' && value.length <= 4096, 422, '주소가 너무 깁니다.');
  if (!value) return; // Empty links/alt can be present in the source; deletion of URL is explicit.
  requireValue(!/[\u0000-\u0020\u007f\\]/.test(value), 422, '주소에 공백이나 제어 문자를 사용할 수 없습니다.');
  const u = new URL(value, 'https://jayyoungjun-kim.github.io/');
  requireValue(['https:', 'http:', ...(field.tag === 'a' ? ['mailto:', 'tel:'] : [])].includes(u.protocol), 422,
    '웹 주소 또는 이메일 링크를 입력해 주세요.');
  requireValue(!u.username && !u.password, 422, '인증정보가 포함된 주소는 사용할 수 없습니다.');
  if (field.tag === 'iframe') requireValue(['player.vimeo.com', 'www.youtube.com', 'www.youtube-nocookie.com'].includes(u.hostname),
    422, '영상 임베드는 YouTube와 Vimeo 주소만 사용할 수 있습니다.');
}

export function applyEdits(source, page, changes) {
  requireValue(changes && typeof changes === 'object' && !Array.isArray(changes), 422, '수정 내용을 확인해 주세요.');
  const fields = new Map(inspect(source, page).fields.map(f => [f.id, f]));
  const edits = [];
  for (const [id, value] of Object.entries(changes)) {
    const f = fields.get(id);
    requireValue(f && typeof value === 'string' && value.length < 50000, 422, '수정할 항목을 다시 불러와 주세요.');
    if (value === f.value) continue;
    if (f.url) validateURL(value, f);
    let replacement;
    if(f.kind==='rich')replacement=(f.newsTitle?normalizeNewsTitle(value):cleanRich(value))||'<!--cms-empty-->';
    else if (f.kind === 'text') {
      const raw = source.slice(f.start, f.end);
      requireValue(f.type !== 'meta' || value.trim(), 422, '페이지 제목은 비워둘 수 없습니다.');
      replacement = (raw.match(/^\s*/)?.[0] || '') + (value.trim() ? escText(value) : '<!--cms-empty-->') + (raw.match(/\s*$/)?.[0] || '');
    } else if (f.kind === 'js-string') {
      requireValue(!/[<>&]/.test(value), 422, '홈 타이핑 소개에는 HTML 기호(<, >, &)를 사용할 수 없습니다.');
      replacement = JSON.stringify(value);
    }
    else replacement = `${f.attribute}="${escAttr(value)}"`;
    edits.push({ start: f.start, end: f.end, replacement });
  }
  for (const e of edits.sort((a, b) => b.start - a.start)) source = source.slice(0, e.start) + e.replacement + source.slice(e.end);
  return source;
}

export function changeBlock(source, page, operation) {
  requireValue(page !== INTRO_PATH, 422, '이 항목에는 블록이 없습니다.');
  const all = inspect(source, page).blocks;
  const block = all.find(b => b.id === operation.id);
  requireValue(block, 422, '블록을 다시 선택해 주세요.');
  const snippet = source.slice(block.start, block.end);
  if (operation.action === 'duplicate') return source.slice(0, block.end) + '\n' + snippet + source.slice(block.end);
  if (operation.action === 'remove') return source.slice(0, block.start) + source.slice(block.end);
  requireValue(['up', 'down'].includes(operation.action), 422, '지원하지 않는 블록 작업입니다.');
  const peers = all.filter(b => b.parent === block.parent && b.className === block.className);
  const other = peers[peers.indexOf(block) + (operation.action === 'up' ? -1 : 1)];
  requireValue(other, 422, '더 이동할 수 없습니다.');
  const [a, b] = [block, other].sort((a, b) => a.start - b.start);
  return source.slice(0, a.start) + source.slice(b.start, b.end) + source.slice(a.end, b.start) +
    source.slice(a.start, a.end) + source.slice(b.end);
}

export function cloneProject(source, path, title) {
  const data = inspect(source, path), changes = {};
  for (const f of data.fields) {
    if (f.kind === 'text' && f.label.includes('project header title')) changes[f.id] = title;
    if (f.type === 'meta' && f.kind === 'text') changes[f.id] = `${title} — Jay Youngjun Kim`;
  }
  // Only update the actual OG title/url attributes, preserving the rest of the template.
  const doc = parseDocument(source);
  walk(doc, n => {
    const property = attr(n, 'property');
    const al = n.sourceCodeLocation?.attrs?.content;
    if (al && property === 'og:title') changes[`a${al.startOffset}`] = `${title} — Jay Youngjun Kim`;
    if (al && property === 'og:url') changes[`a${al.startOffset}`] = `https://jayyoungjun-kim.github.io/${path}`;
  });
  return applyEdits(source, path, changes);
}

export function preview(source, page, siteOrigin, intro = '') {
  if (page === INTRO_PATH) return `<html><body><p>${escText(introField(source).value)}</p></body></html>`;
  const doc = parseDocument(source), edits = [];
  // Preview has no scripts, tracking, forms, embedded frames, or navigation privileges.
  function visit(n, insideRemoved = false) {
    const loc = n.sourceCodeLocation;
    if (!insideRemoved && loc && (['script', 'noscript', 'iframe', 'base', 'object', 'embed', 'form'].includes(n.tagName) ||
        (n.tagName === 'meta' && attr(n, 'http-equiv')))) {
      edits.push({ start: loc.startOffset, end: loc.endOffset, text: '' }); return;
    }
    for (const a of n.attrs || []) if (/^on/i.test(a.name)) {
      const al = loc?.attrs?.[a.name]; if (al) edits.push({ start: al.startOffset, end: al.endOffset, text: '' });
    }
    if (intro && classes(n).includes('main-header-title') && loc?.endTag) {
      edits.push({ start: loc.startTag.endOffset, end: loc.endTag.startOffset, text: escText(intro).replace(/[123]/g, n => `<sup-main-header>${n}</sup-main-header>`) });
    }
    for (const c of n.childNodes || []) visit(c);
  }
  visit(doc);
  for (const e of edits.sort((a,b) => b.start-a.start)) source = source.slice(0,e.start)+e.text+source.slice(e.end);
  const policy = `default-src 'none'; style-src https: 'unsafe-inline'; img-src https: http: data: blob:; font-src https:; media-src https: blob:; base-uri ${siteOrigin}; form-action 'none'`;
  return source.replace(/<head[^>]*>/i, m => `${m}<meta http-equiv="Content-Security-Policy" content="${escAttr(policy)}"><base href="${escAttr(siteOrigin)}/">`);
}
