// Serves dist/ the way Vercel does with cleanUrls: /contact -> contact.html,
// unknown paths -> 404.html with a 404 status. Use it to check the built site locally.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const port = Number(process.env.PORT) || 4173;
const types = {
    '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
    '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
    '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/\/+$/, '') || '/';
    const candidates = pathname === '/' ? ['index.html'] : [pathname.slice(1), `${pathname.slice(1)}.html`];
    const file = candidates
        .map((candidate) => path.join(dist, candidate))
        .find((full) => full.startsWith(dist) && fs.existsSync(full) && fs.statSync(full).isFile());
    const target = file || path.join(dist, '404.html');
    res.writeHead(file ? 200 : 404, { 'Content-Type': types[path.extname(target)] || 'application/octet-stream' });
    fs.createReadStream(target).pipe(res);
}).listen(port, () => console.log(`Serving dist at http://localhost:${port}`));
