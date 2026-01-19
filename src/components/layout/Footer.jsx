import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../../styles/Footer.css';
import Threads from '../../assets/images/threadsLogo.png';
import Tiktok from '../../assets/images/tiktok.png';



const Footer = () => {







    const currentYear = new Date().getFullYear();

    const footerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const socialIconVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1 }
    };

    return (
        <>
            <motion.footer
                className="footer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={footerVariants}
            >
                <div className="footer-container">
                    <motion.div className="footer-content" variants={footerVariants}>
                        {/* Company Info */}
                        <motion.div className="footer-column" variants={itemVariants}>
                            <Link to="/" className="footer-logo">
                                <span className="footer-logo-text">NXTStar</span>
                            </Link>
                            <motion.p
                                className="footer-description"
                                variants={itemVariants}
                            >
                                Your trusted partner for business setup in the UAE. We provide comprehensive solutions for mainland, freezone, and offshore company formation.
                            </motion.p>
                            <motion.div className="social-links" variants={itemVariants}>
                                <motion.a
                                    href="https://www.facebook.com/share/17T2TpUYsG/?mibextid=wwXIfr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaFacebookF />
                                </motion.a>
                                <motion.a
                                    href="https://www.threads.com/@nxtstar.ae?igshid=NTc4MTIwNjQ2YQ=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <img src={Threads} alt="Threads" id='footerThreads' />
                                </motion.a>
                                <motion.a
                                    href="https://www.tiktok.com/@nxtstar.ae"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <img src={Tiktok} alt="Tiktok" id='footerTiktok' />
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/company/nxtstar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaLinkedinIn />
                                </motion.a>
                                <motion.a
                                    href="https://www.instagram.com/nxtstar.ae"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    variants={socialIconVariants}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <FaInstagram />
                                </motion.a>
                            </motion.div>
                        </motion.div>

                        {/* Business Setup */}
                        <motion.div className="footer-column" variants={itemVariants}>
                            <motion.h3 className="footer-heading" variants={itemVariants}>Business Setup</motion.h3>
                            <motion.ul className="footer-links" variants={itemVariants}>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/business/mainland">Mainland</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/business/freezone">Freezone</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/business/offshore">Offshore</Link>
                                </motion.li>
                            </motion.ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div className="footer-column" variants={itemVariants}>
                            <motion.h3 className="footer-heading" variants={itemVariants}>Services</motion.h3>
                            <motion.ul className="footer-links" variants={itemVariants}>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/services/registration-licenses">Registration & Licenses</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/services/visa-pro">Residence Visa & PRO</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/services/golden-visa">Golden Visa</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/services/taxation">Taxation</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/services/corporate-structuring">Corporate Structuring</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/services/trademark">Trademark Registration</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/services/website">Website Development</Link>
                                </motion.li>
                            </motion.ul>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div className="footer-column" variants={itemVariants}>
                            <motion.h3 className="footer-heading" variants={itemVariants}>Quick Links</motion.h3>
                            <motion.ul className="footer-links" variants={itemVariants}>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/blogs">Blogs</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/contact">Contact Us</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/faqs">FAQs</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/refer-earn">Refer & Earn</Link>
                                </motion.li>
                                <motion.li className="footer-link" variants={itemVariants} whileHover={{ x: 5 }}>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </motion.li>
                            </motion.ul>
                        </motion.div>

                        {/* Contact */}
                        <motion.div className="footer-column" variants={itemVariants}>
                            <motion.h3 className="footer-heading" variants={itemVariants}>Contact Us</motion.h3>
                            <motion.ul className="footer-links" variants={itemVariants}>
                                <motion.li className="footer-link" variants={itemVariants}>Bay Square, Business Bay</motion.li>
                                <motion.li className="footer-link" variants={itemVariants}>Dubai, United Arab Emirates</motion.li>
                                <motion.li className="footer-link" variants={itemVariants}>Phone: +971 582594158</motion.li>
                                {/* <motion.li className="footer-link" id="footer-email" variants={itemVariants}>nxtstar.business.setup@gmail.com</motion.li> */}
                            </motion.ul>
                        </motion.div>
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        className="copyright"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        &copy; {currentYear} Impactlink for Marketing and PR. All rights reserved.
                    </motion.div>
                </div>
            </motion.footer>

            {/* WhatsApp Button */}
            <motion.a
                href="https://wa.me/+971582594158"
                className="whatsapp-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaWhatsapp />
            </motion.a>
        </>
    );
};

export default Footer;
