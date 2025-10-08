import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import PRO from './services/PRO';
import Visa from './services/Visa';
import Accounting from './services/Accounting';
import '../styles/pages/ServicesPage.css';

const ServicesPage = () => {
    const services = [
        {
            id: 'pro-services',
            title: 'PRO Services',
            description: 'Streamline your administrative tasks with our professional PRO services, handling government paperwork, visa processing, and document legalization.',
            icon: '📝',
            link: '/services/pro'
        },
        {
            id: 'visa-services',
            title: 'Visa Services',
            description: 'Comprehensive visa solutions for investors, entrepreneurs, professionals, and their families, ensuring smooth entry and residency in the UAE.',
            icon: '🛂',
            link: '/services/visa'
        },
        {
            id: 'accounting-services',
            title: 'Accounting & Tax',
            description: 'Expert accounting, bookkeeping, and tax compliance services to keep your business finances organized and compliant with UAE regulations.',
            icon: '📊',
            link: '/services/accounting'
        },
        {
            id: 'corporate-banking',
            title: 'Corporate Banking',
            description: 'Navigate the UAE banking landscape with ease. We assist in opening corporate bank accounts for all types of business entities.',
            icon: '🏦',
            link: '/services/banking'
        },
        {
            id: 'trademark-registration',
            title: 'Trademark Registration',
            description: 'Protect your brand identity in the UAE and GCC region with our comprehensive trademark registration services.',
            icon: '™️',
            link: '/services/trademark'
        },
        {
            id: 'document-clearing',
            title: 'Document Clearing',
            description: 'Fast and reliable document attestation, legalization, and translation services for all your business needs.',
            icon: '📄',
            link: '/services/documents'
        }
    ];

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PageLayout
                        title="Our Services"
                        description="Comprehensive business support services to help you establish and grow your presence in the UAE."
                        headerImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        headerOverlayColor="rgba(0, 0, 0, 0.1)"
                    >
                        <div className="services-overview-page">
                            <section className="hero-section">
                                <div className="hero-content">
                                    <h1>Business Support Services in UAE</h1>
                                    <p>Beyond business setup, we offer a comprehensive range of support services to help your business thrive in the UAE.</p>
                                </div>
                            </section>

                            <section className="services-grid-section">
                                <div className="section-content">
                                    <h2>Our Services</h2>
                                    <p className="section-intro">
                                        From handling government paperwork to managing your finances, we provide end-to-end business support services tailored to your specific needs.
                                    </p>

                                    <div className="services-grid">
                                        {services.map((service) => (
                                            <div key={service.id} className="service-card">
                                                <div className="service-icon">{service.icon}</div>
                                                <h3>{service.title}</h3>
                                                <p>{service.description}</p>
                                                <Link to={service.link} className="service-link">Learn More</Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section className="why-choose-section">
                                <div className="section-content">
                                    <h2>Why Choose NXTStar for Business Services?</h2>
                                    <div className="benefits-grid">
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <h3>Experienced Team</h3>
                                            <p>Our professionals bring years of expertise in UAE business regulations and processes.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <h3>Personalized Approach</h3>
                                            <p>We tailor our services to meet your unique business requirements and objectives.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <h3>Time Efficiency</h3>
                                            <p>We handle time-consuming tasks so you can focus on growing your business.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
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
            <Route path="/pro/*" element={<PRO />} />
            <Route path="/visa/*" element={<Visa />} />
            <Route path="/accounting/*" element={<Accounting />} />
            <Route path="/banking" element={
                <PageLayout
                    title="Corporate Banking Services"
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
            <Route path="*" element={
                <PageLayout
                    title="Service Not Found"
                    description="The service you are looking for does not exist."
                    headerImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="service-not-found">
                        <h2>Service Not Found</h2>
                        <p>The service you are looking for does not exist or has been moved.</p>
                        <Link to="/services" className="back-link">Back to Services</Link>
                    </div>
                </PageLayout>
            } />
        </Routes>
    );
};

export default ServicesPage;