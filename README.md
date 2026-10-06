# NXTSTAR Website

Vite + React site for https://www.nxtstar.ae. Every route is prerendered to static HTML at build time.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local development server |
| `npm run build` | Client build, prerender build, then static HTML for every route plus `sitemap.xml`, `robots.txt`, `llms.txt` and `404.html` |
| `npm run preview` | Serves `dist/` the way Vercel does (clean URLs, real 404s) |
| `npm run audit` | Checks the built site (see below) |
| `npm run check` | Lint, typecheck, build and audit. Run this before every commit |

## Adding a page

1. Create the page component and give it a route in `src/App.jsx` (or the nested router it belongs to).
2. Wrap it in `PageLayout` with a unique `title` and `description`. That sets the title, meta description, canonical and Open Graph tags.
3. Add the path to `scripts/routes.mjs`. A route that is not listed there is not prerendered and is not in the sitemap.
4. Blog posts live in `src/data/blogPosts.js` and need no other step.

## What the audit checks

- one `h1`, a unique title and meta description, and a correct canonical on every indexable page
- every internal link points to a page that exists
- no paragraph over 140 characters repeated across pages
- the sitemap matches the indexable pages exactly
- no prices or money amounts for our services, and no unverifiable claims such as "no hidden costs" or "guaranteed approval"

## Content rules

- Publish only facts that are confirmed by the business or come from a named official source.
- Do not publish prices for NXTSTAR services.
- Site-wide facts (domain, name) live in `src/seo/site.js`.
