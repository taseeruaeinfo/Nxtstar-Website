import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaLeaf, FaMapMarkerAlt, FaMoneyBillWave, FaBuilding, FaPercent, FaFlask, FaBolt, FaChalkboardTeacher } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/MasdarPage.css';

const MasdarPage = () => {
    return (
        <PageLayout
            title="Masdar City Free Zone"
            description="Start your sustainable business in Masdar City — Abu Dhabi’s hub for clean tech, innovation, and green economy."
            headerImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                {/* Overview */}
                <section className="section-content">
                    <h2>Start Your Sustainable Business in Masdar City with NxtStar</h2>
                    <p>Masdar City in Abu Dhabi is the UAE’s hub for sustainability, innovation, and clean technology. Known for its eco‑friendly design and green business focus, Masdar attracts companies in renewable energy, technology, and R&D.</p>
                    <p>NxtStar Management Consultancy helps entrepreneurs, startups, and international firms establish their companies in Masdar City — supporting your licensing, visas, and compliance every step of the way.</p>
                </section>

                {/* Why Choose Masdar City */}
                <section className="section-content">
                    <h2>Why Choose Masdar City?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaLeaf /></span>
                            <h3>Focus on Sustainability</h3>
                            <p>Ideal for green energy, technology, and innovation‑driven companies.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaMapMarkerAlt /></span>
                            <h3>Prime Abu Dhabi Location</h3>
                            <p>Close to major transport corridors, industrial hubs, and the capital’s business ecosystem.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaMoneyBillWave /></span>
                            <h3>Cost‑Effective Licensing</h3>
                            <p>Competitive setup options that support SMEs and startups.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaBuilding /></span>
                            <h3>Eco‑Infrastructure</h3>
                            <p>Smart offices and LEED‑certified buildings purpose‑built for sustainability.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaPercent /></span>
                            <h3>100% Ownership</h3>
                            <p>Full profit repatriation and tax‑free incentives.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Benefit */}
                <section className="section-content">
                    <h2>Who Can Benefit from Masdar City?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Renewable Energy & Clean‑Tech</h3>
                            <p>Companies innovating in solar, storage, carbon, mobility, and more.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Environmental Consultancies</h3>
                            <p>Advisory firms supporting ESG, compliance, and sustainability programs.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Research & Development</h3>
                            <p>R&D centers and labs advancing next‑gen technology and materials.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Technology & Engineering Startups</h3>
                            <p>Deep‑tech, software, and engineering ventures building for impact.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Education & Training</h3>
                            <p>Providers focused on sustainability, green skills, and training.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Select Activity</h3>
                            <p>Choose your business activity and appropriate license type.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Documents & Name</h3>
                            <p>Submit documents and reserve your trade name.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: Free Zone Approval</h3>
                            <p>Obtain Masdar City Free Zone approval for your application.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Lease Space</h3>
                            <p>Lease an office, lab, or flexi‑desk space based on your needs.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: License & Establishment</h3>
                            <p>Receive your business license and establishment card.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 6: Visas & Banking</h3>
                            <p>Apply for residence visas and open a corporate bank account.</p>
                        </div>
                    </div>
                </section>

                {/* Cost */}
                <section className="section-content">
                    <h2>Cost of Masdar City Business Setup</h2>
                    <div className="cost-info">
                        <p>Licenses typically start from AED 7,000–15,000 depending on activity and space. Eco‑office and flexi‑desk packages are available for startups.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>Masdar City is the UAE’s destination for sustainable business and innovation. NxtStar ensures a smooth setup and connects you with Abu Dhabi’s green economy.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default MasdarPage;
