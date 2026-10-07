import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import HeadContext from './seo/HeadContext';
import { buildHead, headToString } from './seo/head';
import blogPosts from './data/blogPosts';
import advertiserAudienceGuides from './data/advertiserAudienceGuides';
import goldenVisaGuides from './data/goldenVisaGuides';
import mainlandGuides from './data/mainlandGuides';
import businessGuides from './data/businessGuides';

export { blogPosts };

// Routes that are generated from data files rather than listed in scripts/routes.mjs.
export const dataRoutes = [...advertiserAudienceGuides, ...goldenVisaGuides, ...mainlandGuides, ...businessGuides].map((guide) => guide.path);

// Renders one route to HTML. Used only by scripts/prerender.mjs at build time.
export const render = (url) => {
    const collector = { tags: null };
    const html = renderToString(
        <StrictMode>
            <HeadContext.Provider value={collector}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </HeadContext.Provider>
        </StrictMode>
    );
    const tags = collector.tags || buildHead({ path: url });
    const noindex = tags.some((t) => t.attrs?.name === 'robots' && t.attrs.content.startsWith('noindex'));
    return { html, head: headToString(tags), noindex };
};
