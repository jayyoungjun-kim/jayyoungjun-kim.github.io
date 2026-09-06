import { readFile } from 'node:fs/promises';
const config = JSON.parse(await readFile(new URL('../wrangler.jsonc', import.meta.url), 'utf8'));
const failures = [];
if (!/\.apps\.googleusercontent\.com$/.test(config.vars.GOOGLE_CLIENT_ID)) failures.push('Google OAuth 웹 클라이언트 ID');
if (config.d1_databases[0].database_id === '00000000-0000-0000-0000-000000000000') failures.push('Cloudflare D1 database_id');
if (failures.length) { console.error(`배포 전 설정 필요: ${failures.join(', ')}. docs/admin-setup.md를 확인하세요.`); process.exit(1); }
console.log('공개 설정을 확인했습니다. GITHUB_TOKEN은 Worker secret에 별도로 등록되어 있어야 합니다.');
