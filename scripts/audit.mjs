// Quality gate for the built site. Run after `npm run build`: `npm run audit`.
// Exits with code 1 if any check fails.
import fs from 'node:fs';
import path from 'node:path';
import { SITE_URL } from './routes.mjs';

const dist = path.join(process.cwd(), 'dist');
if (!fs.existsSync(path.join(dist, 'index.html'))) {
    console.error('dist/ not found. Run `npm run build` first.');
    process.exit(1);
}

// Service prices must never appear on the site. These pages quote legal thresholds
// (tax, VAT, visa eligibility), which are rules and not prices for our services.
const MONEY_ALLOWED = new Map([
    ['/blog/understanding-uae-tax-regulations-for-foreign-businesses', 'corporate tax and VAT thresholds'],
    ['/blog/offshore-vs-mainland-which-is-right-for-your-business', 'corporate tax threshold'],
    ['/blog/dubai-investor-visa-updates-2026', 'investor visa property thresholds'],
    ['/faqs', 'Golden Visa eligibility thresholds'],
]);
const MONEY = /(?:\b(?:AED|USD|Dhs?|Dirhams?)\.?\s?\d[\d,.]*|\$\s?\d[\d,.]*|\b\d[\d,.]*\s?(?:AED|USD|dirhams)\b)/gi;
const BANNED_PHRASES = [
    /no hidden (?:costs?|fees?|charges?)/i,
    /guaranteed approval/i,
    /100% success/i,
    /lifetime/i,
    /success rate/i,
];
const REPEAT_LIMIT = 140;

const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const full = path.join(dir, entry.name);
        return entry.isDirectory() ? walk(full) : [full];
    });

const decode = (text) =>
    text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;|&#39;/g, "'")
        .replace(/&nbsp;/g, ' ');
const textOf = (html) =>
    decode(html.replace(/<(script|style|noscript)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' '))
        .replace(/\s+/g, ' ')
        .trim();
const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i')) || [])[1];

const files = walk(dist);
const routeOf = (file) => {
    const rel = path.relative(dist, file).split(path.sep).join('/');
    return rel === 'index.html' ? '/' : `/${rel.replace(/\.html$/, '')}`;
};
const pages = files
    .filter((file) => file.endsWith('.html') && path.basename(file) !== '404.html')
    .map((file) => ({ route: routeOf(file), html: fs.readFileSync(file, 'utf8') }));
const knownRoutes = new Set(pages.map((p) => p.route));
const knownFiles = new Set(files.map((file) => `/${path.relative(dist, file).split(path.sep).join('/')}`));

const failures = [];
const fail = (check, route, detail) => failures.push({ check, route, detail });
const seen = { title: new Map(), description: new Map(), canonical: new Map() };
const paragraphs = new Map();
const indexable = new Set();

