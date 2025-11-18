import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Navbar.css';
import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navigation links data
    const navLinks = [
        {
            name: 'Business Setup',
            path: '/business',
            dropdownItems: [
                { name: 'Mainland', path: '/business/mainland' },
                { name: 'Freezone', path: '/business/freezone' },
                { name: 'Offshore', path: '/business/offshore' }
            ]
        },
        {
            name: 'Services',
            path: '/services',
            dropdownItems: [
                { name: 'Startups & Entrepreneurs', path: '/services/startups' },
                { name: 'Freelancers & Consultants', path: '/services/freelancers' },
                { name: 'Foreign Investors & Expats', path: '/services/investors' },
                { name: 'Digital Creators & Influencers', path: '/services/creators' },
                { name: 'UAE Residents', path: '/services/residents' }
            ]
        },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQs', path: '/faqs' }
    ];

    // Animation variants
    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    const logoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.nav
            className="navbar"
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
        >
            <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <motion.div variants={logoVariants}>
                        <Link to="/" className="navbar-logo">
                            <span className="logo-text"></span>
                            {/* Add your logo image here */}
                            <img src={logo} alt="NXTStar Logo" />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div className="navbar-nav">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={index}
                                className="nav-item"
                                variants={itemVariants}
                                whileHover={link.name !== 'Services' ? { scale: 1.05 } : { scale: 1.05 }}
                            >
                                <Link
                                    to={link.path}
                                    className="nav-link"
                                >
                                    {link.name}
                                    {link.dropdownItems && (
                                        <FaChevronDown className="dropdown-icon" />
                                    )}
                                </Link>

                                {/* Dropdown for items with subitems */}
                                {link.dropdownItems && (
                                    <motion.div
                                        className="dropdown-menu"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {link.dropdownItems.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Link
                                                    to={item.path}
                                                    className="dropdown-item"
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Call to action buttons */}
                    <motion.div
                        className="navbar-cta"
                        variants={itemVariants}
                    >
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link to="/refer-earn" className="btn btn-outline">
                                Refer & Earn
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                    {/*     <a href="https://calendly.com/nehajakhar401/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Book a Call
                            </a> */}
                            <Link to="/book-a-consultation-call-with-nxtstar" className="btn btn-outline">
                                Book a Call
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Mobile menu button */}
                    <motion.button
                        type="button"
                        className="mobile-menu-button"
                        onClick={toggleMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="mobile-menu-container">
                            <motion.div
                                className="mobile-nav"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.07
                                        }
                                    }
                                }}
                            >
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={index}
                                        className="mobile-nav-item"
                                        variants={{
                                            hidden: { y: 20, opacity: 0 },
                                            visible: { y: 0, opacity: 1 }
                                        }}
                                    >
                                        <Link
                                            to={link.path}
                                            className="nav-link"
                                            onClick={() => !link.dropdownItems ? setIsMenuOpen(false) : null}
                                        >
                                            {link.name}
                                            {link.dropdownItems && (
                                                <FaChevronDown className="dropdown-icon mobile-dropdown-icon" />
                                            )}
                                        </Link>

                                        {/* Mobile dropdown items */}
                                        {link.dropdownItems && (
                                            <motion.div
                                                className="mobile-dropdown"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {link.dropdownItems.map((item, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        className="mobile-dropdown-item"
                                                        whileHover={{ x: 5 }}
                                                        whileTap={{ scale: 0.97 }}
                                                    >
                                                        <Link
                                                            to={item.path}
                                                            className="nav-link"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}

                                {/* Mobile CTA buttons */}
                                <motion.div
                                    className="mobile-cta"
                                    variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: { y: 0, opacity: 1 }
                                    }}
                                >
                                    <motion.div whileTap={{ scale: 0.97 }}>
                                        <Link to="/refer-earn" className="btn btn-outline">
                                            Refer & Earn
                                        </Link>
                                    </motion.div>
                                    <motion.div whileTap={{ scale: 0.97 }}>
                                        {/*  <a href="https://calendly.com/nxtstar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            Book a Call
                                        </a> */}                                        
                                        <Link to="/book-a-consultation-call-with-nxtstar" className="btn btn-outline">
                                            Book a Call
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
