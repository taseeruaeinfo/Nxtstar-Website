import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaPercent, FaHome, FaClipboardList, FaClock, FaUserShield, FaMapMarkerAlt, FaIndustry, FaStore, FaLightbulb } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/AFZPage.css';

const AFZPage = () => {
    return (
        <PageLayout
            title="Ajman Free Zone (AFZ)"
            description="Affordable, flexible, and fast setup for startups, SMEs, traders, e‑commerce, manufacturing and consultancy — established 1988."
            headerImage="https://images.unsplash.com/photo-1500043357865-c6b8827edf9a?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                {/* Overview */}
                <section className="section-content">
                    <h2>Start Your Business in Ajman Free Zone with NxtStar</h2>
                    <p>Ajman Free Zone (AFZ) is one of the UAE’s most popular destinations for entrepreneurs and startups seeking affordable, flexible, and fast company setup solutions. Established in 1988, AFZ supports thousands of businesses across trading, services, e‑commerce, manufacturing, and consultancy.</p>
                    <p>With cost‑effective packages, strategic location, and a simplified process, AFZ is especially attractive for SMEs and first‑time investors. NxtStar handles documentation, licensing, visas, and banking so you can focus on growth.</p>
                </section>

                {/* Why Choose AFZ */}
                <section className="section-content">
                    <h2>Why Choose Ajman Free Zone?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaPercent /></span>
                            <h3>100% Foreign Ownership</h3>
                            <p>Full control of your company without a local partner requirement.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaHome /></span>
                            <h3>No Office Requirement</h3>
                            <p>Start with Flexi‑desk, shared workspace, or virtual office.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaClipboardList /></span>
                            <h3>Multi‑Activity Options</h3>
                            <p>Combine several activities under one license for flexibility.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaClock /></span>
                            <h3>Fast Setup</h3>
                            <p>Business licenses can be issued within just a few days.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaUserShield /></span>
                            <h3>Residency Visas</h3>
                            <p>Investor and employee visa options to scale your team.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaMapMarkerAlt /></span>
                            <h3>Strategic Location</h3>
                            <p>In Ajman with access to Dubai and Sharjah, plus ports and airports.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaIndustry /></span>
                            <h3>Industrial Benefits</h3>
                            <p>Dedicated zones for manufacturing and industrial operations.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Benefit */}
                <section className="section-content">
                    <h2>Who Can Benefit from AFZ?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Trading Companies</h3>
                            <p>Import‑export and general trading with easy logistics access.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>E‑Commerce</h3>
                            <p>Online businesses looking for affordable UAE registration.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Consultancies & Services</h3>
                            <p>Professional and advisory firms across sectors.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Manufacturing & Industry</h3>
                            <p>Warehouse and industrial space at competitive costs.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Startups & Freelancers</h3>
                            <p>Test new ideas with low overheads and flexible packages.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process */}
                <section className="section-content">
                    <h2>Business Setup Process in AFZ</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Select Activity</h3>
                            <p>Choose your business activity that aligns with your model.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Choose Structure</h3>
                            <p>Pick legal structure (FZE, FZC, or branch) and reserve trade name.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: Submit Documents</h3>
                            <p>Provide passport copy, proof of residence, and application forms.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Obtain License</h3>
                            <p>Receive your AFZ license after authority approval.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: Visas & Banking</h3>
                            <p>Apply for investor/employee visas and open a UAE corporate account.</p>
                        </div>
                    </div>
                </section>

                {/* Cost */}
                <section className="section-content">
                    <h2>Cost of Setting Up in Ajman Free Zone</h2>
                    <div className="cost-info">
                        <p>AFZ is known for budget‑friendly packages. Entry‑level licenses start around AED 13,131 annually. Visa‑inclusive and multi‑activity packages are available at competitive rates, with virtual office options to reduce costs further.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>AFZ offers one of the most cost‑effective and flexible ways to set up in the UAE. NxtStar’s experts will guide you to the best setup for your goals.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default AFZPage;
