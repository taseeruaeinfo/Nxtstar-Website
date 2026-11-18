import SEO from './SEO';
import { Link, useLocation } from 'react-router-dom';
import buyerQuestions from '../../data/buyerQuestions';
import { normalizePath } from '../../seo/site';
import '../../styles/ServiceGuide.css';
import '../../styles/PageLayout.css';

/** @param {Record<string, any>} props */
const PageLayout = ({
    title,
    description,
    seoTitle,
    seoDescription,
    noindex = false,
    ogType,
    jsonLd,
    children,
    showHeader = true,
    headerImage = null,
    headerOverlayColor = 'rgba(0, 0, 0, 0.8)'
}) => {
    const { pathname } = useLocation();
    const questions = buyerQuestions[normalizePath(pathname)] || [];
    const structuredData = [].concat(jsonLd || []);
    if (questions.length) {
        const existing = structuredData.find(block => block['@type'] === 'FAQPage');
        const entries = questions.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } }));
        const combined = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [...(existing?.mainEntity || []), ...entries] };
        if (existing) structuredData.splice(structuredData.indexOf(existing), 1, combined);
        else structuredData.push(combined);
    }
    return (
        <div className="page-container">
            <SEO
                title={seoTitle || title}
                description={seoDescription || description}
                noindex={noindex}
                ogType={ogType}
                jsonLd={structuredData}
            />
            {showHeader && (
                <header className="page-header" style={headerImage ? {
                    backgroundImage: `linear-gradient(${headerOverlayColor}, ${headerOverlayColor}), url(${headerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                } : {}}>
                    <div className="page-header-container">
                        <h1 className="page-title">{title}</h1>
                        {description && <p className="page-description">{description}</p>}
                    </div>
                </header>
            )}
            <main className="page-content">
                <div className="page-content-container">
                    {children}
                    {questions.length > 0 && <section className="service-guide buyer-questions" aria-label="Choosing NXTSTAR for this service">
                        <h2>Choosing support for your next step</h2>
                        {questions.map(({ question, answer }) => <div className="guide-section" key={question}><h3>{question}</h3><p>{answer}</p></div>)}
                        <Link to="/contact">Discuss this service with NXTSTAR</Link>
                    </section>}
                </div>
            </main>
        </div>
    );
};

export default PageLayout;
