import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import '../../../../styles/pages/business/freezone/details/DWTCPage.css';

const DWTCPage = () => {
    return (
        <PageLayout
            title="Start Your DWTC Free Zone Business"
            description="Launch your business in Dubai World Trade Centre (DWTC) Free Zone - A premium business hub in Dubai's central business district with NxtStar's expert guidance."
            headerImage="https://images.unsplash.com/photo-1582638072934-397eba2b780e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                <section className="intro-section">
                    <div className="section-content">
                        <h2>Start Your Business in DWTC Free Zone with NxtStar</h2>
                        <p>
                            Located in the heart of Dubai's central business district, the Dubai World Trade Centre (DWTC)
                            Free Zone is a premium environment for businesses seeking a prestigious address with flexible
                            office options. Designed for global corporations, SMEs, and startups, DWTC offers a modern
                            infrastructure and a fast-track business setup experience.
                        </p>
                        <p>
                            NxtStar Management Consultancy ensures a smooth incorporation process - handling your licensing,
                            visa, and banking arrangements efficiently.
                        </p>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-content">
                        <h2>Why Choose DWTC Free Zone?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">📍</div>
                                <h3>Central Dubai Location</h3>
                                <p>Near Sheikh Zayed Road and major metro stations</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏢</div>
                                <h3>Prestigious Business Address</h3>
                                <p>Ideal for professional and international firms</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏗️</div>
                                <h3>Flexible Office Options</h3>
                                <p>From co-working desks to full corporate suites</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚡</div>
                                <h3>Quick Setup</h3>
                                <p>Business license issued in just 3–5 days</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🤝</div>
                                <h3>Networking Hub</h3>
                                <p>Close proximity to trade fairs and major events</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Who Can Benefit from DWTC?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">⚖️</div>
                                <h3>Professional Services</h3>
                                <p>Legal, Financial, and Management consulting</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">💻</div>
                                <h3>Technology & Consulting</h3>
                                <p>IT services and business consulting firms</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🌐</div>
                                <h3>International Branches</h3>
                                <p>Global companies seeking UAE presence</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🎪</div>
                                <h3>Event Companies</h3>
                                <p>Event & Exhibition management firms</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🚀</div>
                                <h3>Startups</h3>
                                <p>New ventures seeking a prime Dubai presence</p>
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
                                <h3>Business Structure</h3>
                                <p>Choose your business activity and structure</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✍️</div>
                                <h3>Application</h3>
                                <p>Submit application and reserve trade name</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏢</div>
                                <h3>Office Space</h3>
                                <p>Finalize office space lease within DWTC</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">📜</div>
                                <h3>Trade License</h3>
                                <p>Obtain your trade license</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">👥</div>
                                <h3>Visa & Banking</h3>
                                <p>Apply for visas and open corporate account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cost-section">
                    <div className="section-content">
                        <h2>Cost of DWTC Business Setup</h2>
                        <div className="cost-info">
                            <p>Setup packages start around AED 15,000–18,000, depending on activity type and office space.</p>
                            <p>Flexi-desk and visa-inclusive options are also available.</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>DWTC Free Zone offers credibility, access, and convenience in one location. Let NxtStar's experts help you establish your company quickly and confidently.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default DWTCPage;