import test from 'node:test';
import assert from 'node:assert/strict';
import {inspect,applyEdits} from '../lib/content.js';
import {newsTitleHTML,readNewsTitle} from '../lib/news-title.js';
test('News title links add one styled arrow, update, round-trip and remove together',()=>{
 let source='<div class="info-container"><div class="info-title">News</div><div class="info-section-activity"><div class="info-section-public-title">A &amp; B</div><div class="info-section-public-body-kr">본문 그대로</div></div></div>';
 const edit=(title,href)=>{const f=inspect(source,'info.html').fields.find(f=>f.newsTitle);source=applyEdits(source,'info.html',{[f.id]:newsTitleHTML(title,href)});};
 edit('A & B','https://example.com/?x=1&y=2');assert.match(source,/<span class="outbound-link">↗<\/span>/);assert.match(source,/target="_blank" rel="noreferrer"/);
 let f=inspect(source,'info.html').fields.find(f=>f.newsTitle);assert.deepEqual(readNewsTitle(f.value),{title:'A & B',href:'https://example.com/?x=1&y=2'});assert.equal(applyEdits(source,'info.html',{[f.id]:f.value}),source);
 edit('새 제목','https://example.org');assert.equal((source.match(/↗/g)||[]).length,1);assert.match(source,/본문 그대로/);
 edit('새 제목','');assert.ok(!source.includes('<a '));assert.ok(!source.includes('↗'));assert.ok(source.includes('새 제목'));
 assert.throws(()=>edit('제목','javascript:alert(1)'));assert.throws(()=>edit('제목','https://user:password@example.com'));
});
