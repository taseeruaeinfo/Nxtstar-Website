import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/PRO.css';

const Creators = () => {
    return (
        <PageLayout
            title="Digital Creators & Influencers"
            description="Licensing, UAE Media Council approvals, visas, banking and compliant structures for creators."
            headerImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="pro-services-page">
                <section className="intro-section">
                    <div className="section-content">
                        <div className="intro-with-image">
                            <div className="intro-text">
                                <h2>Empower Your Creator Business</h2>
                                <p>NXTStar helps creators and influencers establish a compliant UAE business identity so you can focus on creativity while we manage licensing and approvals.</p>
                            </div>
                            <div className="intro-image">
                                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=500&auto=format&fit=crop" alt="Digital Creator" />
                            </div>
                        </div>
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
                            <div className="service-card">
                                <div className="service-icon">🎯</div>
                                <h3>Trade License</h3>
                                <p>Freelance, e‑trader, or freezone licenses tailored for creators.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🪪</div>
                                <h3>Media Council Permits</h3>
                                <p>Influencer/Advertiser approvals with full submission support.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🌍</div>
                                <h3>Foreign Creator Approvals</h3>
                                <p>Specialized support for visiting international creators.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🛂</div>
                                <h3>Residency Visas</h3>
                                <p>End‑to‑end influencer/freelancer visa handling and renewals.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏦</div>
                                <h3>Bank Accounts</h3>
                                <p>Business and personal banking for monetization.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🏅</div>
                                <h3>Golden Visa</h3>
                                <p>Eligibility assessment and application support.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📄</div>
                                <h3>Agreements</h3>
                                <p>Sponsorship and collaboration contract drafting/review.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💡</div>
                                <h3>Monetization</h3>
                                <p>Strategies for brand deals, products, and subscriptions.</p>
                            </div>
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
    );
};

export default Creators;
