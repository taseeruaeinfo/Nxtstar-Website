import React from 'react';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/business/OffshorePage.css';

const OffshorePage = () => {
    const benefits = [
        {
            title: 'Privacy & Confidentiality',
            description: 'Offshore companies offer enhanced privacy and confidentiality for shareholders and directors.'
        },
        {
            title: 'Asset Protection',
            description: 'Secure your assets from potential legal claims and liabilities.'
        },
        {
            title: 'Tax Efficiency',
            description: '0% corporate and personal income tax on foreign-earned income.'
        },
        {
            title: 'No Physical Presence Required',
            description: 'Manage your offshore company remotely without maintaining a physical office.'
        },
        {
            title: 'Minimal Reporting Requirements',
            description: 'Simpler accounting and reporting obligations compared to onshore companies.'
        },
        {
            title: 'Banking Flexibility',
            description: 'Access to international banking facilities with multi-currency accounts.'
        }
    ];

    const jurisdictions = [
        {
            name: 'JAFZA Offshore',
            features: [
                "Part of Dubai's Jebel Ali Free Zone",
                "Strong legal framework based on common law",
                "Prestigious UAE address",
                "No requirement for physical office",
                "Quick and efficient setup process"
            ]
        },
        {
            name: 'RAK ICC',
            features: [
                'Located in Ras Al Khaimah',
                'Cost-effective formation and maintenance',
                'Based on English Common Law',
                'Wide network of double taxation treaties',
                'Option for apostille and document legalization'
            ]
        },
        {
            name: 'ADGM',
            features: [
                'Abu Dhabi Global Market jurisdiction',
                'Direct application of English common law',
                'Sophisticated regulatory framework',
                'High level of international recognition',
                'Ideal for financial services and holding structures'
            ]
        }
    ];

    const steps = [
        {
            number: '01',
            title: 'Initial Consultation',
            description: 'We assess your business needs and recommend the most suitable offshore jurisdiction.'
        },
        {
            number: '02',
            title: 'Name Approval',
            description: 'Select and verify the availability of your preferred company name.'
        },
        {
            number: '03',
            title: 'Document Preparation',
            description: 'We prepare all necessary incorporation documents based on the chosen jurisdiction.'
        },
        {
            number: '04',
            title: 'Submission & Registration',
            description: 'Documents are submitted to the relevant offshore registry for processing.'
        },
        {
            number: '05',
            title: 'Company Incorporation',
            description: 'Your offshore company is officially registered and incorporation documents issued.'
        },
        {
            number: '06',
            title: 'Bank Account Setup',
            description: 'We assist with opening an offshore bank account for your new company.'
        }
    ];

    const faqs = [
        {
            question: 'What is an offshore company?',
            answer: 'An offshore company is a business entity that is incorporated in a jurisdiction different from where its primary business activities take place or where its beneficial owners reside. These companies are typically formed in jurisdictions with favorable tax regimes, strong privacy laws, and simplified business regulations.'
        },
        {
            question: 'Are UAE offshore companies legal?',
            answer: 'Yes, UAE offshore companies are completely legal and legitimate business structures. They are formed under specific offshore company regulations in jurisdictions like JAFZA Offshore, RAK ICC, and ADGM, which have robust legal frameworks to ensure compliance with international standards.'
        },
        {
            question: 'Can an offshore company do business in the UAE?',
            answer: 'Offshore companies generally cannot conduct business activities within the UAE. They are designed for international business operations, foreign investments, and asset holding. To do business within the UAE, you would need to establish a mainland or free zone company.'
        },
        {
            question: 'What documents are required to set up an offshore company?',
            answer: 'Typically required documents include passport copies of all shareholders and directors, proof of address, bank reference letters, and a brief business plan. Requirements may vary slightly depending on the specific offshore jurisdiction chosen.'
        },
        {
            question: 'How long does it take to set up an offshore company in the UAE?',
            answer: 'The process usually takes 3-7 business days from the submission of all required documents, depending on the jurisdiction selected and how quickly you can provide the necessary documentation.'
        }
    ];

    return (
        <PageLayout
            title="Offshore Company Formation in UAE"
            description="Set up an offshore company in the UAE for privacy, asset protection, and tax efficiency with minimal reporting requirements."
            breadcrumbs={[
                { label: 'Business Setup', url: '/business' },
                { label: 'Offshore', url: '/business/offshore' }
            ]}
        >
            <div className="offshore-page">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>Offshore Company Formation in UAE</h1>
                        <p>Establish an offshore company for privacy, asset protection, and tax efficiency with our expert guidance.</p>
                        <div className="hero-buttons">
                            <a href="#jurisdictions" className="primary-btn">Explore Jurisdictions</a>
                            <a href="/contact" className="secondary-btn">Free Consultation</a>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <div className="section-content">
                        <h2>Benefits of Offshore Company Formation</h2>
                        <p className="section-intro">
                            Offshore companies offer numerous advantages for international business operations, asset protection, and wealth management.
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

                <section id="jurisdictions" className="jurisdictions-section">
                    <div className="section-content">
                        <h2>UAE Offshore Jurisdictions</h2>
                        <p className="section-intro">
                            The UAE offers several prestigious offshore jurisdictions, each with its unique advantages. Our experts can help you select the most suitable option for your needs.
                        </p>

                        <div className="jurisdictions-grid">
                            {jurisdictions.map((jurisdiction, index) => (
                                <div key={index} className="jurisdiction-card">
                                    <h3>{jurisdiction.name}</h3>
                                    <ul className="jurisdiction-features">
                                        {jurisdiction.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="section-content">
                        <h2>Offshore Company Setup Process</h2>
                        <p className="section-intro">
                            Our streamlined process makes establishing your offshore company efficient and hassle-free.
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

                <section className="use-cases-section">
                    <div className="section-content">
                        <h2>Common Use Cases for Offshore Companies</h2>
                        <div className="use-cases-grid">
                            <div className="use-case-card">
                                <div className="use-case-icon">🌐</div>
                                <h3>International Trade</h3>
                                <p>Facilitate cross-border trade and act as an intermediary between suppliers and customers worldwide.</p>
                            </div>

                            <div className="use-case-card">
                                <div className="use-case-icon">💼</div>
                                <h3>Holding Company</h3>
                                <p>Own and manage investments, real estate, intellectual property, and other assets internationally.</p>
                            </div>

                            <div className="use-case-card">
                                <div className="use-case-icon">🏢</div>
                                <h3>Real Estate Investment</h3>
                                <p>Purchase and hold international real estate portfolios with potential tax advantages.</p>
                            </div>

                            <div className="use-case-card">
                                <div className="use-case-icon">⚙️</div>
                                <h3>Intellectual Property</h3>
                                <p>Manage and protect patents, trademarks, copyrights, and other intellectual property assets.</p>
                            </div>

                            <div className="use-case-card">
                                <div className="use-case-icon">📈</div>
                                <h3>Investment Vehicles</h3>
                                <p>Create efficient structures for international investments in stocks, bonds, and other financial assets.</p>
                            </div>

                            <div className="use-case-card">
                                <div className="use-case-icon">🚢</div>
                                <h3>Shipping & Aviation</h3>
                                <p>Register and manage vessels, aircraft, and related operations with favorable regulations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pricing-section">
                    <div className="section-content">
                        <h2>Offshore Formation Packages</h2>
                        <p className="section-intro">
                            Choose from our tailored packages designed to meet your offshore company formation needs.
                        </p>

                        <div className="packages-grid">
                            <div className="package-card">
                                <div className="package-header">
                                    <h3>Standard Package</h3>
                                    <div className="package-price">
                                        <span className="currency">From AED</span>
                                        <span className="amount">14,500</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Company Incorporation</li>
                                        <li>Certificate of Incorporation</li>
                                        <li>Memorandum & Articles of Association</li>
                                        <li>Registered Agent (1 Year)</li>
                                        <li>Share Certificates</li>
                                        <li>Corporate Documents Kit</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>

                            <div className="package-card premium">
                                <div className="recommended-tag">Recommended</div>
                                <div className="package-header">
                                    <h3>Premium Package</h3>
                                    <div className="package-price">
                                        <span className="currency">From AED</span>
                                        <span className="amount">19,900</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Everything in Standard Package</li>
                                        <li>Corporate Bank Account Assistance</li>
                                        <li>Apostille Certification</li>
                                        <li>Corporate Seal</li>
                                        <li>Nominee Director Services (1 Year)</li>
                                        <li>Priority Processing</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>

                            <div className="package-card">
                                <div className="package-header">
                                    <h3>Elite Package</h3>
                                    <div className="package-price">
                                        <span className="currency">From AED</span>
                                        <span className="amount">26,500</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <ul>
                                        <li>Everything in Premium Package</li>
                                        <li>Premium Banking Solutions</li>
                                        <li>Virtual Office (1 Year)</li>
                                        <li>Dedicated Relationship Manager</li>
                                        <li>Tax Planning Consultation</li>
                                        <li>Full Corporate Structure Setup</li>
                                    </ul>
                                </div>
                                <div className="package-footer">
                                    <a href="/contact" className="package-btn">Get Started</a>
                                </div>
                            </div>
                        </div>

                        <div className="pricing-note">
                            <p>* Prices vary based on jurisdiction selection and specific requirements</p>
                            <p>* Government and registry fees may apply separately</p>
                            <p>* Custom packages available for complex structures</p>
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
                            <p>Have more questions about offshore company formation?</p>
                            <a href="/contact" className="contact-btn">Contact Our Experts</a>
                        </div>
                    </div>
                </section>

                <section className="compliance-section">
                    <div className="section-content">
                        <h2>Compliance & Legal Considerations</h2>
                        <div className="compliance-content">
                            <p>
                                While offshore companies offer many advantages, it's important to ensure they are established and operated in
                                compliance with all applicable laws and regulations. Our team provides comprehensive guidance on:
                            </p>
                            <ul className="compliance-list">
                                <li>
                                    <strong>Substance Requirements:</strong> Ensuring your offshore structure has appropriate economic substance to meet
                                    international standards
                                </li>
                                <li>
                                    <strong>Reporting Obligations:</strong> Understanding the reporting requirements in your home country and the
                                    offshore jurisdiction
                                </li>
                                <li>
                                    <strong>Tax Compliance:</strong> Adhering to applicable tax regulations while optimizing your tax structure legally
                                </li>
                                <li>
                                    <strong>Anti-Money Laundering (AML) Requirements:</strong> Ensuring compliance with international AML standards
                                </li>
                                <li>
                                    <strong>International Agreements:</strong> Navigating international agreements such as CRS (Common Reporting Standard)
                                    and FATCA (Foreign Account Tax Compliance Act)
                                </li>
                            </ul>
                            <p>
                                We work with legal and tax professionals to ensure your offshore company structure is established with full
                                compliance and aligned with your business objectives.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Form Your Offshore Company?</h2>
                        <p>Our experts will guide you through the entire process, ensuring a compliant and effective structure.</p>
                        <a href="/contact" className="cta-btn">Schedule a Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default OffshorePage;