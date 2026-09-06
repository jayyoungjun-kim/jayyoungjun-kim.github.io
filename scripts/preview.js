import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
const root = resolve(new URL('..', import.meta.url).pathname);
const mime = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.json':'application/json' };
createServer(async (req,res) => {
  try {
    const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (path.endsWith('/') ? path + 'index.html' : path));
    if (!file.startsWith(root+'/') || /(^|\/)\./.test(path) || !(/\.(html|css|js|gltf)$/.test(file)) ||
      path.startsWith('/server/') || path.startsWith('/lib/') || path.startsWith('/node_modules/') || path.startsWith('/scripts/') || path.startsWith('/tests/')) {
      res.writeHead(404).end(); return;
    }
    const bytes = await readFile(file);
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' }); res.end(bytes);
  } catch { res.writeHead(404).end(); }
}).listen(8080, '127.0.0.1', () => console.log('Local: http://127.0.0.1:8080/admin/'));
