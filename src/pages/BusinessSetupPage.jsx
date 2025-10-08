import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';
import MainlandPage from './business/MainlandPage';
import FreezonePages from './business/FreezonePages';
import OffshorePage from './business/OffshorePage';
import { PopUp, PopUpBounce, RotatePopUp } from '../components/ui/Motion';
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
                        headerImage="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                        headerOverlayColor="rgba(0, 0, 0, 0.1)"
                    >
                        <div className="business-setup-overview">
                            <div className="overview-content">
                                <PopUp>
                                    <h2>Start Your Business Journey in the UAE</h2>
                                </PopUp>
                                <PopUpBounce delay={0.2}>
                                    <p>
                                        The UAE offers diverse business jurisdictions, each with unique advantages to suit different business
                                        needs. Our expert team guides you through every step of the company formation process, ensuring a
                                        seamless experience.
                                    </p>
                                </PopUpBounce>

                                <div className="business-types-grid">
                                    {businessTypes.map((type, index) => (
                                        <motion.div
                                            key={type.id}
                                            className="business-type-card"
                                            initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{
                                                delay: 0.2 * index,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 15
                                            }}
                                        >
                                            <motion.div
                                                className="card-image"
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ type: "spring", stiffness: 400 }}
                                            >
                                                {/* Replace with actual images when available */}
                                                <div className="placeholder-image">{type.id.charAt(0).toUpperCase() + type.id.slice(1)}</div>
                                            </motion.div>
                                            <div className="card-content">
                                                <h3>{type.title}</h3>
                                                <p>{type.description}</p>
                                                <motion.div
                                                    whileHover={{ x: 5 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Link to={type.link} className="learn-more-btn">Learn More</Link>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="why-choose-section">
                                    <PopUp>
                                        <h3>Why Choose NXTStar for Business Setup?</h3>
                                    </PopUp>
                                    <div className="benefits-grid">
                                        <PopUpBounce delay={0.1}>
                                            <motion.div
                                                className="benefit-item"
                                                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <RotatePopUp delay={0.2}>
                                                    <div className="benefit-icon">✓</div>
                                                </RotatePopUp>
                                                <h4>End-to-End Support</h4>
                                                <p>We handle everything from company registration to bank account opening and visa processing.</p>
                                            </motion.div>
                                        </PopUpBounce>
                                        <PopUpBounce delay={0.2}>
                                            <motion.div
                                                className="benefit-item"
                                                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <RotatePopUp delay={0.3}>
                                                    <div className="benefit-icon">✓</div>
                                                </RotatePopUp>
                                                <h4>Expert Consultants</h4>
                                                <p>Our team brings years of experience in UAE business formation and regulatory compliance.</p>
                                            </motion.div>
                                        </PopUpBounce>
                                        <PopUpBounce delay={0.3}>
                                            <motion.div
                                                className="benefit-item"
                                                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <RotatePopUp delay={0.4}>
                                                    <div className="benefit-icon">✓</div>
                                                </RotatePopUp>
                                                <h4>Transparent Pricing</h4>
                                                <p>No hidden fees - we provide clear, all-inclusive packages tailored to your needs.</p>
                                            </motion.div>
                                        </PopUpBounce>
                                        <PopUpBounce delay={0.4}>
                                            <motion.div
                                                className="benefit-item"
                                                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                                                transition={{ type: "spring", stiffness: 300 }}
                                            >
                                                <RotatePopUp delay={0.5}>
                                                    <div className="benefit-icon">✓</div>
                                                </RotatePopUp>
                                                <h4>Time Efficiency</h4>
                                                <p>Fast-track your business setup with our streamlined processes and industry connections.</p>
                                            </motion.div>
                                        </PopUpBounce>
                                    </div>
                                </div>

                                <div className="cta-section">
                                    <PopUp>
                                        <h3>Ready to Start Your Business in the UAE?</h3>
                                    </PopUp>
                                    <PopUpBounce delay={0.2}>
                                        <p>Schedule a free consultation with our business setup experts today.</p>
                                    </PopUpBounce>
                                    <PopUp delay={0.4}>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link to="/contact" className="primary-cta-btn">Book a Consultation</Link>
                                        </motion.div>
                                    </PopUp>
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