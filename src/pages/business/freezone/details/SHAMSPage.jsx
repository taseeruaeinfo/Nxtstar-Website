import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import '../../../../styles/pages/business/freezone/details/SHAMSPage.css';

const SHAMSPage = () => {
    return (
        <PageLayout
            title="Start Your SHAMS Free Zone Business"
            description="Launch your business in Sharjah Media City (SHAMS) - A dynamic free zone for entrepreneurs, freelancers, and startups with NxtStar's expert guidance."
            headerImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                <section className="intro-section">
                    <div className="section-content">
                        <h2>Start Your Business in SHAMS Free Zone with NxtStar</h2>
                        <p>
                            Sharjah Media City (SHAMS) is one of the UAE's fastest-growing free zones, designed for
                            entrepreneurs, freelancers, and startups seeking affordable and creative business solutions.
                            Although focused on media and digital industries, SHAMS supports over 150 business activities
                            across various sectors—from consultancy to e-commerce.
                        </p>
                        <p>
                            At NxtStar Management Consultancy, we simplify your SHAMS company formation with quick
                            licensing, visa processing, and full business support.
                        </p>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-content">
                        <h2>Why Choose SHAMS Free Zone?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">💰</div>
                                <h3>Affordable Setup</h3>
                                <p>Cost-effective business formation packages</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏢</div>
                                <h3>100% Ownership</h3>
                                <p>No local sponsor required</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📋</div>
                                <h3>Multi-Activity License</h3>
                                <p>Combine up to six activities under one license</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏠</div>
                                <h3>Virtual Office</h3>
                                <p>No physical office required with full visa eligibility</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚡</div>
                                <h3>Fast Incorporation</h3>
                                <p>Get licensed in as little as one day</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Who Can Benefit from SHAMS?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">🎨</div>
                                <h3>Media & Creative</h3>
                                <p>Digital content creators and media professionals</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">👔</div>
                                <h3>Consultants</h3>
                                <p>Professional service providers and advisors</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🛒</div>
                                <h3>E-Commerce</h3>
                                <p>Online sellers and digital retailers</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🚀</div>
                                <h3>Startups</h3>
                                <p>New ventures and freelancers</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📚</div>
                                <h3>Training & Education</h3>
                                <p>Digital agencies and educational services</p>
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
                                <h3>Choose Structure</h3>
                                <p>Select activities and company structure (FZE or FZC)</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✍️</div>
                                <h3>Name Registration</h3>
                                <p>Reserve trade name and submit KYC documents</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">📜</div>
                                <h3>License Issuance</h3>
                                <p>Receive trade license within 24–48 hours</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">👥</div>
                                <h3>Visa Processing</h3>
                                <p>Apply for residence visas and Emirates ID</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏦</div>
                                <h3>Banking Setup</h3>
                                <p>Open your UAE bank account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>SHAMS offers an ideal launchpad for new entrepreneurs and creative professionals.
                            NxtStar will guide you through the entire setup process with expert support.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default SHAMSPage;