import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import '../../../../styles/pages/business/freezone/details/DMCPage.css';

const DMCPage = () => {
    return (
        <PageLayout
            title="Start Your Business in Dubai Media City"
            description="Launch your media business in Dubai Media City (DMC) - The region's leading hub for media, communications, and creative industries with NxtStar's expert guidance."
            headerImage="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                <section className="intro-section">
                    <div className="section-content">
                        <h2>Start Your Business in Dubai Media City with NxtStar</h2>
                        <p>
                            Dubai Media City (DMC) is the region's leading hub for media, communications, and creative
                            industries. Part of TECOM Group, DMC is home to global names like CNN, BBC, and Sony,
                            alongside hundreds of regional production houses, agencies, and freelancers.
                        </p>
                        <p>
                            At NxtStar Management Consultancy, we help creative professionals, agencies, and media
                            entrepreneurs set up and scale their businesses in DMC effortlessly.
                        </p>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-content">
                        <h2>Why Choose Dubai Media City?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🎥</div>
                                <h3>Media & Creative Hub</h3>
                                <p>Ideal for advertising, film, PR, and production companies</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📍</div>
                                <h3>Prime Location</h3>
                                <p>In Dubai's central business area, near Dubai Internet City</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🤝</div>
                                <h3>Global Networking</h3>
                                <p>Access to industry leaders and creative talent</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏢</div>
                                <h3>State-of-the-Art Infrastructure</h3>
                                <p>Studios, offices, and co-working spaces</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">💰</div>
                                <h3>Full Ownership & Repatriation</h3>
                                <p>100% foreign ownership and tax-free environment</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Who Can Benefit from DMC?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">🎯</div>
                                <h3>Advertising & PR Agencies</h3>
                                <p>Marketing and communications firms</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📺</div>
                                <h3>Production & Broadcasting</h3>
                                <p>Production and broadcasting companies</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">📱</div>
                                <h3>Digital Content Creators</h3>
                                <p>Digital content creators and influencers</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🎪</div>
                                <h3>Event Management</h3>
                                <p>Event management and production firms</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">💼</div>
                                <h3>Freelancers</h3>
                                <p>Freelancers and media consultants</p>
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
                                <h3>License Selection</h3>
                                <p>Choose your license type and business activity</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✍️</div>
                                <h3>Name Registration</h3>
                                <p>Reserve trade name and submit application documents</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏢</div>
                                <h3>Space Selection</h3>
                                <p>Finalize your office or studio space in DMC</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">📜</div>
                                <h3>License Issuance</h3>
                                <p>Receive trade license and establishment card</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏦</div>
                                <h3>Banking & Visas</h3>
                                <p>Apply for visas and open corporate bank account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cost-section">
                    <div className="section-content">
                        <h2>Cost of DMC Business Setup</h2>
                        <div className="cost-info">
                            <p>Setup starts around AED 15,000–20,000, depending on activity and space requirements.</p>
                            <p>Freelancer and flexi-office packages are available for smaller teams.</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>DMC is the perfect environment for creative and media-driven businesses.
                            NxtStar's expert consultants make your DMC setup smooth and strategic.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default DMCPage;