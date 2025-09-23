import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../../styles/Navbar.css';

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
                { name: 'Company Registration & Licenses', path: '/services/registration-licenses' },
                { name: 'Residence Visa & PRO', path: '/services/visa-pro' },
                { name: 'Golden Visa', path: '/services/golden-visa' },
                { name: 'Corporate Structuring', path: '/services/corporate-structuring' },
                { name: 'Taxation', path: '/services/taxation' },
                { name: 'Trademark Registration', path: '/services/trademark' },
                { name: 'Website Development', path: '/services/website' }
            ]
        },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'FAQs', path: '/faqs' }
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo">
                        <span className="logo-text">NXTStar</span>
                        {/* Add your logo image here */}
                        {/* <img src="/logo.png" alt="NXTStar Logo" /> */}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-nav">
                        {navLinks.map((link, index) => (
                            <div key={index} className="nav-item">
                                <Link
                                    to={link.path}
                                    className="nav-link"
                                >
                                    {link.name}
                                </Link>

                                {/* Dropdown for items with subitems */}
                                {link.dropdownItems && (
                                    <div className="dropdown-menu">
                                        {link.dropdownItems.map((item, idx) => (
                                            <Link
                                                key={idx}
                                                to={item.path}
                                                className="dropdown-item"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Call to action buttons */}
                    <div className="navbar-cta">
                        <Link to="/refer-earn" className="btn btn-outline">
                            Refer & Earn
                        </Link>
                        <a href="https://calendly.com/nxtstar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            Book a Call
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="mobile-menu-button"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <div className="mobile-menu-container">
                        <div className="mobile-nav">
                            {navLinks.map((link, index) => (
                                <div key={index} className="mobile-nav-item">
                                    <Link
                                        to={link.path}
                                        className="nav-link"
                                        onClick={() => !link.dropdownItems && setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>

                                    {/* Mobile dropdown items */}
                                    {link.dropdownItems && (
                                        <div className="mobile-dropdown">
                                            {link.dropdownItems.map((item, idx) => (
                                                <div key={idx} className="mobile-dropdown-item">
                                                    <Link
                                                        to={item.path}
                                                        className="nav-link"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Mobile CTA buttons */}
                            <div className="mobile-cta">
                                <Link to="/refer-earn" className="btn btn-outline">
                                    Refer & Earn
                                </Link>
                                <a href="https://calendly.com/nxtstar" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                    Book a Call
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;