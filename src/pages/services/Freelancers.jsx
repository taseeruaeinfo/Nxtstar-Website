import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/PRO.css';

const Freelancers = () => {
    return (
        <PageLayout
            title="Freelancers & Consultants"
            description="Freelance permits, visas, tax/VAT setup, banking, contracts, and branding support."
            headerImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="pro-services-page">
                <section className="intro-section">
                    <div className="section-content">
                        <div className="intro-with-image">
                            <div className="intro-text">
                                <h2>Launch Your Freelance Practice</h2>
                                <p>Set up a compliant freelance business and focus on delivery — we handle the permits, visas, and compliance.</p>
                            </div>
                            <div className="intro-image">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=500&auto=format&fit=crop" alt="Freelancer" />
                            </div>
                        </div>
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
                            <div className="service-card">
                                <div className="service-icon">🪪</div>
                                <h3>Freelance Licenses</h3>
                                <p>IFZA, RAKEZ, SPC or mainland permits aligned to your activity.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🛂</div>
                                <h3>Residency & Visas</h3>
                                <p>Medicals, biometrics, stamping, and dependents.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💳</div>
                                <h3>Tax & Banking</h3>
                                <p>VAT registration/reporting and bank account opening.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏅</div>
                                <h3>Golden Visa</h3>
                                <p>Eligibility assessment and 10‑year residency processing.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🌐</div>
                                <h3>Brand & Portfolio</h3>
                                <p>Websites, branding strategy, and digital portfolios.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📄</div>
                                <h3>Contracts & Legal</h3>
                                <p>Drafting/reviewing client and sponsorship agreements.</p>
                            </div>
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
    );
};

export default Freelancers;
