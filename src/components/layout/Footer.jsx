import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-content">
                        {/* Company Info */}
                        <div className="footer-column">
                            <Link to="/" className="footer-logo">
                                <span className="footer-logo-text">NXTStar</span>
                            </Link>
                            <p className="footer-description">
                                Your trusted partner for business setup in the UAE. We provide comprehensive solutions for mainland, freezone, and offshore company formation.
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com/nxtstar" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="https://twitter.com/nxtstar" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="https://linkedin.com/company/nxtstar" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://instagram.com/nxtstar" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>

                        {/* Business Setup */}
                        <div className="footer-column">
                            <h3 className="footer-heading">Business Setup</h3>
                            <ul className="footer-links">
                                <li className="footer-link"><Link to="/business/mainland">Mainland</Link></li>
                                <li className="footer-link"><Link to="/business/freezone">Freezone</Link></li>
                                <li className="footer-link"><Link to="/business/offshore">Offshore</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-column">
                            <h3 className="footer-heading">Services</h3>
                            <ul className="footer-links">
                                <li className="footer-link"><Link to="/services/registration-licenses">Registration & Licenses</Link></li>
                                <li className="footer-link"><Link to="/services/visa-pro">Residence Visa & PRO</Link></li>
                                <li className="footer-link"><Link to="/services/golden-visa">Golden Visa</Link></li>
                                <li className="footer-link"><Link to="/services/taxation">Taxation</Link></li>
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-column">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-links">
                                <li className="footer-link"><Link to="/blogs">Blogs</Link></li>
                                <li className="footer-link"><Link to="/contact">Contact Us</Link></li>
                                <li className="footer-link"><Link to="/faqs">FAQs</Link></li>
                                <li className="footer-link"><Link to="/refer-earn">Refer & Earn</Link></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-column">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-links">
                                <li className="footer-link">Office #123, XYZ Building</li>
                                <li className="footer-link">Dubai, United Arab Emirates</li>
                                <li className="footer-link">Phone: +971 4 123 4567</li>
                                <li className="footer-link">Email: info@nxtstar.com</li>
                            </ul>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="copyright">
                        &copy; {currentYear} NXTStar. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/97141234567"
                className="whatsapp-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
            >
                <FaWhatsapp />
            </a>
        </>
    );
};

export default Footer;