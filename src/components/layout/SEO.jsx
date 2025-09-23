import { Helmet } from 'react-helmet';
import '../../styles/SEO.css';

const SEO = ({ title, description, keywords, canonicalUrl }) => {
    // Default values for SEO
    const defaultTitle = "NXTStar | UAE Business Setup Specialists";
    const defaultDescription = "Start, Scale & Succeed in the UAE – Your Partner in Business Setup. NXTStar provides comprehensive business setup services in UAE mainland, freezone, and offshore jurisdictions.";
    const defaultKeywords = "UAE business setup, company formation UAE, mainland business UAE, freezone company, offshore company UAE, business licenses UAE";
    const siteUrl = "https://nxtstar.com";  // Replace with your actual domain

    const seoTitle = title || defaultTitle;
    const seoDescription = description || defaultDescription;
    const seoKeywords = keywords || defaultKeywords;
    const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    return (
        <Helmet>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={seoKeywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />  {/* Add your Open Graph image */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={`${siteUrl}/twitter-image.jpg`} />  {/* Add your Twitter image */}
        </Helmet>
    );
};

export default SEO;