// Content for the service guide pages.
// Every rule stated here comes from the authority named in `sources`. Do not add prices,
// partner claims or guarantees. Update `reviewed` whenever the facts are re-checked.

const PRICE_ANSWER =
    'We do not publish prices. Ask us for a written quote that separates authority fees from our service fee.';

export const advertiserPermit = {
    path: '/services/advertiser-permit',
    parent: { name: 'Services', path: '/services' },
    breadcrumb: 'Advertiser permit',
    h1: 'Do content creators need an advertiser permit in the UAE?',
    seoTitle: 'UAE Advertiser Permit for Content Creators | NXTSTAR',
    description:
        'Who needs the UAE Media Council advertiser permit, who is exempt, the trade licence it depends on, and how NXTSTAR helps creators and influencers apply.',
    serviceName: 'Advertiser permit and trade licence setup for content creators',
    serviceType: 'UAE Media Council advertiser permit application support',
    headerImage: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    reviewed: '2026-10-06',
    cta: 'Talk to NXTSTAR about your advertiser permit',
    answer: [
        'Yes. The UAE Media Council requires every individual, whether a citizen, a resident or a visitor, to hold an Advertiser Permit before publishing advertising content on social media from within the UAE. The rule applies whether or not you are paid for the post.',
        'Citizens and residents also need a valid trade licence that covers electronic media activity. NXTSTAR helps creators and influencers set up that licence and prepare the permit application.',
    ],
    sections: [
        {
            heading: 'Who needs the permit',
            blocks: [
                { text: 'The Council\'s guide applies the permit to individuals who produce advertising content on social media platforms, or by any other modern technical means, from within the UAE. It covers:' },
                { list: ['UAE citizens', 'UAE residents', 'Visitors who create advertising content while they are in the country'] },
                { text: 'The test is whether the content advertises a product, service, event or activity. Payment is not the test, so unpaid promotion is covered as well.' },
            ],
        },
        {
            heading: 'Who is exempt',
            blocks: [
                { text: 'The Council\'s guide lists two cases where the permit is not required:' },
                {
                    list: [
                        'An individual promoting a product or service that belongs to them, or to a company they own, on their own account.',
                        'Individuals under 18 who produce educational, sports, cultural or awareness content.',
                    ],
                },
                { text: 'If you are unsure whether your content falls inside an exemption, check with the Council before you post. We can help you frame the question.' },
            ],
        },
        {
            heading: 'Conditions for citizens and residents',
            blocks: [
                {
                    list: [
                        'You are legally competent and at least 18 years old. The guide allows some exceptions for younger creators, who may operate under a guardian\'s licence.',
                        'You are of good conduct and have not been convicted of a crime involving dishonour or breach of trust, unless rehabilitated.',
                        'You have not previously violated media content standards.',
                        'You hold a valid commercial licence for electronic media activity, issued by the relevant licensing authority.',
                    ],
                },
                { text: 'The last condition is the one most creators are missing. The permit sits on top of a trade licence, so the licence comes first.' },
            ],
        },
        {
            heading: 'The process, step by step',
            blocks: [
                {
                    ordered: true,
                    list: [
                        'Choose where to hold your trade licence. Both mainland and free zone authorities issue licences, and the licence must list an electronic media activity.',
                        'Set up the licence with that authority.',
                        'Apply to the UAE Media Council for the Advertiser Permit with your licence and identity documents.',
                        'Once the permit is issued, display the permit number clearly on every social media account registered with it.',
                    ],
                },
                { text: 'The Council states that it reviews an application within three working days after all required documents have been submitted. Setting up the trade licence takes additional time, which depends on the licensing authority you choose.' },
            ],
        },
        {
            heading: 'Validity and renewal',
            blocks: [
                { text: 'For citizens and residents the permit is valid for one year and is renewable. Your trade licence has its own renewal date, and the permit depends on the licence staying valid, so both need to be kept current.' },
                { text: 'The Visitor Advertiser Permit is valid for three months. It can be extended, but the total period cannot exceed six months.' },
            ],
        },
        {
            heading: 'What NXTSTAR does',
            blocks: [
                {
                    list: [
                        'Helps you choose a licensing authority and the activity your licence needs to list.',
                        'Sets up the trade licence with you.',
                        'Prepares the Advertiser Permit application with you and tells you which documents the Council asks for.',
                        'Tells you what has to stay in place at renewal.',
                    ],
                },
            ],
        },
        {
            heading: 'What we do not do',
            blocks: [
                {
                    list: [
                        'We do not decide whether a permit is granted. The UAE Media Council does.',
                        'We do not review or approve your content against media standards.',
                        'We are not a talent or advertising agency and we do not find brand deals.',
                    ],
                },
            ],
        },
        {
            heading: 'Where applications go wrong',
            blocks: [
                {
                    list: [
                        'The trade licence does not list an electronic media activity, so the permit application cannot proceed.',
                        'The creator assumes gifted or unpaid posts are outside the rule. They are not.',
                        'The permit number is not shown on the accounts it covers.',
                        'A visiting creator posts advertising content before a visitor permit is in place.',
                    ],
                },
            ],
        },
    ],
    faqs: [
        {
            question: 'Do I need an advertiser permit if I am not paid for the post?',
            answer: 'Yes. The UAE Media Council applies the permit to advertising content produced with or without compensation.',
        },
        {
            question: 'I only promote my own business. Do I still need the permit?',
            answer: 'The Council\'s guide says the permit is not required for an individual promoting a product or service that belongs to them, or to a company they own, on their own account. If you also promote other brands, the permit applies.',
        },
        {
            question: 'How long does the advertiser permit take?',
            answer: 'The Council states that it reviews an application within three working days after all required documents are submitted. The trade licence that the permit depends on is a separate step with its own timeline.',
        },
        {
            question: 'How long is the permit valid?',
            answer: 'One year for citizens and residents, renewable. The visitor permit is valid for three months and can be extended up to a total of six months.',
        },
        { question: 'How much does it cost?', answer: PRICE_ANSWER },
    ],
    sources: [
        { name: 'UAE Media Council: Guide for the Permit to Regulate Advertising Content on Social Media', url: 'https://uaemc.gov.ae/wp-content/uploads/2025/08/Advertiser-Guide.pdf' },
        { name: 'UAE Media Council: Visitor Advertiser Permit', url: 'https://uaemc.gov.ae/en/visitor-advertiser-permit/' },
        { name: 'UAE Media Council: Licensing services', url: 'https://uaemc.gov.ae/en/licensing-services/' },
    ],
    related: [
        { name: 'Foreign creators: European, American and other nationalities', path: '/services/advertiser-permit/foreign-creators' },
        { name: 'Visiting influencers', path: '/services/advertiser-permit/visiting-influencers' },
        { name: 'Creators under 18', path: '/services/advertiser-permit/creators-under-18' },
        { name: 'Business owners promoting their own business', path: '/services/advertiser-permit/business-owners' },
        { name: 'Gifted and unpaid posts', path: '/services/advertiser-permit/gifted-and-unpaid-posts' },
        { name: 'Brands hiring influencers', path: '/services/advertiser-permit/brands-hiring-influencers' },
        { name: 'Finance influencers', path: '/services/advertiser-permit/finance-influencers' },
        { name: 'Health and fitness creators', path: '/services/advertiser-permit/health-and-fitness-creators' },
        { name: 'Real estate influencers', path: '/services/advertiser-permit/real-estate-influencers' },
        { name: 'IFZA company setup', path: '/business/freezone/ifza' },
        { name: 'Contact NXTSTAR', path: '/contact' },
    ],
};

