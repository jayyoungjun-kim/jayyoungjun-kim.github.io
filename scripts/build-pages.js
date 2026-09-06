import {mkdirSync,copyFileSync,cpSync,readdirSync,readFileSync,writeFileSync,existsSync,rmSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const out='dist/site',revision=process.env.GITHUB_SHA||execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
rmSync(out,{recursive:true,force:true});mkdirSync(out,{recursive:true});
for(const name of ['admin','assets','css','JavaScript','images','img','fonts','CNAME','robots.txt','sitemap.xml'])if(existsSync(name))cpSync(name,out+'/'+name,{recursive:true});
for(const name of readdirSync('.').filter(n=>n.endsWith('.html'))){
 const html=readFileSync(name,'utf8').replace('</head>','<meta name="portfolio-revision" content="'+revision+'"><script defer src="/JavaScript/live-content.js"></script></head>');
 writeFileSync(out+'/'+name,html);
}
writeFileSync(out+'/404.html','<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="/css/style.css"><script defer src="/JavaScript/live-content.js"></script></head><body><div class="container"><div class="gnb-container"><a href="/index.html" class="gnb-button">HOME</a><a href="/about.html" class="gnb-button">ABOUT</a><a href="/info.html" class="gnb-button">INFO</a></div><div class="contents">페이지를 불러오는 중입니다.</div></div></body></html>');
writeFileSync(out+'/.nojekyll','');
console.log('Prepared static fallback and live bootstrap at '+revision);
