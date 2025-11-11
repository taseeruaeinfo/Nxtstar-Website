import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaBolt, FaClipboardList, FaHome, FaUserShield, FaMapMarkerAlt, FaUsers, FaShoppingBag, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/SPCPage.css';

const SPCPage = () => {
    return (
        <PageLayout
            title="Sharjah Publishing City (SPC) Free Zone"
            description="Flexible and cost-effective multi‑industry free zone with 1,500+ activities — fast setup, multi‑activity licenses, and visa options."
            headerImage="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0,0,0,0.55)"
        >
            <div className="freezone-detail-page">
                {/* Overview */}
                <section className="section-content">
                    <h2>Start Your Business in SPC Free Zone with NxtStar</h2>
                    <p>Sharjah Publishing City (SPC) Free Zone is one of the UAE’s most flexible and cost‑effective business hubs. Originally designed for publishing and creative industries, SPC has evolved into a multi‑industry free zone with over 1,500 approved activities — serving publishers, media professionals, traders, consultants, freelancers, and global entrepreneurs.</p>
                    <p>At NxtStar Business Setup, we make it effortless to establish your company in SPC — guiding you through licensing, visas, and banking so you can focus on growth.</p>
                </section>

                {/* Why Choose SPC */}
                <section className="section-content">
                    <h2>Why Choose SPC Free Zone?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaHome /></span>
                            <h3>No Office Requirement</h3>
                            <p>Operate with Flexi‑desk or virtual office to keep costs low while maintaining eligibility for visas and banking.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaClipboardList /></span>
                            <h3>Multi‑Activity Licenses</h3>
                            <p>Combine up to five activities under a single license — a rare convenience in UAE free zones.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaBolt /></span>
                            <h3>Quick Setup</h3>
                            <p>Company incorporation and licensing can be completed in as little as 48 hours.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaUserShield /></span>
                            <h3>Residency Visas</h3>
                            <p>Investor and employee visa packages available for founders and teams.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaMapMarkerAlt /></span>
                            <h3>Strategic Location</h3>
                            <p>Based in Sharjah with direct access to Dubai and key ports — perfect for regional trade.</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Benefit */}
                <section className="section-content">
                    <h2>Who Can Benefit from SPC?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Publishing & Media</h3>
                            <p>Authors, publishers, e‑commerce book platforms, and digital content creators.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Consultancy Firms</h3>
                            <p>Legal, HR, IT, and education consultants with multi‑activity options.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Trading & E‑Commerce</h3>
                            <p>Import‑export companies and online sellers serving GCC and global markets.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Startups & Freelancers</h3>
                            <p>Low‑cost packages ideal for testing and launching new ideas in the UAE.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Education & Training</h3>
                            <p>Coaching providers, e‑learning platforms, and training academies.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Select Activity</h3>
                            <p>Choose your business activities from 1,500+ approved options.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Choose Structure</h3>
                            <p>Select your company type (FZE, FZC, or branch) and reserve your trade name.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: Submit Documents</h3>
                            <p>Complete applications and submit KYC documents for approval.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Get Licensed</h3>
                            <p>Receive your business license (typically within 1–2 working days).</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: Visas & Banking</h3>
                            <p>Apply for residence visas and open your UAE corporate bank account.</p>
                        </div>
                    </div>
                </section>

                {/* Cost */}
                <section className="section-content">
                    <h2>Cost of SPC Business Setup</h2>
                    <div className="cost-info">
                        <p>SPC is one of the UAE’s most affordable free zones. Licenses start from AED 4,999. Multi‑activity and visa‑inclusive packages are available at competitive rates. Virtual office solutions can reduce costs further while maintaining visa and banking eligibility.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>SPC Free Zone offers fast, affordable, and flexible setup options. Every business is unique — NxtStar will guide you to the best free zone for your goals.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default SPCPage;
