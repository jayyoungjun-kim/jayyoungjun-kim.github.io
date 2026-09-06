import { readFileSync, writeFileSync } from 'node:fs';
const [clientId,origin]=process.argv.slice(2);
if(!/^[0-9]+-[A-Za-z0-9_-]+\.apps\.googleusercontent\.com$/.test(clientId||''))throw new Error('Provide the Google Web client ID (not its secret).');
const url=new URL(origin);
if(url.protocol!=='https:'||url.origin!==origin||url.username||url.password)throw new Error('Provide an HTTPS Worker origin without a trailing slash.');
const config='admin/config.js';
writeFileSync(config,readFileSync(config,'utf8').replace(/export const GOOGLE_CLIENT_ID = .*;/,`export const GOOGLE_CLIENT_ID = ${JSON.stringify(clientId)};`).replace(/export const API_ORIGIN = .*;/,`export const API_ORIGIN = ${JSON.stringify(origin)};`));
const worker=JSON.parse(readFileSync('wrangler.jsonc','utf8'));worker.vars.GOOGLE_CLIENT_ID=clientId;writeFileSync('wrangler.jsonc',JSON.stringify(worker,null,2)+'\n');
console.log('Public Google and Worker settings updated. Run pnpm build before committing.');
