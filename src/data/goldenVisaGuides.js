// UAE Golden Visa pages, one per category of applicant.
// Conditions are taken from GDRFA Dubai's own service pages and the federal portal.
// The money figures here are legal eligibility thresholds, not prices for our services.

const hubPath = '/services/golden-visa';
const headerImage = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80';
const reviewed = '2026-10-06';
const serviceType = 'UAE Golden Visa application support';
const PRICE_ANSWER = 'We do not publish prices. Ask us for a written quote that separates government fees from our service fee.';

const SRC = {
    federal: { name: 'UAE Government portal: Golden visa', url: 'https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa' },
    icp: { name: 'ICP: Golden Residency Guide', url: 'https://icp.gov.ae/en/services/uae-golden-residency/' },
    investors: { name: 'GDRFA Dubai: Issuing a golden residence permit (investors)', url: 'https://www.gdrfad.gov.ae/en/services/8ea80da4-f43e-11eb-0320-0050569629e8' },
    dld: { name: 'Dubai Land Department: Golden Visa application for investors', url: 'https://dubailand.gov.ae/en/eservices/request-for-golden-visa-investor/' },
    entrepreneurs: { name: 'GDRFA Dubai: Issuing a golden residence permit (entrepreneurs)', url: 'https://www.gdrfad.gov.ae/en/services/8ea80da7-f43e-11eb-0320-0050569629e8' },
    talents: { name: 'GDRFA Dubai: Issuance of a golden residence permit (talented people)', url: 'https://gdrfad.gov.ae/en/services/2e7da546-f815-11eb-0320-0050569629e8' },
    scientists: { name: 'GDRFA Dubai: Issuing a golden residence permit (specialised scientists and professionals)', url: 'https://gdrfad.gov.ae/en/services/8ea80daa-f43e-11eb-0320-0050569629e8' },
    students: { name: 'GDRFA Dubai: Issuing a golden residence permit (top students and graduates)', url: 'https://www.gdrfad.gov.ae/en/services/8ea80dad-f43e-11eb-0320-0050569629e8' },
    creatorsHq: { name: 'Creators HQ: Golden Visa for content creators', url: 'https://creatorshq.com/services/golden-visa/' },
};

const hubLink = { name: 'UAE Golden Visa: all categories', path: hubPath };
const contact = { name: 'Contact NXTSTAR', path: '/contact' };
const sub = (slug) => `${hubPath}/${slug}`;

const KEEPING_IT = {
    heading: 'Keeping the visa',
    blocks: [
        {
            list: [
                'You must stay able to support yourself and your family without government support.',
                'Golden Visa holders are exempt from the rule that cancels a residence visa after 180 days outside the UAE.',
                'The permit can be extended if you still meet the conditions when it expires.',
                'The authority can check during the term that you still qualify.',
            ],
        },
    ],
};

