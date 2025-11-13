import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import Button from '../components/ui/Button';
import { FaCheckCircle, FaPhone, FaEnvelope, FaWhatsapp, FaCalculator } from 'react-icons/fa';
import '../styles/pages/CostCalculatorSuccess.css';

const CostCalculatorSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageLayout
            title="Request Submitted Successfully!"
            description="Thank you for using our Business Setup Cost Calculator. Our team will contact you shortly."
            headerImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
            headerOverlayColor="rgba(0, 0, 0, 0.65)"
        >
            <div className="cost-calculator-success-page">
                <div className="success-container">
                    {/* Success Icon */}
                    <div className="success-icon-wrapper">
                        <FaCheckCircle className="success-icon" />
                    </div>

                    {/* Main Message */}
                    <h1 className="success-title">Thank You for Your Interest!</h1>
                    <p className="success-subtitle">
                        Your business setup cost calculation request has been received successfully.
                    </p>

                    {/* Info Box */}
                    <div className="info-box">
                        <div className="info-icon">
                            <FaCalculator />
                        </div>
                        <div className="info-content">
                            <h3>What Happens Next?</h3>
                            <ul>
                                <li>Our business setup experts will review your requirements</li>
                                <li>We'll prepare a detailed cost breakdown tailored to your needs</li>
                                <li>You'll receive a personalized quote within 24 hours</li>
                                <li>Our team will contact you to discuss your business setup options</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Options */}
                    <div className="contact-options">
                        <h3>Need Immediate Assistance?</h3>
                        <p>Our team is available to answer any questions you may have.</p>

                        <div className="contact-methods">
                            <a href="tel:+971 582594158" className="contact-method">
                                <FaPhone />
                                <span>Call Us</span>
                            </a>
                            <a href="mailto:nxtstar.business.setup@gmail.com" className="contact-method">
                                <FaEnvelope />
                                <span>Email Us</span>
                            </a>
                            <a href="https://wa.me/+971582594158" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <Button to="/" type="primary" size="lg">
                            Back to Home
                        </Button>
                        <Button to="/business" type="outline" size="lg">
                            Explore Business Setup Options
                        </Button>
                    </div>

                    {/* Additional Info */}
                    <div className="additional-info">
                        <p>
                            While you wait, feel free to explore our comprehensive business setup guides and learn more about starting your business in the UAE.
                        </p>
                        <div className="quick-links">
                            <a href="/business/mainland">Mainland Setup</a>
                            <span>•</span>
                            <a href="/business/freezone">Freezone Options</a>
                            <span>•</span>
                            <a href="/business/offshore">Offshore Companies</a>
                            <span>•</span>
                            <a href="/blogs">Blog & Resources</a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default CostCalculatorSuccess;
