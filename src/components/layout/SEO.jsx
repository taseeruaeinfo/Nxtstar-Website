import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeadContext from '../../seo/HeadContext';
import { buildHead, applyHead } from '../../seo/head';
import { normalizePath } from '../../seo/site';

/** @param {Record<string, any>} props */
const SEO = ({ title, description, canonicalUrl, noindex = false, ogType, image, jsonLd }) => {
    const { pathname } = useLocation();
    const collector = useContext(HeadContext);
    const path = normalizePath(canonicalUrl || pathname);
    const tags = buildHead({ title, description, path, noindex, ogType, image, jsonLd });

    if (collector) collector.tags = tags;

    const signature = JSON.stringify(tags);
    useEffect(() => {
        applyHead(JSON.parse(signature));
    }, [signature]);

    return null;
};

export default SEO;
