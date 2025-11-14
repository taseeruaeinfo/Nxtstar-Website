import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/PRO.css';

const Investors = () => {
    return (
        <PageLayout
            title="Foreign Investors & Expats"
            description="Investor visas, Golden Visa, holding/SPV structures, wealth and tax residency advisory."
            headerImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="pro-services-page">
                <section className="intro-section">
                    <div className="section-content">
                        <div className="intro-with-image">
                            <div className="intro-text">
                                <h2>Invest, Live, and Grow in the UAE</h2>
                                <p>We streamline investor residency, company formation, banking, and wealth structures.</p>
                            </div>
                            <div className="intro-image">
                                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop" alt="Investment" />
                            </div>
                        </div>
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
                            <div className="service-card">
                                <div className="service-icon">🛂</div>
                                <h3>Investor Residency</h3>
                                <p>Tailored to your investment profile and goals.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏅</div>
                                <h3>Golden Visa</h3>
                                <p>Eligibility and processing for 10‑year residency.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">👨‍👩‍👧</div>
                                <h3>Family Visas</h3>
                                <p>Dependents processing and ongoing support.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏢</div>
                                <h3>Holding & SPVs</h3>
                                <p>Asset protection, tax‑optimized structures.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏛️</div>
                                <h3>Foundations</h3>
                                <p>Family/wealth foundations for succession.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💼</div>
                                <h3>Wealth Structuring</h3>
                                <p>Estate planning, trusts, and optimization.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📜</div>
                                <h3>TRC & Legal</h3>
                                <p>Tax residency certificates and legal setup.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🧭</div>
                                <h3>Concierge</h3>
                                <p>Market entry, banking, relocation support.</p>
                            </div>
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
    );
};

export default Investors;
