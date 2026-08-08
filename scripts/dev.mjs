import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, resolve, relative, isAbsolute } from 'node:path';

const root = resolve(process.cwd());
const publicRoot = resolve(root, 'public');
const port = Number(process.env.PORT || 4173);
const mime = {
  '.html':'text/html; charset=utf-8',
  '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8',
  '.json':'application/json',
  '.webp':'image/webp',
  '.png':'image/png',
  '.jpg':'image/jpeg',
  '.jpeg':'image/jpeg',
  '.svg':'image/svg+xml',
  '.ico':'image/x-icon',
  '.mp4':'video/mp4'
};

function safeJoin(base, requestPath) {
  // Cross-platform path containment check. The previous version compared
  // paths using a hard-coded '/', which rejected every asset path on Windows.
  const clean = requestPath.replace(/^[\\/]+/, '');
  const candidate = resolve(base, clean);
  const rel = relative(base, candidate);
  if (rel === '') return candidate;
  if (rel.startsWith('..') || isAbsolute(rel)) return null;
  return candidate;
}

async function existingFile(path) {
  if (!path) return null;
  try {
    const info = await stat(path);
    if (info.isFile()) return path;
    if (info.isDirectory()) {
      const index = join(path, 'index.html');
      if ((await stat(index)).isFile()) return index;
    }
  } catch {}
  return null;
}

http.createServer(async (req,res)=>{
  try {
    const pathname = decodeURIComponent((req.url || '/').split('?')[0]);

    if (pathname === '/') {
      const data = await readFile(join(root, 'index.html'));
      res.writeHead(200, { 'Content-Type': mime['.html'], 'Cache-Control':'no-store' });
      return res.end(data);
    }

    // Source files live at project root; static media/favicon/robots live in /public.
    const rootFile = await existingFile(safeJoin(root, pathname));
    const publicFile = rootFile ? null : await existingFile(safeJoin(publicRoot, pathname));
    const filePath = rootFile || publicFile;

    if (filePath) {
      const data = await readFile(filePath);
      res.writeHead(200, {
        'Content-Type': mime[extname(filePath).toLowerCase()] || 'application/octet-stream',
        'Cache-Control':'no-store'
      });
      return res.end(data);
    }

    // Hash routing normally never reaches the server, but keep an HTML fallback for route-like URLs.
    if (!extname(pathname)) {
      const data = await readFile(join(root, 'index.html'));
      res.writeHead(200, { 'Content-Type': mime['.html'], 'Cache-Control':'no-store' });
      return res.end(data);
    }

    res.writeHead(404, { 'Content-Type':'text/plain; charset=utf-8' });
    res.end('Not found');
  } catch (error) {
    res.writeHead(500, { 'Content-Type':'text/plain; charset=utf-8' });
    res.end('Server error');
  }
}).listen(port,()=>console.log(`Two Eyes On You em http://localhost:${port}`));
