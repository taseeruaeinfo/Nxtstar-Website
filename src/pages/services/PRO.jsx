import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/PRO.css';

const PRO = () => {
    const services = [
        {
            title: 'License Renewal',
            description: 'Timely renewal of your trade license with all relevant authorities.',
            icon: '🔄'
        },
        {
            title: 'Visa Processing',
            description: 'New visa applications, renewals, and cancellations for employees and dependents.',
            icon: '🛂'
        },
        {
            title: 'Document Attestation',
            description: 'Legal attestation of documents with UAE government entities and foreign embassies.',
            icon: '📝'
        },
        {
            title: 'Company Amendments',
            description: 'Processing changes to company details, activities, or shareholders.',
            icon: '📊'
        },
        {
            title: 'Immigration Services',
            description: 'Entry permits, status adjustments, and medical typing services.',
            icon: '✈️'
        },
        {
            title: 'Government Transactions',
            description: 'Representing your company at various government departments.',
            icon: '🏛️'
        }
    ];

    const packages = [
        {
            title: 'Basic PRO Package',
            price: '2,500',
            features: [
                'Trade License Renewal',
                '2 Visa Renewals/Applications',
                'Emirates ID Processing',
                'Medical Testing Coordination',
                'Basic Document Attestation',
                '3 Government Transactions'
            ],
            recommended: false
        },
        {
            title: 'Business PRO Package',
            price: '5,000',
            features: [
                'Trade License Renewal',
                '5 Visa Renewals/Applications',
                'Emirates ID Processing',
                'Medical Testing Coordination',
                'Document Attestation',
                'Labor Card Processing',
                'Company Amendments',
                'Unlimited Government Transactions'
            ],
            recommended: true
        },
        {
            title: 'Corporate PRO Package',
            price: '8,500',
            features: [
                'Trade License Renewal',
                '10 Visa Renewals/Applications',
                'Emirates ID Processing',
                'Medical Testing Coordination',
                'Premium Document Attestation',
                'Labor Card Processing',
                'Company Amendments',
                'Dedicated PRO Representative',
                'Unlimited Government Transactions',
                'Priority Processing'
            ],
            recommended: false
        }
    ];

    const faqs = [
        {
            question: 'What are PRO services?',
            answer: 'PRO (Public Relations Officer) services involve handling all government-related paperwork and procedures for businesses and individuals in the UAE. This includes visa processing, license renewals, document attestation, and representing your company at various government departments.'
        },
        {
            question: 'Why do I need PRO services in the UAE?',
            answer: 'The UAE government procedures can be complex and time-consuming, often requiring Arabic language skills and knowledge of local regulations. Professional PRO services save you time and ensure compliance with all legal requirements, allowing you to focus on your business operations.'
        },
        {
            question: 'How long does visa processing typically take?',
            answer: 'Visa processing timelines vary depending on the type of visa and current government processing times. Generally, employment visas take 2-3 weeks from application to issuance, while dependent visas may take 1-2 weeks. Our PRO services work to expedite these processes whenever possible.'
        },
        {
            question: 'Can PRO services help with company amendments?',
            answer: 'Yes, our PRO services include processing all types of company amendments such as adding or removing activities, changing company name, relocating office premises, adding or removing shareholders, and increasing or decreasing capital.'
        },
        {
            question: 'Do you offer PRO services for individuals or only companies?',
            answer: 'We offer PRO services for both companies and individuals. While businesses often require more comprehensive PRO assistance, individuals can also benefit from our services for visa matters, document attestation, and other government transactions.'
        }
    ];

    return (
        <PageLayout
            title="PRO Services in UAE"
            description="Professional PRO services to handle all your government-related paperwork and procedures in the UAE."
            breadcrumbs={[
                { label: 'Services', url: '/services' },
                { label: 'PRO Services', url: '/services/pro' }
            ]}
        >
            <div className="pro-services-page">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>PRO Services in UAE</h1>
                        <p>Streamline your government transactions and administrative procedures with our professional PRO services.</p>
                        <div className="hero-buttons">
                            <a href="#packages" className="primary-btn">View Packages</a>
                            <a href="/contact" className="secondary-btn">Get Free Consultation</a>
                        </div>
                    </div>
                </section>

                <section className="intro-section">
                    <div className="section-content">
                        <h2>Government Transactions Made Easy</h2>
                        <p>
                            In the UAE, navigating government procedures and paperwork can be complex and time-consuming.
                            Our PRO (Public Relations Officer) services handle all your government-related transactions efficiently,
                            ensuring compliance with all legal requirements while saving you valuable time and effort.
                        </p>
                        <p>
                            With deep knowledge of UAE regulations and strong relationships with government departments,
                            our experienced PRO team ensures smooth processing of all your administrative requirements.
                        </p>
                    </div>
                </section>

                <section className="services-section">
                    <div className="section-content">
                        <h2>Our PRO Services</h2>
                        <p className="section-intro">
                            From license renewals to visa processing, we handle all aspects of government and administrative procedures.
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

                <section id="packages" className="packages-section">
                    <div className="section-content">
                        <h2>PRO Service Packages</h2>
                        <p className="section-intro">
                            Choose from our range of comprehensive PRO service packages designed to suit different business needs.
                        </p>

                        <div className="packages-grid">
                            {packages.map((pkg, index) => (
                                <div key={index} className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
                                    {pkg.recommended && <div className="recommended-tag">Recommended</div>}
                                    <div className="package-header">
                                        <h3>{pkg.title}</h3>
                                        <div className="package-price">
                                            <span className="currency">AED</span>
                                            <span className="amount">{pkg.price}</span>
                                            <span className="period">/year</span>
                                        </div>
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
                            <p>* Government fees are additional and subject to change</p>
                            <p>* Custom packages available for specific business requirements</p>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="section-content">
                        <h2>How Our PRO Services Work</h2>
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-number">01</div>
                                <div className="step-content">
                                    <h3>Initial Consultation</h3>
                                    <p>We discuss your specific needs and recommend the most appropriate services.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">02</div>
                                <div className="step-content">
                                    <h3>Document Collection</h3>
                                    <p>We provide a checklist of required documents and assist with preparation.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">03</div>
                                <div className="step-content">
                                    <h3>Application Submission</h3>
                                    <p>Our PRO submits applications to relevant government departments.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">04</div>
                                <div className="step-content">
                                    <h3>Status Updates</h3>
                                    <p>Regular updates on your application progress and estimated completion times.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">05</div>
                                <div className="step-content">
                                    <h3>Document Delivery</h3>
                                    <p>All processed documents and approvals are delivered to you upon completion.</p>
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
                            <p>Have more questions about our PRO services?</p>
                            <a href="/contact" className="contact-btn">Contact Our Experts</a>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Need Help With Government Procedures?</h2>
                        <p>Let our professional PRO team handle your administrative requirements while you focus on your business.</p>
                        <a href="/contact" className="cta-btn">Schedule a Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default PRO;