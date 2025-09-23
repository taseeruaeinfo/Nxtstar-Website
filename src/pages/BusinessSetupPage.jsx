import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import MainlandPage from './business/MainlandPage';
import FreezonePages from './business/FreezonePages';
import OffshorePage from './business/OffshorePage';
import '../styles/pages/BusinessSetupPage.css';

const BusinessSetupPage = () => {
    const businessTypes = [
        {
            id: 'mainland',
            title: 'Mainland Business Setup',
            description: 'Establish a company with 100% ownership and freedom to trade anywhere in the UAE and internationally.',
            image: '/images/mainland.jpg',
            link: '/business/mainland',
        },
        {
            id: 'freezone',
            title: 'Free Zone Business Setup',
            description: 'Set up a business with 100% foreign ownership, tax exemptions, and simplified procedures.',
            image: '/images/freezone.jpg',
            link: '/business/freezone',
        },
        {
            id: 'offshore',
            title: 'Offshore Company Formation',
            description: 'Create an offshore entity with maximum privacy, asset protection, and minimal reporting requirements.',
            image: '/images/offshore.jpg',
            link: '/business/offshore',
        },
    ];

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PageLayout
                        title="Business Setup in UAE"
                        description="Complete business setup solutions for mainland, free zone, and offshore jurisdictions in the UAE."
                        breadcrumbs={[{ label: 'Business Setup', url: '/business' }]}
                    >
                        <div className="business-setup-overview">
                            <div className="overview-content">
                                <h2>Start Your Business Journey in the UAE</h2>
                                <p>
                                    The UAE offers diverse business jurisdictions, each with unique advantages to suit different business
                                    needs. Our expert team guides you through every step of the company formation process, ensuring a
                                    seamless experience.
                                </p>

                                <div className="business-types-grid">
                                    {businessTypes.map((type) => (
                                        <div key={type.id} className="business-type-card">
                                            <div className="card-image">
                                                {/* Replace with actual images when available */}
                                                <div className="placeholder-image">{type.id.charAt(0).toUpperCase() + type.id.slice(1)}</div>
                                            </div>
                                            <div className="card-content">
                                                <h3>{type.title}</h3>
                                                <p>{type.description}</p>
                                                <Link to={type.link} className="learn-more-btn">Learn More</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="why-choose-section">
                                    <h3>Why Choose NXTStar for Business Setup?</h3>
                                    <div className="benefits-grid">
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <h4>End-to-End Support</h4>
                                            <p>We handle everything from company registration to bank account opening and visa processing.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <h4>Expert Consultants</h4>
                                            <p>Our team brings years of experience in UAE business formation and regulatory compliance.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <h4>Transparent Pricing</h4>
                                            <p>No hidden fees - we provide clear, all-inclusive packages tailored to your needs.</p>
                                        </div>
                                        <div className="benefit-item">
                                            <div className="benefit-icon">✓</div>
                                            <h4>Time Efficiency</h4>
                                            <p>Fast-track your business setup with our streamlined processes and industry connections.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="cta-section">
                                    <h3>Ready to Start Your Business in the UAE?</h3>
                                    <p>Schedule a free consultation with our business setup experts today.</p>
                                    <Link to="/contact" className="primary-cta-btn">Book a Consultation</Link>
                                </div>
                            </div>
                        </div>
                    </PageLayout>
                }
            />
            <Route path="/mainland/*" element={<MainlandPage />} />
            <Route path="/freezone/*" element={<FreezonePages />} />
            <Route path="/offshore/*" element={<OffshorePage />} />
        </Routes>
    );
};

export default BusinessSetupPage;