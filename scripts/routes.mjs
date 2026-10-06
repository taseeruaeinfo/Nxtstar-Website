// Every static route the site serves. Blog post routes are added from src/data/blogPosts.js.
// A route that is missing here is not prerendered, so add new pages to this list.
const freezones = [
    'jafza', 'ifza', 'meydan', 'dmcc', 'dwtc', 'rakez', 'spc', 'shams', 'afz',
    'dic', 'dmc', 'dkp', 'difc', 'masdar', 'srtip', 'dafza', 'nuventures', 'rakicc',
];

export const staticRoutes = [
    '/',
    '/business',
    '/business/mainland',
    '/business/freezone',
    ...freezones.map((zone) => `/business/freezone/${zone}`),
    '/business/offshore',
    '/services',
    '/services/advertiser-permit',
    '/services/difc-ai-licence',
    '/services/freelancers',
    '/services/startups',
    '/services/investors',
    '/services/residents',
    '/services/pro',
    '/services/visa',
    '/services/accounting',
    '/services/banking',
    '/services/trademark',
    '/services/documents',
    '/blogs',
    '/faqs',
    '/contact',
    '/refer-earn',
    '/privacy-policy',
    '/cost-calculator-success',
];

export const SITE_URL = 'https://www.nxtstar.ae';

// Crawlers that are named explicitly in robots.txt, on top of the catch-all rule.
export const namedCrawlers = [
    'Googlebot', 'Bingbot', 'Google-Extended', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
    'ClaudeBot', 'Claude-User', 'Claude-SearchBot', 'anthropic-ai', 'PerplexityBot',
    'Perplexity-User', 'CCBot', 'Applebot', 'Applebot-Extended', 'meta-externalagent',
    'Amazonbot', 'DuckAssistBot', 'MistralAI-User',
];
