import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaGlobe, FaShieldAlt, FaMoneyBillWave, FaChartLine, FaHandshake, FaCalculator, FaDollarSign, FaPercentage, FaCheck, FaTags } from 'react-icons/fa';
import SEO from '../components/layout/SEO';
import ServiceCard from '../components/ui/ServiceCard';
import TestimonialCard from '../components/ui/TestimonialCard';
import Button from '../components/ui/Button';
import { PopUp, PopUpBounce, RotatePopUp } from '../components/ui/Motion';
import AnimatedBackground from '../components/ui/AnimatedBackground';
import '../styles/HomePage.css';
import '../styles/AnimatedBackground.css';
import '../styles/DarkHomeTheme.css';
import '../styles/FooterOverride.css';
import '../styles/HeroThemeTransition.css';
const backend_url = import.meta.env.VITE_BACKEND_URL;

const HomePage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        businessType: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Form submitted');
        // console.log('Form data:', formData);

        // Validate form data
        if (!formData.name.trim()) {
            alert('Please enter your name.');
            return;
        }

        if (!formData.email.trim()) {
            alert('Please enter your email address.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!formData.phone.trim()) {
            alert('Please enter your phone number.');
            return;
        }

        // Phone number validation (allowing international formats)
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
            alert('Please enter a valid phone number (e.g., +1234567890).');
            return;
        }

        if (!formData.businessType) {
            alert('Please select a business type.');
            return;
        }

        // Set loading state to true
        setIsLoading(true);

        try {
            const res = await fetch(`${backend_url}/api/send-form`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log('Response:', data);
            if (data.success) {
                alert("✅ Our team will shortly get in touch with you..");
                setFormData({ name: "", email: "", phone: "", businessType: "" });
            } else {
                alert("❌ Failed to send form: " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("⚠️ Something went wrong: " + err.message);
        } finally {
            // Set loading state to false regardless of success or failure
            setIsLoading(false);
        }
    };

    const services = [
        {
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'Mainland Business Setup',
            description: 'Set up your business in UAE mainland with 100% ownership and operate anywhere in the UAE without restrictions.',
            link: '/business/mainland'
        },
        {
            image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'Freezone Company Formation',
            description: 'Establish your company in UAE free zones with 100% ownership, tax exemptions, and full repatriation of profits.',
            link: '/business/freezone'
        },
        {
            image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            title: 'Offshore Company Setup',
            description: 'Protect your assets and enjoy complete privacy with our offshore company formation services.',
            link: '/business/offshore'
        }
    ];

    const benefits = [
        {
            icon: <FaMoneyBillWave />,
            image: "https://images.unsplash.com/photo-1710132819209-f4d38bf5532d?q=80&w=747&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Tax Benefits',
            description: 'The UAE offers significant tax advantages with no corporate tax in free zones, no personal income tax, and numerous double taxation agreements.'
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
            description: 'We ensure complete transparency in our processes and fee structures, with no hidden costs.'
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

    // Apply index to cards for staggered animations
    useEffect(() => {
        const cards = document.querySelectorAll('.benefit-card, .service-card');
        cards.forEach((card, index) => {
            card.style.setProperty('--card-index', index);
        });
    }, []);

    return (
        <>
            <SEO
                title="NXTStar | Start, Scale & Succeed in the UAE"
                description="Your partner in UAE business setup. Comprehensive solutions for mainland, freezone, and offshore company formation in the UAE."
                keywords="UAE business setup, company formation UAE, business setup consultants Dubai"
                canonicalUrl="/"
            />

            {/* Hero Section with Dark Theme */}
            <div className="dark-theme">
                <section className="hero-section">
                    <AnimatedBackground />
                    <div className="hero-container">
                        <div className="hero-content-home">
                            <PopUp>
                                <h1 className="hero-title" id='hero-heading'>
                                    <h1 id='scs'>Start, Scale & Succeed </h1> in the <span>UAE</span> – Your Partner in Business Setup
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
                        <PopUpBounce delay={0.2}>
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
                                        <span>Fast Response</span>
                                    </div>
                                    <div className="feature">
                                        <FaCheck />
                                        <span>Accurate Estimates</span>
                                    </div>
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
                                        <Button className="cost-calc-button" type="submit" block disabled={isLoading}>
                                            {isLoading ? (
                                                <>
                                                    <span className="spinner" style={{ marginRight: '8px' }}></span>
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <FaTags className="btn-icon" /> Calculate Your Business Setup Cost
                                                </>
                                            )}
                                        </Button>

                                    </form>
                                </div>

                            </div>
                        </PopUpBounce>
                    </div>
                </section>
                {/* Add a transition div between dark and light sections */}
                <div className="theme-transition"></div>
            </div>

            {/* Regular Light Theme Content Starts Here */}
            <div className="light-content">
                {/* Core Services Section */}
                <section className="section core-services-section">
                    <div className="section-container">

                        <div className="section-header">
                            <h2 className="section-title">Our Core Services</h2>
                            <p className="section-description">
                                We offer comprehensive business setup solutions tailored to your specific needs. Our expertise spans across mainland, freezone, and offshore company formation.
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
                                            <img src={benefit.image} alt={benefit.title} className="benefit-image" />
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
                                            <img src={benefit.image} alt={benefit.title} className="benefit-image" />
                                        </div>
                                        <h3 className="benefit-title">{benefit.title}</h3>
                                        <p className="benefit-description">{benefit.description}</p>
                                    </div>
                                </PopUpBounce>
                            ))}
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