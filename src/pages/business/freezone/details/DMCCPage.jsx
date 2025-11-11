import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import '../../../../styles/pages/business/freezone/details/DMCCPage.css';

const DMCCPage = () => {
    return (
        <PageLayout
            title="Start Your DMCC Free Zone Business"
            description="Launch your business in Dubai Multi Commodities Centre (DMCC) - Dubai's premier free zone for trade, commodities and innovation with NxtStar's expert guidance."
            headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                <section className="intro-section">
                    <div className="section-content">
                        <h2>Start Your Business in DMCC Free Zone with NxtStar</h2>
                        <p>
                            Dubai Multi Commodities Centre (DMCC) is Dubai's premier free zone and global trading hub,
                            strategically located in the heart of Dubai at Jumeirah Lakes Towers (JLT). As one of the world's
                            leading free zones, DMCC is home to over 24,000 companies ranging from commodities traders to
                            tech startups and professional services firms.
                        </p>
                        <p>
                            At NxtStar Management Consultancy, we streamline your DMCC company formation—managing licensing,
                            office setup, and visa processing so you can start operating efficiently.
                        </p>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-content">
                        <h2>Why Choose DMCC Free Zone?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🌍</div>
                                <h3>World-Class Infrastructure</h3>
                                <p>Seamless access to global markets and premium JLT location</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏢</div>
                                <h3>100% Foreign Ownership</h3>
                                <p>Full control with no local partner required</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏭</div>
                                <h3>Premium Facilities</h3>
                                <p>Offices, co-working spaces, and corporate towers available</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🌐</div>
                                <h3>Global Recognition</h3>
                                <p>Multiple "Global Free Zone of the Year" awards</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚙️</div>
                                <h3>Flexible Solutions</h3>
                                <p>Tailored packages for startups and corporations</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">💰</div>
                                <h3>Zero Tax Benefits</h3>
                                <p>No corporate or personal income tax with full profit repatriation</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Who Can Benefit from DMCC?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">💎</div>
                                <h3>Commodities & Trading</h3>
                                <p>Gold, diamonds, precious metals, and energy trading</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">👔</div>
                                <h3>Professional Services</h3>
                                <p>Consulting, legal, and business services</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🚀</div>
                                <h3>Tech Companies</h3>
                                <p>Technology and innovation-driven businesses</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🌐</div>
                                <h3>Global Enterprises</h3>
                                <p>Multinational corporations and regional offices</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📈</div>
                                <h3>Financial Services</h3>
                                <p>Investment firms and financial advisors</p>
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
                                <h3>Choose Business Type</h3>
                                <p>Select between FZ-LLC or Branch office structure</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✍️</div>
                                <h3>Name Reservation</h3>
                                <p>Reserve trade name and submit required documents</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏢</div>
                                <h3>Office Selection</h3>
                                <p>Choose from various office solutions in JLT</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">📜</div>
                                <h3>License Issuance</h3>
                                <p>Receive your trade license to start operations</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">👥</div>
                                <h3>Visa Processing</h3>
                                <p>Apply for residence visas and Emirates ID</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏦</div>
                                <h3>Bank Account</h3>
                                <p>Open your corporate bank account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>DMCC combines global recognition with premium infrastructure. Let us help you establish your presence in this prestigious free zone.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default DMCCPage;