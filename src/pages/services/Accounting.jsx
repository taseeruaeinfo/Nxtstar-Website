import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/Accounting.css';

const Accounting = () => {
    const services = [
        {
            title: 'Bookkeeping',
            description: 'Systematic recording of financial transactions including sales, purchases, receipts, and payments.',
            icon: '📒'
        },
        {
            title: 'Financial Reporting',
            description: 'Preparation of financial statements including balance sheets, income statements, and cash flow statements.',
            icon: '📊'
        },
        {
            title: 'VAT Compliance',
            description: 'Registration, preparation, and filing of VAT returns in compliance with UAE regulations.',
            icon: '🧾'
        },
        {
            title: 'Payroll Management',
            description: 'Processing employee salaries, calculating benefits, and generating pay slips.',
            icon: '💼'
        },
        {
            title: 'Tax Advisory',
            description: 'Providing guidance on tax planning strategies and compliance with UAE tax laws.',
            icon: '📝'
        },
        {
            title: 'Audit Support',
            description: 'Assisting with internal and external audits and ensuring compliance with regulatory requirements.',
            icon: '🔍'
        }
    ];

    const packages = [
        {
            title: 'Starter Package',
            price: '1,500',
            frequency: 'per month',
            features: [
                'Basic Bookkeeping (up to 100 transactions)',
                'Monthly Financial Statements',
                'Quarterly VAT Returns',
                'Annual Financial Reports',
                'Email & Phone Support'
            ],
            suitable: 'Ideal for small businesses and startups',
            recommended: false
        },
        {
            title: 'Business Package',
            price: '3,000',
            frequency: 'per month',
            features: [
                'Comprehensive Bookkeeping (up to 300 transactions)',
                'Monthly Financial Statements',
                'Quarterly VAT Returns',
                'Tax Planning & Advice',
                'Payroll Processing (up to 10 employees)',
                'Dedicated Accountant',
                'Unlimited Support'
            ],
            suitable: 'Perfect for growing businesses',
            recommended: true
        },
        {
            title: 'Enterprise Package',
            price: '5,000',
            frequency: 'per month',
            features: [
                'Advanced Bookkeeping (unlimited transactions)',
                'Weekly Financial Updates',
                'Monthly Financial Statements',
                'VAT Returns & Compliance',
                'Comprehensive Tax Planning',
                'Payroll Processing (up to 25 employees)',
                'CFO Advisory Services',
                'Dedicated Team',
                'Priority Support'
            ],
            suitable: 'For established businesses with complex needs',
            recommended: false
        }
    ];

    const benefits = [
        {
            title: 'Focus on Your Core Business',
            description: 'Let us handle your accounting tasks while you focus on running and growing your business.'
        },
        {
            title: 'Ensure Compliance',
            description: 'Stay compliant with UAE financial regulations, VAT requirements, and reporting obligations.'
        },
        {
            title: 'Reduce Costs',
            description: 'Save on hiring full-time accounting staff and investing in accounting software and systems.'
        },
        {
            title: 'Expert Guidance',
            description: 'Get professional advice on financial management, tax planning, and business decisions.'
        },
        {
            title: 'Timely Reporting',
            description: 'Receive accurate financial statements and reports when you need them for decision-making.'
        },
        {
            title: 'Scalable Solutions',
            description: 'Our services grow with your business, adapting to your changing financial management needs.'
        }
    ];

    const faqs = [
        {
            question: 'Why should I outsource my accounting services?',
            answer: "Outsourcing accounting services allows you to focus on your core business activities while ensuring your financial records are maintained by professionals. It reduces costs associated with hiring full-time staff, provides access to specialized expertise, and ensures compliance with UAE financial regulations. Our team stays updated with the latest regulatory changes, ensuring your business remains compliant."
        },
        {
            question: 'How do your accounting services work?',
            answer: "Our process begins with an initial assessment of your financial requirements. We then assign a dedicated accountant or team to handle your accounting needs. You can submit your financial documents physically or digitally, and we process them according to agreed timelines. Regular reports are provided, and we schedule review meetings to discuss your financial position and any necessary adjustments to your accounting strategy."
        },
        {
            question: 'Are you familiar with UAE VAT regulations?',
            answer: "Yes, our team specializes in UAE VAT regulations and stays updated with all amendments and new directives from the Federal Tax Authority. We handle VAT registration, prepare and file VAT returns, ensure proper tax invoicing, and provide guidance on VAT-related matters specific to your industry. Our expertise helps minimize tax liabilities while ensuring full compliance with UAE tax laws."
        },
        {
            question: 'Can you integrate with my existing accounting software?',
            answer: "Yes, our team is proficient in various accounting software platforms including QuickBooks, Xero, Zoho Books, SAP, and others commonly used in the UAE. We can work with your existing system or recommend suitable software based on your business needs. We also offer seamless data migration services if you're switching from one system to another."
        },
        {
            question: 'How do you ensure the security of financial information?',
            answer: "We implement stringent security measures to protect your financial data, including secure cloud storage with encryption, strict access controls, regular security audits, and confidentiality agreements with all staff. Our processes comply with international data protection standards, and we maintain secure communication channels for document transfer. All client information is handled with the utmost confidentiality."
        }
    ];

    return (
        <PageLayout
            title="Accounting & Tax Services in UAE"
            description="Professional accounting, bookkeeping, and tax compliance services for businesses in the UAE."
            headerImage="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="accounting-services-page">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Accounting & Tax Services</h1>
                        <p>Professional financial management solutions to keep your business compliant and financially organized.</p>
                        <div className="hero-buttons">
                            <a href="#packages" className="primary-btn">View Packages</a>
                            <a href="/contact" className="secondary-btn">Get Free Consultation</a>
                        </div>
                    </div>
                </section>

                <section className="intro-section">
                    <div className="section-content">
                        <h2>Professional Financial Management for UAE Businesses</h2>
                        <p>
                            In today's complex business environment, proper financial management and compliance are
                            critical to your success. Our accounting and tax services provide comprehensive support
                            for businesses of all sizes operating in the UAE.
                        </p>
                        <p>
                            Our team of qualified accountants and tax specialists offers tailored solutions to meet
                            your specific business needs, ensuring accurate financial reporting, tax compliance, and
                            valuable insights for better decision-making.
                        </p>
                    </div>
                </section>

                <section className="services-section">
                    <div className="section-content">
                        <h2>Our Accounting & Tax Services</h2>
                        <p className="section-intro">
                            Comprehensive financial services designed to support your business at every stage of growth.
                        </p>

                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <div className="service-icon">{service.icon}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Benefits of Outsourcing Accounting Services</h2>
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

                <section id="packages" className="packages-section">
                    <div className="section-content">
                        <h2>Our Accounting Service Packages</h2>
                        <p className="section-intro">
                            Choose from our range of accounting packages designed to suit businesses at different stages of growth.
                        </p>

                        <div className="packages-grid">
                            {packages.map((pkg, index) => (
                                <div key={index} className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
                                    {pkg.recommended && <div className="recommended-tag">Popular</div>}
                                    <div className="package-header">
                                        <h3>{pkg.title}</h3>
                                        <div className="package-price">
                                            <span className="currency">AED</span>
                                            <span className="amount">{pkg.price}</span>
                                            <span className="frequency">{pkg.frequency}</span>
                                        </div>
                                        <div className="package-suitable">{pkg.suitable}</div>
                                    </div>
                                    <div className="package-features">
                                        <ul>
                                            {pkg.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="package-footer">
                                        <a href="/contact" className="package-btn">Get Started</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pricing-note">
                            <p>* All packages can be customized based on specific business requirements</p>
                            <p>* Additional services available at competitive rates</p>
                            <p>* Annual payment discounts available</p>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="section-content">
                        <h2>Our Accounting Process</h2>
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-number">01</div>
                                <div className="step-content">
                                    <h3>Initial Assessment</h3>
                                    <p>We evaluate your current financial processes and identify your specific needs.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">02</div>
                                <div className="step-content">
                                    <h3>Customized Solution</h3>
                                    <p>We develop a tailored accounting package based on your business requirements.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">03</div>
                                <div className="step-content">
                                    <h3>Implementation</h3>
                                    <p>We set up systems and processes for efficient financial management.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">04</div>
                                <div className="step-content">
                                    <h3>Regular Reporting</h3>
                                    <p>We provide timely financial statements and reports as per agreed schedules.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">05</div>
                                <div className="step-content">
                                    <h3>Review Meetings</h3>
                                    <p>Regular consultations to discuss your financial position and future planning.</p>
                                </div>
                            </div>
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
                            <p>Have more questions about our accounting services?</p>
                            <a href="/contact" className="contact-btn">Contact Our Financial Experts</a>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Streamline Your Financial Management?</h2>
                        <p>Our accounting experts are ready to help your business stay financially organized and compliant.</p>
                        <a href="/contact" className="cta-btn">Schedule a Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Accounting;