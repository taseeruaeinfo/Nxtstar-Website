import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import '../styles/pages/FAQ.css';

const faqData = [
    {
        question: 'What services does NXTStar provide?',
        answer: 'NXTStar offers business setup, visa, PRO, and accounting services for companies in the UAE.'
    },
    {
        question: 'How long does it take to set up a business?',
        answer: 'The setup time depends on the business type and jurisdiction, but most setups are completed within 1-2 weeks.'
    },
    {
        question: 'Do you assist with visa processing?',
        answer: 'Yes, we provide end-to-end visa processing services for employees and investors.'
    },
    {
        question: 'Can I get a free consultation?',
        answer: 'Absolutely! Contact us to schedule a free consultation with our business experts.'
    },
    {
        question: 'What documents are required for company formation?',
        answer: 'Required documents typically include passport copies, business plan, and proof of address. We will guide you through the process.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = idx => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <PageLayout
            
            breadcrumbs={[
                { label: 'FAQs', url: '/faqs' }
            ]}
        >
            <div className="faq-page">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqData.map((item, idx) => (
                        <div className={`faq-item${openIndex === idx ? ' open' : ''}`} key={idx}>
                            <button className="faq-question" onClick={() => toggleFAQ(idx)}>
                                {item.question}
                                <span className="faq-toggle">{openIndex === idx ? '-' : '+'}</span>
                            </button>
                            <div className="faq-answer" style={{ display: openIndex === idx ? 'block' : 'none' }}>
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default FAQ;
