import { readFile, writeFile } from 'node:fs/promises';
import { API_ORIGIN } from '../admin/config.js';
import { build } from 'esbuild';
await build({ entryPoints:['admin/app.js'], bundle:true, format:'iife', platform:'browser',
  loader:{'.css':'text'}, target:['es2022'], outfile:'admin/app.bundle.js', minify:true, legalComments:'eof', sourcemap:false });
console.log('Built static admin/app.bundle.js. GitHub credentials stay on the auth server.');

if(API_ORIGIN && (new URL(API_ORIGIN).origin!==API_ORIGIN || !API_ORIGIN.startsWith('https://')))throw new Error('Invalid API_ORIGIN');
const htmlPath='admin/index.html';
const html=await readFile(htmlPath,'utf8');
await writeFile(htmlPath,html.replace(/connect-src [^;]*;/,`connect-src https://accounts.google.com/gsi/${API_ORIGIN?' '+API_ORIGIN:''};`));
