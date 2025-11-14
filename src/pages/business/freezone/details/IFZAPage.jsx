import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import { FaBuilding, FaCogs, FaChartLine, FaHandshake } from 'react-icons/fa';
import '../../../../styles/pages/business/freezone/details/IFZAPage.css';

const IFZAPage = () => {
    return (
        <PageLayout
            title="IFZA (International Free Zone Authority)"
            description="Affordable, flexible Dubai free zone in Dubai Silicon Oasis — ideal for startups, consultants, and e‑commerce."
            headerImage="https://images.unsplash.com/photo-1489465036402-503c88639ad1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                {/* Overview Section */}
                <section className="section-content">
                    <h2>Overview</h2>
                    <p>IFZA (International Free Zone Authority) is a premier free zone located in Dubai Silicon Oasis, offering a comprehensive business setup solution that combines affordability with premium services. Known for its flexible licensing options and strategic location, IFZA caters to entrepreneurs, startups, and established businesses looking to establish their presence in Dubai.</p>
                </section>

                {/* Features Section */}
                <section className="section-content">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon"><FaBuilding /></span>
                            <h3>Premium Location</h3>
                            <p>Strategic presence in Dubai Silicon Oasis with modern infrastructure and excellent connectivity.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaCogs /></span>
                            <h3>Flexible Licensing</h3>
                            <p>Wide range of business activities covered under a single license with easy amendments.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaChartLine /></span>
                            <h3>Cost-Effective Setup</h3>
                            <p>Competitive pricing structure with various package options to suit different budgets.</p>
                        </div>
                        <div className="feature-card">
                            <span className="feature-icon"><FaHandshake /></span>
                            <h3>Premium Services</h3>
                            <p>Access to premium business support services and dedicated relationship managers.</p>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-content">
                    <h2>Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>100% Foreign Ownership</h3>
                            <p>Full ownership rights for international investors without local partner requirements.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Visa Eligibility</h3>
                            <p>Multiple visa options for business owners and their employees.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Tax Benefits</h3>
                            <p>0% corporate and personal tax with 100% repatriation of capital and profits.</p>
                        </div>
                        <div className="benefit-card">
                            <h3>Business Support</h3>
                            <p>Comprehensive business setup assistance and ongoing support services.</p>
                        </div>
                    </div>
                </section>

                {/* Setup Process Section */}
                <section className="section-content">
                    <h2>Setup Process</h2>
                    <div className="setup-grid">
                        <div className="setup-card">
                            <h3>Step 1: Initial Consultation</h3>
                            <p>Meet with our experts to discuss your business requirements and choose the right package.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 2: Documentation</h3>
                            <p>Submit required documents and complete necessary forms for license application.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 3: License Approval</h3>
                            <p>Receive your business license and complete registration process.</p>
                        </div>
                        <div className="setup-card">
                            <h3>Step 4: Operational Setup</h3>
                            <p>Set up your physical office or virtual presence and begin operations.</p>
                        </div>
                    </div>
                </section>

                {/* Cost Information */}
                <section className="section-content">
                    <h2>Cost Overview</h2>
                    <div className="cost-info">
                        <p>Starting from AED 18,000, IFZA offers various packages tailored to different business needs. Costs typically include:</p>
                        <ul id='cost-info-ifza'>
                            <li>License fee</li>
                            <li>Registration charges</li>
                            <li>Establishment card</li>
                            <li>Office space (physical or virtual)</li>
                            <li>Visa eligibility (dependent on package)</li>
                        </ul>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Start Your Business in IFZA?</h2>
                        <p>Contact our experts today for a free consultation and detailed cost breakdown.</p>
                        <a href="/contact" className="cta-btn">Get Started</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default IFZAPage;