export const difcAiLicence = {
    path: '/services/difc-ai-licence',
    parent: { name: 'Services', path: '/services' },
    breadcrumb: 'DIFC AI and Innovation Licence',
    h1: 'How do you set up an AI company in DIFC?',
    seoTitle: 'DIFC AI Licence and Innovation Licence Setup | NXTSTAR',
    description:
        'How the DIFC AI Licence and Innovation Licence work: who qualifies, what is not allowed, the two-stage process, workspace and visa rules, and how NXTSTAR helps.',
    serviceName: 'DIFC AI Licence and Innovation Licence company setup',
    serviceType: 'Company formation support in the Dubai International Financial Centre',
    headerImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    reviewed: '2026-10-06',
    cta: 'Talk to NXTSTAR about a DIFC technology licence',
    answer: [
        'You set up through one of two subsidised commercial licences that the Dubai International Financial Centre (DIFC) offers to technology companies. The AI Licence is for AI firms and is tied to the Dubai AI Campus. The Innovation Licence is open to technology and innovation firms in any sector.',
        'Both are for non-financial technology businesses, and both require a physical presence in DIFC, which can be a flexible desk in a co-working space. Setup runs in two stages through the DIFC portal: in-principle approval, then registration of the legal entity. NXTSTAR prepares the application with you and guides you through both stages.',
    ],
    sections: [
        {
            heading: 'AI Licence or Innovation Licence: which one fits',
            blocks: [
                { text: 'DIFC describes the AI Licence as a subsidised commercial licence for AI firms looking to set up in the region. It gives access to the Dubai AI Campus, which sits within the DIFC Innovation Hub.' },
                { text: 'DIFC describes the Innovation Licence as open to all technology and innovation firms that are developing or testing new or innovative products. It names sectors such as AI and machine learning, gaming, FinTech, HealthTech, EdTech, PropTech, ClimateTech and e-commerce.' },
                { text: 'The two licences share the same structure and most of the same activities. The AI Licence adds activities for AI research and consultancy and for distributed ledger technology services. If AI is the core of your product, the AI Licence is the natural fit. If you build other technology, the Innovation Licence usually is.' },
            ],
        },
        {
            heading: 'What DIFC requires',
            blocks: [
                { text: 'DIFC\'s setup guide for the Innovation Licence sets four requirements:' },
                {
                    list: [
                        'Non-financial. The company cannot conduct financial services such as financial advisory, payment services or crypto or NFT exchange.',
                        'Technology-related. The company must provide a type of technology, for example a software solution, AI or blockchain.',
                        'No general trading. The company cannot trade or sell physical products, including import and export.',
                        'Physical presence. The company must have premises in DIFC. The minimum is a flexible desk in the co-working space.',
                    ],
                },
                { text: 'The guide also says there is no minimum capital requirement for entities under the Innovation Licence.' },
            ],
        },
        {
            heading: 'Activities you can choose',
            blocks: [
                { text: 'DIFC lets you select more than one activity under the licence. The activity list in its guides includes:' },
                {
                    list: [
                        'Software house',
                        'Technology research and development',
                        'Information technology consultants',
                        'Internet consultancy and internet content provider',
                        'IT infrastructure and network consultancies',
                        'Portal and public networking services',
                        'Web design',
                        'Cyber security consultancy',
                        'Data classification and analysis services',
                        'Education and training computer software, and education technologies research and development',
                        'Electronic chips programming',
                        'AI Licence only: innovation and artificial intelligence research and consultancies',
                        'AI Licence only: distributed ledger technology services, without trading or operating an exchange for currencies, crypto assets or commodities',
                    ],
                },
            ],
        },
        {
            heading: 'The process and how long each stage takes',
            blocks: [
                { text: 'Stage 1 is in-principle approval. You submit an online initial approval application and DIFC reviews it. DIFC\'s guide says this stage takes around five to seven working days.' },
                { text: 'Stage 2 is registering the legal entity on the DIFC client portal:' },
                {
                    ordered: true,
                    list: [
                        'Complete the application to register with DIFC.',
                        'Submit certified passport copies for the shareholders, directors and company secretary.',
                        'If a shareholder is a company, provide a board resolution approving the incorporation.',
                        'Apply and pay for the co-working space.',
                        'Submit the final application and sign the Articles of Association electronically.',
                    ],
                },
                { text: 'DIFC\'s guides say full incorporation takes three to four weeks, and that the second stage depends on how quickly the applicant completes these steps. The licence is only issued once a lease is active.' },
                { text: 'DIFC\'s onboarding is digital, and its guide states that you do not need to be physically present to apply.' },
            ],
        },
        {
            heading: 'Visas',
            blocks: [
                { text: 'DIFC\'s guides allow up to four visas on the first flexible desk. Visa applications open only after the entity is incorporated, and the company first needs an establishment card and a personnel sponsorship agreement with the DIFC Authority.' },
                { text: 'For an employment visa DIFC lists a passport copy, a photograph, a signed employment contract showing the job title, and the applicant\'s highest educational certificate, attested by the UAE embassy in the country of issue. The immigration authority can ask for more.' },
            ],
        },
        {
            heading: 'Bank account',
            blocks: [
                { text: 'You can start opening a bank account once the entity is registered and the commercial licence is issued. DIFC is clear that account opening remains at the discretion of the bank. Banks typically ask for:' },
                {
                    list: [
                        'The ownership structure, showing the ultimate beneficial owners',
                        'Identity documents, country of residence and source of wealth for each beneficial owner',
                        'Certificate of incorporation, articles of association and share certificate',
                        'A resolution authorising the account and naming the signatories',
                        'The DIFC lease agreement',
                    ],
                },
            ],
        },
        {
            heading: 'Ongoing obligations and renewal',
            blocks: [
                {
                    list: [
                        'Renew the licence and the lease every year.',
                        'File a confirmation statement with the DIFC Registrar of Companies at each licence renewal.',
                        'Notify DIFC under its data protection law before, or as soon as, you process personal data.',
                    ],
                },
                { text: 'The licence fee is subsidised for an initial period. After that it depends on the number of full-time employees. DIFC sets both the period and the fee, so check the current terms before you commit.' },
            ],
        },
        {
            heading: 'When another route fits better',
            blocks: [
                {
                    list: [
                        'You want to offer financial services. These licences cover non-regulated activity only. Regulated activity goes through the Dubai Financial Services Authority.',
                        'You trade physical goods. Look at a commercial licence in another free zone or on the mainland.',
                        'You do not want premises in DIFC. Some other free zones do not require a physical desk.',
                    ],
                },
            ],
        },
        {
            heading: 'What NXTSTAR does, and what we do not',
            blocks: [
                { text: 'We check your activity against the licence requirements before you apply, prepare the in-principle application with you, and guide you through registration, workspace, visas and the bank account documents.' },
                { text: 'We do not decide approvals. DIFC does, and banks decide whether to open an account. We are an independent consultancy and are not part of DIFC.' },
            ],
        },
    ],
    faqs: [
        {
            question: 'Is there a minimum capital requirement?',
            answer: 'DIFC\'s setup guide says there are no capital requirements for entities under the Innovation Licence.',
        },
        {
            question: 'Do I need to be in Dubai to apply?',
            answer: 'No. DIFC\'s guide says its onboarding system is fully digital and the process is done online.',
        },
        {
            question: 'Can a FinTech or payments company use these licences?',
            answer: 'Only for non-regulated activity such as building software. The licences do not allow financial services, payment services or operating an exchange. Regulated activity needs authorisation from the Dubai Financial Services Authority.',
        },
        {
            question: 'How many visas can the company get?',
            answer: 'DIFC\'s guides allow up to four visas on the first flexible desk.',
        },
        {
            question: 'How long does setup take?',
            answer: 'DIFC\'s guides say in-principle approval takes around five to seven working days and full incorporation takes three to four weeks, depending on how quickly you complete the registration steps.',
        },
        { question: 'How much does it cost?', answer: PRICE_ANSWER },
    ],
    sources: [
        { name: 'DIFC: AI Licence', url: 'https://www.difc.com/business/establish-a-business/ai-licence' },
        { name: 'DIFC: Innovation Licence', url: 'https://www.difc.com/business/establish-a-business/innovation-licence' },
        { name: 'DIFC Innovation Hub: AI and Web 3.0 Licence', url: 'https://www.innovationhub.difc.ae/the-hub/licencing-and-setup/ai-licence' },
        { name: 'Dubai AI Campus: AI Licence', url: 'https://dubaiaicampus.com/license' },
    ],
    related: [
        { name: 'DIFC overview', path: '/business/freezone/difc' },
        { name: 'IFZA company setup', path: '/business/freezone/ifza' },
        { name: 'Visa services', path: '/services/visa' },
        { name: 'Contact NXTSTAR', path: '/contact' },
    ],
};

