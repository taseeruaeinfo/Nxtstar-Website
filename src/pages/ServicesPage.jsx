import React from 'react';
import ServiceDirectory from '../components/layout/ServiceDirectory';
import { serviceCatalogueSchema } from '../seo/serviceCatalogueSchema';
import ServiceBrief from './services/ServiceBrief';
import serviceBriefs from '../data/serviceBriefs';
import { Routes, Route, Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import PRO from './services/PRO';
import Visa from './services/Visa';
import Accounting from './services/Accounting';
import AdvertiserPermit from './services/AdvertiserPermit';
import DifcAiLicence from './services/DifcAiLicence';
import ServiceGuide from '../components/layout/ServiceGuide';
import advertiserAudienceGuides from '../data/advertiserAudienceGuides';
import goldenVisaGuides from '../data/goldenVisaGuides';
import Freelancers from './services/Freelancers';
import Startups from './services/Startups';
import Investors from './services/Investors';
import Residents from './services/Residents';
import NotFound from './NotFound';
import '../styles/pages/ServicesPage.css';

const ServicesPage = () => {

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PageLayout
                        title="UAE Business Setup, Permits and Company Support"
                        jsonLd={serviceCatalogueSchema}
                        description="Explore NXTSTAR’s company formation, advertiser permits, visa consultancy, corporate structuring and PRO support for founders and businesses in the UAE."
                        headerImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        headerOverlayColor="rgba(0, 0, 0, 0.1)"
                    >
                        <div className="services-overview-page">
                            <section className="service-directory-intro">
                                <div className="section-content">
                                    <h2>Business Support Services in UAE</h2>
                                    <p>NXTSTAR helps founders, creators and business owners organise company setup, licensing and ongoing administration. Select a service below to understand the support and next steps.</p>
                                </div>
                            </section>

                            <ServiceDirectory />

                            <section className="why-choose-section">
                                <div className="section-content">
                                    <h2>Why Choose NXTStar for Business Services?</h2>
                                    <div className="benefits-grid">
                                        <div className="benefit-item">
                                            <img
                                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400&auto=format&fit=crop"
                                                alt="Experienced Team"
                                                className="benefit-image" loading="lazy" decoding="async"
                                            />
                                            <h3>Experienced Team</h3>
                                            <p>Our professionals bring years of expertise in UAE business regulations and processes.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <img
                                                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=400&auto=format&fit=crop"
                                                alt="Personalized Approach"
                                                className="benefit-image" loading="lazy" decoding="async"
                                            />
                                            <h3>Personalized Approach</h3>
                                            <p>We tailor our services to meet your unique business requirements and objectives.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <img
                                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop"
                                                alt="Time Efficiency"
                                                className="benefit-image" loading="lazy" decoding="async"
                                            />
                                            <h3>Time Efficiency</h3>
                                            <p>We handle time-consuming tasks so you can focus on growing your business.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <img
                                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop"
                                                alt="Cost-Effective"
                                                className="benefit-image" loading="lazy" decoding="async"
                                            />
                                            <h3>Cost-Effective</h3>
                                            <p>Our services help reduce operational costs while ensuring compliance and efficiency.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="cta-section">
                                <div className="cta-content">
                                    <h2>Need Help with Business Services?</h2>
                                    <p>Contact our team for a personalized consultation and service quote.</p>
                                    <Link to="/contact" className="cta-btn">Get in Touch</Link>
                                </div>
                            </section>
                        </div>
                    </PageLayout>
                }
            />
            <Route path="/pro" element={<PRO />} />
            <Route path="/visa" element={<Visa />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/banking" element={
                <PageLayout
                    title="Corporate Banking Services"
                    noindex
                    description="Navigate the UAE banking landscape with ease. We assist in opening corporate bank accounts for all types of business entities."
                    headerImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="service-detail-page">
                        <h2>Corporate Banking Services Coming Soon</h2>
                        <p>Detailed information about our corporate banking services will be available soon.</p>
                    </div>
                </PageLayout>
            } />
            <Route path="/trademark" element={
                <PageLayout
                    title="Trademark Registration Services"
                    noindex
                    description="Protect your brand identity in the UAE and GCC region with our comprehensive trademark registration services."
                    headerImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="service-detail-page">
                        <h2>Trademark Registration Services Coming Soon</h2>
                        <p>Detailed information about our trademark registration services will be available soon.</p>
                    </div>
                </PageLayout>
            } />
            <Route path="/documents" element={
                <PageLayout
                    title="Document Clearing Services"
                    noindex
                    description="Fast and reliable document attestation, legalization, and translation services for all your business needs."
                    headerImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="service-detail-page">
                        <h2>Document Clearing Services Coming Soon</h2>
                        <p>Detailed information about our document clearing services will be available soon.</p>
                    </div>
                </PageLayout>
            } />
            <Route path="/advertiser-permit" element={<AdvertiserPermit />} />
            {advertiserAudienceGuides.map((guide) => (
                <Route key={guide.slug} path={`/advertiser-permit/${guide.slug}`} element={<ServiceGuide guide={guide} />} />
            ))}
            {goldenVisaGuides.map((guide) => (
                <Route key={guide.path} path={guide.path.replace('/services', '')} element={<ServiceGuide guide={guide} />} />
            ))}
            <Route path="/difc-ai-licence" element={<DifcAiLicence />} />
            <Route path="/freelancers" element={<Freelancers />} />
            <Route path="/startups" element={<Startups />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/residents" element={<Residents />} />
            {serviceBriefs.map(service => <Route key={service.path} path={service.path.replace('/services/', '')} element={<ServiceBrief service={service} />} />)}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default ServicesPage;
