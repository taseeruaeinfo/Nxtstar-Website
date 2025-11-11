import React from 'react';
import PageLayout from '../../../../components/layout/PageLayout';
import '../../../../styles/pages/business/freezone/details/JAFZAPage.css';

const JAFZAPage = () => {
    return (
        <PageLayout
            title="Start Your JAFZA Free Zone Business"
            description="Launch your business in Jebel Ali Free Zone (JAFZA) - UAE's premier free zone for logistics, manufacturing, and trading with NxtStar's expert guidance."
            headerImage="https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-detail-page">
                <section className="intro-section">
                    <div className="section-content">
                        <h2>Start Your Business in JAFZA Free Zone with NxtStar</h2>
                        <p>
                            Jebel Ali Free Zone (JAFZA) is one of the UAE's most established and globally recognized free zones,
                            strategically located next to Jebel Ali Port and Al Maktoum International Airport. Home to thousands
                            of multinational companies, JAFZA is ideal for businesses involved in logistics, manufacturing,
                            trading, and industrial operations.
                        </p>
                        <p>
                            At NxtStar Management Consultancy, we streamline your JAFZA company formation—managing licensing,
                            customs registration, and visa processing so you can start operating efficiently.
                        </p>
                    </div>
                </section>

                <section className="features-section">
                    <div className="section-content">
                        <h2>Why Choose JAFZA Free Zone?</h2>
                        <div className="features-grid">
                            <div className="feature-card">
                                <div className="feature-icon">🌍</div>
                                <h3>World-Class Infrastructure</h3>
                                <p>Seamless access to Jebel Ali Port and major airports</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏢</div>
                                <h3>100% Foreign Ownership</h3>
                                <p>Full control with no local partner required</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🏭</div>
                                <h3>Wide Range of Facilities</h3>
                                <p>Offices, warehouses, showrooms, and industrial plots</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">🌐</div>
                                <h3>Strategic Global Connectivity</h3>
                                <p>Ideal for import-export and logistics firms</p>
                            </div>
                            <div className="feature-card">
                                <div className="feature-icon">⚙️</div>
                                <h3>Custom Solutions</h3>
                                <p>Tailored packages for SMEs and large corporations</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Who Can Benefit from JAFZA?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon">🚢</div>
                                <h3>Trading & Logistics Companies</h3>
                                <p>Import-export and supply chain operations</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🏭</div>
                                <h3>Manufacturing & Industrial Firms</h3>
                                <p>Production and assembly facilities</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🛒</div>
                                <h3>E-Commerce & Distribution</h3>
                                <p>Warehousing and distribution centers</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">⚡</div>
                                <h3>Energy & Automotive</h3>
                                <p>Energy, marine & automotive businesses</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon">🌐</div>
                                <h3>Multinational Corporations</h3>
                                <p>Regional headquarters and branches</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="setup-section">
                    <div className="section-content">
                        <h2>Setup Process</h2>
                        <div className="setup-grid">
                            <div className="setup-card">
                                <div className="setup-icon">📋</div>
                                <h3>Choose Business Structure</h3>
                                <p>Select between FZE, FZCO, or Branch office</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">✍️</div>
                                <h3>Name Reservation</h3>
                                <p>Reserve company name and submit documents</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏢</div>
                                <h3>Facility Selection</h3>
                                <p>Lease your desired facility type</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">📜</div>
                                <h3>License Issuance</h3>
                                <p>Receive your trade license to start operations</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">👥</div>
                                <h3>Visa Processing</h3>
                                <p>Apply for residence visas</p>
                            </div>
                            <div className="setup-card">
                                <div className="setup-icon">🏦</div>
                                <h3>Bank Account</h3>
                                <p>Open your corporate bank account</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="cost-section">
                    <div className="section-content">
                        <h2>Cost of JAFZA Business Setup</h2>
                        <div className="cost-info">
                            <p>Packages start from around AED 15,000 depending on facility type and visa needs.</p>
                            <p>Warehouse and industrial setups are priced based on space and utilities required.</p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Get Started Today</h2>
                        <p>JAFZA combines global connectivity with strong credibility. Our team at NxtStar helps you navigate the process and choose the right setup for your business goals.</p>
                        <a href="/contact" className="cta-btn">Book Your Free Consultation Today</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default JAFZAPage;