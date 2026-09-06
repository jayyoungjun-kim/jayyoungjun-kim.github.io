import { build } from 'esbuild';
await build({ entryPoints:['admin/app.js'], bundle:true, format:'iife', platform:'browser',
  target:['es2022'], outfile:'admin/app.bundle.js', minify:true, legalComments:'eof', sourcemap:false });
console.log('Built static admin/app.bundle.js. No server or runtime secrets required.');
