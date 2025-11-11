import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaDollarSign, FaIndustry, FaGlobe, FaMapMarkedAlt, FaWarehouse, FaClock, FaUsers } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/RAKEZPage.css';

const RAKEZPage = () => {
    return (
        <PageLayout
            title="RAKEZ – Gateway to Global Business"
            description="Ras Al Khaimah Economic Zone (RAKEZ): versatile, cost‑effective free zone for startups, SMEs, manufacturers, and global enterprises."
            headerImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                {/* Overview */}
                <section className="section-content">
                    <h2>RAKEZ – The Gateway to Global Business from Ras Al Khaimah</h2>
                    <p>Located in the northern emirate of Ras Al Khaimah, RAKEZ is one of the UAE’s most versatile, entrepreneur‑friendly free zones. It balances affordability, flexibility, and credibility—supporting freelancers, industrial players, and international companies seeking regional expansion.</p>
                </section>

                {/* Why RAKEZ Stands Out */}
                <section className="section-content">
                    <h2>Why RAKEZ Stands Out</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaDollarSign /></span>
                            <h3>Affordable Packages</h3>
                            <p>Among the most cost‑effective setup options across UAE free zones.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaGlobe /></span>
                            <h3>Diverse Licenses</h3>
                            <p>Trading, services, media, e‑commerce, manufacturing, and more categories.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaIndustry /></span>
                            <h3>Industrial Edge</h3>
                            <p>Dedicated zones for factories, logistics, and light/heavy manufacturing.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaMapMarkedAlt /></span>
                            <h3>Strategic Location</h3>
                            <p>Access to RAK seaport, proximity to Dubai, and regional/global trade routes.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaWarehouse /></span>
                            <h3>Flexible Facilities</h3>
                            <p>Flexi‑desks, offices, warehouses, and land for development projects.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaClock /></span>
                            <h3>Fast Setup</h3>
                            <p>Licenses often issued within just a few business days.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaUsers /></span>
                            <h3>Visa Scalability</h3>
                            <p>Packages adaptable from solo founders to large operational teams.</p>
                        </div>
                    </div>
                </section>

                {/* Who Chooses RAKEZ */}
                <section className="section-content">
                    <h2>Who Chooses RAKEZ?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Startups & Freelancers</h3>
                            <p>Low‑cost credibility to launch and test ideas quickly.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Trading Companies</h3>
                            <p>Streamlined import/export access and warehousing options.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Manufacturers</h3>
                            <p>Industrial plots, utilities, and tailored infrastructure.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Media & Creative Firms</h3>
                            <p>Specialized licenses and supportive business services.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>E‑Commerce Entrepreneurs</h3>
                            <p>Regional hub for Middle East market expansion and fulfillment.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Activity Selection</h3>
                            <p>Define business activities and choose the right license type.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Documentation</h3>
                            <p>Prepare application forms and submit required KYC documents.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: Approval & License</h3>
                            <p>Receive initial approvals and obtain your RAKEZ business license.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Facility & Visas</h3>
                            <p>Secure desk/office/warehouse; apply for residence visas.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: Banking & Launch</h3>
                            <p>Open corporate account and begin operations with ongoing support.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Start Your RAKEZ Journey with NxtStar Today</h2>
                        <p>With NxtStar Business Setup, RAKEZ becomes more than a license—it's a launchpad to grow. We simplify activities, paperwork, visas, and banking so you can focus on scaling.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default RAKEZPage;
