import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaCrown, FaMapMarkerAlt, FaBriefcase, FaRocket, FaUsers, FaWallet } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/MeydanPage.css';

const MeydanPage = () => {
    return (
        <PageLayout
            title="Meydan Free Zone — Prestige, Power, and Possibility"
            description="Meydan Free Zone: a prestigious Dubai free zone near Meydan Hotel & Racecourse — ideal for businesses seeking prestige and strong market positioning."
            headerImage="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                <section className="section-content">
                    <h2>Meydan Free Zone — Prestige, Power, and Possibility</h2>
                    <p>When you set up at Meydan Free Zone, you’re not just getting a license—you’re securing a business identity with prestige. Located near the iconic Meydan Hotel and Racecourse, Meydan blends luxury, strategic location, and business opportunity.</p>
                </section>

                <section className="section-content">
                    <h2>Why Meydan?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaCrown /></span>
                            <h3>Royal Endorsement</h3>
                            <p>A license backed by the Dubai Royal Family gives strong international trust and prestige.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaMapMarkerAlt /></span>
                            <h3>Prime Location</h3>
                            <p>Only ~15 minutes from Downtown Dubai and Dubai International Airport — excellent connectivity.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaBriefcase /></span>
                            <h3>Modern Licensing</h3>
                            <p>Wide range of permitted activities: trading, consultancy, media, technology and more.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaRocket /></span>
                            <h3>Fast Incorporation</h3>
                            <p>Licenses can be issued within days so you can start operations quickly.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaUsers /></span>
                            <h3>Multiple Visas</h3>
                            <p>Flexible visa packages for owners, employees, and partners to scale teams.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaWallet /></span>
                            <h3>Banking Friendly</h3>
                            <p>Strong reputation helps simplify corporate banking and account openings.</p>
                        </div>
                    </div>
                </section>

                <section className="section-content">
                    <h2>Who chooses Meydan?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>International Entrepreneurs</h3>
                            <p>Businesses seeking a prestigious Dubai presence.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Consultants & Professionals</h3>
                            <p>Firms needing credibility and a competitive edge.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>E‑Commerce & Trading</h3>
                            <p>Companies wanting proximity to Dubai’s commercial hubs.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Luxury & Lifestyle Brands</h3>
                            <p>Brands aligning with Meydan’s prestigious image.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Startups & SMEs</h3>
                            <p>Scalable options without heavy overheads for early-stage growth.</p>
                        </div>
                    </div>
                </section>

                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Activity & License</h3>
                            <p>Choose the right activities and license type for your business model.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Documentation</h3>
                            <p>We prepare and submit required documents and applications on your behalf.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: License Issuance</h3>
                            <p>Receive your license; many setups complete within days.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Banking & Visas</h3>
                            <p>We assist with corporate bank accounts and residence visas for your team.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: Launch & Support</h3>
                            <p>Ongoing support and long-term partnership for business growth.</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Start your Meydan company now with NxtStar</h2>
                        <p>NxtStar guides the entire setup: activities, documentation, approvals, visas, banking, and long-term support. Your Meydan presence is a statement—let’s make it count.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default MeydanPage;
