// Build step 3 of 3: turn every route into a static HTML file and write
// sitemap.xml, robots.txt and llms.txt. Runs after the client and server builds.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { staticRoutes, SITE_URL, namedCrawlers } from './routes.mjs';

const root = process.cwd();
const dist = path.join(root, 'dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const { render, blogPosts, dataRoutes } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href);

for (const marker of ['<!--seo-head-->', '<!--app-html-->']) {
    if (!template.includes(marker)) throw new Error(`index.html is missing the ${marker} marker`);
}

const routes = [
    ...staticRoutes.map((route) => ({ route })),
    ...dataRoutes.map((route) => ({ route })),
    ...blogPosts.map((post) => ({ route: `/blog/${post.slug}`, lastmod: post.date })),
];

const page = (url) => {
    const { html, head, noindex } = render(url);
    return { noindex, html: template.replace('<!--seo-head-->', head).replace('<!--app-html-->', html) };
};

const write = (file, contents) => {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, contents);
};

const indexable = [];
for (const { route, lastmod } of routes) {
    const { html, noindex } = page(route);
    const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
    write(path.join(dist, file), html);
    if (!noindex) indexable.push({ route, lastmod });
}

// Vercel serves 404.html with a 404 status for any path that has no file.
write(path.join(dist, '404.html'), page('/page-not-found').html);

const loc = (route) => (route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`);

write(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexable
        .map(({ route, lastmod }) => `  <url><loc>${loc(route)}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
        .join('\n')}\n</urlset>\n`
);

write(
    path.join(dist, 'robots.txt'),
    `# Search engines and AI assistants are welcome to read this site.\n${namedCrawlers
        .map((bot) => `User-agent: ${bot}\nAllow: /\n`)
        .join('\n')}\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
);

write(path.join(dist, 'llms.txt'), fs.readFileSync(path.join(root, 'scripts', 'llms.template.txt'), 'utf8')
    .replace('{{BLOG_POSTS}}', blogPosts.map((post) => `- [${post.title}](${loc(`/blog/${post.slug}`)})`).join('\n')));

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes (${indexable.length} in the sitemap) plus 404.html`);
