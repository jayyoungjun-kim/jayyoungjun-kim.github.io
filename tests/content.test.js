import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { parse } from 'parse5';
import { inspect, applyEdits, changeBlock, cloneProject, preview, INTRO_PATH } from '../lib/content.js';
const root = new URL('../', import.meta.url);
const source = page => readFile(new URL(page, root), 'utf8');

test('all original pages round-trip unchanged, including original formatting', async () => {
  const pages = (await readdir(root)).filter(f => f.endsWith('.html')).concat(INTRO_PATH);
  for (const core of ['index.html','about.html','info.html',INTRO_PATH]) assert.ok(pages.includes(core));
  for (const page of pages) {
    const html = await source(page), data = inspect(html, page);
    assert.ok(data.fields.length > 0, page);
    const same = Object.fromEntries(data.fields.map(f => [f.id, f.value]));
    assert.equal(applyEdits(html, page, same), html, page);
    assert.equal(applyEdits(html, page, {}), html, page);
  }
});
test('edits only the selected text range, escaping active markup and keeping styling', async () => {
  const html = await source('info.html');
  const f = inspect(html,'info.html').fields.find(f => f.kind === 'text' && f.label.includes('body kr'));
  const edited = applyEdits(html,'info.html',{ [f.id]:'새 소개 <script>alert(1)</script> & "인용"' });
  assert.equal(edited.slice(0,f.start), html.slice(0,f.start));
  assert.ok(edited.endsWith(html.slice(f.end)));
  assert.ok(edited.includes('&lt;script&gt;alert(1)&lt;/script&gt; &amp;'));
  assert.throws(() => applyEdits(html, 'info.html', { fake:'x' }), { status:422 });
});
test('URL edits reject script/data URLs and unsafe embedded hosts', async () => {
  const html = '<html><body><a href="info.html">info</a><iframe src="https://player.vimeo.com/video/1"></iframe></body></html>';
  const fields = inspect(html,'x.html').fields;
  const link = fields.find(f => f.tag === 'a'), frame = fields.find(f => f.tag === 'iframe');
  for (const url of ['javascript:alert(1)','data:text/html,x','java\nscript:x','https://user:pass@example.com','//evil.example/\nx']) {
    assert.throws(() => applyEdits(html,'x.html',{ [link.id]:url }), {status:422});
  }
  assert.throws(() => applyEdits(html,'x.html',{[frame.id]:'https://evil.example/embed'}), {status:422});
  assert.ok(applyEdits(html,'x.html',{[link.id]:'mailto:jayyoungjunkim@gmail.com'}).includes('mailto:'));
});
test('blocks duplicate, move, and remove without rewriting surrounding HTML', async () => {
  const html = await source('index.html'), list = inspect(html,'index.html').blocks;
  const first = list[0], snippet = html.slice(first.start, first.end);
  const duplicate = changeBlock(html,'index.html',{id:first.id,action:'duplicate'});
  assert.equal(duplicate.length, html.length + snippet.length + 1);
  const moved = changeBlock(html,'index.html',{id:first.id,action:'down'});
  assert.equal(moved.length,html.length);
  assert.equal(inspect(moved,'index.html').blocks[1].label, first.label);
  const removed = changeBlock(html,'index.html',{id:first.id,action:'remove'});
  assert.equal(removed,html.slice(0,first.start)+html.slice(first.end));
});
test('Google tracking and executable elements cannot run in preview', async () => {
  const html = await source('index.html');
  const output = preview(html,'index.html','https://jayyoungjun-kim.github.io','Hello1');
  assert.ok(!output.includes('<script'));
  assert.ok(!output.includes('<noscript'));
  assert.ok(output.includes('Hello<sup-main-header>1</sup-main-header>'));
  assert.ok(output.includes('Content-Security-Policy'));
  assert.ok(output.includes('href="css/style.css"'));
  const malicious = '<html><head><meta http-equiv="refresh" content="0;url=https://evil.example"></head><body><img onerror="x" src="x"><form></form><iframe src="x"></iframe></body></html>';
  const safe = preview(malicious,'x.html','https://jayyoungjun-kim.github.io');
  assert.ok(!safe.includes('onerror') && !safe.includes('<form') && !safe.includes('<iframe') && !safe.includes('refresh'));
});
test('project clone changes title and OG URL, preserving classes and layout', async () => {
  const html = await source('29cm-gift-curation.html');
  const cloned = cloneProject(html,'new-project.html','New & Design');
  assert.ok(cloned.includes('New &amp; Design'));
  assert.ok(cloned.includes('https://jayyoungjun-kim.github.io/new-project.html'));
  const attrs = source => { const out=[]; const visit=n=> { for(const a of n.attrs||[]) if(['class','style'].includes(a.name))out.push(a); for(const c of n.childNodes||[])visit(c); }; visit(parse(source)); return out; };
  assert.deepEqual(attrs(cloned),attrs(html));
});
test('home typing intro preserves executable code and rejects HTML injection', async () => {
  const js = await source(INTRO_PATH);
  const result = applyEdits(js,INTRO_PATH,{intro:'A "quote" and 한글1'});
  assert.equal(inspect(result,INTRO_PATH).fields[0].value,'A "quote" and 한글1');
  assert.ok(result.endsWith(js.slice(inspect(js,INTRO_PATH).fields[0].end)));
  assert.throws(()=>applyEdits(js,INTRO_PATH,{intro:'<img src=x onerror=alert(1)>'}), {status:422});
});
test('cleared text remains editable without adding visible placeholder content',()=>{
  const html='<html><body><div class="project-header-title">Title</div></body></html>';
  const field=inspect(html,'x.html').fields[0];
  const cleared=applyEdits(html,'x.html',{[field.id]:''});
  const empty=inspect(cleared,'x.html').fields[0];
  assert.equal(empty.value,'');
  assert.equal(applyEdits(cleared,'x.html',{[empty.id]:'Title'}),html);
});
