import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import '../../../../styles/pages/business/freezone/details/DICPage.css';

const DICPage = () => {
    return (
        <PageLayout
            title="Start Your Business in Dubai Internet City"
            description="Launch your tech business in Dubai Internet City (DIC) - The Middle East's premier technology hub and home to global tech giants with NxtStar's expert guidance."
            headerImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                <section className="intro-section">
                    <div className="section-content">
                        <h2>Start Your Business in Dubai Internet City with NxtStar</h2>
                        <p>
                            Dubai Internet City (DIC) is the Middle East's premier technology hub—home to global giants
                            like Google, Microsoft, and Meta, as well as thousands of startups and SMEs. Part of TECOM
                            Group, DIC provides an innovation-driven ecosystem with world-class infrastructure and access
                            to top talent.
                        </p>
                        <p>
                            At NxtStar Management Consultancy, we help tech entrepreneurs and enterprises establish their
                            presence in DIC seamlessly—from licensing to visas and office space solutions.
                        </p>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-content">
                        <h2>Why Choose Dubai Internet City?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">💻</div>
                                <h3>Premier Tech Ecosystem</h3>
                                <p>Ideal for ICT, AI, SaaS, and digital ventures</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">📍</div>
                                <h3>Strategic Location</h3>
                                <p>In the heart of Dubai Media City area near major business zones</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🌐</div>
                                <h3>Access to Global Corporates</h3>
                                <p>Join a network of over 1,600 international firms</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏢</div>
                                <h3>Flexible Office Solutions</h3>
                                <p>From innovation hubs to premium corporate suites</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">💰</div>
                                <h3>Full Foreign Ownership</h3>
                                <p>100% repatriation of capital and profits</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Who Can Benefit from DIC?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">👨‍💻</div>
                                <h3>Software Developers</h3>
                                <p>Tech startups and software development firms</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🔧</div>
                                <h3>IT Service Providers</h3>
                                <p>IT consultancies and service companies</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🔐</div>
                                <h3>Cloud & Security</h3>
                                <p>Cloud, AI, and cybersecurity companies</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🛒</div>
                                <h3>E-Commerce</h3>
                                <p>E-commerce and digital platforms</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🌍</div>
                                <h3>Global Tech Corps</h3>
                                <p>Global technology corporations</p>
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
                                <p>Select your license category (Commercial or Freelancer)</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✍️</div>
                                <h3>Name Registration</h3>
                                <p>Reserve trade name and submit required documents</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏢</div>
                                <h3>Office Space</h3>
                                <p>Lease your office space in DIC</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">📜</div>
                                <h3>License Issuance</h3>
                                <p>Receive trade license and establishment card</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏦</div>
                                <h3>Banking & Visas</h3>
                                <p>Apply for visas and open business bank account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cost-section">
                    <div className="section-content">
                        <h2>Cost of DIC Business Setup</h2>
                        <div className="cost-info">
                            <p>Typical setup costs range from AED 15,000–25,000 depending on license type and office space.</p>
                            <p>Freelancer and startup packages are available with flexible payment options.</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>DIC connects innovation with opportunity—ideal for tech-focused entrepreneurs.
                            Let NxtStar help you establish and grow your company in Dubai's digital hub.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default DICPage;