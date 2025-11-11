import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaPlane, FaGlobe, FaWarehouse, FaBuilding, FaPercent, FaBolt, FaLaptop } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/DAFZAPage.css';

const DAFZAPage = () => {
    return (
        <PageLayout
            title="Dubai Airport Free Zone (DAFZA)"
            description="Prestigious, airport-adjacent free zone with world-class logistics, infrastructure, and global connectivity — ideal for trade, aviation, logistics, and tech."
            headerImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                {/* Overview */}
                <section className="section-content">
                    <h2>Start Your Business in DAFZA with NxtStar</h2>
                    <p>Dubai Airport Free Zone (DAFZA) is one of Dubai’s most prestigious and strategically located free zones — situated next to Dubai International Airport. With world-class logistics, business infrastructure, and global connectivity, DAFZA is the ideal base for trading, aviation, logistics, and technology-driven companies.</p>
                    <p>NxtStar Management Consultancy streamlines your DAFZA company registration, visa processing, and corporate banking from start to finish.</p>
                </section>

                {/* Why Choose DAFZA */}
                <section className="section-content">
                    <h2>Why Choose DAFZA Free Zone?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaPlane /></span>
                            <h3>Prime Location</h3>
                            <p>Direct access to Dubai International Airport for unparalleled logistics speed.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaGlobe /></span>
                            <h3>Global Connectivity</h3>
                            <p>Perfect hub for import/export, distribution, and international operations.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaWarehouse /></span>
                            <h3>Modern Infrastructure</h3>
                            <p>Grade‑A warehouses, offices, and advanced logistics facilities.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaPercent /></span>
                            <h3>100% Ownership</h3>
                            <p>Tax‑free environment with full repatriation of profits and capital.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaBolt /></span>
                            <h3>Quick Setup</h3>
                            <p>Licenses typically issued within a few business days.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Benefit */}
                <section className="section-content">
                    <h2>Who Can Benefit from DAFZA?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Trading & Logistics Companies</h3>
                            <p>Distribution, import/export, and supply chain operations.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Aviation & Aerospace Firms</h3>
                            <p>Enterprises serving airline, MRO, and aviation services.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>E‑Commerce & Distribution</h3>
                            <p>Companies needing fast fulfillment and last‑mile connectivity.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Technology & Electronics</h3>
                            <p>Tech distribution, electronics trading, and high‑value goods.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>International Branch Offices</h3>
                            <p>Global firms establishing a regional HQ with premium address.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Choose Activity & Structure</h3>
                            <p>Select your business activity and legal structure.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Documents & Name</h3>
                            <p>Submit documents and reserve your company name.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: Lease Agreement</h3>
                            <p>Sign lease within DAFZA premises (office/warehouse as needed).</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Business License</h3>
                            <p>Receive your DAFZA license upon approval.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: Visas & Banking</h3>
                            <p>Apply for residence visas and set up a corporate bank account.</p>
                        </div>
                    </div>
                </section>

                {/* Cost */}
                <section className="section-content">
                    <h2>Cost of DAFZA Business Setup</h2>
                    <div className="cost-info">
                        <p>Licenses start from approximately AED 15,000–18,000 depending on business activity and office requirements.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>DAFZA is among the UAE’s most respected free zones for international trade. NxtStar will manage your setup quickly and compliantly so you can scale with confidence.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default DAFZAPage;
