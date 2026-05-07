import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../../styles/Navbar.css';
import logo from '../../assets/images/logo.png';
import { FaBars, FaTimes, FaChevronDown, FaGlobe } from 'react-icons/fa';

//change for language - step 1 starts

const LANGUAGES = [
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
  { code: 'hi', label: 'हिन्दी',    flag: '🇮🇳' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'pl', label: 'Polski',   flag: '🇵🇱' },
  { code: 'ru', label: 'Русский',  flag: '🇷🇺' },
  { code: 'ar', label: 'العربية',  flag: '🇦🇪' },
];

const switchLanguage = (code) => {
  if (code === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
  } else {
    document.cookie = `googtrans=/auto/${code}`;
    document.cookie = `googtrans=/auto/${code}; domain=${window.location.hostname}`;
  }
  window.location.reload();
};

//change for language - step 1 ends

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //language step 2 - starts

    const [langOpen, setLangOpen] = useState(false);
    const [activeLang, setActiveLang] = useState('en');

    //language step 2 - ends

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
                        // langauge step 3 - starts

                        {/* Language Switcher */}
                        <div style={{ position: 'relative' }}>
                          <motion.button
                            onClick={() => setLangOpen(!langOpen)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                              display: 'flex', alignItems: 'center', gap: '6px',
                              padding: '7px 12px', border: '1.5px solid #ccc',
                              borderRadius: '8px', background: 'transparent',
                              cursor: 'pointer', fontSize: '13px', fontWeight: '500'
                            }}
                          >
                            <FaGlobe size={14} />
                            {LANGUAGES.find(l => l.code === activeLang).flag} {LANGUAGES.find(l => l.code === activeLang).label}
                            <FaChevronDown size={11} style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                          </motion.button>
                        
                          <AnimatePresence>
                            {langOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                style={{
                                  position: 'absolute', top: '110%', right: 0,
                                  background: 'white', border: '1px solid #e5e7eb',
                                  borderRadius: '10px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                  zIndex: 9999, minWidth: '160px', overflow: 'hidden'
                                }}
                              >
                                {LANGUAGES.map((lang) => (
                                  <button
                                    key={lang.code}
                                    onClick={() => { setActiveLang(lang.code); setLangOpen(false); switchLanguage(lang.code); }}
                                    style={{
                                      display: 'flex', alignItems: 'center', gap: '10px',
                                      width: '100%', padding: '9px 16px', border: 'none',
                                      background: activeLang === lang.code ? '#f3f4f6' : 'transparent',
                                      cursor: 'pointer', fontSize: '13px', textAlign: 'left',
                                      fontWeight: activeLang === lang.code ? '600' : '400'
                                    }}
                                  >
                                    <span style={{ fontSize: '16px' }}>{lang.flag}</span>
                                    <span>{lang.label}</span>
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        // language step 3 - ends
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Link to="/refer-earn" className="btn btn-outline">
                                Refer & Earn
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <a href="https://calendly.com/nehajakhar401/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                Book a Call
                            </a> 
                            {/* <Link to="/book-call" className="btn btn-outline">
                                Book a Call
                            </Link> */}
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
                                        <a href="https://calendly.com/nehajakhar401/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            Book a Call
                                        </a>                                      
                                        {/* <Link to="/book-call" className="btn btn-outline">
                                            Book a Call
                                        </Link> */}
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