for (const { route, html } of pages) {
    const head = (html.match(/<head>[\s\S]*?<\/head>/i) || [''])[0];
    const body = html.slice(html.indexOf('<body'));
    const metas = head.match(/<meta[^>]*>/gi) || [];
    const meta = (key, value) => attr(metas.find((m) => attr(m, key) === value) || '', 'content');

    const noindex = (meta('name', 'robots') || '').includes('noindex');
    if (!noindex) indexable.add(route);

    const title = decode((head.match(/<title>([^<]*)<\/title>/i) || [])[1] || '');
    const description = decode(meta('name', 'description') || '');
    const canonical = attr((head.match(/<link[^>]*rel="canonical"[^>]*>/i) || [''])[0], 'href');

    if (!title) fail('title missing', route);
    if (!description) fail('meta description missing', route);
    if (!meta('property', 'og:title') || !meta('property', 'og:description') || !meta('property', 'og:image')) {
        fail('Open Graph tags missing', route);
    }

    if (!noindex) {
        const expected = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`;
        if (canonical !== expected) {
            fail('canonical wrong or missing', route, `found ${canonical || 'none'}, expected ${expected}`);
        }
        for (const [kind, value] of [['title', title], ['description', description], ['canonical', canonical]]) {
            if (!value) continue;
            if (seen[kind].has(value)) {
                fail(`duplicate ${kind}`, route, `same as ${seen[kind].get(value)}: "${value.slice(0, 80)}"`);
            } else {
                seen[kind].set(value, route);
            }
        }
    }

    const h1Count = (body.match(/<h1[\s>]/gi) || []).length;
    if (h1Count !== 1) fail('page must have exactly one h1', route, `found ${h1Count}`);

    for (const block of head.match(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi) || []) {
        try {
            JSON.parse(block.replace(/<\/?script[^>]*>/gi, ''));
        } catch {
            fail('invalid JSON-LD', route);
        }
    }

    for (const img of body.match(/<img[^>]*>/gi) || []) {
        if (attr(img, 'alt') === undefined) fail('image without alt text', route, attr(img, 'src'));
    }

    for (const anchor of body.match(/<a\s[^>]*>/gi) || []) {
        const href = attr(anchor, 'href');
        if (href === undefined || href === '' || href === '#') {
            fail('link without a real href', route, anchor.slice(0, 80));
            continue;
        }
        if (!href.startsWith('/') || href.startsWith('//')) continue;
        const target = href.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
        if (!knownRoutes.has(target) && !knownFiles.has(target)) {
            fail('internal link to a missing page', route, href);
        }
    }

    const visible = textOf(body);
    if (!MONEY_ALLOWED.has(route)) {
        const money = visible.match(MONEY);
        if (money) fail('price or money amount on page', route, [...new Set(money)].slice(0, 5).join(', '));
    }
    for (const phrase of BANNED_PHRASES) {
        const hit = visible.match(phrase);
        if (hit) fail('unverifiable claim', route, `"${hit[0]}"`);
    }

    // Site-wide chrome (nav, footer) is expected on every page, so leave it out.
    // Blog excerpts appear on the listing and again as the post's intro, which is intended.
    const content = body
        .replace(/<nav[\s\S]*?<\/nav>/gi, '')
        .replace(/<footer[\s\S]*?<\/footer>/gi, '')
        .replace(/<p class="(?:blog-excerpt|page-description)"[\s\S]*?<\/p>/gi, '');
    for (const p of new Set((content.match(/<p[\s>][\s\S]*?<\/p>/gi) || []).map(textOf))) {
        if (p.length <= REPEAT_LIMIT) continue;
        paragraphs.set(p, [...(paragraphs.get(p) || []), route]);
    }
}

for (const [text, routes] of paragraphs) {
    if (routes.length > 1) {
        fail('paragraph repeated across pages', routes[0], `also on ${routes.slice(1).join(', ')}: "${text.slice(0, 90)}..."`);
    }
}

const sitemapPath = path.join(dist, 'sitemap.xml');
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => m[1].replace(SITE_URL, '').replace(/\/$/, '') || '/'
);
if (!sitemap) fail('sitemap.xml missing', '/sitemap.xml');
if (new Set(sitemapRoutes).size !== sitemapRoutes.length) fail('duplicate URL in sitemap', '/sitemap.xml');
for (const route of sitemapRoutes) {
    if (!indexable.has(route)) fail('sitemap lists a missing or noindex page', route);
}
for (const route of indexable) {
    if (!sitemapRoutes.includes(route)) fail('indexable page missing from sitemap', route);
}
for (const file of ['robots.txt', 'llms.txt', '404.html']) {
    if (!fs.existsSync(path.join(dist, file))) fail(`${file} missing`, `/${file}`);
}

if (failures.length === 0) {
    console.log(`Audit passed: ${pages.length} pages, ${indexable.size} indexable, ${sitemapRoutes.length} in sitemap.`);
    process.exit(0);
}
const byCheck = new Map();
for (const f of failures) byCheck.set(f.check, [...(byCheck.get(f.check) || []), f]);
for (const [check, list] of byCheck) {
    console.log(`\nFAIL ${check} (${list.length})`);
    // The same problem on many pages (a footer link, say) is printed once with a page count.
    const byDetail = new Map();
    for (const f of list) byDetail.set(f.detail || '', [...(byDetail.get(f.detail || '') || []), f.route]);
    for (const [detail, routes] of byDetail) {
        const where = routes.length > 3 ? `${routes.length} pages, e.g. ${routes[0]}` : routes.join(', ');
        console.log(`  ${where}${detail ? `  ->  ${detail}` : ''}`);
    }
}
console.log(`\nAudit failed: ${failures.length} problem(s) across ${pages.length} pages.`);
process.exit(1);
