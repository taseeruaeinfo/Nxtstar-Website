// "Business setup for..." and "Commercial licence for..." pages.
// Each page exists because the rules, the regulator or the choice of authority differs
// for that kind of business. Audiences with nothing different are covered elsewhere.

const parent = { name: 'Business setup', path: '/business' };
const headerImage = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80';
const reviewed = '2026-10-07';
const contact = { name: 'Contact NXTSTAR', path: '/contact' };
const PRICE_ANSWER = 'We do not publish prices. Ask us for a written quote that separates authority fees from our service fee.';
const fz = (slug) => `/business/freezone/${slug}`;

const setupFor = '/business/setup-for';
const licenceFor = '/business/commercial-licence';

const guides = [
    {
        path: `${setupFor}/freelancers`,
        breadcrumb: 'Freelancers',
        h1: 'How do freelancers set up legally in the UAE?',
        seoTitle: 'Business Setup for Freelancers in the UAE | NXTSTAR',
        description: 'The legal routes for freelancers in the UAE: free zone freelance permits, the labour ministry\'s freelance work permit and the self-employment Green Visa.',
        serviceName: 'Business setup for freelancers',
        cta: 'Going freelance in the UAE?',
        answer: [
            'Through one of three routes: a freelance permit from a free zone, a freelance work permit from the Ministry of Human Resources and Emiratisation, or your own company. Residence is a separate question, and the self-employment Green Visa lets a freelancer live in the UAE without an employer or sponsor.',
            'NXTSTAR works out which route matches your work and your residence position, then sets it up.',
        ],
        sections: [
            {
                heading: 'Route 1: a free zone freelance permit',
                blocks: [
                    { text: 'Several free zones license individuals directly, in the fields each zone covers:' },
                    {
                        list: [
                            'Dubai Media City and Dubai Internet City, through the GoFreelance permit, for media, creative and technology roles. The permit is issued in your own name.',
                            'Dubai Knowledge Park, for trainers and education professionals.',
                            'Sharjah Media City (Shams), Ajman Free Zone and Masdar City Free Zone, which each offer a freelance package or permit.',
                        ],
                    },
                    { text: 'Dubai Media City says a freelance permit holder can apply for a one-year or two-year visa.' },
                ],
            },
            {
                heading: 'Route 2: the freelance work permit',
                blocks: [
                    { text: 'The labour ministry issues a freelance work permit to individuals who work independently, with no employer sponsor and no employment contract, earning income by providing a service or completing a task for individuals or companies. It is available to foreign nationals who hold a self-sponsored residence visa.' },
                ],
            },
            {
                heading: 'Route 3: your own company',
                blocks: [
                    { text: 'A free zone company with a professional or service licence does the same job as a permit, with more room to grow: you can add partners, hire staff and invoice as a company. It is the usual step once freelance income becomes steady.' },
                ],
            },
            {
                heading: 'Residence: the self-employment Green Visa',
                blocks: [
                    { text: 'GDRFA Dubai grants a Green residence permit for self-employment with no guarantor, employer or employment contract. Its conditions are:' },
                    {
                        list: [
                            'A bachelor\'s degree or specialised diploma, or the equivalent.',
                            'Annual income from self-employment of at least AED 360,000 over the two preceding years, or proof of financial solvency for your stay.',
                        ],
                    },
                    { text: 'An entry visa for self-employment allows 60 days in the country to complete the residence process.' },
                ],
            },
            {
                heading: 'Choosing between them',
                blocks: [
                    {
                        list: [
                            'Media, design or tech work with one or two clients: a free zone freelance permit.',
                            'Already resident on a family, Golden or Green visa: the labour ministry\'s freelance work permit.',
                            'Several clients, subcontractors or plans to hire: a company.',
                            'Posting sponsored content: any of the above, plus the Advertiser Permit.',
                        ],
                    },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We set up the permit or company, handle the visa and tell you what your licence does and does not let you invoice for.' },
                    { text: 'We do not find clients, and each authority decides its own permit.' },
                ],
            },
        ],
        faqs: [
            { question: 'Can I freelance in the UAE without a company?', answer: 'Yes. Free zone freelance permits and the labour ministry\'s freelance work permit are both for individuals.' },
            { question: 'Can I freelance while employed?', answer: 'It depends on your employer and visa. Ask us before you apply, because the answer changes which permit is open to you.' },
            { question: 'What income do I need for the self-employment Green Visa?', answer: 'GDRFA Dubai asks for annual self-employment income of at least AED 360,000 over the two preceding years, or proof of financial solvency.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'GDRFA Dubai: Green residence permit (self-employment)', url: 'https://gdrfad.gov.ae/en/services/f52024d1-b812-11ed-5210-4cd98f768936' },
            { name: 'UAE Government portal: Work permits', url: 'https://u.ae/en/information-and-services/jobs/Sector-of-employment/employment-in-the-private-sector/work-permits' },
            { name: 'Dubai Media City: Freelance licence', url: 'https://dmc.ae/offerings/freelance-license' },
        ],
        related: [
            { name: 'Dubai Media City', path: fz('dmc') },
            { name: 'Dubai Internet City', path: fz('dic') },
            { name: 'Business setup for consultants', path: `${setupFor}/consultants` },
            { name: 'Advertiser permit for content creators', path: '/services/advertiser-permit' },
            contact,
        ],
    },
    {
        path: `${setupFor}/foreign-investors`,
        breadcrumb: 'Foreign investors',
        h1: 'Can a foreigner own 100% of a company in the UAE?',
        seoTitle: 'Business Setup for Foreign Investors: 100% Ownership in the UAE | NXTSTAR',
        description: 'Foreign investors can fully own most UAE mainland companies and all free zone companies. The law, the restricted activities and how to choose a structure.',
        serviceName: 'Business setup for foreign investors',
        cta: 'Investing in the UAE from abroad?',
        answer: [
            'Yes, in most cases. Since Federal Decree-Law No. 26 of 2020 took effect in 2021, foreigners can own 100% of a mainland company in most activities, with no Emirati shareholder. Free zone companies have always allowed full foreign ownership.',
            'A short list of activities with strategic impact is still restricted. NXTSTAR checks your activity against that list and sets up the structure that keeps you in full control.',
        ],
        sections: [
            {
                heading: 'What the law changed',
                blocks: [
                    { text: 'The 2020 decree removed the general requirement for 51% Emirati ownership, or a local agent, for most business activities. The rules were consolidated in Federal Decree-Law No. 32 of 2021 on Commercial Companies. Each emirate\'s licensing authority applies them to its own activity list.' },
                ],
            },
            {
                heading: 'Activities that stay restricted',
                blocks: [
                    { text: 'The law lets the Cabinet designate activities with strategic impact and set conditions for them. The federal portal lists these as not open to full foreign ownership:' },
                    {
                        list: [
                            'Security, defence and activities of a military nature.',
                            'Telecommunications.',
                            'Banks, exchange houses, financing companies and insurance.',
                            'Printing currency.',
                            'Commercial agencies.',
                            'Hajj and Umrah services and Quran centres.',
                            'Fishing and related marine activities.',
                        ],
                    },
                ],
            },
            {
                heading: 'Three ways to hold a UAE business',
                blocks: [
                    {
                        list: [
                            'A mainland company you own outright, licensed by the emirate\'s economic department. It can trade anywhere in the UAE.',
                            'A free zone company you own outright, licensed by the zone\'s authority.',
                            'A branch of your existing foreign company, on the mainland or in a free zone. A branch is not a separate legal person from its parent.',
                        ],
                    },
                    { text: 'Some structures still use a local service agent, who holds no shares and takes no part in management. Dubai asks for an attested service agent contract for civil establishments and certain fully foreign-owned structures.' },
                ],
            },
            {
                heading: 'What an overseas investor should line up first',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'The exact activity, checked against the restricted list of the emirate you choose.',
                            'Whether the shareholder is you personally or your foreign company. A corporate shareholder needs attested parent company documents.',
                            'Who will be the manager on the licence, and whether they need a UAE residence visa.',
                            'The bank account. Banks ask for the full ownership chain and source of funds, and decide independently.',
                        ],
                    },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We confirm ownership rules for your activity, prepare the corporate documents and attestations, form the company and handle visas.' },
                    { text: 'We do not give tax or investment advice, and we cannot open a bank account on a bank\'s behalf.' },
                ],
            },
        ],
        faqs: [
            { question: 'Do I still need a local sponsor?', answer: 'Not for most activities. The 2020 decree removed the general requirement for majority Emirati ownership. Restricted activities are the exception.' },
            { question: 'Is full ownership the same in every emirate?', answer: 'The federal law applies everywhere, and each emirate publishes its own list of activities. Check the list of the emirate you plan to license in.' },
            { question: 'Is a free zone better for foreign ownership?', answer: 'Both allow it. The choice now turns on where your customers are and what premises you need, not on ownership.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'UAE Government portal: Full foreign ownership of commercial companies', url: 'https://u.ae/en/information-and-services/business/Doing-business/doing-business-on-the-mainland/full-foreign-ownership-of-commercial-companies' },
            { name: 'Invest in Dubai: Foreign ownership restrictions list', url: 'https://www.investindubai.gov.ae/en/business-setup/mainland-companies/foreign-ownership-restrictions-list' },
        ],
        related: [
            { name: 'Mainland company setup in Dubai', path: '/business/mainland/dubai' },
            { name: 'Free zone company setup', path: '/business/freezone' },
            { name: 'Golden Visa for business investors', path: '/services/golden-visa/business-investors' },
            contact,
        ],
    },
    {
        path: `${setupFor}/restaurants-and-cafes`,
        breadcrumb: 'Restaurants and cafes',
        h1: 'How do you open a restaurant or cafe in Dubai?',
        seoTitle: 'Business Setup for Restaurants and Cafes in Dubai | NXTSTAR',
        description: 'Opening a restaurant or cafe in Dubai needs a food-specific trade licence plus Dubai Municipality layout approval and food safety registration.',
        serviceName: 'Business setup for restaurants and cafes',
        cta: 'Planning a restaurant, cafe or cloud kitchen?',
        answer: [
            'With two authorities. The trade licence comes from the Department of Economy and Tourism and must state the exact food activity. Dubai Municipality then approves the kitchen layout before construction and regulates food safety, and the licence is not active for food until that approval is in place.',
            'NXTSTAR handles the licence and coordinates the municipality approvals so the fit-out does not start on an unapproved plan.',
        ],
        sections: [
            {
                heading: 'What Dubai Municipality requires',
                blocks: [
                    {
                        list: [
                            'A valid trade licence whose activity is food-related and states exactly what the establishment does.',
                            'Approval of the design layout before construction. The municipality says this is needed to activate the licence and start food activities.',
                            'A layout and floor plan for the preparation area that prevents contamination of food.',
                            'Food sourced, transported, stored, prepared and displayed in line with the Dubai Food Code.',
                            'Registration on the municipality\'s FoodWatch platform, which is mandatory for all food establishments.',
                        ],
                    },
                ],
            },
            {
                heading: 'The order that avoids rework',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Choose the exact activity: restaurant, cafeteria, cafe, catering, or a kitchen that only delivers.',
                            'Find premises that can take the activity. Check extraction, drainage and landlord consent before you sign.',
                            'Get initial approval and the trade name, then register the tenancy.',
                            'Submit the layout to Dubai Municipality and wait for approval.',
                            'Build to the approved layout.',
                            'Pass inspection, register on FoodWatch and collect the licence.',
                        ],
                    },
                    { text: 'The costly mistake is fitting out before layout approval. Changes after construction mean redoing work.' },
                ],
            },
            {
                heading: 'Other permits food businesses often need',
                blocks: [
                    {
                        list: [
                            'Permits tied to the municipality\'s food inspection grade. It issues some permits only to establishments graded A, B or C with no critical or major violations.',
                            'Approvals for delivery vehicles that carry food.',
                            'Separate permissions for outdoor seating, shisha or alcohol, each from its own authority.',
                        ],
                    },
                ],
            },
            {
                heading: 'Mainland or free zone',
                blocks: [
                    { text: 'A restaurant open to the public is normally a mainland business, because it serves walk-in customers. Some free zones license food outlets inside their own districts. The Dubai World Trade Centre authority, for example, issues those licences only after the relevant regulator approves.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We choose the activity with you, run the licence steps and manage the municipality submissions with your kitchen designer or contractor.' },
                    { text: 'We do not design kitchens or carry out fit-out, and the municipality decides layout approval and inspection results.' },
                ],
            },
        ],
        faqs: [
            { question: 'Who approves a restaurant in Dubai?', answer: 'The Department of Economy and Tourism issues the trade licence. Dubai Municipality approves the layout and regulates food safety.' },
            { question: 'Can I start fit-out before layout approval?', answer: 'You should not. Dubai Municipality requires approval of the design layout before construction.' },
            { question: 'Is FoodWatch registration optional?', answer: 'No. The municipality requires all food establishments and related service providers to be registered on FoodWatch.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'Dubai Municipality: Information for food establishments', url: 'https://www.dm.gov.ae/municipality-business/food-safety-department-2/important-information-to-food-establishment/' },
            { name: 'Dubai Municipality: Food-related permits and approvals', url: 'https://www.dm.gov.ae/wp-content/uploads/2020/07/Food-Related-Permits-and-Approvals-Services.pdf' },
            { name: 'Dubai Municipality: FoodWatch', url: 'https://foodwatch.dm.gov.ae/' },
        ],
        related: [
            { name: 'Mainland company setup in Dubai', path: '/business/mainland/dubai' },
            { name: 'DWTC Free Zone', path: fz('dwtc') },
            { name: 'Business setup for foreign investors', path: `${setupFor}/foreign-investors` },
            contact,
        ],
    },
    {
        path: `${setupFor}/tech-startups`,
        breadcrumb: 'Tech startups',
        h1: 'Where should a tech startup set up in the UAE?',
        seoTitle: 'Business Setup for Tech Startups in the UAE: Zones Compared | NXTSTAR',
        description: 'DIFC, Dubai Internet City, Masdar City, SRTIP and general free zones compared for technology startups, using what each authority publishes.',
        serviceName: 'Business setup for technology startups',
        cta: 'Choosing a home for your startup?',
        answer: [
            'It depends on what you need most. DIFC gives technology firms a subsidised licence inside a financial centre with its own legal system. Dubai Internet City is a dedicated technology district. Masdar City and the Sharjah research park suit clean technology and research. A general free zone such as IFZA or Meydan is the lightest option.',
            'NXTSTAR compares these against your product, team size and funding plans, and sets up the one that fits.',
        ],
        sections: [
            {
                heading: 'The specialist options, side by side',
                blocks: [
                    {
                        list: [
                            'DIFC Innovation Licence and AI Licence: for non-financial technology firms. Physical presence in DIFC is mandatory, with a flexible desk as the minimum. No general trading in physical products.',
                            'Dubai Internet City: an FZ-LLC or a branch, in segments such as software, internet and multimedia, IT services and AI. It gives a registration time of about seven working days.',
                            'Masdar City Free Zone, Abu Dhabi: commercial, service and industrial licences, with a focus on clean technology, energy and information technology. It gives three to five days for registration.',
                            'Sharjah Research, Technology and Innovation Park: licences plus research and development permits. A business plan is part of the application, and it gives 7 to 10 days.',
                        ],
                    },
                ],
            },
            {
                heading: 'When a general free zone is enough',
                blocks: [
                    { text: 'A software or services startup with no need for a sector address can use a general zone. IFZA allows up to three activities and remote formation. Meydan Free Zone runs a fully online process with up to three activity groups. Both keep overheads low while you find product-market fit.' },
                ],
            },
            {
                heading: 'Questions that decide it',
                blocks: [
                    {
                        list: [
                            'Will you raise from institutional investors? Many prefer DIFC or Abu Dhabi structures with common-law frameworks.',
                            'Does the product touch payments, lending, investment or crypto trading? That is regulated activity and needs a financial regulator, not a technology licence.',
                            'Do you sell hardware? A technology licence that bars trading in physical goods will not work.',
                            'Where will the team sit? A mandatory desk or office changes the running cost.',
                            'Do you need many visas early? Check each zone\'s visa allocation against your hiring plan.',
                        ],
                    },
                ],
            },
            {
                heading: 'Founders and long-term residence',
                blocks: [
                    { text: 'The Golden Visa has an entrepreneur category for innovative projects that meet set income or exit conditions, with a nomination in Dubai from the Dubai Future Foundation. It is a separate application from the company licence.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We shortlist zones on facts, prepare the application and business plan, and handle workspace, visas and banking documents.' },
                    { text: 'We do not provide funding introductions or legal advice on investment terms.' },
                ],
            },
        ],
        faqs: [
            { question: 'Is DIFC only for financial companies?', answer: 'No. DIFC offers the Innovation Licence and AI Licence for non-financial technology firms.' },
            { question: 'Which zone is fastest for a tech startup?', answer: 'Authorities quote different times: Masdar City three to five days, Dubai Internet City about seven working days, DIFC three to four weeks for full incorporation. Speed should not be the only test.' },
            { question: 'Can a FinTech startup use a technology licence?', answer: 'Only to build software. Providing financial services needs authorisation from a financial regulator.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'DIFC: Innovation Licence', url: 'https://www.difc.com/business/establish-a-business/innovation-licence' },
            { name: 'Dubai Internet City: Set up your business', url: 'https://www.dic.ae/offerings/set-up-your-business' },
            { name: 'Masdar City Free Zone: Licence and registration', url: 'https://masdarcityfreezone.com/explore/license-and-registration' },
            { name: 'SRTIP: Free zone business setup', url: 'https://srtip.ae/freezone-business-setup/' },
        ],
        related: [
            { name: 'DIFC AI and Innovation Licence', path: '/services/difc-ai-licence' },
            { name: 'Dubai Internet City', path: fz('dic') },
            { name: 'Masdar City Free Zone', path: fz('masdar') },
            { name: 'SRTIP', path: fz('srtip') },
            { name: 'Golden Visa for entrepreneurs', path: '/services/golden-visa/entrepreneurs' },
            contact,
        ],
    },
    {
        path: `${setupFor}/consultants`,
        breadcrumb: 'Consultants',
        h1: 'What licence does a consultant need in the UAE?',
        seoTitle: 'Business Setup for Consultants in the UAE | NXTSTAR',
        description: 'Consultants in the UAE need a professional or service licence. How the free zone, mainland and freelance options differ, and when regulated advice needs more.',
        serviceName: 'Business setup for consultants and advisers',
        cta: 'Setting up a consultancy?',
        answer: [
            'A professional or service licence, which is the licence type for selling expertise instead of goods. You can hold one through a free zone company, a mainland company or, for a solo practice in some fields, a freelance permit.',
            'Some kinds of advice are regulated and need a second approval. NXTSTAR matches your field to the right activity and authority, and sets the company up.',
        ],
        sections: [
            {
                heading: 'How the authorities name it',
                blocks: [
                    {
                        list: [
                            'IFZA: a professional licence, for consultancy and expert professional services.',
                            'DWTC Free Zone: a professional licence, for advisory, consulting, software, training and human resources.',
                            'DMCC and Dubai Airport Freezone: a service licence.',
                            'Dubai Internet City: an information technology consultants activity. DIFC\'s list for that activity asks for a relevant degree and three years of hands-on experience.',
                            'Dubai Knowledge Park: human resources and training consultancy.',
                        ],
                    },
                ],
            },
            {
                heading: 'Free zone, mainland or permit',
                blocks: [
                    {
                        list: [
                            'Free zone company: suits consultants with international clients or clients inside free zones. Quick to form, often remotely.',
                            'Mainland company: suits consultants who contract with UAE government bodies or want an office open to local clients.',
                            'Freelance permit: suits a solo practice in media, technology or education. It is issued in your own name.',
                        ],
                    },
                ],
            },
            {
                heading: 'Advice that is regulated',
                blocks: [
                    { text: 'The word consultancy on a licence does not cover every kind of advice. These need a further approval or a different licence altogether:' },
                    {
                        list: [
                            'Financial and investment advice: a financial regulator, such as the Securities and Commodities Authority or, in DIFC, the DFSA.',
                            'Legal advice: the relevant legal affairs authority.',
                            'Medical and health services: the health regulator.',
                            'Engineering consultancy: classification and registration with the municipality.',
                            'Training delivered as courses in Dubai: an educational permit from the KHDA.',
                        ],
                    },
                ],
            },
            {
                heading: 'Choosing the activity wording',
                blocks: [
                    { text: 'Banks and large clients read the activity on your licence. A management consultancy licence does not let you invoice for IT implementation or recruitment. List the two or three activities you will really bill for. IFZA allows up to three activities on one licence, Meydan Free Zone up to three groups and Shams up to five.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We pick the activities, form the company or permit, and handle the visa and bank file.' },
                    { text: 'We do not obtain professional regulatory licences for financial, legal or medical practice.' },
                ],
            },
        ],
        faqs: [
            { question: 'Is a professional licence the same as a commercial licence?', answer: 'No. A professional or service licence is for services and expertise. A commercial licence is for trading goods.' },
            { question: 'Can I consult for mainland clients from a free zone company?', answer: 'A free zone company has limits on doing business directly in the mainland. Tell us who your clients are before you choose.' },
            { question: 'Do I need a degree to get a consultancy licence?', answer: 'It depends on the activity. Some, such as information technology consultancy in DIFC\'s activity list, state a degree and experience requirement.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'IFZA: How to get your free zone licence', url: 'https://ifza.com/en/how-to-get-your-free-zone-license-with-ifza/' },
            { name: 'DWTC Free Zone: Set up your business', url: 'https://www.dwtc.com/en/free-zone/set-up-your-business/' },
            { name: 'DMCC: Business activities and licences guide', url: 'https://dmcc.ae/blog/complete-guide-on-dmcc-licences' },
        ],
        related: [
            { name: 'IFZA company setup', path: fz('ifza') },
            { name: 'DWTC Free Zone', path: fz('dwtc') },
            { name: 'Business setup for freelancers', path: `${setupFor}/freelancers` },
            { name: 'Mainland company setup in Dubai', path: '/business/mainland/dubai' },
            contact,
        ],
    },
    {
        path: `${licenceFor}/general-trading`,
        breadcrumb: 'General trading',
        h1: 'What is a general trading licence in the UAE?',
        seoTitle: 'Commercial Licence for General Trading in the UAE | NXTSTAR',
        description: 'A general trading licence lets one company trade many unrelated product lines. How it differs from a standard commercial licence and where to get one.',
        serviceName: 'General trading licence setup',
        cta: 'Trading more than one product line?',
        answer: [
            'A general trading licence is a commercial licence that lets one company trade a wide range of unrelated goods, instead of naming each product group. A standard commercial or trading licence covers only the specific products listed on it.',
            'It is offered on the mainland and in many free zones. NXTSTAR checks whether your goods are covered and sets up the licence where your supply chain needs it.',
        ],
        sections: [
            {
                heading: 'How authorities describe it',
                blocks: [
                    {
                        list: [
                            'DWTC Free Zone: a general trading licence for an unrestricted range of activities.',
                            'Dubai Airport Freezone: a licence to import, export, re-export, store and distribute across general activities.',
                            'IFZA: a specialised commercial licence for varied goods trading models.',
                            'DMCC: a commercial licence for buying and selling multiple product categories under one licence.',
                            'RAKEZ: a general trading licence for trading in multiple goods.',
                        ],
                    },
                ],
            },
            {
                heading: 'What it still does not cover',
                blocks: [
                    { text: 'General does not mean everything. Goods that need a regulator\'s approval stay outside until you have that approval. Typical examples are:' },
                    {
                        list: [
                            'Medicines, medical devices and health supplements.',
                            'Food, where the municipality regulates import and handling.',
                            'Chemicals, tobacco, alcohol and security equipment.',
                            'Vehicles and anything needing conformity certification.',
                        ],
                    },
                ],
            },
            {
                heading: 'General trading or a specific licence',
                blocks: [
                    {
                        list: [
                            'You trade two or three related product lines: a standard commercial licence listing them is simpler.',
                            'You trade whatever your buyers need, across unrelated categories: general trading.',
                            'You are a distributor for one brand in a regulated category: a specific licence plus the regulator\'s approval.',
                        ],
                    },
                ],
            },
            {
                heading: 'After the licence',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Register with customs to get an importer and exporter code.',
                            'Arrange storage if the goods enter the country: a warehouse, or a logistics provider\'s facility.',
                            'Register for VAT when your turnover reaches the registration threshold.',
                            'Open the bank account. Banks ask trading companies for supplier and buyer details.',
                        ],
                    },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We test your product list against the licence, form the company and register it with customs.' },
                    { text: 'We do not obtain product registrations or clear shipments. A customs broker does the clearing.' },
                ],
            },
        ],
        faqs: [
            { question: 'Can I trade anything with a general trading licence?', answer: 'No. Goods that need a regulator\'s approval, such as medicines or food, still need that approval.' },
            { question: 'Is general trading available in free zones?', answer: 'Yes. DWTC, Dubai Airport Freezone, IFZA and RAKEZ are among the zones that describe a general trading licence.' },
            { question: 'Do I need a warehouse?', answer: 'Not always. It depends on whether goods physically enter the UAE and on the authority\'s facility rules.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'DWTC Free Zone: Set up your business', url: 'https://www.dwtc.com/en/free-zone/set-up-your-business/' },
            { name: 'Dubai Airport Freezone: Start your business', url: 'https://www.dafz.ae/en/start-your-business-in-dubai/' },
            { name: 'RAKEZ: Licence types', url: 'https://rakez.com/Join-Us/Licence-Types' },
        ],
        related: [
            { name: 'Commercial licence for import and export', path: `${licenceFor}/import-and-export` },
            { name: 'Jafza company setup', path: fz('jafza') },
            { name: 'Dubai Airport Freezone', path: fz('dafza') },
            { name: 'Mainland company setup in Dubai', path: '/business/mainland/dubai' },
            contact,
        ],
    },
    {
        path: `${licenceFor}/import-and-export`,
        breadcrumb: 'Import and export',
        h1: 'What do I need to start an import and export business in Dubai?',
        seoTitle: 'Commercial Licence for Import and Export in Dubai | NXTSTAR',
        description: 'An import and export business in Dubai needs a commercial licence and a Dubai Customs business code. The registration steps, documents and timing.',
        serviceName: 'Import and export licence setup',
        cta: 'Starting to import or export?',
        answer: [
            'Two things: a commercial licence that covers your goods, and registration with Dubai Customs, which gives the company a business code. Without the code you cannot clear shipments in your own name.',
            'Dubai Customs says registration takes one working day once the licence exists. NXTSTAR sets up the licence and completes the customs registration.',
        ],
        sections: [
            {
                heading: 'Step 1: the licence',
                blocks: [
                    { text: 'The licence must list the goods or be a general trading licence. Free zones built for trade describe theirs like this:' },
                    {
                        list: [
                            'Jafza: a trading licence, its most common type, plus logistics and industrial licences.',
                            'Dubai Airport Freezone: a trade licence for import, export, re-export, distribution and storage.',
                            'IFZA and DWTC: a commercial licence for importing, exporting, storing and distributing.',
                        ],
                    },
                    { text: 'A mainland commercial licence does the same and lets you sell directly to customers across the UAE.' },
                ],
            },
            {
                heading: 'Step 2: Dubai Customs registration',
                blocks: [
                    {
                        list: [
                            'Any business licensed by a competent authority in the UAE or the GCC can register.',
                            'Registration is online, through the new registration service on the Dubai Trade portal.',
                            'You state the type of business, and it must match the activities on the licence.',
                            'You provide the licence details, business address, activities and authorised users.',
                            'Dubai Customs issues a unique business code.',
                        ],
                    },
                ],
            },
            {
                heading: 'Documents for customs registration',
                blocks: [
                    { list: ['Copy of the valid trade licence', 'Passport copy of the authorised person', 'Emirates ID copy of the authorised person', 'An undertaking letter, for professional companies only'] },
                ],
            },
            {
                heading: 'The detail traders miss',
                blocks: [
                    { text: 'The business code is valid only as long as the licence. Dubai Customs lets you renew the code only after the licensing authority has renewed the licence. A late licence renewal therefore stops your shipments, so renew the licence ahead of time.' },
                ],
            },
            {
                heading: 'Free zone or mainland for trading',
                blocks: [
                    {
                        list: [
                            'Goods pass through for re-export: a free zone with storage near the port or airport.',
                            'Goods are sold to UAE retailers and consumers: a mainland company, or a free zone company working through a mainland distributor.',
                            'Both: many traders hold a free zone company and add a mainland entity later.',
                        ],
                    },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We set up the licence, register the company with Dubai Customs and tell you which product approvals to seek.' },
                    { text: 'We are not a customs broker or freight forwarder, and we do not classify goods or clear shipments.' },
                ],
            },
        ],
        faqs: [
            { question: 'Do I need a customs code to import into Dubai?', answer: 'Yes. Dubai Customs issues a business code on registration, and it identifies your company on customs declarations.' },
            { question: 'How long does Dubai Customs registration take?', answer: 'Dubai Customs gives a service completion time of one working day.' },
            { question: 'Does the customs code expire?', answer: 'Its validity follows the trade licence. It can be renewed only after the licence is renewed.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'Dubai Customs: Client registration', url: 'https://www.dubaicustoms.gov.ae/en/eServices/ServicesForBusinesses/RegLicensing/Pages/ReqforClientRegistration.aspx' },
            { name: 'Jafza: Business licence', url: 'https://www.jafza.ae/business-setup/business-license/' },
            { name: 'Dubai Airport Freezone: Start your business', url: 'https://www.dafz.ae/en/start-your-business-in-dubai/' },
        ],
        related: [
            { name: 'Commercial licence for general trading', path: `${licenceFor}/general-trading` },
            { name: 'Jafza company setup', path: fz('jafza') },
            { name: 'Dubai Airport Freezone', path: fz('dafza') },
            { name: 'DMCC', path: fz('dmcc') },
            contact,
        ],
    },
    {
        path: `${licenceFor}/online-selling`,
        breadcrumb: 'Online selling',
        h1: 'What licence do I need to sell online in the UAE?',
        seoTitle: 'Commercial Licence for Online Selling and E-commerce in the UAE | NXTSTAR',
        description: 'Selling online in the UAE needs a licence. Who can use Dubai\'s eTrader licence, what everyone else needs, and the rules on goods and marketing.',
        serviceName: 'E-commerce licence setup',
        cta: 'Selling through a website, marketplace or Instagram?',
        answer: [
            'An e-commerce or commercial licence. Selling through a website, a marketplace or a social media account is a business activity and needs one. Dubai\'s eTrader licence is the simplest route, but it is only open to UAE and GCC nationals who live in Dubai.',
            'Everyone else uses a free zone or mainland company with an e-commerce activity. NXTSTAR sets that up and tells you which goods need extra approval.',
        ],
        sections: [
            {
                heading: 'The eTrader licence, and its limits',
                blocks: [
                    {
                        list: [
                            'It is for UAE nationals and GCC nationals residing in Dubai.',
                            'It lets them run a business through social media networks.',
                            'It is registered in the name of a single owner.',
                            'The holder cannot open a shop or issue visas.',
                            'In a legal dispute the licensee alone is responsible.',
                        ],
                    },
                    { text: 'A foreign resident does not qualify for eTrader and needs a company licence instead.' },
                ],
            },
            {
                heading: 'Routes for foreign residents and overseas founders',
                blocks: [
                    {
                        list: [
                            'A free zone company with an e-commerce activity. RAKEZ and Ajman Free Zone each list an e-commerce licence, and general zones such as IFZA, Meydan and Shams carry e-commerce activities.',
                            'A mainland company with an e-commerce activity, which lets you sell and deliver directly to customers across the UAE.',
                            'Abu Dhabi\'s Tajer licence, for certain commercial activities without a physical site.',
                        ],
                    },
                ],
            },
            {
                heading: 'What you may sell',
                blocks: [
                    { text: 'The federal portal sets two rules for digital traders. You may sell only goods and services that are legally approved for trade in the UAE. And you must not sell anything that needs special approval from a competent authority until you hold that approval. Cosmetics, supplements, food and electronics are common examples.' },
                ],
            },
            {
                heading: 'Marketing and customer data',
                blocks: [
                    { text: 'Online sellers must follow the competent authorities\' conditions on promotional and marketing campaigns and on sharing customer data. If you promote other brands\' products for a fee or commission, the UAE Media Council\'s Advertiser Permit also applies.' },
                ],
            },
            {
                heading: 'If the goods come from abroad',
                blocks: [
                    { text: 'Importing stock in the company\'s name needs customs registration. Dropshipping from an overseas supplier straight to the customer avoids holding stock, but you are still the seller and still need the licence.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We choose the authority and activity, form the company, and register it with customs where you import.' },
                    { text: 'We do not build your store, set up payment gateways or register products with regulators.' },
                ],
            },
        ],
        faqs: [
            { question: 'Do I need a licence to sell on Instagram?', answer: 'Yes. Selling through social media is a business activity. Dubai\'s eTrader licence exists for exactly that, for those who qualify.' },
            { question: 'Can an expat get an eTrader licence?', answer: 'No. It is for UAE nationals and GCC nationals residing in Dubai. Other residents need a company licence.' },
            { question: 'Can I sell on Amazon or Noon with a free zone licence?', answer: 'Marketplaces set their own seller requirements. Check them before choosing the authority, and tell us which marketplace you plan to use.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'UAE Government portal: eCommerce', url: 'https://u.ae/en/information-and-services/business/ecommerce' },
            { name: 'RAKEZ: Licence types', url: 'https://rakez.com/Join-Us/Licence-Types' },
            { name: 'TAMM: Tajer Abu Dhabi licence', url: 'https://www.tamm.abudhabi/en/life-events/business/Start-a-Business/economic-licence/RequestforIssuingEconomicLicenceAbuDhabiTrader' },
        ],
        related: [
            { name: 'Commercial licence for import and export', path: `${licenceFor}/import-and-export` },
            { name: 'IFZA company setup', path: fz('ifza') },
            { name: 'RAKEZ', path: fz('rakez') },
            { name: 'Advertiser permit for content creators', path: '/services/advertiser-permit' },
            contact,
        ],
    },
];

const businessGuides = guides.map((guide) => ({
    ...guide,
    parent,
    headerImage,
    reviewed,
    serviceType: 'UAE company formation support',
}));

export default businessGuides;
