import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/PRO.css';

const Startups = () => {
    return (
        <PageLayout
            title="Startups & Entrepreneurs"
            description="End-to-end company formation, approvals, visas, legal, tax, and launch readiness."
            headerImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="pro-services-page">
                <section className="intro-section">
                    <div className="section-content">
                        <div className="intro-with-image">
                            <div className="intro-text">
                                <h2>From Idea to Incorporation</h2>
                                <p>We guide founders through formation, visas, legal, tax, and launch — creating solid foundations for growth.</p>
                            </div>
                            <div className="intro-image">
                                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=500&auto=format&fit=crop" alt="Startup Team" />
                            </div>
                        </div>
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
                            <div className="service-card">
                                <div className="service-icon">🏢</div>
                                <h3>Company Formation</h3>
                                <p>Mainland, Free Zone, or offshore — jurisdiction selection and setup.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">✅</div>
                                <h3>Approvals</h3>
                                <p>DET, Municipality, and sector approvals for compliance.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">™️</div>
                                <h3>Trademark</h3>
                                <p>Searches, filings, and renewals to protect IP.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🛂</div>
                                <h3>Visas</h3>
                                <p>Investor/Partner and Employee visas end‑to‑end.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏗️</div>
                                <h3>Structuring</h3>
                                <p>Efficient structures for scale and investment.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📑</div>
                                <h3>PRO Services</h3>
                                <p>Streamlined liaison across authorities.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📊</div>
                                <h3>Tax & Accounting</h3>
                                <p>Corporate tax, VAT, bookkeeping, reporting.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">⚖️</div>
                                <h3>Legal Agreements</h3>
                                <p>MOAs, partnership and investment agreements.</p>
                            </div>
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
    );
};

export default Startups;
