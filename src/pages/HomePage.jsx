import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBuilding, FaGlobe, FaShieldAlt, FaMoneyBillWave, FaChartLine, FaHandshake, FaCalculator, FaDollarSign, FaPercentage, FaCheck, FaTags } from 'react-icons/fa';
import SEO from '../components/layout/SEO';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';
import { PopUp, PopUpBounce, RotatePopUp } from '../components/ui/Motion';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { submitLead, isBot, LEADS_FALLBACK_MESSAGE } from '../lib/leads';

import '../styles/HomePage.css';
import '../styles/AnimatedBackground.css';
import '../styles/DarkHomeTheme.css';
import '../styles/FooterOverride.css';
import '../styles/HeroThemeTransition.css';
import '../styles/ModernHome.css';




const HomePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;
        setFormError('');

        // Validate form data
        if (!formData.name.trim()) {
            setFormError('Please enter your name.');
            return;
        }

        if (!formData.email.trim()) {
            setFormError('Please enter your email address.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError('Please enter a valid email address.');
            return;
        }

        if (!formData.phone || formData.phone.replace(/\D/g, '').length < 7) {
            setFormError('Please enter a valid phone number.');
            return;
        }

        if (!formData.businessType) {
            setFormError('Please select a business type.');
            return;
        }

        // Hidden anti-spam field replaces reCAPTCHA (which needed the old backend to verify).
        if (isBot(e)) { navigate('/cost-calculator-success'); return; }

        setIsLoading(true);
        const businessLabel = { mainland: 'Mainland', freezone: 'Freezone', offshore: 'Offshore' }[formData.businessType] || formData.businessType;
        // Saved to the NXTSTAR Google Sheet (no backend server).
        const saved = await submitLead({
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            subject: 'Business setup cost calculator: ' + businessLabel,
            interest: businessLabel,
        }, 'Home cost calculator');
        setIsLoading(false);

        if (saved) {
            setFormData({ name: "", email: "", phone: "", businessType: "" });
            navigate('/cost-calculator-success');
        } else {
            setFormError(LEADS_FALLBACK_MESSAGE);
        }
    };

    const services = [
        {
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'Advertiser Permit for Creators',
            description: 'Trade licence setup and UAE Media Council advertiser permit applications for content creators and influencers.',
            link: '/services/advertiser-permit'
        },
        {
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'DIFC AI and Innovation Licence',
            description: 'Company setup in the Dubai International Financial Centre for AI and technology businesses.',
            link: '/services/difc-ai-licence'
        },
        {
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'IFZA Company Setup',
            description: 'Free zone company formation with the International Free Zone Authority in Dubai.',
            link: '/business/freezone/ifza'
        }
    ];

    const benefits = [
        {
            icon: <FaMoneyBillWave />,
            image: "https://images.unsplash.com/photo-1710132819209-f4d38bf5532d?q=80&w=747&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Tax Benefits',
            description: 'The UAE has no personal income tax on salaries and a wide network of double taxation agreements. Corporate tax rules depend on your structure and activity.'
        },
        {
            icon: <FaGlobe />,
            image: "https://plus.unsplash.com/premium_photo-1683133974170-762dc561d292?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Strategic Location',
            description: 'Located at the crossroads of Europe, Asia, and Africa, the UAE provides easy access to markets across the Middle East, Africa, and South Asia.'
        },
        {
            icon: <FaChartLine />,
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Strong Economy',
            description: 'The UAE boasts a diverse and robust economy, offering stability and growth opportunities across various sectors.'
        },
        {
            icon: <FaHandshake />,
            image: "https://plus.unsplash.com/premium_photo-1661301087289-a9067c2f933f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Business-Friendly Environment',
            description: 'With minimal bureaucracy, business-friendly regulations, and strong legal frameworks, the UAE makes it easy to establish and operate a business.'
        }
    ];

    const whyChooseUs = [
        {
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Expert Guidance',
            description: 'Our team of consultants has extensive experience in UAE business setup across various industries.'
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1681995453325-455f7084888d?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'End-to-End Support',
            description: 'From initial consultation to post-setup services, we provide comprehensive support at every stage.'
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'Customized Solutions',
            description: 'We tailor our services to meet your specific business requirements and objectives.'
        },
        {
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'Transparent Process',
            description: 'We explain each step and give you a written cost breakdown before you commit.'
        }
    ];

    // Apply index to cards for staggered animations
    useEffect(() => {
        const cards = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('.benefit-card, .service-card'));
        cards.forEach((card, index) => {
            card.style.setProperty('--card-index', String(index));
        });
    }, []);

    return (
        <>
            <SEO
                title="NXTSTAR | UAE Business Setup and Licensing"
                description="NXTSTAR is a Dubai consultancy for UAE company setup and licensing: creator advertiser permits, DIFC, IFZA, free zone, mainland and offshore."
                canonicalUrl="/"
            />

            <div className="modern-nxt-home">
                <section className="nxt-hero" aria-labelledby="hero-heading">
                    <div className="nxt-hero-grid">
                        <div className="nxt-hero-copy">
                            <p className="nxt-eyebrow">UAE BUSINESS SETUP</p>
                            <h1 id="hero-heading">Set up your business in the UAE.</h1>
                            <p className="nxt-intro">Choose a licence and company structure that fits what you do. Get practical help with mainland, free zone and offshore setup.</p>
                            <div className="nxt-hero-actions"><a href="#setup-estimate">Request a setup estimate</a><Link to="/business">Compare setup options</Link></div>
                            <nav className="nxt-quick-links" aria-label="Company setup options"><Link to="/business/mainland">Mainland</Link><Link to="/business/freezone">Free zone</Link><Link to="/business/offshore">Offshore</Link></nav>
                        </div>
                            <div className="hero-calculator" id="setup-estimate">
                                <div className="calculator-header">
                                    <div className="calculator-icon">
                                        <FaCalculator />
                                    </div>
                                    <h2>Request a setup estimate</h2>
                                    <p>Tell us about your business and we will send you a cost estimate</p>
                                </div>
                                <div className="calculator-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label-cc">
                                                <span className="form-icon">👤</span>
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">
                                                <span className="form-icon">✉️</span>
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder="Enter your email address"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">
                                                <span className="form-icon">📱</span>
                                                Contact Number
                                            </label>
                                            <PhoneInput
                                                country={'ae'}
                                                value={formData.phone}
                                                onChange={phone => setFormData({ ...formData, phone })}
                                                inputProps={{
                                                    name: 'phone',
                                                    required: true,
                                                    className: 'form-control'
                                                }}
                                                containerClass="phone-input-container"
                                                buttonClass="country-dropdown"
                                                dropdownClass="country-dropdown-list"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="businessType" className="form-label">
                                                <span className="form-icon">🏢</span>
                                                Business Type
                                            </label>
                                            <select
                                                id="businessType"
                                                name="businessType"
                                                value={formData.businessType}
                                                onChange={handleChange}
                                                className="form-select"
                                                required
                                            >
                                                <option value="">Select Business Type</option>
                                                <option value="mainland">Mainland</option>
                                                <option value="freezone">Freezone</option>
                                                <option value="offshore">Offshore</option>
                                            </select>
                                        </div>
                                        <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, opacity: 0 }} />
                                        <Button className="cost-calc-button" type="submit" block disabled={isLoading}>
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner" style={{ marginRight: '8px' }}></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FaTags className="btn-icon" /> Request my estimate
                                                </>
                                            )}
                                        </Button>

                                        {formError && <p className="nxt-form-error" role="alert">{formError} <Link to="/contact">Contact options</Link></p>}
                                    </form>
                                </div>

                            </div>
                    </div>
                </section>
                {/* Core Services Section */}
                <section className="section core-services-section">
                    <div className="section-container">

                        <div className="section-header">
                            <h2 className="section-title">Our Core Services</h2>
                            <p className="section-description">
                                Support for creators, founders and business owners. Explore our <Link to="/services">full service directory</Link>, including permits, visas, corporate structuring and PRO administration. We also handle <Link to="/business/mainland">mainland</Link>, <Link to="/business/freezone">free zone</Link> and <Link to="/business/offshore">offshore</Link> company setup.
                            </p>
                        </div>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <PopUpBounce key={index} delay={0.1 * index}>
                                    <ServiceCard
                                        image={service.image}
                                        title={service.title}
                                        description={service.description}
                                        link={service.link}
                                    />
                                </PopUpBounce>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Cost Calculator section has been moved to the hero section */}

                {/* Why UAE Section */}
                <section className="section why-uae-section">
                    <div className="section-container">

                        <div className="section-header">
                            <h2 className="section-title">Why Start a Business in the UAE?</h2>
                            <p className="section-description">
                                The United Arab Emirates offers numerous advantages for entrepreneurs and businesses looking to establish their presence in the region.
                            </p>
                        </div>


                        {/* Grid Layout */}
                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <PopUpBounce key={index} delay={0.1 * index}>
                                    <div className="benefit-card">
                                        <div className="benefit-image-container">
                                            <img src={benefit.image} alt={benefit.title} className="benefit-image" loading="lazy" decoding="async" />
                                        </div>
                                        <h3 className="benefit-title">{benefit.title}</h3>
                                        <p className="benefit-description">{benefit.description}</p>
                                    </div>
                                </PopUpBounce>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="section why-us-section">
                    <div className="section-container">

                        <div className="section-header">
                            <h2 className="section-title">Why Choose NXTStar?</h2>
                            <p className="section-description">
                                We're committed to making your business setup journey in the UAE smooth and successful.
                            </p>
                        </div>

                        <div className="benefits-grid">
                            {whyChooseUs.map((benefit, index) => (
                                <PopUpBounce key={index} delay={0.1 * index}>
                                    <div className="benefit-card">
                                        <div className="benefit-image-container">
                                            <img src={benefit.image} alt={benefit.title} className="benefit-image" loading="lazy" decoding="async" />
                                        </div>
                                        <h3 className="benefit-title">{benefit.title}</h3>
                                        <p className="benefit-description">{benefit.description}</p>
                                    </div>
                                </PopUpBounce>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section">
                    <div className="section-container">
                        <PopUp>
                            <div className="section-header">
                                <h2 className="section-title">Ready to Start Your Business in the UAE?</h2>
                                <p className="section-description">
                                    Contact us today for a free consultation and let us help you navigate the business setup process.
                                </p>
                                <RotatePopUp delay={0.3}>
                                    <div className="hero-cta" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                                        <Button to="/contact" type="primary" size="lg">
                                            Get Started
                                        </Button>
                                        <Button href="https://calendly.com/nehajakhar401/30min" type="outline" size="lg">
                                            Book a Consultation
                                        </Button>
                                    </div>
                                </RotatePopUp>
                            </div>
                        </PopUp>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePage;
