// One page per emirate for mainland company setup.
// Steps and documents come from each emirate's licensing authority (see `sources`).
// No prices. Where an authority publishes little, the page says so instead of padding.

const parent = { name: 'Mainland setup', path: '/business/mainland' };
const headerImage = 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=1200&q=80';
const reviewed = '2026-10-07';
const contact = { name: 'Contact NXTSTAR', path: '/contact' };

const emirates = [
    {
        slug: 'dubai',
        name: 'Dubai',
        authority: 'the Dubai Department of Economy and Tourism (DET)',
        description: 'How to set up a mainland company in Dubai: the DET steps from activity and trade name to initial approval, Ejari lease, documents and licence collection.',
        answer: [
            'You license the company with the Dubai Department of Economy and Tourism (DET). The route is: pick the activity and legal form, register the trade name, get initial approval, sign the memorandum of association, register a lease through Ejari, obtain any extra approvals, then pay and collect the licence.',
            'Once the payment voucher is issued you have 30 days to pay. NXTSTAR runs each step and keeps the approvals moving in the right order.',
        ],
        suits: 'Dubai mainland suits businesses that sell directly to customers and companies anywhere in the UAE, bid for government work, or need a shop, clinic, restaurant or office in the city.',
        steps: [
            'Identify the business activity.',
            'Select a legal form. The options offered depend on the activity.',
            'Register the trade name.',
            'Apply for initial approval.',
            'Draft and sign the memorandum of association and, where the structure needs one, a local service agent agreement.',
            'Choose premises and register the tenancy with Ejari.',
            'Obtain approvals from any other government body that regulates the activity.',
            'Submit the documents, pay within 30 days of the voucher, and collect the licence.',
        ],
        documents: [
            'Initial approval receipt and the documents already submitted',
            'Tenancy contract registered through Ejari',
            'Attested memorandum of association',
            'Approvals from other government entities, where required',
            'Attested service agent contract, for civil establishments and some fully foreign-owned structures',
        ],
        special: {
            heading: 'Trade name rules in Dubai',
            list: [
                'The name ends with the legal form, such as LLC.',
                'It does not offend public morals or public order.',
                'It matches the activity and legal status.',
                'It does not use the names of religions, governing authorities or external bodies.',
                'It has not been registered before.',
            ],
        },
        note: 'Initial approval is what lets you sign a lease and register it through Ejari, so premises cannot be finalised before it. For many industrial licences it is requested at the same time as the trade name.',
        faqs: [
            { question: 'Who issues a mainland licence in Dubai?', answer: 'The Dubai Department of Economy and Tourism, through its licensing service.' },
            { question: 'Do I need an office for a Dubai mainland licence?', answer: 'The standard route needs premises with a tenancy contract registered through Ejari before the licence is collected.' },
            { question: 'How long do I have to pay for the licence?', answer: 'DET requires payment within 30 days of receiving the payment voucher.' },
        ],
        sources: [
            { name: 'Invest in Dubai: Mainland business setup', url: 'https://www.investindubai.gov.ae/en/business-setup/mainland-companies' },
            { name: 'Invest in Dubai: Business setup steps', url: 'https://www.investindubai.gov.ae/en/business-setup/business-set-up-steps' },
            { name: 'Dubai DET: Business licensing', url: 'https://www.dubaidet.gov.ae/en/licences-and-permits/business-licensing' },
        ],
    },
    {
        slug: 'abu-dhabi',
        name: 'Abu Dhabi',
        authority: 'the Abu Dhabi Department of Economic Development',
        description: 'How to set up a mainland company in Abu Dhabi through TAMM: the economic licence steps, the Tajer Abu Dhabi licence with no premises, and what follows.',
        answer: [
            'You apply for an economic licence through TAMM, the Abu Dhabi government services platform. The standard licence covers every legal form and follows the full procedure: trade name, activity approvals, premises inspection, preliminary and final approval, then registration with the chamber, labour and immigration authorities.',
            'For some commercial activities there is a lighter option, the Tajer Abu Dhabi licence, which needs no physical premises. NXTSTAR tells you which one your activity allows and handles the application.',
        ],
        suits: 'Abu Dhabi mainland suits companies that serve Abu Dhabi clients, particularly government and energy-sector buyers, and businesses that need premises in Abu Dhabi, Al Ain or Al Dhafra.',
        steps: [
            'Reserve the trade name.',
            'Obtain approval for the investor\'s visa.',
            'Specify the activity and get approval from the entity that regulates it.',
            'Have the business premises inspected.',
            'Receive preliminary approval, then final approval.',
            'Pay the fees.',
            'Register as a member of the Abu Dhabi Chamber of Commerce and Industry.',
            'Open the establishment files with the labour ministry and the immigration authority.',
        ],
        documents: [
            'Passport and Emirates ID copies for the owners, with UAE PASS access',
            'Trade name reservation',
            'Tenancy contract for the premises, for a standard licence',
            'Approval from the regulator of the activity, where one applies',
            'Memorandum of association, for a company',
        ],
        special: {
            heading: 'The Tajer Abu Dhabi licence',
            list: [
                'It covers specific commercial activities only.',
                'It does not require an official establishment site.',
                'It is valid for three years.',
                'TAMM lists it as needing no documents, with the application made through UAE PASS.',
                'TAMM gives a processing time of 10 working days.',
            ],
        },
        note: 'The choice between a standard licence and Tajer Abu Dhabi comes first, because it decides whether you need premises at all. Not every activity is available under Tajer.',
        faqs: [
            { question: 'Where do I apply for an Abu Dhabi mainland licence?', answer: 'Through TAMM, the Abu Dhabi government services platform, using UAE PASS.' },
            { question: 'Can I get an Abu Dhabi licence without an office?', answer: 'For specific commercial activities, yes. The Tajer Abu Dhabi licence does not require an official establishment site.' },
            { question: 'How long is the Tajer Abu Dhabi licence valid?', answer: 'Three years, according to TAMM.' },
        ],
        sources: [
            { name: 'TAMM: Business licence procedure', url: 'https://www.tamm.abudhabi/en/life-events/business/ManageyourLicencescertificates/Business-Support/BusinessLicenceProcedure' },
            { name: 'TAMM: Issue economic licence, Tajer Abu Dhabi', url: 'https://www.tamm.abudhabi/en/life-events/business/Start-a-Business/economic-licence/RequestforIssuingEconomicLicenceAbuDhabiTrader' },
            { name: 'Abu Dhabi Department of Economic Development: Licensing requirements', url: 'https://www.added.gov.ae/en/set-up/establish-your-business/licensing-requirements' },
        ],
    },
    {
        slug: 'sharjah',
        name: 'Sharjah',
        authority: 'the Sharjah Economic Development Department (SEDD)',
        description: 'How to set up a mainland company in Sharjah with SEDD: trade name, technical evaluation, the SEWA and lease steps, and the online licence application.',
        answer: [
            'You license the company with the Sharjah Economic Development Department (SEDD). Before you apply you need a trade name, a technical evaluation of the premises, the electricity deposit paid to the Sharjah utility, an attested lease and the company contracts.',
            'The application itself is online through UAE PASS, and SEDD issues the licence automatically once the fees are paid. NXTSTAR lines up the prerequisites so the online step goes through first time.',
        ],
        suits: 'Sharjah mainland suits trading, light industrial and service businesses that want lower running costs than Dubai while staying within reach of it, and businesses serving Sharjah and the northern emirates.',
        steps: [
            'Issue the trade name. Initial approval of the name is handled through Tasheel service centres.',
            'Complete the technical evaluation of the premises.',
            'Pay the electricity deposit to the Sharjah Electricity, Water and Gas Authority and attest the lease.',
            'Complete the legal contracts for the chosen legal form.',
            'Log in to the SEDD website with UAE PASS and select licence issuance.',
            'Attach the documents and outside approvals, review and submit.',
            'Partners approve the application through their own UAE PASS.',
            'Pay. The licence is issued automatically after payment.',
        ],
        documents: [
            'Certified copy of the lease contract or title deed',
            'Approvals from official authorities, depending on the activity',
            'Identity documents for each owner or partner',
            'Memorandum of association, for a company',
            'Licensing form',
        ],
        special: {
            heading: 'What is particular to Sharjah',
            list: [
                'The utility deposit and lease attestation come before the licence, not after.',
                'Every partner confirms the application through UAE PASS, so each one needs it set up.',
                'SEDD also offers Eitimad, a home-based licence that is for UAE citizens only.',
            ],
        },
        note: 'Because partners approve by UAE PASS, an overseas partner without a UAE identity can hold up the application. Tell us early if any partner is abroad.',
        faqs: [
            { question: 'Who issues a mainland licence in Sharjah?', answer: 'The Sharjah Economic Development Department (SEDD).' },
            { question: 'Can I apply for a Sharjah licence online?', answer: 'Yes. SEDD\'s licence issuance service is online through UAE PASS, and the licence is issued automatically after payment.' },
            { question: 'Can a foreign resident use the Eitimad home licence?', answer: 'No. SEDD describes Eitimad as a licence for citizens who want to run a business from home.' },
        ],
        sources: [
            { name: 'SEDD: Licence issuance', url: 'https://sedd.ae/en/w/license-issuance' },
            { name: 'SEDD: Frequently asked questions', url: 'https://sedd.ae/en/faq' },
            { name: 'SEDD: Services guide', url: 'https://sedd.ae/en/services-guide' },
        ],
    },
    {
        slug: 'ajman',
        name: 'Ajman',
        authority: 'the Ajman Department of Economic Development',
        description: 'How to set up a mainland company in Ajman: the seven licence steps, documents, security clearance for residents and the five-step Go Business service.',
        answer: [
            'You license the company with the Ajman Department of Economic Development. The standard route has seven steps, from reserving the trade name to issuing the licence, with an immigration authority approval for foreign owners along the way.',
            'Ajman also runs a digital service called Go Business that issues a commercial licence in five steps through UAE PASS. NXTSTAR checks whether your activity can use it and handles either route.',
        ],
        suits: 'Ajman mainland suits small trading, service and workshop businesses that want low overheads and serve Ajman, Sharjah and the northern emirates.',
        steps: [
            'Reserve the trade name online or at a customer centre.',
            'Obtain the approval of the federal identity and nationality authority, for a foreign owner.',
            'Obtain approval from other government entities if the activity is classed as high risk.',
            'Authenticate the lease contract with the Municipality and Planning Department.',
            'Pay the prescribed fees.',
            'Issue the memorandum of association, for a company.',
            'Receive the licence.',
        ],
        documents: [
            'Trade name reservation certificate',
            'Licence application',
            'Copy of a valid passport and ID card for the owner or every partner',
            'Security clearance, for residents',
        ],
        special: {
            heading: 'The Go Business service',
            list: [
                'Log in with UAE PASS.',
                'Reserve the trade name.',
                'Register the activity details. The memorandum of association is documented automatically.',
                'Pay electronically.',
                'Receive the commercial licence together with the chamber membership certificate and establishment card.',
            ],
        },
        note: 'Go Business bundles the licence, chamber membership and establishment card into one issue, which removes two follow-up steps. Activities that need outside approval still follow the standard route.',
        faqs: [
            { question: 'Who issues a mainland licence in Ajman?', answer: 'The Ajman Department of Economic Development.' },
            { question: 'What is Go Business?', answer: 'A digital service from Ajman\'s economic department that issues a commercial licence in five steps through UAE PASS.' },
            { question: 'Do residents need security clearance?', answer: 'Yes. Ajman lists security clearances for residents among the required documents.' },
        ],
        sources: [
            { name: 'Ajman Government: Issue trade licence', url: 'https://www.ajman.ae/en/servicecatalog/services/2862' },
            { name: 'Ajman DED: Commercial licences issuance service', url: 'https://www.ajmanded.ae/en/services/services-directory/future-investor/issue-trade-license' },
            { name: 'Ajman DED: Go Business service announcement', url: 'https://www.ajmanded.ae/en/media-center/news/ajman-ded-unveils-go-business-service-for-fast-five-step-digital-commercial-license-issuance' },
        ],
    },
    {
        slug: 'ras-al-khaimah',
        name: 'Ras Al Khaimah',
        authority: 'the Ras Al Khaimah Department of Economic Development',
        description: 'How to set up a mainland company in Ras Al Khaimah: security clearance, trade name, site inspection, municipality lease approval and licence issue.',
        answer: [
            'You license the company with the Ras Al Khaimah Department of Economic Development. The steps are security clearance, trade name reservation, a site inspection with the municipality\'s approval of the tenancy contract, any outside approvals, approval of the company contract, then payment and issue.',
            'You can ask for initial approval before the trade name certificate, which lets you start on outside approvals earlier. NXTSTAR sequences those steps for you.',
        ],
        suits: 'Ras Al Khaimah mainland suits manufacturers, contractors, tourism and hospitality businesses and local services that operate in the emirate itself.',
        steps: [
            'Obtain security clearance.',
            'Reserve the trade name.',
            'Have the site inspected and the tenancy contract approved by the Municipality Department.',
            'Obtain external approvals for the activity.',
            'Have the company contract, or the services agent contract, approved.',
            'Pay the fees and receive the licence.',
        ],
        documents: [
            'Copy of ID card',
            'Copy of the trade name reservation certificate',
            'Copy of the lease contract certified by the Municipality Department',
            'External approvals, where the activity needs them',
        ],
        special: {
            heading: 'What is particular to Ras Al Khaimah',
            list: [
                'A reserved trade name is held for two months and can be renewed.',
                'The department can refuse or change a proposed trade name.',
                'Initial approval can be granted before the trade name certificate, so you can approach other authorities sooner.',
                'The department also issues a Virtual Trader licence and an Al-Ghad licence alongside standard company licences.',
            ],
        },
        note: 'The two-month hold on the trade name sets a practical deadline. If the lease or outside approvals will take longer, plan to renew the reservation.',
        faqs: [
            { question: 'Who issues a mainland licence in Ras Al Khaimah?', answer: 'The Ras Al Khaimah Department of Economic Development.' },
            { question: 'How long is a trade name reserved?', answer: 'Two months, renewable on payment of the fee.' },
            { question: 'Is RAK mainland the same as RAKEZ?', answer: 'No. RAKEZ is the economic zone authority. A mainland licence is issued by the Department of Economic Development.' },
        ],
        sources: [
            { name: 'RAK Government: Starting a business', url: 'https://www.rak.ae/wps/portal/rak/home/business/starting-business-rak-economic' },
            { name: 'RAK Department of Economic Development: Frequently asked questions', url: 'https://ded.rak.ae/en/pages/faq.aspx' },
        ],
        extraRelated: [{ name: 'RAKEZ company setup', path: '/business/freezone/rakez' }],
    },
    {
        slug: 'fujairah',
        name: 'Fujairah',
        authority: 'Fujairah Municipality',
        description: 'How to set up a mainland company in Fujairah, where the municipality issues trade licences: name and activity approval, tenancy, documents and issue.',
        answer: [
            'In Fujairah the trade licence is handled by Fujairah Municipality. You decide the trade name and obtain initial approval of the name and activity, get any special approvals, secure a tenancy contract, then submit the memorandum of association and approved documents for the licence to be issued.',
            'NXTSTAR prepares the application and the document set with you.',
        ],
        suits: 'Fujairah mainland suits businesses tied to the east coast: port, bunkering and marine services, logistics, quarrying, tourism and local trade.',
        steps: [
            'Decide the trade name and obtain initial approval of the name and activity from Fujairah Municipality.',
            'Obtain special approval from the relevant authority if the activity is specialised.',
            'Choose a business location and sign a tenancy contract.',
            'Obtain the initial approval certificate.',
            'Prepare the memorandum of association and the approved documents.',
            'Submit, pay and receive the licence.',
        ],
        documents: [
            'Licence application signed by the company\'s managers or legal representatives',
            'Proof of the trade name reservation',
            'Proof of initial approval',
            'Personal information for each shareholder and manager',
            'Memorandum of association',
        ],
        special: {
            heading: 'What is particular to Fujairah',
            list: [
                'Licensing sits with the municipality, where most emirates use an economic department.',
                'Name and activity are approved together at the first step.',
                'Fujairah also has free zones, which are a separate route with their own authority.',
            ],
        },
        note: 'Fujairah publishes fewer procedural details online than Dubai or Abu Dhabi, so confirm the current document list with the municipality before you prepare attestations.',
        faqs: [
            { question: 'Who issues a mainland licence in Fujairah?', answer: 'Fujairah Municipality handles the initial approval of the trade name and activity and the licence.' },
            { question: 'Do I need a tenancy contract?', answer: 'Yes. Deciding a business location and getting a tenancy contract is one of the steps Fujairah lists.' },
            { question: 'Is a Fujairah free zone company the same thing?', answer: 'No. A free zone company is licensed by the free zone authority and follows different rules.' },
        ],
        sources: [
            { name: 'Fujairah Government: Doing business in Fujairah', url: 'https://fujairah.ae/en/Pages/settingupbusinessinfujairah.aspx' },
            { name: 'Fujairah Government: Business licences', url: 'https://fujairah.ae/en/pages/businesslicenses.aspx' },
        ],
    },
    {
        slug: 'umm-al-quwain',
        name: 'Umm Al Quwain',
        authority: 'the Umm Al Quwain Department of Economic Development',
        description: 'How to set up a mainland company in Umm Al Quwain: what the economic department requires, where to apply and what to confirm before you start.',
        answer: [
            'You license the company with the Umm Al Quwain Department of Economic Development. You complete the legal procedures with the department, obtain the approvals your activity needs from the competent authorities, pay the fees and receive the licence.',
            'The department says the documents vary with the activity and the legal form, so the first job is to get its list for your case. NXTSTAR does that and prepares the application.',
        ],
        suits: 'Umm Al Quwain mainland suits small local trading and service businesses, workshops and marine or fishing-related activities that operate in the emirate.',
        steps: [
            'Confirm the activity and legal form with the department.',
            'Reserve the trade name.',
            'Obtain approvals from the competent authorities for the activity.',
            'Secure premises and the tenancy contract.',
            'Complete the legal procedures with the department and pay the fees.',
            'Receive the licence.',
        ],
        documents: [
            'Identity documents for each owner or partner',
            'Trade name reservation',
            'Tenancy contract for the premises',
            'Approvals from the competent authorities',
            'Memorandum of association, for a company',
        ],
        special: {
            heading: 'What is particular to Umm Al Quwain',
            list: [
                'The department has its own e-services portal for licence procedures and legal forms.',
                'Its office is in Al Roudah, in the government buildings on Sheikh Rashid Bin Saeed Al Maktoum Street.',
                'It publishes less procedural detail online than larger emirates.',
            ],
        },
        note: 'This page is shorter than the others because the department publishes less. The document list above is the usual set. Treat the department\'s list for your activity as the one that counts.',
        faqs: [
            { question: 'Who issues a mainland licence in Umm Al Quwain?', answer: 'The Umm Al Quwain Department of Economic Development.' },
            { question: 'What documents do I need?', answer: 'The department says the required documents vary according to the activity and the legal form of the business.' },
            { question: 'Can I apply online?', answer: 'The department runs an e-services portal that covers new licence procedures.' },
        ],
        sources: [
            { name: 'UAQ Department of Economic Development: Services', url: 'https://ded.uaq.ae/en/our-activities/services.html' },
            { name: 'UAQ Department of Economic Development: E-services', url: 'https://ded-e.uaq.ae/' },
        ],
    },
];

