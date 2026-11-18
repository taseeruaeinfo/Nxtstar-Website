import catalogue from '../data/serviceCatalogue';
import { absoluteUrl } from './site';
export const serviceCatalogueSchema = {
    '@context': 'https://schema.org', '@type': 'OfferCatalog', '@id': `${absoluteUrl('/services')}#catalogue`,
    name: 'NXTSTAR business setup and support services', url: absoluteUrl('/services'),
    itemListElement: catalogue.map(service => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${absoluteUrl(service.path)}#service`, name: service.title, description: service.description, url: absoluteUrl(service.path), provider: { '@id': `${absoluteUrl('/')}#organization` } } })),
};

