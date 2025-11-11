import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaWallet, FaPercent, FaClipboardList, FaHome, FaBolt, FaUsers, FaCogs, FaStore } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/NuventuresPage.css';

const NuventuresPage = () => {
    return (
        <PageLayout
            title="Ajman Nuventures Centre Free Zone"
            description="Cost‑effective, flexible, and fast setup for entrepreneurs, freelancers, startups, and SMEs — designed for innovation and growth."
            headerImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                {/* Overview */}
                <section className="section-content">
                    <h2>Start Your Business in Ajman Nuventures with NxtStar</h2>
                    <p>Ajman Nuventures Centre Free Zone is one of the UAE’s newest and most dynamic business hubs — offering cost‑effective licensing and flexible solutions for entrepreneurs, freelancers, and SMEs. Designed to support innovation and startup growth, Nuventures provides simplified company formation with modern infrastructure and affordable packages.</p>
                    <p>NxtStar Management Consultancy helps you establish your Ajman Nuventures company swiftly and transparently.</p>
                </section>

                {/* Why Choose Nuventures */}
                <section className="section-content">
                    <h2>Why Choose Ajman Nuventures Centre?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaWallet /></span>
                            <h3>Affordable Licensing</h3>
                            <p>Ideal for startups and freelancers looking for low‑cost entry.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaPercent /></span>
                            <h3>100% Ownership</h3>
                            <p>Full profit repatriation with zero income tax.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaClipboardList /></span>
                            <h3>Multi‑Activity Options</h3>
                            <p>Combine diverse services under a single license for flexibility.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaHome /></span>
                            <h3>Virtual & Physical Offices</h3>
                            <p>Choose between virtual packages or upgrade to physical offices.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaBolt /></span>
                            <h3>Quick Setup</h3>
                            <p>Licenses issued in 1–2 working days to get you started fast.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Benefit */}
                <section className="section-content">
                    <h2>Who Can Benefit from Nuventures?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Consultants & Freelancers</h3>
                            <p>Professional services with low overhead and quick start.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>E‑Commerce & Trading</h3>
                            <p>Online sellers and trading companies with flexible licensing.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Tech Startups & Creators</h3>
                            <p>Digital businesses, creators, and app/platform ventures.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Service Providers & SMEs</h3>
                            <p>From agencies to boutique firms across multiple industries.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Entrepreneurs</h3>
                            <p>Founders seeking the most affordable route to the UAE market.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Select Activity & Structure</h3>
                            <p>Choose your activities and company structure that fit your model.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Documents & Name</h3>
                            <p>Submit KYC documents and reserve your trade name.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: License Issuance</h3>
                            <p>Receive your trade license within 1–2 working days.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Visas & Banking</h3>
                            <p>Apply for residence visas and open your corporate bank account.</p>
                        </div>
                    </div>
                </section>

                {/* Cost */}
                <section className="section-content">
                    <h2>Cost of Ajman Nuventures Business Setup</h2>
                    <div className="cost-info">
                        <p>Packages start from AED 4,888, with options for visa and non‑visa setups. Virtual office packages make it one of the UAE’s most affordable choices.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>Ajman Nuventures Centre Free Zone offers simplicity, flexibility, and affordability for every entrepreneur. NxtStar will guide you from start to launch with complete transparency.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default NuventuresPage;
