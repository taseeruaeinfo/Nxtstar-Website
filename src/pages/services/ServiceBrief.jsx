import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import { absoluteUrl } from '../../seo/site';
import '../../styles/ServiceGuide.css';

const ServiceBrief = ({ service }) => {
    const url = absoluteUrl(service.path);
    const jsonLd = [
        { '@context': 'https://schema.org', '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.description, url, provider: { '@id': `${absoluteUrl('/')}#organization` }, areaServed: { '@type': 'Country', name: 'United Arab Emirates' } },
        { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') }, { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: service.question, acceptedAnswer: { '@type': 'Answer', text: service.answer } }] },
    ];
    return <PageLayout title={service.title} description={service.description} jsonLd={jsonLd}>
        <article className="service-guide">
            <nav className="guide-breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><Link to="/services">Services</Link><span>/</span><span aria-current="page">{service.title}</span></nav>
            <section className="guide-answer"><h2>How NXTSTAR can help</h2><p>{service.intro}</p></section>
            <section className="guide-section"><h2>Who this service is for</h2><p>{service.audience}</p><h2>What to clarify before applying</h2><p>{service.distinction}</p></section>
            <section className="guide-section"><h2>Plan your enquiry with NXTSTAR</h2><ol>{service.tasks.map(task => <li key={task}>{task}</li>)}</ol></section>
            <section className="guide-section"><h2>Information to prepare</h2><ul>{service.inputs.map(input => <li key={input}>{input}</li>)}</ul><p>Discuss the scope first. Share identity documents only through the agreed application channel.</p></section>
            <section className="guide-section"><h2>{service.question}</h2><p>{service.answer}</p></section>
            <section className="guide-section"><h2>Official information</h2><ul>{service.sources.map(([name, href]) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{name}</a></li>)}</ul><p>References checked on <time dateTime="2026-11-17">17 November 2026</time>. Confirm current requirements for your case.</p></section>
            <section className="guide-section"><h2>Related support</h2><ul>{service.related.map(([name, path]) => <li key={path}><Link to={path}>{name}</Link></li>)}</ul></section>
            <section className="guide-cta"><h2>Discuss your next step</h2><p>NXTSTAR coordinates the agreed support. Authorities decide applications.</p><div className="guide-cta-actions"><Link className="guide-btn guide-btn-primary" to="/contact">Discuss this service</Link><a className="guide-btn" href="https://wa.me/971582594158">Message NXTSTAR</a></div></section>
        </article>
    </PageLayout>;
};

export default ServiceBrief;