export const ifzaSetup = {
    path: '/business/freezone/ifza',
    parent: { name: 'Free zone setup', path: '/business/freezone' },
    breadcrumb: 'IFZA',
    h1: 'How do you set up a company in IFZA?',
    seoTitle: 'IFZA Company Setup in Dubai | NXTSTAR',
    description:
        'How IFZA free zone company setup works: licence types, activities, documents, steps, visas and limits, with the facts taken from IFZA and help from NXTSTAR.',
    serviceName: 'IFZA free zone company setup',
    serviceType: 'Free zone company formation support',
    headerImage: 'https://images.unsplash.com/photo-1489465036402-503c88639ad1?q=80&w=1200&auto=format&fit=crop',
    reviewed: '2026-10-06',
    cta: 'Talk to NXTSTAR about an IFZA company',
    answer: [
        'You form a free zone company with the International Free Zone Authority (IFZA), which is based in Dubai Silicon Oasis. You choose a licence type and up to three business activities, reserve a trade name, submit your documents and sign the incorporation forms electronically.',
        'IFZA states that it requires no paid-up capital and that owners do not need to be in the UAE during formation. NXTSTAR helps you choose the licence and activities, prepares the application and handles the steps after the licence is issued.',
    ],
    sections: [
        {
            heading: 'Who IFZA suits',
            blocks: [
                { text: 'IFZA suits founders who want a Dubai free zone company for services, consultancy or trading, with full foreign ownership and without having to be in the country to form it. That covers consultants, online businesses and small trading companies.' },
                { text: 'It is less suitable if your customers are mainly in the UAE mainland and you need to contract and invoice there directly, or if your activity is regulated and needs a specialist authority.' },
            ],
        },
        {
            heading: 'Licence types',
            blocks: [
                {
                    list: [
                        'Professional licence, for consultancy and professional services.',
                        'Commercial licence, for trading, importing, exporting, storing and distributing goods.',
                        'General trading licence, a commercial licence for trading a wide range of goods.',
                        'Branch office, for a company that is already incorporated abroad.',
                    ],
                },
                { text: 'IFZA says a standard licence offers a choice of up to three business activities, with the option to apply for more.' },
            ],
        },
        {
            heading: 'Documents',
            blocks: [
                { text: 'For individual shareholders IFZA asks for:' },
                { list: ['Passport copy', 'Passport-size photograph', 'Emirates ID and residence visa copies, if you already hold them'] },
                { text: 'For a corporate shareholder it asks for:' },
                {
                    list: [
                        'A notarised board resolution',
                        'Memorandum and articles of association',
                        'A valid trade licence and certificate of incorporation',
                        'Passport, photograph and Emirates ID copies for the shareholders behind it',
                    ],
                },
            ],
        },
        {
            heading: 'The process, step by step',
            blocks: [
                {
                    ordered: true,
                    list: [
                        'Decide the legal entity, licence type and activities.',
                        'Apply for a trade name.',
                        'Submit the documents for approval.',
                        'Sign the two electronic legal forms.',
                        'Receive the licence and company documents.',
                        'After the licence: establishment card, visas if your package includes them, and a bank account.',
                    ],
                },
                { text: 'IFZA does not publish a fixed processing time, so we do not quote one. How long it takes depends on your documents, your activities and whether any of them needs extra approval.' },
            ],
        },
        {
            heading: 'Visas',
            blocks: [
                { text: 'The number of residence visas available depends on the licence category you select. IFZA structures its packages by visa allocation, and you can start with fewer visas and upgrade later without applying for a new licence.' },
                { text: 'A visa is never automatic. Each one is an application to the immigration authorities, with medical testing and Emirates ID steps, and it has to be renewed.' },
            ],
        },
        {
            heading: 'Ongoing obligations and renewal',
            blocks: [
                { text: 'The licence is renewed every year. Keep your company records, lease or address arrangement and visas current, and plan for UAE corporate tax registration and filing. Your accountant can confirm what applies to your activity.' },
            ],
        },
        {
            heading: 'What an IFZA licence does not cover',
            blocks: [
                {
                    list: [
                        'It is not a mainland licence. A free zone company has limits on trading directly in the UAE mainland.',
                        'It does not cover regulated activities such as financial services.',
                        'It does not guarantee a bank account. Banks make their own decisions.',
                        'For creators, it is not an advertiser permit. That is a separate permit from the UAE Media Council.',
                    ],
                },
            ],
        },
        {
            heading: 'What NXTSTAR does, and what we do not',
            blocks: [
                { text: 'We help you pick the licence type and activities, prepare and submit the application, and take you through the establishment card, visa and bank account steps afterwards.' },
                { text: 'We do not decide approvals. IFZA and the immigration authorities do. We are an independent consultancy and are not part of IFZA.' },
            ],
        },
    ],
    faqs: [
        {
            question: 'Do I need to be in the UAE to set up an IFZA company?',
            answer: 'IFZA states that business owners do not need to be in the UAE during the company formation process. Residence visa steps afterwards, such as medical testing and biometrics, are done in the UAE.',
        },
        {
            question: 'Is there a minimum share capital?',
            answer: 'IFZA states that it requires no paid-up capital.',
        },
        {
            question: 'How many activities can one licence have?',
            answer: 'IFZA says a standard licence offers up to three business activities, and you can apply for more.',
        },
        {
            question: 'Can I add visas later?',
            answer: 'Yes. IFZA lets you upgrade to a package with more visa allocations without applying for a new licence.',
        },
        { question: 'How much does it cost?', answer: PRICE_ANSWER },
    ],
    sources: [
        { name: 'IFZA: How to get your free zone licence', url: 'https://ifza.com/en/how-to-get-your-free-zone-license-with-ifza/' },
        { name: 'IFZA: Set up your business', url: 'https://ifza.com/en/set-up-your-business/' },
        { name: 'IFZA: UAE residence visa types', url: 'https://ifza.com/en/industry-analysis/uae-residence-visa-types-guide/' },
    ],
    related: [
        { name: 'All free zones', path: '/business/freezone' },
        { name: 'Advertiser permit for content creators', path: '/services/advertiser-permit' },
        { name: 'DIFC AI and Innovation Licence', path: '/services/difc-ai-licence' },
        { name: 'Contact NXTSTAR', path: '/contact' },
    ],
};
