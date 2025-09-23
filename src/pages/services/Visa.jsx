import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import '../../styles/pages/services/Visa.css';

const Visa = () => {
    const visaTypes = [
        {
            title: 'Investor Visa',
            description: 'For business owners and company shareholders establishing or investing in UAE businesses.',
            duration: '2-3 years',
            icon: '💼'
        },
        {
            title: 'Partner Visa',
            description: 'For partners and shareholders in established UAE companies.',
            duration: '2-3 years',
            icon: '🤝'
        },
        {
            title: 'Employment Visa',
            description: 'For professionals employed by UAE companies.',
            duration: '2 years',
            icon: '👔'
        },
        {
            title: 'Family Visa',
            description: 'For dependents (spouse, children) of UAE residents.',
            duration: 'Matches sponsor',
            icon: '👪'
        },
        {
            title: 'Golden Visa',
            description: 'Long-term residency for investors, entrepreneurs, and specialized talents.',
            duration: '5-10 years',
            icon: '🌟'
        },
        {
            title: 'Tourist Visa',
            description: 'Short-term visas for tourism and business visits.',
            duration: '30-90 days',
            icon: '✈️'
        }
    ];

    const services = [
        {
            title: 'New Visa Applications',
            description: 'Complete processing of all types of new visa applications, including entry permits.',
            icon: '📝'
        },
        {
            title: 'Visa Renewals',
            description: 'Timely renewal of residence visas before expiry to maintain legal status.',
            icon: '🔄'
        },
        {
            title: 'Visa Amendments',
            description: 'Processing changes to existing visas, including status and category changes.',
            icon: '📊'
        },
        {
            title: 'Emirates ID Registration',
            description: 'Processing Emirates ID applications and renewals for residents.',
            icon: '🪪'
        },
        {
            title: 'Medical Testing Coordination',
            description: 'Appointments and processing for mandatory medical tests.',
            icon: '🏥'
        },
        {
            title: 'Visa Cancellations',
            description: 'Proper cancellation of visas when leaving employment or the country.',
            icon: '❌'
        }
    ];

    const visaPackages = [
        {
            title: 'Employment Visa Package',
            price: '3,500',
            features: [
                'Entry Permit Issuance',
                'Status Change (if required)',
                'Medical Testing Coordination',
                'Emirates ID Processing',
                'Residence Visa Stamping',
                'Labor Card Processing'
            ],
            note: 'For professionals employed by UAE companies',
            recommended: false
        },
        {
            title: 'Investor Visa Package',
            price: '5,000',
            features: [
                'Entry Permit Issuance',
                'Status Change (if required)',
                'Medical Testing Coordination',
                'Emirates ID Processing',
                'Residence Visa Stamping',
                'Company Registration Documents',
                'Priority Processing'
            ],
            note: 'For business owners and investors',
            recommended: true
        },
        {
            title: 'Family Visa Package',
            price: '3,000',
            features: [
                'Entry Permit Issuance',
                'Status Change (if required)',
                'Medical Testing Coordination',
                'Emirates ID Processing',
                'Residence Visa Stamping',
                'Document Authentication'
            ],
            note: 'Per dependent (spouse/child)',
            recommended: false
        }
    ];

    const faqs = [
        {
            question: 'What are the eligibility criteria for obtaining a UAE residence visa?',
            answer: 'Eligibility criteria vary based on visa type. For employment visas, you need a valid job offer from a UAE company. For investor visas, you must have ownership in a UAE company. For family visas, you must meet minimum salary requirements (typically AED 4,000-10,000 depending on family size) and have appropriate housing.'
        },
        {
            question: 'How long does the visa process take?',
            answer: 'Processing times vary by visa type and current government processing volumes. Generally, employment and family visas take 2-3 weeks from application to issuance. Investor visas may take 3-4 weeks due to additional documentation requirements. We provide estimated timelines during consultation based on current processing times.'
        },
        {
            question: 'What documents are required for visa applications?',
            answer: 'Required documents typically include passport copies, passport-sized photographs with white background, educational certificates (attested for certain visa types), marriage certificate for spouse visa (attested), birth certificates for children (attested), and employment contract or company documents for investor visas.'
        },
        {
            question: 'Can I expedite the visa process?',
            answer: 'Yes, we offer expedited processing for urgent visa requirements at additional cost. This service can reduce processing time by approximately 30-50% depending on visa type and current government department workloads.'
        },
        {
            question: 'What happens if my visa application is rejected?',
            answer: 'While rejection rates are low when working with our experienced team, if a rejection occurs, we analyze the reason, address any deficiencies in the application, and resubmit with corrections. Our success rate for resubmissions is over 95%.'
        }
    ];

    return (
        <PageLayout
            title="Visa Services in UAE"
            description="Comprehensive visa services including new applications, renewals, and visa status amendments for all visa types in the UAE."
            breadcrumbs={[
                { label: 'Services', url: '/services' },
                { label: 'Visa Services', url: '/services/visa' }
            ]}
        >
            <div className="visa-services-page">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1>UAE Visa Services</h1>
                        <p>Comprehensive visa solutions for investors, entrepreneurs, professionals, and their families.</p>
                        <div className="hero-buttons">
                            <a href="#packages" className="primary-btn">View Packages</a>
                            <a href="/contact" className="secondary-btn">Get Free Consultation</a>
                        </div>
                    </div>
                </section>

                <section className="intro-section">
                    <div className="section-content">
                        <h2>Streamlined UAE Visa Processing</h2>
                        <p>
                            Navigating UAE visa requirements can be complex and time-consuming. Our visa specialists
                            ensure a smooth and efficient visa application process, handling all the necessary documentation
                            and government procedures.
                        </p>
                        <p>
                            Whether you're establishing a business, joining a company, or bringing your family to the UAE,
                            our comprehensive visa services cover all your residency needs with professional guidance
                            at every step.
                        </p>
                    </div>
                </section>

                <section className="visa-types-section">
                    <div className="section-content">
                        <h2>UAE Visa Types</h2>
                        <p className="section-intro">
                            The UAE offers various visa categories catering to different purposes and durations of stay.
                        </p>

                        <div className="visa-types-grid">
                            {visaTypes.map((visa, index) => (
                                <div key={index} className="visa-type-card">
                                    <div className="visa-icon">{visa.icon}</div>
                                    <h3>{visa.title}</h3>
                                    <p>{visa.description}</p>
                                    <div className="visa-duration">
                                        <span>Duration:</span> {visa.duration}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="services-section">
                    <div className="section-content">
                        <h2>Our Visa Services</h2>
                        <p className="section-intro">
                            We provide end-to-end visa services to ensure a hassle-free experience for individuals and businesses.
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
                        <h2>Visa Service Packages</h2>
                        <p className="section-intro">
                            Our visa packages include all government fees and service charges for a transparent and hassle-free experience.
                        </p>

                        <div className="packages-grid">
                            {visaPackages.map((pkg, index) => (
                                <div key={index} className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
                                    {pkg.recommended && <div className="recommended-tag">Popular</div>}
                                    <div className="package-header">
                                        <h3>{pkg.title}</h3>
                                        <div className="package-price">
                                            <span className="currency">AED</span>
                                            <span className="amount">{pkg.price}</span>
                                        </div>
                                        <div className="package-note">{pkg.note}</div>
                                    </div>
                                    <div className="package-features">
                                        <ul>
                                            {pkg.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="package-footer">
                                        <a href="/contact" className="package-btn">Apply Now</a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pricing-note">
                            <p>* Government fees are included in the package prices and subject to change</p>
                            <p>* Medical testing fees may vary based on testing center and requirements</p>
                            <p>* Additional services available upon request</p>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <div className="section-content">
                        <h2>Visa Application Process</h2>
                        <div className="process-steps">
                            <div className="process-step">
                                <div className="step-number">01</div>
                                <div className="step-content">
                                    <h3>Initial Consultation</h3>
                                    <p>We assess your visa requirements and recommend the most suitable visa type.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">02</div>
                                <div className="step-content">
                                    <h3>Document Preparation</h3>
                                    <p>We provide a checklist and assist with preparing all required documents.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">03</div>
                                <div className="step-content">
                                    <h3>Application Submission</h3>
                                    <p>We submit your visa application to the relevant immigration authorities.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">04</div>
                                <div className="step-content">
                                    <h3>Entry Permit Issuance</h3>
                                    <p>Once approved, we obtain the entry permit for you to enter or remain in the UAE.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">05</div>
                                <div className="step-content">
                                    <h3>Status Change & Medical</h3>
                                    <p>We coordinate status change (if required) and medical testing appointments.</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">06</div>
                                <div className="step-content">
                                    <h3>Emirates ID & Visa Stamping</h3>
                                    <p>We process Emirates ID registration and visa stamping in your passport.</p>
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
                            <p>Have more questions about UAE visas?</p>
                            <a href="/contact" className="contact-btn">Contact Our Visa Specialists</a>
                        </div>
                    </div>
                </section>

                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to Apply for Your UAE Visa?</h2>
                        <p>Our visa specialists are ready to guide you through the entire process.</p>
                        <a href="/contact" className="cta-btn">Schedule a Consultation</a>
                    </div>
                </section>
            </div>
        </PageLayout>
    );
};

export default Visa;