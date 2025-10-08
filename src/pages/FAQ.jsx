import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import '../styles/pages/FAQ.css';

const faqData = [
    {
        question: 'Why should I use a business setup company instead of applying directly?',
        answer: 'Working with a setup consultancy ensures compliance with UAE regulations, saves time, and eliminates costly mistakes. We handle government approvals, documentation, and licensing end-to-end while you focus on building your business.'
    },
    {
        question: 'What types of company licenses are available in the UAE?',
        answer: 'Mainland License (issued by DED – allows business across UAE)\n\nFree Zone License (with 40+ options such as DMCC, RAKEZ, IFZA, SHAMS, etc.)\n\nOffshore License (for holding and international structuring)\n\nWe guide you on the most cost-efficient and compliant structure for your business model.'
    },
    {
        question: 'How long does it take to set up a company in the UAE?',
        answer: 'On average it takes 3-5 working days to start your company. Further timelines vary based on business activity, required approvals, and visa needs.'
    },
    {
        question: 'What is the cost of starting a business in the UAE?',
        answer: 'Business setup costs start from as low as AED 4,999 (basic free zone package) and can go up depending on the jurisdiction, number of visas, and activity type. We provide a customized cost breakdown upfront.'
    },
    {
        question: 'Can a foreigner own 100% of their company?',
        answer: 'Yes. 100% Full foreign ownership is allowed in mainland and freezones.'
    },
    {
        question: 'What documents are required for company registration?',
        answer: 'Passport copy of shareholders\n\nVisa / Entry stamp / Emirates ID (if available)\n\nBusiness plan (for certain regulated activities)\n\nProof of address\n\nAdditional documents may be required depending on the activity.'
    },
    {
        question: 'Do I need a physical office to register a company?',
        answer: 'Not always. Many free zones offer flexi-desks or virtual offices. However, some business activities (e.g., retail, logistics, healthcare) require a physical space.'
    },
    {
        question: 'Can I get a UAE residence visa through company formation?',
        answer: 'Yes. Business owners and employees can apply for residence visas tied to the company license. The number of visas depends on the license package and office space.'
    },
    {
        question: 'What is the difference between free zone and mainland companies?',
        answer: 'Free Zone → 100% ownership, cost-effective, no mandatory office space requirements, limited to free zone & international trade.\n\nMainland → Full UAE market access, ability to work with government clients, broader business scope.'
    },
    {
        question: 'Does the license need to be renewed every year?',
        answer: 'Yes, all licenses require annual renewal. Renewal costs are usually less than initial setup and can be managed fully by our team.'
    },
    {
        question: 'Do you also provide PRO and compliance services?',
        answer: 'Yes. We provide PRO, visa processing, document attestation, bank account opening, compliance, and post-setup support.'
    },
    {
        question: 'Can you help with opening a corporate bank account?',
        answer: 'Yes, we have strong working relationships with leading UAE banks. We assist in documentation, KYC preparation, and introduction to banking partners.'
    },
    {
        question: 'Are there specific approvals required for regulated activities?',
        answer: 'Yes. Activities like real estate brokerage, education, healthcare, financial services, media, and logistics require additional approvals from relevant authorities (e.g., RERA, KHDA, DHA, SCA, NMC). We handle these on your behalf.'
    },
    {
        question: 'Can you help with scaling beyond setup?',
        answer: 'Absolutely. We provide accounting, tax registration (corporate tax / VAT), recruitment, marketing, and partnership services to support long-term business growth.'
    },
    {
        question: 'Can I obtain a UAE Golden Visa through my business setup?',
        answer: 'Investors with property ownership valued at AED 2M or more are eligible for a 10-year UAE Golden Visa. Additionally, professionals earning a monthly salary above AED 30,000, as well as exceptional talents and creators under special categories, may also qualify. We provide comprehensive support - from eligibility assessment to documentation and complete application management - in coordination with government authorities.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = idx => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <PageLayout
            title="Frequently Asked Questions"
            description="Find answers to common questions about UAE business setup, licensing, visas, and our services."
            headerImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
            headerOverlayColor="rgba(0, 0, 0, 0.1)"
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
                                {item.answer.split('\n').map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PageLayout>
    );
};

export default FAQ;