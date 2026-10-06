import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import { SITE_NAME, absoluteUrl } from '../../seo/site';
import '../../styles/ServiceGuide.css';

const WHATSAPP_URL = 'https://wa.me/971582594158';
const PHONE_DISPLAY = '+971 58 259 4158';
const PHONE_HREF = 'tel:+971582594158';

const formatDate = (iso) =>
    new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

// Structured data mirrors what the page shows: breadcrumb, the service, and the FAQ.
const buildJsonLd = (guide) => {
    const url = absoluteUrl(guide.path);
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
                { '@type': 'ListItem', position: 2, name: guide.parent.name, item: absoluteUrl(guide.parent.path) },
                { '@type': 'ListItem', position: 3, name: guide.breadcrumb, item: url },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: guide.serviceName,
            serviceType: guide.serviceType,
            description: guide.description,
            url,
            areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
            provider: { '@id': `${absoluteUrl('/')}#organization` },
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: guide.faqs.map(({ question, answer }) => ({
                '@type': 'Question',
                name: question,
                acceptedAnswer: { '@type': 'Answer', text: answer },
            })),
        },
    ];
};

const Block = ({ block }) => {
    if (block.list) {
        const Tag = block.ordered ? 'ol' : 'ul';
        return (
            <Tag>
                {block.list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </Tag>
        );
    }
    return <p>{block.text}</p>;
};

/**
 * One page per service, answering one buyer question.
 * The content lives in src/data/serviceGuides.js.
 * @param {{ guide: Record<string, any> }} props
 */
const ServiceGuide = ({ guide }) => (
    <PageLayout
        title={guide.h1}
        seoTitle={guide.seoTitle}
        seoDescription={guide.description}
        jsonLd={buildJsonLd(guide)}
        headerImage={guide.headerImage}
        headerOverlayColor="rgba(0, 0, 0, 0.7)"
    >
        <article className="service-guide">
            <nav className="guide-breadcrumb" aria-label="Breadcrumb">
                <Link to="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link to={guide.parent.path}>{guide.parent.name}</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{guide.breadcrumb}</span>
            </nav>

            <section className="guide-answer">
                {guide.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="guide-reviewed">
                    Last reviewed: <time dateTime={guide.reviewed}>{formatDate(guide.reviewed)}</time> by the {SITE_NAME} team.
                </p>
                <p className="guide-reviewed">Rules are set by the authority and can change. Confirm the current position before you apply.</p>
            </section>

            {guide.sections.map((section) => (
                <section key={section.heading} className="guide-section">
                    <h2>{section.heading}</h2>
                    {section.blocks.map((block, index) => (
                        <Block key={index} block={block} />
                    ))}
                </section>
            ))}

            <section className="guide-section guide-faq">
                <h2>Common questions</h2>
                {guide.faqs.map(({ question, answer }) => (
                    <div key={question} className="guide-faq-item">
                        <h3>{question}</h3>
                        <p>{answer}</p>
                    </div>
                ))}
            </section>

            <section className="guide-section guide-sources">
                <h2>Sources</h2>
                <p>The rules on this page come from the authority's own published material, checked on {formatDate(guide.reviewed)}.</p>
                <ul>
                    {guide.sources.map((source) => (
                        <li key={source.url}>
                            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="guide-section guide-related">
                <h2>Related pages</h2>
                <ul>
                    {guide.related.map((link) => (
                        <li key={link.path}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="guide-cta">
                <h2>{guide.cta}</h2>
                <p>Tell us what you want to do and we will tell you which route fits, what it involves and what we would need from you.</p>
                <div className="guide-cta-actions">
                    <a className="guide-btn guide-btn-primary" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a>
                    <a className="guide-btn" href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
                    <Link className="guide-btn" to="/contact">Send an enquiry</Link>
                </div>
            </section>
        </article>
    </PageLayout>
);

export default ServiceGuide;
