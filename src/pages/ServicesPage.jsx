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
        },
        {
            id: 'digital-creators',
            title: 'Digital Creators & Influencers',
            description: 'Licensing, UAE Media Council approvals, visas, banking and compliant structures for creators.',
            icon: '🎥',
            link: '/services/creators'
        },
        {
            id: 'freelancers-consultants',
            title: 'Freelancers & Consultants',
            description: 'Freelance permits, visas, tax/VAT setup, banking, contracts, and branding support.',
            icon: '💼',
            link: '/services/freelancers'
        },
        {
            id: 'startups-entrepreneurs',
            title: 'Startups & Entrepreneurs',
            description: 'End-to-end company formation, approvals, visas, legal, tax, and launch readiness.',
            icon: '🚀',
            link: '/services/startups'
        },
        {
            id: 'foreign-investors-expats',
            title: 'Foreign Investors & Expats',
            description: 'Investor visas, Golden Visa, holding/SPV structures, wealth and tax residency advisory.',
            icon: '🌍',
            link: '/services/investors'
        },
        {
            id: 'uae-residents',
            title: 'UAE Residents',
            description: 'Dependent sponsorship, Golden Visa help, and tailored insurance/attestation support.',
            icon: '🏠',
            link: '/services/residents'
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
            <Route path="/creators" element={
                <PageLayout
                    title="Digital Creators & Influencers"
                    description="Licensing, UAE Media Council approvals, visas, banking and compliant structures for creators."
                    headerImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
                        <section className="intro-section">
                            <div className="section-content">
                                <h2>Empower Your Creator Business</h2>
                                <p>NXTStar helps creators and influencers establish a compliant UAE business identity so you can focus on creativity while we manage licensing and approvals.</p>
                                <div className="highlights-grid">
                                    <div className="highlight-item">✅ Fast licensing</div>
                                    <div className="highlight-item">✅ Media Council approvals</div>
                                    <div className="highlight-item">✅ Visa & banking support</div>
                                    <div className="highlight-item">✅ Contract protection</div>
                                </div>
                            </div>
                        </section>
                        <section className="services-section">
                            <div className="section-content">
                                <h2>Services for Creators</h2>
                                <div className="services-grid">
                                    <div className="service-card"><div className="service-icon">🎯</div><h3>Trade License</h3><p>Freelance, e‑trader, or freezone licenses tailored for creators.</p></div>
                                    <div className="service-card"><div className="service-icon">🪪</div><h3>Media Council Permits</h3><p>Influencer/Advertiser approvals with full submission support.</p></div>
                                    <div className="service-card"><div className="service-icon">🌍</div><h3>Foreign Creator Approvals</h3><p>Specialized support for visiting international creators.</p></div>
                                    <div className="service-card"><div className="service-icon">🛂</div><h3>Residency Visas</h3><p>End‑to‑end influencer/freelancer visa handling and renewals.</p></div>
                                    <div className="service-card"><div className="service-icon">🏦</div><h3>Bank Accounts</h3><p>Business and personal banking for monetization.</p></div>
                                    <div className="service-card"><div className="service-icon">🏅</div><h3>Golden Visa</h3><p>Eligibility assessment and application support.</p></div>
                                    <div className="service-card"><div className="service-icon">📄</div><h3>Agreements</h3><p>Sponsorship and collaboration contract drafting/review.</p></div>
                                    <div className="service-card"><div className="service-icon">💡</div><h3>Monetization</h3><p>Strategies for brand deals, products, and subscriptions.</p></div>
                                </div>
                            </div>
                        </section>
                        <section className="cta-section">
                            <div className="cta-content">
                                <h2>Build Your Creator Brand with Confidence</h2>
                                <p>Get licensing and approvals handled by experts.</p>
                                <Link to="/contact" className="cta-btn">Get Creator Support</Link>
                            </div>
                        </section>
                    </div>
                </PageLayout>
            } />
            <Route path="/freelancers" element={
                <PageLayout
                    title="Freelancers & Consultants"
                    description="Freelance permits, visas, tax/VAT setup, banking, contracts, and branding support."
                    headerImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
                        <section className="intro-section">
                            <div className="section-content">
                                <h2>Launch Your Freelance Practice</h2>
                                <p>Set up a compliant freelance business and focus on delivery — we handle the permits, visas, and compliance.</p>
                                <div className="highlights-grid">
                                    <div className="highlight-item">✅ Quick permits</div>
                                    <div className="highlight-item">✅ Visa & dependents</div>
                                    <div className="highlight-item">✅ VAT & banking</div>
                                    <div className="highlight-item">✅ Contracts & brand</div>
                                </div>
                            </div>
                        </section>
                        <section className="services-section">
                            <div className="section-content">
                                <h2>Our Services</h2>
                                <div className="services-grid">
                                    <div className="service-card"><div className="service-icon">🪪</div><h3>Freelance Licenses</h3><p>IFZA, RAKEZ, SPC or mainland permits aligned to your activity.</p></div>
                                    <div className="service-card"><div className="service-icon">🛂</div><h3>Residency & Visas</h3><p>Medicals, biometrics, stamping, and dependents.</p></div>
                                    <div className="service-card"><div className="service-icon">💳</div><h3>Tax & Banking</h3><p>VAT registration/reporting and bank account opening.</p></div>
                                    <div className="service-card"><div className="service-icon">🏅</div><h3>Golden Visa</h3><p>Eligibility assessment and 10‑year residency processing.</p></div>
                                    <div className="service-card"><div className="service-icon">🌐</div><h3>Brand & Portfolio</h3><p>Websites, branding strategy, and digital portfolios.</p></div>
                                    <div className="service-card"><div className="service-icon">📄</div><h3>Contracts & Legal</h3><p>Drafting/reviewing client and sponsorship agreements.</p></div>
                                </div>
                            </div>
                        </section>
                        <section className="cta-section">
                            <div className="cta-content">
                                <h2>Start Your Freelance Setup</h2>
                                <p>Get expert support for licensing, visas, and compliance.</p>
                                <Link to="/contact" className="cta-btn">Get Started</Link>
                            </div>
                        </section>
                    </div>
                </PageLayout>
            } />
            <Route path="/startups" element={
                <PageLayout
                    title="Startups & Entrepreneurs"
                    description="End-to-end company formation, approvals, visas, legal, tax, and launch readiness."
                    headerImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
                        <section className="intro-section">
                            <div className="section-content">
                                <h2>From Idea to Incorporation</h2>
                                <p>We guide founders through formation, visas, legal, tax, and launch — creating solid foundations for growth.</p>
                                <div className="highlights-grid">
                                    <div className="highlight-item">✅ Fast incorporation</div>
                                    <div className="highlight-item">✅ Investor‑ready structures</div>
                                    <div className="highlight-item">✅ Tax & compliance</div>
                                    <div className="highlight-item">✅ Hiring support</div>
                                </div>
                            </div>
                        </section>
                        <section className="services-section">
                            <div className="section-content">
                                <h2>Startup Essentials</h2>
                                <div className="services-grid">
                                    <div className="service-card"><div className="service-icon">🏢</div><h3>Company Formation</h3><p>Mainland, Free Zone, or offshore — jurisdiction selection and setup.</p></div>
                                    <div className="service-card"><div className="service-icon">✅</div><h3>Approvals</h3><p>DET, Municipality, and sector approvals for compliance.</p></div>
                                    <div className="service-card"><div className="service-icon">™️</div><h3>Trademark</h3><p>Searches, filings, and renewals to protect IP.</p></div>
                                    <div className="service-card"><div className="service-icon">🛂</div><h3>Visas</h3><p>Investor/Partner and Employee visas end‑to‑end.</p></div>
                                    <div className="service-card"><div className="service-icon">🏗️</div><h3>Structuring</h3><p>Efficient structures for scale and investment.</p></div>
                                    <div className="service-card"><div className="service-icon">📑</div><h3>PRO Services</h3><p>Streamlined liaison across authorities.</p></div>
                                    <div className="service-card"><div className="service-icon">📊</div><h3>Tax & Accounting</h3><p>Corporate tax, VAT, bookkeeping, reporting.</p></div>
                                    <div className="service-card"><div className="service-icon">⚖️</div><h3>Legal Agreements</h3><p>MOAs, partnership and investment agreements.</p></div>
                                </div>
                            </div>
                        </section>
                        <section className="cta-section">
                            <div className="cta-content">
                                <h2>Launch with NXTStar</h2>
                                <p>Make your setup investor‑ready and compliant from day one.</p>
                                <Link to="/contact" className="cta-btn">Start Now</Link>
                            </div>
                        </section>
                    </div>
                </PageLayout>
            } />
            <Route path="/investors" element={
                <PageLayout
                    title="Foreign Investors & Expats"
                    description="Investor visas, Golden Visa, holding/SPV structures, wealth and tax residency advisory."
                    headerImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
                        <section className="intro-section">
                            <div className="section-content">
                                <h2>Invest, Live, and Grow in the UAE</h2>
                                <p>We streamline investor residency, company formation, banking, and wealth structures.</p>
                                <div className="highlights-grid">
                                    <div className="highlight-item">✅ Residency pathways</div>
                                    <div className="highlight-item">✅ Asset protection</div>
                                    <div className="highlight-item">✅ Tax efficiency</div>
                                    <div className="highlight-item">✅ Concierge setup</div>
                                </div>
                            </div>
                        </section>
                        <section className="services-section">
                            <div className="section-content">
                                <h2>Investor Services</h2>
                                <div className="services-grid">
                                    <div className="service-card"><div className="service-icon">🛂</div><h3>Investor Residency</h3><p>Tailored to your investment profile and goals.</p></div>
                                    <div className="service-card"><div className="service-icon">🏅</div><h3>Golden Visa</h3><p>Eligibility and processing for 10‑year residency.</p></div>
                                    <div className="service-card"><div className="service-icon">👨‍👩‍👧</div><h3>Family Visas</h3><p>Dependents processing and ongoing support.</p></div>
                                    <div className="service-card"><div className="service-icon">🏢</div><h3>Holding & SPVs</h3><p>Asset protection, tax‑optimized structures.</p></div>
                                    <div className="service-card"><div className="service-icon">🏛️</div><h3>Foundations</h3><p>Family/wealth foundations for succession.</p></div>
                                    <div className="service-card"><div className="service-icon">💼</div><h3>Wealth Structuring</h3><p>Estate planning, trusts, and optimization.</p></div>
                                    <div className="service-card"><div className="service-icon">📜</div><h3>TRC & Legal</h3><p>Tax residency certificates and legal setup.</p></div>
                                    <div className="service-card"><div className="service-icon">🧭</div><h3>Concierge</h3><p>Market entry, banking, relocation support.</p></div>
                                </div>
                            </div>
                        </section>
                        <section className="cta-section">
                            <div className="cta-content">
                                <h2>Talk to an Advisor</h2>
                                <p>Plan your UAE investment and residency pathway with confidence.</p>
                                <Link to="/contact" className="cta-btn">Book a Call</Link>
                            </div>
                        </section>
                    </div>
                </PageLayout>
            } />
            <Route path="/residents" element={
                <PageLayout
                    title="UAE Residents"
                    description="Dependent sponsorship, Golden Visa help, and tailored insurance/attestation support."
                    headerImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    headerOverlayColor="rgba(0, 0, 0, 0.7)"
                >
                    <div className="pro-services-page">
                        <section className="intro-section">
                            <div className="section-content">
                                <h2>Support for UAE Residents</h2>
                                <p>Simplify sponsorships, Golden Visas, insurance, and attestations with expert help.</p>
                                <div className="highlights-grid">
                                    <div className="highlight-item">✅ Dependents handled</div>
                                    <div className="highlight-item">✅ Golden Visa help</div>
                                    <div className="highlight-item">✅ Insurance options</div>
                                    <div className="highlight-item">✅ Attestations</div>
                                </div>
                            </div>
                        </section>
                        <section className="services-section">
                            <div className="section-content">
                                <h2>Resident Services</h2>
                                <div className="services-grid">
                                    <div className="service-card"><div className="service-icon">👨‍👩‍👧</div><h3>Dependent Sponsorship</h3><p>Family and domestic worker visa processing and approvals.</p></div>
                                    <div className="service-card"><div className="service-icon">🏅</div><h3>Golden Visa</h3><p>Eligibility checks and end‑to‑end application.</p></div>
                                    <div className="service-card"><div className="service-icon">🛡️</div><h3>Insurance</h3><p>Health, business, and personal coverage options.</p></div>
                                    <div className="service-card"><div className="service-icon">📄</div><h3>Attestation</h3><p>Attestation, legalization, and translation support.</p></div>
                                </div>
                            </div>
                        </section>
                        <section className="cta-section">
                            <div className="cta-content">
                                <h2>Get Resident Support</h2>
                                <p>We’ll handle the paperwork — you focus on life and work.</p>
                                <Link to="/contact" className="cta-btn">Contact Us</Link>
                            </div>
                        </section>
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