import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/business/MainlandPage.css';

const MainlandPage = () => {
    const benefits = [
        
        {
            title: 'Unrestricted Business Activities',
            description: 'Trade freely across the UAE local market, GCC region, and internationally without any restrictions.'
        },
        {
            title: 'Government & Corporate Contracts',
            description: 'Eligible to bid for lucrative government tenders and contracts with large corporations.'
        },
        {
            title: 'Multiple Visa Allocations',
            description: 'Obtain residence visas for yourself, family members, and employees based on your business space.'
        },
        {
            title: 'No Currency Restrictions',
            description: 'Freedom to repatriate capital, profits, and dividends without restrictions.'
        }
        
    ];

    const steps = [
        {
            number: '01',
            title: 'Initial Consultation',
            description: 'We assess your business requirements and recommend the ideal business structure.'
        },
        {
            number: '02',
            title: 'Trade Name Registration',
            description: 'Reserve your unique company name with the Department of Economic Development.'
        },
        {
            number: '03',
            title: 'Location Selection',
            description: 'Choose an office space or use our business center services for your registered address.'
        },
        {
            number: '04',
            title: 'License Application',
            description: 'Prepare and submit all necessary documentation for your business license.'
        },
        {
            number: '05',
            title: 'License Issuance',
            description: 'Receive your DED license and establishment card to start operations.'
        },
        {
            number: '06',
            title: 'Bank Account & Visas',
            description: 'Open a corporate bank account and process residence visas for stakeholders.'
        }
    ];

    const faqs = [
        {
            question: 'What is a mainland company in the UAE?',
            answer: 'A mainland company is a business entity established in the UAE outside of free zones, allowing you to trade directly with the local UAE market without restrictions. Mainland companies are regulated by the Department of Economic Development (DED) of the respective emirate.'
        },
        {
            question: 'Can foreigners own 100% of a mainland company?',
            answer: 'Yes, following the UAE\'s 2020 Foreign Direct Investment Law amendments, foreigners can now own 100% of mainland companies in most business activities without requiring a local sponsor.'
        },
        {
            question: 'What documents are required to set up a mainland company?',
            answer: 'Required documents include passport copies of all shareholders, No Objection Certificate from current sponsor (for UAE residents), bank reference letters, business plan, and other documents depending on the type of business activity.'
        },
        {
            question: 'How long does it take to set up a mainland company?',
            answer: 'The process typically takes 2-3 weeks from initial application to license issuance, depending on the type of business activity and how quickly you can provide the required documentation.'
        },
        {
            question: 'What are the costs involved in setting up a mainland company?',
            answer: 'Costs include trade name reservation fees, initial approval fees, license fees, establishment card fees, office rent, and service charges. Our packages include transparent pricing with all government and service fees clearly outlined.'
        }
    ];

    return (
        <PageLayout
            title="Mainland Business Setup in UAE"
            description="Set up a mainland company in the UAE with 100% ownership and freedom to trade anywhere in the local market."
            headerImage="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.7)"
        >
            <div className="mainland-page">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Mainland Business Setup in UAE</h1>
                        <p>Establish a mainland company with 100% ownership and full access to the UAE's lucrative market.</p>
                        <div className="hero-buttons">
                            <a href="#pricing" className="primary-btn">View Packages</a>
                            <a href="/contact" className="secondary-btn">Get Free Consultation</a>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Benefits of Mainland Business Setup</h2>
                        <p className="section-intro">
                            A mainland company offers comprehensive access to the UAE's thriving market, along with numerous
                            advantages for serious entrepreneurs and businesses.
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

                <section className="process-section">
                    <div className="section-content">
                        <h2>How to Setup a Mainland Business</h2>
                        <p className="section-intro">
                            Our streamlined process makes establishing your mainland business smooth and efficient,
                            handling all the complex paperwork and procedures.
                        </p>

                        <div className="steps-container">
                            {steps.map((step, index) => (
                                <div key={index} className="step-item">
                                    <div className="step-number">{step.number}</div>
                                    <div className="step-content">
                                        <h3>{step.title}</h3>
                                        <p>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* <section id="pricing" className="pricing-section">
                    <div className="section-content">
                        <h2>Our Mainland Setup Packages</h2>
                        <p className="section-intro">
                            Choose from our range of comprehensive packages designed to suit different business needs and budgets.
                        </p>

                        <div className="packages-grid">
                            <div className="package-card starter">
                                <div className="package-header">
                                    <h3>Starter Package</h3>
                                    <div className="package-price">
                                        <span className="currency">AED</span>
                                        <span className="amount">12,500</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Business Name Registration</li>
                                        <li>Trade License Processing</li>
                                        <li>Establishment Card</li>
                                        <li>1 Visa Allocation</li>
                                        <li>Standard Processing Time</li>
                                        <li>Basic Documentation Support</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>

                            <div className="package-card professional">
                                <div className="recommended-tag">Recommended</div>
                                <div className="package-header">
                                    <h3>Professional Package</h3>
                                    <div className="package-price">
                                        <span className="currency">AED</span>
                                        <span className="amount">18,900</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Business Name Registration</li>
                                        <li>Trade License Processing</li>
                                        <li>Establishment Card</li>
                                        <li>3 Visa Allocations</li>
                                        <li>Priority Processing</li>
                                        <li>Corporate Bank Account Assistance</li>
                                        <li>Registered Office Address (1 Year)</li>
                                        <li>PRO Services for Documentation</li>
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
                                        <span className="currency">AED</span>
                                        <span className="amount">25,000</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Business Name Registration</li>
                                        <li>Trade License Processing</li>
                                        <li>Establishment Card</li>
                                        <li>5 Visa Allocations</li>
                                        <li>Express Processing</li>
                                        <li>Premium Bank Account Setup</li>
                                        <li>Registered Office Address (1 Year)</li>
                                        <li>Dedicated PRO Services</li>
                                        <li>Company Stamp & Documentation</li>
                                        <li>Tax Registration</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-note">
                            <p>* Government fees are additional and subject to change based on activity and location</p>
                            <p>* All packages include initial consultation and business setup guidance</p>
                            <p>* Custom packages available for specific business requirements</p>
                        </div>
                    </div>
                </section> */}

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
                            <p>Still have questions about mainland business setup?</p>
                            <a href="/contact" className="contact-btn">Contact Our Experts</a>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Start Your Mainland Business in the UAE?</h2>
                        <p>Our experts will guide you through every step of the process.</p>
                        <a href="/contact" className="cta-btn">Schedule a Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default MainlandPage;