const buildGuide = (emirate) => ({
    path: `${parent.path}/${emirate.slug}`,
    parent,
    breadcrumb: emirate.name,
    h1: `How do you set up a mainland company in ${emirate.name}?`,
    seoTitle: `Mainland Company Setup in ${emirate.name} | NXTSTAR`,
    description: emirate.description,
    serviceName: `Mainland company setup in ${emirate.name}`,
    serviceType: 'Mainland company formation support',
    headerImage,
    reviewed,
    cta: `Talk to NXTSTAR about a company in ${emirate.name}`,
    answer: emirate.answer,
    sections: [
        { heading: `Who ${emirate.name} mainland suits`, blocks: [{ text: emirate.suits }] },
        { heading: 'The steps', blocks: [{ ordered: true, list: emirate.steps }, { text: emirate.note }] },
        { heading: 'Documents', blocks: [{ list: emirate.documents }] },
        { heading: emirate.special.heading, blocks: [{ list: emirate.special.list }] },
        {
            heading: 'After the licence',
            blocks: [
                {
                    list: [
                        'Establishment card and labour file, before any visa.',
                        'Residence visas for owners and staff.',
                        'A corporate bank account, which the bank decides.',
                        'Corporate tax registration, and VAT registration where it applies.',
                    ],
                },
            ],
        },
        {
            heading: 'What NXTSTAR does, and what we do not',
            blocks: [
                {
                    list: [
                        'We confirm the activity, legal form and ownership structure with you.',
                        'We handle the trade name, approvals, lease registration and licence application.',
                        'We continue with visas and the bank account file.',
                        `We do not decide approvals. ${emirate.authority.charAt(0).toUpperCase()}${emirate.authority.slice(1)} and the other regulators do.`,
                    ],
                },
            ],
        },
    ],
    faqs: [...emirate.faqs, { question: `How much does a mainland licence in ${emirate.name} cost?`, answer: 'We do not publish prices. Ask us for a written quote that separates government fees from our service fee.' }],
    sources: emirate.sources,
    related: [
        ...(emirate.extraRelated || []),
        { name: 'Mainland company setup: overview', path: parent.path },
        { name: 'Free zone company setup', path: '/business/freezone' },
        { name: 'PRO services', path: '/services/pro' },
        contact,
    ],
});

const mainlandGuides = emirates.map(buildGuide);

export default mainlandGuides;
