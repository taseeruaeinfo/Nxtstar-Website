import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaLandmark, FaBalanceScale, FaGlobe, FaChartLine, FaBuilding, FaHandshake } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/DIFCPage.css';

const DIFCPage = () => {
    return (
        <PageLayout
            title="Dubai International Financial Centre (DIFC)"
            description="The UAE's most prestigious financial free zone, offering a globally recognized common law framework and a thriving ecosystem for financial institutions."
            headerImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0, 0, 0, 0.6)"
        >
            <div className="freezone-detail-page">
                {/* Overview Section */}
                <section className="section-content">
                    <h2>Overview</h2>
                    <p>Dubai International Financial Centre (DIFC) is the UAE's most prestigious financial free zone, offering a globally recognized common law framework and a thriving ecosystem for financial institutions, fintech startups, and professional services. As a leading hub connecting the Middle East, Africa, and South Asia (MEASA) markets, DIFC provides unmatched credibility and regulatory excellence.</p>
                </section>

                {/* Features Section */}
                <section className="section-content">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaBalanceScale /></span>
                            <h3>Independent Common Law</h3>
                            <p>Modeled on English law, providing a familiar and trusted legal framework ideal for international operations.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaLandmark /></span>
                            <h3>DFSA Regulation</h3>
                            <p>World-class oversight for financial and fintech entities ensuring regulatory excellence.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaGlobe /></span>
                            <h3>Global Recognition</h3>
                            <p>Trusted by leading banks, asset managers, and family offices worldwide.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaChartLine /></span>
                            <h3>Tax Benefits</h3>
                            <p>0% corporate and personal income tax structure for maximum profitability.</p>
                        </div>
                    </div>
                </section>

                {/* Eligible Businesses Section */}
                <section className="section-content">
                    <h2>Who Can Benefit from DIFC?</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>Financial & Investment Firms</h3>
                            <p>Banks, investment companies, and financial service providers.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Wealth Management</h3>
                            <p>Family offices and wealth management institutions.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Fintech Startups</h3>
                            <p>Innovative financial technology companies and digital payment solutions.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Professional Services</h3>
                            <p>Legal firms, audit companies, and advisory services.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Holding Companies</h3>
                            <p>SPV structures and holding companies for international operations.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process Section */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Structure Definition</h3>
                            <p>Define your business structure and license category (Regulated or Non-Regulated).</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Documentation</h3>
                            <p>Submit the business plan and required documents to DIFC Registrar.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: Approval Process</h3>
                            <p>Obtain regulatory or non-regulatory approval from relevant authorities.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Establishment</h3>
                            <p>Sign lease for DIFC premises and receive Certificate of Incorporation.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 5: Operations Setup</h3>
                            <p>Apply for residence visas and open your corporate account.</p>
                        </div>
                    </div>
                </section>

                {/* Premium Location Section */}
                <section className="section-content">
                    <h2>Premium Business Environment</h2>
                    <div className="location-info">
                        <div className="info-card">
                            <span className="info-icon"><FaBuilding /></span>
                            <h3>World-Class Infrastructure</h3>
                            <p>State-of-the-art office spaces in Dubai's premier financial district with modern amenities and facilities.</p>
                        </div>
                        <div className="info-card">
                            <span className="info-icon"><FaHandshake /></span>
                            <h3>Business Network</h3>
                            <p>Access to a thriving community of global financial institutions and professional services firms.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Start Your Business in DIFC with NxtStar</h2>
                        <p>Get unmatched legal protection, global reputation, and access to top-tier financial institutions. Our experts simplify the setup process so you can focus on business growth.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default DIFCPage;