const guides = [
    {
        slug: 'property-investors',
        breadcrumb: 'Property investors',
        h1: 'Can I get a UAE Golden Visa by buying property?',
        seoTitle: 'UAE Golden Visa for Property Investors | NXTSTAR',
        description:
            'Property owners can qualify for a 10-year UAE Golden Visa. The value threshold, mortgage, off-plan and joint ownership rules from GDRFA Dubai, and how to apply.',
        serviceName: 'Golden Visa application support for property investors',
        cta: 'Own property in Dubai, or about to buy?',
        answer: [
            'Yes. GDRFA Dubai grants a 10-year Golden Visa to an investor who owns one or more properties worth at least AED 2,000,000. Mortgaged and off-plan property can qualify, subject to conditions.',
            'NXTSTAR checks your title and valuation position against the rules before you apply, prepares the file and submits it.',
        ],
        sections: [
            {
                heading: 'The property conditions',
                blocks: [
                    {
                        list: [
                            'One property or several, with a combined value of at least AED 2,000,000. All property types are accepted.',
                            'Mortgaged property is accepted. GDRFA asks for a bank letter showing that AED 2,000,000 has been paid.',
                            'Off-plan units count if the total value is at least AED 2,000,000 and they were bought from an approved local real estate company.',
                            'With joint ownership, your own share must be worth at least AED 2,000,000.',
                        ],
                    },
                ],
            },
            {
                heading: 'Documents',
                blocks: [
                    {
                        list: [
                            'Passport copy',
                            'A property status statement from the Dubai Land Department, which certifies the value',
                            'Where needed, a valuation certificate from an office licensed by the Dubai Land Department',
                            'For a mortgaged property, the bank letter described above',
                        ],
                    },
                ],
            },
            {
                heading: 'The condition buyers miss: the lien',
                blocks: [
                    { text: 'GDRFA requires a lien to be placed on the property so that ownership continues for the life of the Golden Visa. You should assume you cannot freely sell that property during the term without affecting the visa. Plan for this before you choose which property to use.' },
                ],
            },
            {
                heading: 'The process',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Confirm the property qualifies and obtain the Dubai Land Department statement.',
                            'Submit the application online through GDRFA or the Dubai Land Department service, or at an Amer centre.',
                            'Complete medical testing and Emirates ID biometrics.',
                            'Receive the residence permit.',
                        ],
                    },
                    { text: 'GDRFA Dubai gives an expected completion time of five business days once a complete application is submitted. Gathering the property documents usually takes longer than that.' },
                ],
            },
            KEEPING_IT,
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We check eligibility, tell you which documents are missing, and prepare and submit the application. We can also handle family members\' permits.' },
                    { text: 'We are not a real estate broker and do not advise on which property to buy. Approval is decided by the immigration authority.' },
                ],
            },
        ],
        faqs: [
            { question: 'Does a mortgaged property qualify?', answer: 'Yes. GDRFA Dubai accepts mortgaged property and asks for a bank letter showing AED 2,000,000 paid.' },
            { question: 'Can I combine two apartments to reach the threshold?', answer: 'Yes. GDRFA refers to one or more properties with a value of no less than AED 2,000,000.' },
            { question: 'Can I sell the property after I get the visa?', answer: 'A lien is placed on the property to ensure ownership continues during the Golden Visa, so selling it affects the visa.' },
            { question: 'Do these rules apply outside Dubai?', answer: 'These are GDRFA Dubai\'s conditions. In other emirates the application goes through the federal authority, ICP, and the land department of that emirate.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.investors, SRC.dld, SRC.icp],
        related: [hubLink, { name: 'Golden Visa for business investors', path: sub('business-investors') }, { name: 'Visa services', path: '/services/visa' }, contact],
    },
    {
        slug: 'business-investors',
        breadcrumb: 'Business investors',
        h1: 'How does a business investor qualify for a UAE Golden Visa?',
        seoTitle: 'UAE Golden Visa for Business Investors and Company Owners | NXTSTAR',
        description:
            'Company shareholders, depositors and major taxpayers can qualify for a 10-year UAE Golden Visa. The three investor routes and the documents GDRFA Dubai asks for.',
        serviceName: 'Golden Visa application support for business investors',
        cta: 'Own a company in the UAE?',
        answer: [
            'Through one of three routes set out by GDRFA Dubai: a shareholding worth at least AED 2,000,000 in a UAE company, a deposit of at least AED 2,000,000 with a UAE bank, or a company that pays at least AED 250,000 a year in tax. Each leads to a 10-year visa.',
            'NXTSTAR works out which route your position supports, assembles the audited figures and letters, and submits the application.',
        ],
        sections: [
            {
                heading: 'Route 1: shareholding in a UAE company',
                blocks: [
                    { text: 'Your share of the company must be worth at least AED 2,000,000. GDRFA says it also evaluates the size of the establishment, its employment, its administrative efficiency and its financial solvency. Documents:' },
                    {
                        list: [
                            'A certified financial report from an audit firm accredited in the UAE',
                            'The company\'s valid trade licence and bank statement',
                            'Tax registration, with the previous year\'s receipts',
                            'For a free zone company, a certificate showing the capital and your share',
                        ],
                    },
                ],
            },
            {
                heading: 'Route 2: bank deposit',
                blocks: [
                    {
                        list: [
                            'A deposit, bonds or sukuk of at least AED 2,000,000 with an accredited local bank.',
                            'A bank certificate proving the deposit and stating that it is frozen for no less than two years.',
                            'Proof of housing in Dubai.',
                        ],
                    },
                    { text: 'GDRFA states that the deposit or investment may not be withdrawn during the Golden Visa period.' },
                ],
            },
            {
                heading: 'Route 3: tax contribution',
                blocks: [
                    {
                        list: [
                            'Your establishment, or establishments, pay at least AED 250,000 a year in tax.',
                            'A trade licence with the partners\' appendix.',
                            'A certificate and a letter from the Federal Tax Authority confirming the amount and that you are a partner.',
                        ],
                    },
                    { text: 'The figure is taken from the year before the application.' },
                ],
            },
            {
                heading: 'Which route to use',
                blocks: [
                    { text: 'The shareholding route suits owners of an established, audited company. The tax route suits a profitable trading business with clean filings. The deposit route is the simplest on paper but ties up capital. If none fits, look at the property or skilled professional categories.' },
                ],
            },
            KEEPING_IT,
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We review your company documents, coordinate with your auditor and bank on the letters, and file the application. If you do not yet have a UAE company, we set one up.' },
                    { text: 'We are not auditors and do not value your shares. The authority decides the application.' },
                ],
            },
        ],
        faqs: [
            { question: 'Does a free zone company count?', answer: 'Yes. GDRFA Dubai lists a free zone certificate showing capital and the investor\'s share among the documents.' },
            { question: 'Is share capital on the licence enough?', answer: 'GDRFA asks for an audited financial report and evaluates the establishment, so stated capital alone is not the test.' },
            { question: 'Can two partners both apply?', answer: 'Each applicant has to meet the threshold through their own share.' },
            { question: 'How long does approval take?', answer: 'GDRFA Dubai gives an expected completion time of five business days after a complete application.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.investors, SRC.icp],
        related: [hubLink, { name: 'Golden Visa for property investors', path: sub('property-investors') }, { name: 'Golden Visa for entrepreneurs', path: sub('entrepreneurs') }, { name: 'Mainland company setup', path: '/business/mainland' }, contact],
    },
    {
        slug: 'entrepreneurs',
        breadcrumb: 'Entrepreneurs',
        h1: 'Can a startup founder get a UAE Golden Visa?',
        seoTitle: 'UAE Golden Visa for Entrepreneurs and Startup Founders | NXTSTAR',
        description:
            'Founders of innovative, technology-led projects can qualify for a 10-year UAE Golden Visa. The three project routes and the nomination GDRFA Dubai requires.',
        serviceName: 'Golden Visa application support for entrepreneurs',
        cta: 'Building a technology company in the UAE?',
        answer: [
            'Yes, if the project is technological or future-focused and based on disruptive innovation. GDRFA Dubai accepts three cases: a registered pioneering project with AED 1 million in annual income, an incubator-backed project with AED 2 million in income, or a past project sold for at least AED 7 million.',
            'In Dubai the application needs a nomination from the Dubai Future Foundation. NXTSTAR helps founders prepare the case for nomination and files the visa application.',
        ],
        sections: [
            {
                heading: 'The three qualifying cases',
                blocks: [
                    {
                        list: [
                            'A pioneering project registered with the Ministry of Economy or the relevant local authority, with annual income of AED 1 million.',
                            'A project established through a business incubator or the Ministry of Economy, with income of AED 2 million.',
                            'A founder who built a pioneering project and sold it for at least AED 7 million.',
                        ],
                    },
                    { text: 'The founder can be inside or outside the UAE when applying.' },
                ],
            },
            {
                heading: 'The nomination',
                blocks: [
                    { text: 'GDRFA Dubai lists two documents: a passport copy and a nomination letter from the Dubai Future Foundation. The visa application is short. The work is in showing that the project is innovative and that the income or exit figures are real.' },
                    { text: 'An ordinary trading or services company does not meet the test, however profitable. Those owners should look at the business investor category instead.' },
                ],
            },
            {
                heading: 'Preparing the case',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Gather registration documents for the project and audited income figures, or the sale agreement for an exit.',
                            'Describe plainly what is new about the product or technology.',
                            'Apply for the nomination.',
                            'With the nomination letter, submit the visa application to GDRFA.',
                        ],
                    },
                    { text: 'GDRFA gives an expected completion time of five days for the visa step. It does not give a time for the nomination.' },
                ],
            },
            KEEPING_IT,
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We set up the company, including DIFC technology licences, help organise the supporting documents and submit the visa application.' },
                    { text: 'We do not issue nominations and cannot influence them. A nomination does not guarantee the visa.' },
                ],
            },
        ],
        faqs: [
            { question: 'My startup has no revenue yet. Can I apply?', answer: 'Not under this category. Each of GDRFA Dubai\'s three cases depends on income or a completed sale.' },
            { question: 'Who nominates entrepreneurs in Dubai?', answer: 'GDRFA Dubai requires a nomination letter from the Dubai Future Foundation.' },
            { question: 'Does my company have to be in a particular free zone?', answer: 'GDRFA refers to registration with the Ministry of Economy or the relevant local authority, or a project set up through a business incubator. It does not name a zone.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.entrepreneurs, SRC.federal],
        related: [hubLink, { name: 'DIFC AI and Innovation Licence', path: '/services/difc-ai-licence' }, { name: 'Golden Visa for business investors', path: sub('business-investors') }, contact],
    },
    {
        slug: 'content-creators',
        breadcrumb: 'Content creators',
        h1: 'Can content creators get a UAE Golden Visa?',
        seoTitle: 'UAE Golden Visa for Content Creators and Influencers | NXTSTAR',
        description:
            'Creators can qualify for a 10-year UAE Golden Visa in the culture and art category with an official nomination. Who nominates, what they look for, and the steps.',
        serviceName: 'Golden Visa application support for content creators',
        cta: 'A creator thinking about a long-term base in the UAE?',
        answer: [
            'Yes. Creators apply in the culture and art category, which needs a nomination letter from the Ministry of Culture, the Dubai Culture and Arts Authority or the UAE Media Council. Creators HQ in Dubai also runs a nomination route for content creators and creative talent.',
            'The visa is valid for 10 years. NXTSTAR helps creators build the portfolio, apply for nomination and file the visa, alongside the trade licence and advertiser permit they need to work.',
        ],
        sections: [
            {
                heading: 'Who the category is for',
                blocks: [
                    { text: 'GDRFA Dubai describes three levels for people of culture and art:' },
                    {
                        list: [
                            'A global pioneer, with worldwide recognition shown by awards, nominations or honorary positions.',
                            'A locally or regionally prominent figure, with recognised standing shown by certificates, nominations or honorary roles.',
                            'A distinguished practitioner, with at least five years of professional experience, work published in the last three years, recognition from media or critics, collaborations with prestigious organisations and active membership of an international arts body.',
                        ],
                    },
                    { text: 'Creators HQ says it looks for a proven record of impactful content, recognition or awards, consistent growth and engagement, and potential to contribute to the UAE\'s creative community.' },
                ],
            },
            {
                heading: 'Documents',
                blocks: [
                    {
                        list: [
                            'Passport copy',
                            'The nomination letter from one of the authorities above',
                            'A portfolio showing your main achievements',
                        ],
                    },
                ],
            },
            {
                heading: 'The steps',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Assemble the portfolio: audience and engagement figures, press, awards, brand and institutional collaborations.',
                            'Apply for nomination through the route that fits your work.',
                            'Once nominated, submit the Golden Visa application.',
                            'Complete medical testing and Emirates ID biometrics in the UAE.',
                        ],
                    },
                    { text: 'Creators HQ states that processing takes 8 to 12 weeks from the date of its nomination email. GDRFA gives five days for the visa step itself.' },
                ],
            },
            {
                heading: 'A Golden Visa is not permission to advertise',
                blocks: [
                    { text: 'The Golden Visa gives you residence without a sponsor. It does not replace the trade licence and Advertiser Permit you need before publishing advertising content from the UAE. Most creators need all three.' },
                ],
            },
            KEEPING_IT,
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We help you present the portfolio, prepare the nomination request, file the visa, and set up the licence and permit.' },
                    { text: 'Nomination is decided by the nominating body and the visa by the immigration authority. Follower numbers alone do not secure either.' },
                ],
            },
        ],
        faqs: [
            { question: 'How many followers do I need?', answer: 'Neither GDRFA Dubai nor Creators HQ publishes a follower threshold. They describe recognition, track record and impact.' },
            { question: 'Who can nominate a content creator?', answer: 'GDRFA Dubai accepts a nomination letter from the Ministry of Culture, the Dubai Culture and Arts Authority or the UAE Media Council.' },
            { question: 'Do I still need an advertiser permit with a Golden Visa?', answer: 'Yes. The visa is a residence permit. Advertising content needs a trade licence and the Media Council\'s Advertiser Permit.' },
            { question: 'Can I apply from outside the UAE?', answer: 'You can start the nomination from abroad. The medical and biometric steps are completed in the UAE.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.talents, SRC.creatorsHq, SRC.federal],
        related: [hubLink, { name: 'Advertiser permit for content creators', path: '/services/advertiser-permit' }, { name: 'Foreign creators relocating to the UAE', path: '/services/advertiser-permit/foreign-creators' }, contact],
    },
    {
        slug: 'doctors',
        breadcrumb: 'Doctors',
        h1: 'How do doctors get a UAE Golden Visa?',
        seoTitle: 'UAE Golden Visa for Doctors and Healthcare Professionals | NXTSTAR',
        description:
            'Doctors and healthcare specialists can qualify for a 10-year UAE Golden Visa with a health authority nomination. The conditions and documents from GDRFA Dubai.',
        serviceName: 'Golden Visa application support for doctors and healthcare professionals',
        cta: 'Practising medicine in the UAE?',
        answer: [
            'With a nomination from the Ministry of Health and Prevention or the relevant local health authority, followed by approval from the federal identity authority, ICP. GDRFA Dubai lists doctors under elite health fields and grants a 10-year visa.',
            'NXTSTAR prepares the nomination request and the visa file for doctors, pharmacists and other licensed healthcare professionals.',
        ],
        sections: [
            {
                heading: 'Conditions',
                blocks: [
                    {
                        list: [
                            'A nomination letter from the Ministry of Health and Prevention or the relevant local authority.',
                            'Approval issued by ICP.',
                            'A valid licence to practise, for regulated professions such as physician and pharmacist.',
                            'Valid comprehensive health insurance for you and your family members.',
                        ],
                    },
                    { text: 'Unlike the skilled professional category, GDRFA does not set a salary threshold for elite health fields. The nomination is what counts.' },
                ],
            },
            {
                heading: 'Documents',
                blocks: [
                    { list: ['Passport copy', 'The nomination letter', 'The ICP approval', 'Your professional licence', 'Health insurance for you and your dependants'] },
                ],
            },
            {
                heading: 'Which health authority',
                blocks: [
                    { text: 'The UAE has more than one health regulator. Which one nominates you depends on where you are licensed: the federal ministry, the Dubai Health Authority or the Department of Health in Abu Dhabi. Start with the authority that issued your licence.' },
                ],
            },
            {
                heading: 'If you are not yet licensed in the UAE',
                blocks: [
                    { text: 'The Golden Visa follows the professional licence. A doctor moving to the UAE first completes credential verification and licensing with the health authority, then applies for nomination. If you plan to open your own clinic, the facility licence is a separate project that we can set up.' },
                ],
            },
            KEEPING_IT,
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We prepare the nomination and visa applications, handle family permits, and set up clinics and medical companies.' },
                    { text: 'We do not handle medical licensing exams or credential verification, and the nomination is the health authority\'s decision.' },
                ],
            },
        ],
        faqs: [
            { question: 'Do all doctors qualify automatically?', answer: 'No. GDRFA Dubai requires a nomination from the health ministry or local health authority and approval from ICP.' },
            { question: 'Is there a minimum salary for doctors?', answer: 'GDRFA Dubai does not list one for elite health fields. The salary condition applies to the separate skilled professional category.' },
            { question: 'Can my family be included?', answer: 'Golden Visa holders can sponsor family members. GDRFA asks for comprehensive health insurance covering you and your family.' },
            { question: 'Do nurses and pharmacists qualify?', answer: 'The category covers health fields broadly and names pharmacists as a licensed profession. Eligibility depends on the health authority\'s nomination.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.scientists, SRC.federal, SRC.icp],
        related: [hubLink, { name: 'Golden Visa for executives and skilled professionals', path: sub('executives-and-professionals') }, { name: 'Health advertising rules for creators and clinics', path: '/services/advertiser-permit/health-and-fitness-creators' }, contact],
    },
    {
        slug: 'scientists-and-engineers',
        breadcrumb: 'Scientists and engineers',
        h1: 'Can scientists and engineers get a UAE Golden Visa?',
        seoTitle: 'UAE Golden Visa for Scientists, Engineers and Tech Specialists | NXTSTAR',
        description:
            'Researchers, industrial specialists and digital technology talent can qualify for a 10-year UAE Golden Visa. The degree, citation and nomination rules.',
        serviceName: 'Golden Visa application support for scientists, engineers and technology specialists',
        cta: 'Working in research, engineering or AI?',
        answer: [
            'Yes, through three specialist routes described by GDRFA Dubai: scientists and researchers nominated by the Emirates Council of Scholars, industrial specialists nominated by the Ministry of Industry and Advanced Technology, and digital technology talent nominated by the UAE council for artificial intelligence and digital transactions.',
            'All three lead to a 10-year visa. NXTSTAR helps you choose the route your record supports and prepares the nomination and visa applications.',
        ],
        sections: [
            {
                heading: 'Scientists and researchers',
                blocks: [
                    {
                        list: [
                            'A PhD from one of the top 500 universities worldwide, or a Master\'s from one of the top 250, earned within the last 10 years.',
                            'The degree is in engineering, technology, life sciences or natural sciences.',
                            'A Field Weighted Citation Index of 1.0 or higher and an h-index of 10 or higher.',
                            'A nomination from the Emirates Council of Scholars, then ICP approval.',
                        ],
                    },
                    { text: 'GDRFA notes an exemption from the degree conditions for researchers with a Scopus h-index of 20 or more, or with notable achievements in research and development.' },
                ],
            },
            {
                heading: 'Industrial and advanced technology specialists',
                blocks: [
                    { text: 'Specialists in industry and Fourth Industrial Revolution fields apply with a nomination from the Ministry of Industry and Advanced Technology or the relevant local authority, followed by ICP approval.' },
                ],
            },
            {
                heading: 'Digital technology talent',
                blocks: [
                    { text: 'People with exceptional talent in digital technology, which includes AI and software, apply with a nomination letter from the Emirates council responsible for artificial intelligence and digital transactions.' },
                ],
            },
            {
                heading: 'If you do not fit a specialist route',
                blocks: [
                    { text: 'Many engineers qualify more easily as skilled professionals, where the test is a bachelor\'s degree, a professional-level job and a monthly salary of at least AED 30,000. That route needs no nomination.' },
                ],
            },
            {
                heading: 'Documents for every specialist route',
                blocks: [
                    { list: ['Passport copy', 'The nomination letter', 'The ICP approval, where the route requires it', 'Valid comprehensive health insurance'] },
                ],
            },
            KEEPING_IT,
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We assess which route is realistic, organise the academic and citation evidence, and file the nomination and visa applications.' },
                    { text: 'Nominating bodies make their own decisions. We cannot predict them and a nomination is not a guarantee.' },
                ],
            },
        ],
        faqs: [
            { question: 'I have a PhD but few citations. Can I apply as a researcher?', answer: 'GDRFA Dubai lists citation measures as a condition for that route. Consider the skilled professional category instead.' },
            { question: 'Does my degree need to be attested?', answer: 'For the skilled professional category, GDRFA requires Ministry of Education recognition of a foreign degree. Expect to show attested degrees on any route.' },
            { question: 'Is there a route for software developers?', answer: 'Yes. Digital technology talent is its own route, with nomination by the council for artificial intelligence and digital transactions.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.scientists, SRC.talents, SRC.federal],
        related: [hubLink, { name: 'Golden Visa for executives and skilled professionals', path: sub('executives-and-professionals') }, { name: 'DIFC AI and Innovation Licence', path: '/services/difc-ai-licence' }, contact],
    },
    {
        slug: 'executives-and-professionals',
        breadcrumb: 'Executives and professionals',
        h1: 'What salary do I need for a UAE Golden Visa?',
        seoTitle: 'UAE Golden Visa for Executives and Skilled Professionals | NXTSTAR',
        description:
            'Employees can qualify for a 10-year UAE Golden Visa as skilled professionals: the AED 30,000 salary rule, degree, job level and documents GDRFA Dubai requires.',
        serviceName: 'Golden Visa application support for executives and skilled professionals',
        cta: 'Employed in the UAE on a senior salary?',
        answer: [
            'A monthly salary of at least AED 30,000. GDRFA Dubai grants a 10-year Golden Visa to skilled workers at the first or second professional level who earn that amount, hold at least a bachelor\'s degree and have a valid UAE employment contract.',
            'This is the route most employees use, because it needs no nomination. NXTSTAR checks your contract and documents against the rules and files the application.',
        ],
        sections: [
            {
                heading: 'The conditions',
                blocks: [
                    {
                        list: [
                            'Your job is classified at the first or second professional level.',
                            'Your monthly salary is no less than AED 30,000.',
                            'You hold a bachelor\'s degree or equivalent. A degree from a foreign university must be recognised by the Ministry of Education.',
                            'You have a valid employment contract in the UAE, or a salary certificate if you work for a government, semi-government or free zone entity.',
                            'You hold a professional licence if your profession requires one.',
                            'You have comprehensive health insurance for yourself and your family members.',
                        ],
                    },
                ],
            },
            {
                heading: 'Documents',
                blocks: [
                    {
                        list: [
                            'Passport copy',
                            'Employment contract or salary certificate',
                            'Bank statements showing salary transfers for the last six months',
                            'Degree certificate, attested and recognised',
                        ],
                    },
                ],
            },
            {
                heading: 'Where applications fail',
                blocks: [
                    {
                        list: [
                            'The contract shows a lower basic salary and the rest as allowances. Check how your salary is recorded before applying.',
                            'Salary is paid in cash or to an overseas account, so the bank statements do not show six months of transfers.',
                            'The job title on the labour contract is not at a qualifying professional level, even though the role is senior.',
                            'The degree has not been attested.',
                        ],
                    },
                ],
            },
            {
                heading: 'What happens if you change jobs',
                blocks: [
                    { text: 'GDRFA reserves the right to act if your salary falls below AED 30,000 or the contract is cancelled, and the Golden Visa can be cancelled in that case. The visa is in your name, not your employer\'s, but the conditions travel with you. Tell us before you resign or renegotiate.' },
                    { text: 'GDRFA gives an expected completion time of 48 hours for this category once a complete application is submitted.' },
                ],
            },
            KEEPING_IT,
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We review the contract, statements and degree before filing, handle attestation and equivalency, and submit the application and family permits.' },
                    { text: 'We cannot change how your employer has classified your job or salary. That has to be corrected by the employer.' },
                ],
            },
        ],
        faqs: [
            { question: 'Is AED 30,000 basic salary or total?', answer: 'GDRFA Dubai states a monthly salary of no less than AED 30,000 and asks for a contract and six months of bank transfers. Show us your contract and we will tell you how it is likely to be read.' },
            { question: 'Do I need my employer\'s permission?', answer: 'The Golden Visa has no sponsor, but you need a valid employment contract or salary certificate as evidence.' },
            { question: 'I own my company and pay myself a salary. Does that count?', answer: 'It can be harder to evidence. The business investor category is usually a better fit for owners.' },
            { question: 'How long does it take?', answer: 'GDRFA Dubai gives 48 hours for this category after a complete application. Degree attestation beforehand takes longer.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.scientists, SRC.icp, SRC.federal],
        related: [hubLink, { name: 'Golden Visa for scientists and engineers', path: sub('scientists-and-engineers') }, { name: 'Golden Visa for doctors', path: sub('doctors') }, { name: 'PRO services', path: '/services/pro' }, contact],
    },
    {
        slug: 'students-and-graduates',
        breadcrumb: 'Students and graduates',
        h1: 'Can students get a UAE Golden Visa?',
        seoTitle: 'UAE Golden Visa for Outstanding Students and Graduates | NXTSTAR',
        description:
            'Top school students and university graduates can qualify for a UAE Golden Visa. The grade thresholds, university rankings and time limits GDRFA Dubai applies.',
        serviceName: 'Golden Visa application support for students and graduates',
        cta: 'A top student, or the parent of one?',
        answer: [
            'Yes. GDRFA Dubai grants a Golden Visa to top students from UAE schools and universities and to top graduates of leading international universities. The tests are a school grade of at least 95%, or a university grade point average of at least 3.5 or 3.8 depending on the university\'s classification.',
            'NXTSTAR checks the certificates against the thresholds and prepares the application, including for families applying on a child\'s behalf.',
        ],
        sections: [
            {
                heading: 'School students',
                blocks: [
                    { text: 'A high school result of at least 95%, or its equivalent, from a school in the UAE.' },
                ],
            },
            {
                heading: 'Graduates of UAE universities',
                blocks: [
                    {
                        list: [
                            'From a university classified A: a cumulative grade point average of at least 3.5.',
                            'From a university classified B: a cumulative grade point average of at least 3.8.',
                            'You graduated no more than two years ago.',
                        ],
                    },
                ],
            },
            {
                heading: 'Graduates of international universities',
                blocks: [
                    {
                        list: [
                            'The university is among the top 100 in the world, under the ranking approved by the Ministry of Education.',
                            'For a bachelor\'s degree, a cumulative grade point average of at least 3.5.',
                        ],
                    },
                ],
            },
            {
                heading: 'Documents and approval',
                blocks: [
                    { list: ['Passport copy', 'Certificates showing the grade and graduation date', 'A recommendation letter from the school or university', 'Approval from the federal identity authority, ICP'] },
                    { text: 'The federal portal lists a five-year visa for high school achievers and a ten-year visa for top university students, while GDRFA Dubai\'s service page refers to ten years. Confirm the term that applies to you when you apply.' },
                ],
            },
            {
                heading: 'Timing matters',
                blocks: [
                    { text: 'The two-year limit for UAE university graduates runs from graduation. Apply early, because gathering certificates, equivalency and the recommendation letter takes time.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We confirm eligibility from the transcripts, arrange equivalency where needed, and submit the application.' },
                    { text: 'We cannot convert grades favourably or vouch for a university\'s classification. The authorities decide both.' },
                ],
            },
        ],
        faqs: [
            { question: 'My daughter scored 94.8%. Does she qualify?', answer: 'GDRFA Dubai states at least 95% or its equivalent, so a result below that does not meet the condition.' },
            { question: 'I graduated three years ago from a UAE university. Can I apply?', answer: 'No. GDRFA Dubai requires graduation no more than two years ago for UAE university graduates.' },
            { question: 'Can a student sponsor their parents?', answer: 'Golden Visa holders can sponsor family members. Ask us to confirm what applies to a student holder before relying on it.' },
            { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
        ],
        sources: [SRC.students, SRC.federal, SRC.icp],
        related: [hubLink, { name: 'Golden Visa for executives and skilled professionals', path: sub('executives-and-professionals') }, { name: 'Visa services', path: '/services/visa' }, contact],
    },
];

const hub = {
    path: hubPath,
    parent: { name: 'Services', path: '/services' },
    breadcrumb: 'Golden Visa',
    h1: 'Who can get a UAE Golden Visa?',
    seoTitle: 'UAE Golden Visa: Categories and How to Apply | NXTSTAR',
    description:
        'The UAE Golden Visa is a long-term residence permit with no sponsor. Every category explained, with the conditions each one has to meet and how NXTSTAR helps.',
    serviceName: 'UAE Golden Visa application support',
    serviceType,
    headerImage,
    reviewed,
    cta: 'Not sure which category you fit?',
    answer: [
        'Investors, entrepreneurs, people with exceptional talent, scientists and specialists, skilled professionals, outstanding students and humanitarian pioneers. The Golden Visa is a long-term, renewable UAE residence permit, valid for five or ten years, that needs no sponsor.',
        'Each category has its own test. Some depend on a figure you can check today, such as property value or salary. Others depend on a nomination from a government body. NXTSTAR tells you which category you fit and handles the application.',
    ],
    sections: [
        {
            heading: 'What the Golden Visa gives you',
            blocks: [
                {
                    list: [
                        'A long-term, renewable residence visa.',
                        'No sponsor or employer needed to hold it.',
                        'The ability to stay outside the UAE for longer than the usual six months without losing residence.',
                        'The ability to sponsor family members, including your spouse and children.',
                    ],
                },
            ],
        },
        {
            heading: 'Categories you can check yourself',
            blocks: [
                {
                    list: [
                        'Property investors: property worth at least AED 2,000,000.',
                        'Business investors: a company share or bank deposit of at least AED 2,000,000, or tax payments of at least AED 250,000 a year.',
                        'Skilled professionals and executives: a monthly salary of at least AED 30,000, with a degree and a professional-level job.',
                        'Students and graduates: grade thresholds set by the authorities.',
                    ],
                },
            ],
        },
        {
            heading: 'Categories that need a nomination',
            blocks: [
                {
                    list: [
                        'Entrepreneurs with innovative projects: Dubai Future Foundation, in Dubai.',
                        'Content creators and people of culture and art: Ministry of Culture, Dubai Culture or the UAE Media Council.',
                        'Doctors and health specialists: the health ministry or local health authority.',
                        'Scientists and researchers: the Emirates Council of Scholars.',
                        'Inventors and innovators: the Ministry of Economy or relevant local authority.',
                        'Athletes: the Ministry of Sports or the Dubai Sports Council.',
                    ],
                },
                { text: 'A nomination does not guarantee the visa. GDRFA Dubai says the final decision rests with the immigration authority.' },
            ],
        },
        {
            heading: 'Where you apply',
            blocks: [
                { text: 'In Dubai, applications go to the General Directorate of Identity and Foreigners Affairs (GDRFA), online or at an Amer centre. In the other emirates they go to the federal authority, ICP. The conditions on these pages are the ones GDRFA Dubai publishes.' },
            ],
        },
        {
            heading: 'What NXTSTAR does, and what we do not',
            blocks: [
                { text: 'We assess your category, list the documents you are missing, prepare nomination requests where one is needed, and submit the visa and family applications.' },
                { text: 'We do not issue nominations or approvals, and we do not promise an outcome. The authorities decide.' },
            ],
        },
    ],
    faqs: [
        { question: 'How long is a Golden Visa valid?', answer: 'Five or ten years depending on the category, and it is renewable while you continue to meet the conditions.' },
        { question: 'Do I need a job or a sponsor?', answer: 'No. The federal portal lists not needing a sponsor as one of the visa\'s benefits. Some categories do require an employment contract as evidence.' },
        { question: 'Can I live outside the UAE and keep it?', answer: 'Golden Visa holders are exempt from the rule that cancels residence after 180 days abroad.' },
        { question: 'Which category is easiest?', answer: 'The ones with a clear figure: property value, company share, or a salary of at least AED 30,000. Nomination routes depend on another body\'s decision.' },
        { question: 'How much does NXTSTAR charge?', answer: PRICE_ANSWER },
    ],
    sources: [SRC.federal, SRC.icp, SRC.investors, SRC.talents, SRC.scientists],
    related: [
        ...guides.map((guide) => ({ name: `Golden Visa for ${guide.breadcrumb.toLowerCase()}`, path: sub(guide.slug) })),
        contact,
    ],
};

const goldenVisaGuides = [
    hub,
    ...guides.map((guide) => ({
        ...guide,
        path: sub(guide.slug),
        parent: { name: 'Golden Visa', path: hubPath },
        headerImage,
        reviewed,
        serviceType,
    })),
];

export default goldenVisaGuides;
