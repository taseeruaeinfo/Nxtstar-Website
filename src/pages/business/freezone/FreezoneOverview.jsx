import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../components/layout/PageLayout';
import '../../../styles/pages/business/freezone/FreezoneOverview.css';

const FreezoneOverview = () => {
    const benefits = [
        
        {
            title: 'Tax Advantages',
            description: '0% corporate and personal income tax with full repatriation of profits and capital.'
        },
        {
            title: 'Simplified Setup Process',
            description: 'Streamlined incorporation procedures with minimal bureaucracy.'
        },
        {
            title: 'Strategic Locations',
            description: 'Free zones are strategically located near ports, airports, and business districts.'
        },
        {
            title: 'Industry-Specific Incentives',
            description: 'Many free zones offer additional benefits tailored to specific industries.'
        }
    ];

    const freezones = [
        {
            id: 'jafza',
            name: 'JAFZA (Jebel Ali Free Zone)',
            location: 'Dubai',
            description: 'One of the world\'s largest free zones, ideal for trading, manufacturing, and logistics businesses.',
            idealFor: ['Trading', 'Manufacturing', 'Logistics', 'Warehousing'],
            link: '/business/freezone/jafza'
        },
        {
            id: 'dmcc',
            name: 'DMCC',
            location: 'Dubai',
            description: 'Perfect for commodities trading, financial services, and professional services firms.',
            idealFor: ['Commodities Trading', 'Financial Services', 'Professional Services', 'Jewelry'],
            link: '/business/freezone/dmcc'
        },
        {
            id: 'dwtc',
            name: 'Dubai World Trade Centre',
            location: 'Dubai',
            description: 'Located in the heart of Dubai\'s business district, suitable for events, technology, and services.',
            idealFor: ['Events Management', 'Technology', 'Media', 'Consultancy'],
            link: '/business/freezone/dwtc'
        },
        {
            id: 'diac',
            name: 'Dubai Internet City',
            location: 'Dubai',
            description: 'Technology hub for IT companies, software developers, and internet businesses.',
            idealFor: ['IT', 'Software Development', 'Internet Services', 'Tech Startups'],
            link: '/business/freezone/diac'
        },
        {
            id: 'dmca',
            name: 'Dubai Media City',
            location: 'Dubai',
            description: 'Dedicated to media and creative industries with world-class infrastructure.',
            idealFor: ['Media Production', 'Publishing', 'Advertising', 'Broadcasting'],
            link: '/business/freezone/dmca'
        },
        {
            id: 'dkp',
            name: 'Dubai Knowledge Park',
            location: 'Dubai',
            description: 'Focused on human resource management, professional training, and education.',
            idealFor: ['Education', 'Training', 'HR Services', 'Consulting'],
            link: '/business/freezone/dkp'
        },
        {
            id: 'rakez',
            name: 'RAKEZ',
            location: 'Ras Al Khaimah',
            description: 'Cost-effective free zone with options for industrial, trading, and service companies.',
            idealFor: ['Manufacturing', 'Trading', 'Professional Services', 'SMEs'],
            link: '/business/freezone/rakez'
        },
        {
            id: 'shams',
            name: 'Sharjah Media City (Shams)',
            location: 'Sharjah',
            description: 'Affordable free zone focused on creative, media, and service businesses.',
            idealFor: ['Media', 'Creative Industries', 'Consultancy', 'Freelancers'],
            link: '/business/freezone/shams'
        },
        {
            id: 'afz',
            name: 'Ajman Free Zone',
            location: 'Ajman',
            description: 'Cost-effective option with competitive packages for startups and small businesses.',
            idealFor: ['Trading', 'Services', 'Light Manufacturing', 'SMEs'],
            link: '/business/freezone/afz'
        }
    ];

    const faqs = [
        {
            question: 'What is a free zone company in the UAE?',
            answer: 'A free zone company is a business entity established within one of the UAE\'s many specialized free trade zones. These zones operate under their own framework of regulations, which are separate from the UAE\'s federal laws, offering benefits like 100% foreign ownership, tax exemptions, and simplified business setup procedures.'
        },
        {
            question: 'Can a free zone company do business in the UAE mainland?',
            answer: 'Free zone companies can sell their products/services to UAE mainland businesses, but generally cannot directly trade with the local UAE market without appointing a local distributor or establishing a branch/subsidiary in the mainland. However, they can freely trade internationally and with other free zone companies.'
        },
        {
            question: 'How do I choose the right free zone for my business?',
            answer: 'The right free zone depends on your business activities, budget, location preferences, facility requirements, and visa needs. Factors to consider include industry focus of the free zone, setup costs, annual renewal fees, minimum capital requirements, physical space requirements, and the number of visas allowed.'
        },
        {
            question: 'What documents are required for free zone company setup?',
            answer: 'Typically required documents include passport copies of shareholders/directors, business plan, bank reference letters, and completed application forms. Some free zones may require additional documents depending on the nature of your business activities. Our team will guide you through the specific requirements.'
        },
        {
            question: 'How long does it take to set up a free zone company?',
            answer: 'The process typically takes 1-3 weeks from initial application to license issuance, depending on the free zone authority and how quickly you can provide the required documentation. Some free zones offer fast-track services for an additional fee.'
        }
    ];

    return (
        <PageLayout
            title="Free Zone Business Setup in UAE"
            description="Set up your business in UAE free zones with 100% foreign ownership, tax exemptions, and simplified procedures."
            headerImage="https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="freezone-overview-page">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Free Zone Business Setup in UAE</h1>
                        <p>Establish your business in one of the UAE's specialized economic zones with 100% ownership and significant tax advantages.</p>
                        <div className="hero-buttons">
                            <a href="#compare-freezones" className="primary-btn">Compare Free Zones</a>
                            <a href="/contact" className="secondary-btn">Free Consultation</a>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Benefits of Free Zone Setup</h2>
                        <p className="section-intro">
                            Free zone company formation offers numerous advantages for entrepreneurs and businesses looking to establish a presence in the UAE.
                        </p>

                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card">
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="compare-freezones" className="freezones-section">
                    <div className="section-content">
                        <h2>Popular UAE Free Zones</h2>
                        <p className="section-intro">
                            The UAE has over 40 free zones, each designed to cater to specific industries and business needs. Here are some of the most popular options:
                        </p>

                        <div className="freezones-grid">
                            {freezones.map((freezone) => (
                                <div key={freezone.id} className="freezone-card">
                                    <h3>{freezone.name}</h3>
                                    <div className="freezone-location">{freezone.location}</div>
                                    <p className="freezone-description">{freezone.description}</p>

                                    <div className="ideal-for">
                                        <h4>Ideal For:</h4>
                                        <ul>
                                            {freezone.idealFor.map((industry, index) => (
                                                <li key={index}>{industry}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link to={freezone.link} className="freezone-link">
                                        Learn More
                                    </Link>
                                </div>
                            ))}
                        </div>

                        <div className="freezone-cta">
                            <p>Not sure which free zone is right for your business?</p>
                            <Link to="/contact" className="freezone-consult-btn">Get Expert Guidance</Link>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="section-content">
                        <h2>Free Zone Setup Process</h2>
                        <p className="section-intro">
                            Our streamlined process makes establishing your free zone business efficient and hassle-free.
                        </p>

                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-number">01</div>
                                <div className="step-content">
                                    <h3>Initial Consultation</h3>
                                    <p>We'll understand your business requirements and recommend the most suitable free zones.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number">02</div>
                                <div className="step-content">
                                    <h3>Company Name Registration</h3>
                                    <p>Select and register your company name with the free zone authority.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number">03</div>
                                <div className="step-content">
                                    <h3>Document Preparation</h3>
                                    <p>We'll help you prepare and submit all necessary documentation for your business license.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number">04</div>
                                <div className="step-content">
                                    <h3>License Approval</h3>
                                    <p>The free zone authority reviews your application and issues your business license.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number">05</div>
                                <div className="step-content">
                                    <h3>Bank Account Setup</h3>
                                    <p>We assist with opening a corporate bank account for your new free zone company.</p>
                                </div>
                            </div>

                            <div className="process-step">
                                <div className="step-number">06</div>
                                <div className="step-content">
                                    <h3>Visa Processing</h3>
                                    <p>Obtain residence visas for yourself, family members, and employees as needed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="packages-section">
                    <div className="section-content">
                        <h2>Free Zone Setup Packages</h2>
                        <p className="section-intro">
                            Choose from our range of tailored packages designed to meet different business needs and budgets.
                        </p>

                        <div className="packages-grid">
                            <div className="package-card starter">
                                <div className="package-header">
                                    <h3>Basic Package</h3>
                                    <div className="package-price">
                                        <span className="currency">From AED</span>
                                        <span className="amount">4999</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Free Zone License</li>
                                        <li>Company Registration</li>
                                        <li>lease agreement </li>
                                        <li>Standard Processing</li>
                                        <li>Assistance with Documentation</li>
                                        <li>Basic Business Support</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>

                            <div className="package-card standard">
                                <div className="recommended-tag">Recommended</div>
                                <div className="package-header">
                                    <h3>Standard Package</h3>
                                    <div className="package-price">
                                        <span className="currency">From AED</span>
                                        <span className="amount">14,900</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Free Zone License</li>
                                        <li>Company Registration</li>
                                        <li>1 Visa Eligibility</li>
                                        <li>Registered Office Address (1 Year)</li>
                                        <li>Corporate Bank Account Assistance</li>
                                        <li>Dedicated PRO Services</li>
                                        <li>Business Support Services</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>

                            <div className="package-card premium">
                                <div className="package-header">
                                    <h3>Premium Package</h3>
                                    <div className="package-price">
                                        <span className="currency">From AED</span>
                                        <span className="amount">29,500</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Free Zone License</li>
                                        <li>Company Registration</li>
                                        <li>3 Visa Eligibility</li>
                                        <li>Express Processing</li>
                                        <li>Premium Office Address (1 Year)</li>
                                        <li>Priority Bank Account Setup</li>
                                        <li>VIP PRO Services</li>
                                        <li>Company Stamp & Documentation</li>
                                        <li>Tax Registration</li>
                                        <li>Business Development Support</li>
                                        <li>1-Year Business Consulting</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-note">
                            <p>* Prices vary based on free zone selection and specific requirements</p>
                            <p>* Government fees are additional and subject to change</p>
                            <p>* Custom packages available for specific business needs</p>
                        </div>
                    </div>
                </section>

                <section className="faq-section">
                    <div className="section-content">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faqs-container">
                            {faqs.map((faq, index) => (
                                <div key={index} className="faq-item">
                                    <h3>{faq.question}</h3>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                        <div className="more-questions">
                            <p>Have more questions about free zone setup?</p>
                            <a href="/contact" className="contact-btn">Contact Our Experts</a>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Start Your Free Zone Business in the UAE?</h2>
                        <p>Our experts will help you select the ideal free zone and guide you through the entire setup process.</p>
                        <a href="/contact" className="cta-btn">Schedule a Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default FreezoneOverview;