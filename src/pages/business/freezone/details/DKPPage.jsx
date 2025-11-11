import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import '../../../../styles/pages/business/freezone/details/DKPPage.css';

const DKPPage = () => {
    return (
        <PageLayout
            title="Start Your Education Business in DKP & DIAC"
            description="Launch your education business in Dubai Knowledge Park (DKP) and Dubai International Academic City (DIAC) - UAE's leading education and training hubs with NxtStar's expert guidance."
            headerImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                <section className="intro-section">
                    <div className="section-content">
                        <h2>Start Your Education or Training Business in DKP & DIAC with NxtStar</h2>
                        <p>
                            Dubai Knowledge Park (DKP) and Dubai International Academic City (DIAC) are the UAE's
                            leading education and training hubs, developed by TECOM Group to support human capital
                            development across the region. DKP focuses on professional training and HR development,
                            while DIAC is home to major international universities and higher education institutions.
                        </p>
                        <p>
                            At NxtStar Management Consultancy, we help educational organizations, training providers,
                            and consultancy firms establish their presence in these premier academic free zones with ease.
                        </p>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-content">
                        <h2>Why Choose DKP & DIAC?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🎓</div>
                                <h3>Specialized Academic Zones</h3>
                                <p>Tailored for education, HR, and learning services</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📍</div>
                                <h3>Strategic Dubai Location</h3>
                                <p>Well-connected to key residential and business districts</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🌐</div>
                                <h3>Global Community</h3>
                                <p>Home to universities from over 20 countries</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏛️</div>
                                <h3>Purpose-Built Facilities</h3>
                                <p>Campuses, classrooms, and co-working offices</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">💰</div>
                                <h3>100% Ownership</h3>
                                <p>Full repatriation of profits and capital</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Who Can Benefit from DKP & DIAC?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">🏫</div>
                                <h3>Universities & Colleges</h3>
                                <p>International institutions establishing UAE branches</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📚</div>
                                <h3>Training Institutes</h3>
                                <p>Vocational and professional training providers</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">👥</div>
                                <h3>HR & Learning Providers</h3>
                                <p>Corporate learning and development services</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🎯</div>
                                <h3>Education Consultancies</h3>
                                <p>Education consultancies and recruitment agencies</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">💻</div>
                                <h3>EdTech Companies</h3>
                                <p>Online learning platforms and educational technology</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="setup-section">
                    <div className="section-content">
                        <h2>Setup Process</h2>
                        <div className="setup-grid">
                            <div className="setup-card">
                                <div className="setup-icon">📋</div>
                                <h3>License Category</h3>
                                <p>Select your license category (Education, Consultancy, or Services)</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✍️</div>
                                <h3>Documentation</h3>
                                <p>Reserve trade name and prepare required documentation</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✅</div>
                                <h3>Approvals</h3>
                                <p>Obtain academic or training approvals where applicable</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏢</div>
                                <h3>Space Selection</h3>
                                <p>Lease campus, office, or flexi-desk space</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">📜</div>
                                <h3>License Issuance</h3>
                                <p>Receive your trade license</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏦</div>
                                <h3>Banking & Visas</h3>
                                <p>Apply for visas and open UAE bank account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cost-section">
                    <div className="section-content">
                        <h2>Cost of DKP & DIAC Business Setup</h2>
                        <div className="cost-info">
                            <p>Setup costs generally start from AED 15,000, depending on activity type, space requirements, and regulatory approvals.</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>DKP and DIAC are ideal for organizations focused on education, learning, and talent development.
                            NxtStar will guide you through licensing, approvals, and setup—so you can focus on delivering
                            excellence in education.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default DKPPage;