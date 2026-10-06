import { SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, absoluteUrl } from './site.js';

const escapeHtml = (value) =>
    String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

/**
 * @typedef {{ tag: string, attrs?: Record<string, string>, text?: string }} HeadTag
 */

/**
 * Turns page-level SEO props into a flat list of head tags.
 * The same list is written into the prerendered HTML and applied in the browser.
 * @param {Record<string, any>} [props]
 * @returns {HeadTag[]}
 */
export const buildHead = ({ title, description, path = '/', noindex = false, ogType = 'website', image, jsonLd } = {}) => {
    const fullTitle = !title ? SITE_NAME : title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const desc = description || DEFAULT_DESCRIPTION;
    const url = absoluteUrl(path);
    const img = absoluteUrl(image || DEFAULT_OG_IMAGE);

    /** @type {HeadTag[]} */
    const tags = [
        { tag: 'title', text: fullTitle },
        { tag: 'meta', attrs: { name: 'description', content: desc } },
        { tag: 'meta', attrs: { name: 'robots', content: noindex ? 'noindex, follow' : 'index, follow' } },
        { tag: 'meta', attrs: { property: 'og:site_name', content: SITE_NAME } },
        { tag: 'meta', attrs: { property: 'og:type', content: ogType } },
        { tag: 'meta', attrs: { property: 'og:title', content: fullTitle } },
        { tag: 'meta', attrs: { property: 'og:description', content: desc } },
        { tag: 'meta', attrs: { property: 'og:image', content: img } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary' } },
        { tag: 'meta', attrs: { name: 'twitter:title', content: fullTitle } },
        { tag: 'meta', attrs: { name: 'twitter:description', content: desc } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: img } },
    ];
    // A page that should not be indexed gets no canonical or og:url.
    if (!noindex) {
        tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
        tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } });
    }
    for (const block of [].concat(jsonLd || [])) {
        tags.push({ tag: 'script', attrs: { type: 'application/ld+json' }, text: JSON.stringify(block) });
    }
    return tags;
};

/** @param {HeadTag[]} tags */
export const headToString = (tags) =>
    tags
        .map(({ tag, attrs = {}, text }) => {
            const attrString = Object.entries({ ...attrs, 'data-seo': '' })
                .map(([key, value]) => (value === '' ? ` ${key}` : ` ${key}="${escapeHtml(value)}"`))
                .join('');
            if (tag === 'title') return `<title>${escapeHtml(text)}</title>`;
            if (tag === 'script') return `<script${attrString}>${text.replace(/</g, '\u003c')}</script>`;
            return `<${tag}${attrString}>`;
        })
        .join('\n    ');

/**
 * Browser side: swap the previous page's tags for the new page's tags.
 * @param {HeadTag[]} tags
 */
export const applyHead = (tags) => {
    document.head.querySelectorAll('[data-seo]').forEach((node) => node.remove());
    for (const { tag, attrs = {}, text } of tags) {
        if (tag === 'title') {
            document.title = text;
            continue;
        }
        const node = document.createElement(tag);
        Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
        node.setAttribute('data-seo', '');
        if (text) node.textContent = text;
        document.head.appendChild(node);
    }
};
