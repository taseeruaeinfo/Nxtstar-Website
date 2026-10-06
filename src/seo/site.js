// Single source of truth for site-wide SEO values.
// Only confirmed facts belong here. Legal name, licence and address are added
// once the business owner confirms them.
export const SITE_URL = 'https://www.nxtstar.ae';
export const SITE_NAME = 'NXTSTAR';
export const DEFAULT_DESCRIPTION =
    'NXTSTAR is a UAE business setup and licensing consultancy based in Dubai.';
export const DEFAULT_OG_IMAGE = '/logo.png';

// "/contact/" and "/contact" are the same page; the canonical form has no trailing slash.
export const normalizePath = (path = '/') => {
    const clean = path.split(/[?#]/)[0].replace(/\/+$/, '');
    return clean === '' ? '/' : clean;
};

export const absoluteUrl = (path = '/') => {
    if (/^https?:\/\//.test(path)) return path;
    const normalized = normalizePath(path);
    return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
};
