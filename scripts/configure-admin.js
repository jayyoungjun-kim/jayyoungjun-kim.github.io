import { readFile, writeFile } from 'node:fs/promises';
const args = Object.fromEntries(process.argv.slice(2).map(arg => {
  const i = arg.indexOf('='); return [arg.slice(0,i).replace(/^--/,''), arg.slice(i+1)];
}));
if (!/^[a-zA-Z0-9._-]+\.apps\.googleusercontent\.com$/.test(args['client-id'] || '') ||
    !/^[a-f0-9-]{36}$/.test(args['database-id'] || '') || !args['api-origin']) {
  console.error('사용법: pnpm configure --client-id=...apps.googleusercontent.com --database-id=... --api-origin=https://...workers.dev');process.exit(1);
}
const url = new URL(args['api-origin']);
if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash) throw new Error('API의 HTTPS origin만 입력하세요.');
const path = new URL('../wrangler.jsonc', import.meta.url);
const config = JSON.parse(await readFile(path,'utf8'));
config.vars.GOOGLE_CLIENT_ID = args['client-id']; config.d1_databases[0].database_id = args['database-id'];
await writeFile(path,JSON.stringify(config,null,2)+'\n');
await writeFile(new URL('../admin/config.js',import.meta.url),`// Public configuration only. No credentials.\nexport const API_ORIGIN = ${JSON.stringify(url.origin)};\n`);
console.log('공개 연결 설정을 저장했습니다. GitHub 토큰은 wrangler secret put GITHUB_TOKEN으로 별도 입력하세요.');
