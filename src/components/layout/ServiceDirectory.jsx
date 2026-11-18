import { Link } from 'react-router-dom';
import catalogue, { serviceGroups } from '../../data/serviceCatalogue';

const ServiceDirectory = () => <section className="services-grid-section" aria-label="NXTSTAR service directory">
    <div className="section-content">
        <h2>Find support for your next step</h2>
        <p className="section-intro">Choose the service that matches your situation, then review the scope and information to prepare.</p>
        <nav className="service-directory-nav" aria-label="Service categories">{Object.entries(serviceGroups).map(([id, name]) => <a key={id} href={`#${id}`}>{name}</a>)}</nav>
        {Object.entries(serviceGroups).map(([id, name]) => <section id={id} key={id} className="service-directory-group">
            <h2>{name}</h2><div className="services-grid">{catalogue.filter(service => service.group === id).map(service => <div key={service.path} className="service-card"><h3><Link to={service.path}>{service.title}</Link></h3><p>{service.description}</p></div>)}</div>
        </section>)}
    </div>
</section>;

export default ServiceDirectory;
