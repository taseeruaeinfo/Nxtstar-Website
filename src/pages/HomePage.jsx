import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaGlobe, FaShieldAlt, FaMoneyBillWave, FaChartLine, FaHandshake, FaCalculator, FaDollarSign, FaPercentage, FaCheck, FaTags } from 'react-icons/fa';
import SEO from '../components/layout/SEO';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';
import { PopUp, PopUpBounce, RotatePopUp } from '../components/ui/Motion';
import heroBackgroundImage from '../assets/images/homePage.png';
import '../styles/HomePage.css';

const HomePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert('Form submitted! We will contact you soon.');
    };

    const services = [
        {
            icon: <FaBuilding />,
            title: 'Mainland Business Setup',
            description: 'Set up your business in UAE mainland with 100% ownership and operate anywhere in the UAE without restrictions.',
            link: '/business/mainland'
        },
        {
            icon: <FaGlobe />,
            title: 'Freezone Company Formation',
            description: 'Establish your company in UAE free zones with 100% ownership, tax exemptions, and full repatriation of profits.',
            link: '/business/freezone'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Offshore Company Setup',
            description: 'Protect your assets and enjoy complete privacy with our offshore company formation services.',
            link: '/business/offshore'
        }
    ];

    const benefits = [
        {
            icon: <FaMoneyBillWave />,
            title: 'Tax Benefits',
            description: 'The UAE offers significant tax advantages with no corporate tax in free zones, no personal income tax, and numerous double taxation agreements.'
        },
        {
            icon: <FaGlobe />,
            title: 'Strategic Location',
            description: 'Located at the crossroads of Europe, Asia, and Africa, the UAE provides easy access to markets across the Middle East, Africa, and South Asia.'
        },
        {
            icon: <FaChartLine />,
            title: 'Strong Economy',
            description: 'The UAE boasts a diverse and robust economy, offering stability and growth opportunities across various sectors.'
        },
        {
            icon: <FaHandshake />,
            title: 'Business-Friendly Environment',
            description: 'With minimal bureaucracy, business-friendly regulations, and strong legal frameworks, the UAE makes it easy to establish and operate a business.'
        }
    ];

    const testimonials = [
        {
            content: "Working with NXTStar for our mainland business setup was seamless. Their team guided us through every step of the process, making what seemed complex very straightforward.",
            author: "Sarah Johnson",
            position: "CEO, TechInnovate LLC",
            rating: 5
        },
        {
            content: "We chose NXTStar for our freezone company formation and couldn't be happier with the results. Their knowledge and professionalism are unmatched.",
            author: "Mohammed Al Qasim",
            position: "Director, Global Ventures FZE",
            rating: 5
        }
    ];

    return (
        <>
            <SEO
                title="NXTStar | Start, Scale & Succeed in the UAE"
                description="Your partner in UAE business setup. Comprehensive solutions for mainland, freezone, and offshore company formation in the UAE."
                keywords="UAE business setup, company formation UAE, business setup consultants Dubai"
                canonicalUrl="/"
            />

            {/* Hero Section */}
            <section className="hero-section" style={{
                backgroundImage: `url(${heroBackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-container">
                    <div className="hero-content-home">
                        <PopUp>
                            <h1 className="hero-title" id='hero-heading'>
                                <h1 id='scs'>Start, Scale & Succeed in the </h1><span>UAE</span> – Your Partner in Business Setup
                            </h1>
                        </PopUp>
                        <PopUpBounce delay={0.2}>
                            <p className="hero-description" id='hero-desc'>
                                NXTStar provides comprehensive business setup services in UAE mainland, freezone, and offshore jurisdictions. Let us help you establish your business presence in one of the world's most dynamic markets.
                            </p>
                        </PopUpBounce>
                        <PopUp delay={0.4}>
                            <div className="hero-cta">
                                {/* <Button to="/contact" type="primary" size="lg">
                                    Get Started
                                </Button>
                                <Button href="https://calendly.com/nxtstar" type="outline" size="lg">
                                    Book a Consultation
                                </Button> */}
                            </div>
                        </PopUp>
                    </div>
                    <RotatePopUp delay={0.2}>
                        <div className="hero-calculator">
                            <div className="calculator-header">
                                <div className="calculator-icon">
                                    <FaCalculator />
                                </div>
                                <h3>Business Setup Cost Calculator</h3>
                                <p>Get an instant estimate of your business setup costs in the UAE</p>
                            </div>
                            <div className="calculator-features">
                                <div className="feature">
                                    <FaDollarSign />
                                    <span>No Hidden Costs</span>
                                </div>
                                <div className="feature">
                                    <FaPercentage />
                                    <span>Special Discounts</span>
                                </div>
                                <div className="feature">
                                    <FaCheck />
                                    <span>Accurate Estimates</span>
                                </div>
                            </div>
                            <div className="calculator-form">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">
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
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="form-control"
                                            placeholder="Enter your contact number"
                                            required
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
                                    <Button type="secondary" block>
                                        <FaTags className="btn-icon" /> Calculate Your Business Setup Cost
                                    </Button>
                                </form>
                            </div>
                            
                        </div>
                    </RotatePopUp>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="section">
                <div className="section-container">
                    <PopUp>
                        <div className="section-header">
                            <h2 className="section-title">Our Core Services</h2>
                            <p className="section-description">
                                We offer comprehensive business setup solutions tailored to your specific needs. Our expertise spans across mainland, freezone, and offshore company formation.
                            </p>
                        </div>
                    </PopUp>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <PopUpBounce key={index} delay={0.1 * index}>
                                <ServiceCard
                                    icon={service.icon}
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
                    <PopUp>
                        <div className="section-header">
                            <h2 className="section-title">Why Start a Business in the UAE?</h2>
                            <p className="section-description">
                                The United Arab Emirates offers numerous advantages for entrepreneurs and businesses looking to establish their presence in the region.
                            </p>
                        </div>
                    </PopUp>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <PopUp key={index} delay={0.1 * index}>
                                <div className="benefit-card">
                                    <RotatePopUp delay={0.2 + 0.1 * index}>
                                        <div className="benefit-icon">
                                            {benefit.icon}
                                        </div>
                                    </RotatePopUp>
                                    <h3 className="benefit-title">{benefit.title}</h3>
                                    <p className="benefit-description">{benefit.description}</p>
                                </div>
                            </PopUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section why-us-section">
                <div className="section-container">
                    <PopUp>
                        <div className="section-header">
                            <h2 className="section-title">Why Choose NXTStar?</h2>
                            <p className="section-description">
                                We're committed to making your business setup journey in the UAE smooth and successful.
                            </p>
                        </div>
                    </PopUp>
                    <div className="benefits-grid">
                        <PopUpBounce delay={0.1}>
                            <div className="benefit-card">
                                <h3 className="benefit-title">Expert Guidance</h3>
                                <p className="benefit-description">Our team of consultants has extensive experience in UAE business setup across various industries.</p>
                            </div>
                        </PopUpBounce>
                        <PopUpBounce delay={0.2}>
                            <div className="benefit-card">
                                <h3 className="benefit-title">End-to-End Support</h3>
                                <p className="benefit-description">From initial consultation to post-setup services, we provide comprehensive support at every stage.</p>
                            </div>
                        </PopUpBounce>
                        <PopUpBounce delay={0.3}>
                            <div className="benefit-card">
                                <h3 className="benefit-title">Customized Solutions</h3>
                                <p className="benefit-description">We tailor our services to meet your specific business requirements and objectives.</p>
                            </div>
                        </PopUpBounce>
                        <PopUpBounce delay={0.4}>
                            <div className="benefit-card">
                                <h3 className="benefit-title">Transparent Process</h3>
                                <p className="benefit-description">We ensure complete transparency in our processes and fee structures, with no hidden costs.</p>
                            </div>
                        </PopUpBounce>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section testimonials-section">
                <div className="section-container">
                    <PopUp>
                        <div className="section-header">
                            <h2 className="section-title">What Our Clients Say</h2>
                            <p className="section-description">
                                Hear from businesses that have successfully established their presence in the UAE with our help.
                            </p>
                        </div>
                    </PopUp>
                    <div className="testimonials-slider">
                        {testimonials.map((testimonial, index) => (
                            <PopUpBounce key={index} delay={0.2 * index}>
                                <TestimonialCard
                                    content={testimonial.content}
                                    author={testimonial.author}
                                    position={testimonial.position}
                                    rating={testimonial.rating}
                                />
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
                                    <Button href="https://calendly.com/nxtstar" type="outline" size="lg">
                                        Book a Consultation
                                    </Button>
                                </div>
                            </RotatePopUp>
                        </div>
                    </PopUp>
                </div>
            </section>
        </>
    );
};

export default HomePage;