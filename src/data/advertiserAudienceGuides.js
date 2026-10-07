// Advertiser permit pages for specific audiences.
// A page belongs here only when the rules or the regulator differ for that audience.
// If nothing differs, cover the audience on the main advertiser permit page instead.

const parent = { name: 'Advertiser permit', path: '/services/advertiser-permit' };
const headerImage = 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop';
const reviewed = '2026-10-06';
const serviceType = 'UAE Media Council advertiser permit application support';
const PRICE_ANSWER = 'We do not publish prices. Ask us for a written quote for your situation.';

const MEDIA_COUNCIL_GUIDE = {
    name: 'UAE Media Council: Guide for the Permit to Regulate Advertising Content on Social Media',
    url: 'https://uaemc.gov.ae/wp-content/uploads/2025/08/Advertiser-Guide.pdf',
};
const mainPage = { name: 'Advertiser permit: the full guide', path: parent.path };
const contact = { name: 'Contact NXTSTAR', path: '/contact' };

const guides = [
    {
        slug: 'visiting-influencers',
        breadcrumb: 'Visiting influencers',
        h1: 'Can a visiting influencer post paid content in the UAE?',
        seoTitle: 'Advertiser Permit for Visiting Influencers in the UAE | NXTSTAR',
        description:
            'Visiting creators need a Visitor Advertiser Permit before posting advertising content in the UAE. How it works, the agency requirement and how long it lasts.',
        serviceName: 'Visitor Advertiser Permit support for visiting influencers',
        cta: 'Planning a campaign trip to the UAE?',
        answer: [
            'Only with a Visitor Advertiser Permit. The UAE Media Council requires visitors to hold the permit before publishing advertising content from within the UAE, and a visiting creator must be registered with an advertising or talent management agency that is licensed and approved by the Council.',
            'The visitor permit lasts up to three months and can be extended once, for a total of six months. NXTSTAR helps visiting creators and the brands hosting them understand the route and prepare before the trip.',
        ],
        sections: [
            {
                heading: 'How the visitor permit differs from the resident permit',
                blocks: [
                    {
                        list: [
                            'A resident applies on the strength of their own UAE trade licence. A visitor does not hold one, so the Council requires registration with an approved agency instead.',
                            'The resident permit is valid for one year. The visitor permit is valid for three months.',
                            'The visitor permit can be extended once for a further three months. It cannot run beyond six months in total.',
                        ],
                    },
                ],
            },
            {
                heading: 'What a visiting creator should have in place before posting',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'An agreement with an advertising or talent management agency that the Media Council has approved.',
                            'The Visitor Advertiser Permit, issued before any advertising content goes live.',
                            'A written agreement with each brand you advertise for.',
                            'The permit number shown on the accounts you post from.',
                        ],
                    },
                    { text: 'Hotel stays, meals and experiences given in exchange for content count as advertising. The rule does not depend on a cash payment.' },
                ],
            },
            {
                heading: 'If you plan to stay longer',
                blocks: [
                    { text: 'A creator who wants to work from the UAE beyond six months moves onto the resident route: a residence visa, a trade licence that lists an electronic media activity, and the one-year Advertiser Permit. We set that up as one project.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We explain which route applies to your trip, tell you what to ask the agency for, and handle the resident route if you decide to base yourself in the UAE.' },
                    { text: 'We are not an advertising or talent agency and cannot register a visiting creator ourselves. The Media Council decides every permit.' },
                ],
            },
        ],
        faqs: [
            { question: 'I am visiting for one week for a hotel collaboration. Do I need a permit?', answer: 'Yes, if you publish advertising content from within the UAE. The Council applies the rule to visitors, and a stay in exchange for content is advertising.' },
            { question: 'Can I apply for the visitor permit on my own?', answer: 'The Council requires a visiting advertiser to be registered with an advertising or talent management agency that it has licensed and approved.' },
            { question: 'How long can I work on a visitor permit?', answer: 'Three months, extendable once for another three months. Six months is the maximum.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [MEDIA_COUNCIL_GUIDE, { name: 'UAE Media Council: Visitor Advertiser Permit', url: 'https://uaemc.gov.ae/en/visitor-advertiser-permit/' }],
        related: [mainPage, { name: 'What brands must check before hiring an influencer', path: `${parent.path}/brands-hiring-influencers` }, { name: 'Visa services', path: '/services/visa' }, contact],
    },
    {
        slug: 'creators-under-18',
        breadcrumb: 'Creators under 18',
        h1: 'Can a creator under 18 advertise on social media in the UAE?',
        seoTitle: 'Advertiser Permit Rules for Creators Under 18 in the UAE | NXTSTAR',
        description:
            'The UAE advertiser permit has a minimum age of 18, with limited exceptions for minors who work under a guardian. What parents of young creators need to know.',
        serviceName: 'Advertiser permit guidance for young creators and their guardians',
        cta: 'Managing a young creator\'s account?',
        answer: [
            'The standard rule is no: the UAE Media Council sets a minimum age of 18 for the Advertiser Permit. Its guide allows exceptions in line with child labour rules, where a minor operates under a guardian\'s licence and the guardian takes responsibility for compliance.',
            'Minors who only produce educational, sports, cultural or awareness content do not need the permit at all. NXTSTAR helps parents work out which case applies and set up the guardian\'s licence where one is needed.',
        ],
        sections: [
            {
                heading: 'Three situations, three answers',
                blocks: [
                    {
                        list: [
                            'Educational, sports, cultural or awareness content with no advertising: the Council\'s guide exempts individuals under 18 from the permit.',
                            'Advertising content by a minor: possible only under the exception, with the minor operating under a guardian\'s trade licence.',
                            'A family account run by a parent who appears in and publishes the advertising: the parent is the advertiser and applies as an adult.',
                        ],
                    },
                ],
            },
            {
                heading: 'What the guardian is responsible for',
                blocks: [
                    { text: 'The guide makes the guardian responsible for overseeing the child\'s compliance, in line with the UAE Child Rights Law, known as Wadeema. In practice that means the guardian holds the licence, signs the brand agreements and answers for what is published.' },
                    { text: 'Because the licence sits with the guardian, the guardian\'s own visa and employment situation matters. We check that before recommending where to hold the licence.' },
                ],
            },
            {
                heading: 'Where families get caught out',
                blocks: [
                    {
                        list: [
                            'Treating gifted toys, clothes or experiences as "not advertising". They are.',
                            'Assuming the under-18 exemption covers all content. It covers educational, sports, cultural and awareness content only.',
                            'Signing brand deals in the child\'s name with no licence behind them.',
                        ],
                    },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We help the guardian choose and set up a trade licence with the right activity, and prepare the permit application under the exception.' },
                    { text: 'Whether an exception is granted for a minor is the Media Council\'s decision. We cannot promise it, and we do not advise on child labour law.' },
                ],
            },
        ],
        faqs: [
            { question: 'My 15-year-old posts football training videos. Is a permit needed?', answer: 'Not for sports content with no advertising. The Council\'s guide exempts under-18s who produce educational, sports, cultural or awareness content. A paid or gifted brand promotion changes that.' },
            { question: 'Can a minor hold the trade licence?', answer: 'The Council\'s guide provides for minors operating under a guardian\'s licence, so the licence is held by the guardian.' },
            { question: 'Who is responsible if the content breaks the rules?', answer: 'The guide places the duty to oversee the child\'s compliance on the guardian.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [MEDIA_COUNCIL_GUIDE],
        related: [mainPage, { name: 'Gifted and unpaid posts', path: `${parent.path}/gifted-and-unpaid-posts` }, contact],
    },
    {
        slug: 'business-owners',
        breadcrumb: 'Business owners',
        h1: 'Do I need an advertiser permit to promote my own business?',
        seoTitle: 'Advertiser Permit for Business Owners in the UAE | NXTSTAR',
        description:
            'Business owners promoting their own products on their own accounts are exempt from the UAE advertiser permit. Where the exemption ends and a permit is needed.',
        serviceName: 'Advertiser permit guidance for business owners',
        cta: 'Not sure which side of the line you are on?',
        answer: [
            'No. The UAE Media Council\'s guide says the Advertiser Permit is not required for an individual promoting a product or service that belongs to them, or to a company they own, on their own account.',
            'The exemption ends the moment you promote someone else\'s product. NXTSTAR helps owners check where they stand and get the permit when their content goes beyond their own business.',
        ],
        sections: [
            {
                heading: 'What the exemption covers',
                blocks: [
                    {
                        list: [
                            'A restaurant owner posting their own menu on their own account.',
                            'A founder demonstrating their own product.',
                            'A consultant promoting their own services under their own company.',
                        ],
                    },
                    { text: 'In each case the product or service belongs to the person posting or to a company they own.' },
                ],
            },
            {
                heading: 'Where the exemption stops',
                blocks: [
                    {
                        list: [
                            'You feature a supplier, partner or neighbouring business in return for money, goods or exposure.',
                            'You accept affiliate commission for recommending another company\'s product.',
                            'You are the face of a business you work for but do not own.',
                            'You pay a creator to promote your business. You are still exempt, but the creator needs a permit and you have duties as the company hiring them.',
                        ],
                    },
                    { text: 'If your case is on the boundary, for example a shareholder with a small stake or a family business, ask the Council before relying on the exemption. We can help you put the question.' },
                ],
            },
            {
                heading: 'Your business still needs the right licence',
                blocks: [
                    { text: 'The exemption is from the Advertiser Permit only. It does not replace the trade licence your business needs to operate, and regulated products such as health, financial or real estate offers have their own advertising rules.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We review how you promote, tell you whether the exemption is likely to apply, and set up the licence activity and permit if it does not.' },
                    { text: 'We do not give a binding ruling on the exemption. Only the Media Council can.' },
                ],
            },
        ],
        faqs: [
            { question: 'I own 50% of the company. Am I exempt?', answer: 'The guide refers to a company the individual owns. It does not set a percentage, so confirm a part-ownership case with the Council.' },
            { question: 'My employee runs our company account. Do they need a permit?', answer: 'The guide\'s exemption is written for owners promoting their own business. For an employee posting on the company\'s official account, confirm with the Council.' },
            { question: 'I pay influencers to promote my shop. What do I have to do?', answer: 'Contract only with permit holders listed in the Council\'s public database and sign a written agreement with each one.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [MEDIA_COUNCIL_GUIDE],
        related: [mainPage, { name: 'What brands must check before hiring an influencer', path: `${parent.path}/brands-hiring-influencers` }, { name: 'Mainland company setup', path: '/business/mainland' }, contact],
    },
    {
        slug: 'gifted-and-unpaid-posts',
        breadcrumb: 'Gifted and unpaid posts',
        h1: 'Do I need an advertiser permit for gifted or unpaid posts?',
        seoTitle: 'Advertiser Permit for Gifted and Unpaid Posts in the UAE | NXTSTAR',
        description:
            'The UAE advertiser permit applies to advertising content with or without compensation. What that means for gifted products, barter deals and small creators.',
        serviceName: 'Advertiser permit support for small and part-time creators',
        cta: 'Starting out as a creator in the UAE?',
        answer: [
            'Yes. The UAE Media Council applies the Advertiser Permit to individuals who produce advertising content "with or without compensation". A gifted product, a free meal or a barter deal is treated the same way as a paid post.',
            'There is no follower threshold in the rule, so it reaches small and part-time creators too. NXTSTAR helps new creators get the licence and permit in place before their first collaboration.',
        ],
        sections: [
            {
                heading: 'What counts as advertising content',
                blocks: [
                    { text: 'The test is whether the content promotes a product, service, event or activity. These all fall inside it:' },
                    {
                        list: [
                            'Products sent to you by a brand that you then feature.',
                            'Complimentary meals, stays, treatments or tickets in return for coverage.',
                            'Affiliate links and discount codes.',
                            'Content you produce for a brand to publish on its own channels, if it also appears on yours.',
                        ],
                    },
                ],
            },
            {
                heading: 'What does not need a permit',
                blocks: [
                    {
                        list: [
                            'Sharing a product you bought yourself, with no arrangement with the brand.',
                            'Promoting your own product or your own company on your own account.',
                            'Educational, sports, cultural or awareness content by someone under 18.',
                        ],
                    },
                ],
            },
            {
                heading: 'The practical order for a new creator',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Hold a trade licence that lists an electronic media activity.',
                            'Apply for the Advertiser Permit.',
                            'Show the permit number on the accounts it covers.',
                            'Then accept collaborations, with a written agreement for each.',
                        ],
                    },
                    { text: 'Brands are required to work only with permit holders, so a permit is also what lets agencies and companies sign you.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We help part-time and first-time creators pick a licence that fits a small operation, and prepare the permit application.' },
                    { text: 'We do not decide what the Council treats as advertising in a borderline case, and we do not find collaborations for you.' },
                ],
            },
        ],
        faqs: [
            { question: 'I have under 5,000 followers. Does the rule apply to me?', answer: 'The Council\'s guide does not set a follower threshold. It applies to anyone producing advertising content from within the UAE.' },
            { question: 'A cafe gave me a free meal and I posted about it. Was that advertising?', answer: 'If the meal was given in return for coverage, yes. The rule covers content produced without cash payment.' },
            { question: 'I have a full-time job. Can I still get a permit?', answer: 'The permit depends on holding a valid trade licence with an electronic media activity. How you hold a licence alongside employment depends on your visa and employer, so ask us before you apply.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [MEDIA_COUNCIL_GUIDE],
        related: [mainPage, { name: 'Do I need a permit for my own business?', path: `${parent.path}/business-owners` }, { name: 'IFZA company setup', path: '/business/freezone/ifza' }, contact],
    },
    {
        slug: 'brands-hiring-influencers',
        breadcrumb: 'Brands hiring influencers',
        h1: 'What must a UAE company check before hiring an influencer?',
        seoTitle: 'Hiring Influencers in the UAE: Advertiser Permit Rules for Brands | NXTSTAR',
        description:
            'UAE companies must contract only with influencers who hold an advertiser permit and must sign a written agreement. A checklist for brands and agencies.',
        serviceName: 'Advertiser permit compliance support for brands and agencies',
        cta: 'Running influencer campaigns in the UAE?',
        answer: [
            'Check that the influencer holds a valid Advertiser Permit. The UAE Media Council requires companies to contract only with permit holders listed in its public database, and to sign a written agreement with each advertiser that can be given to the Council on request.',
            'NXTSTAR helps brands put that check into their campaign process, and helps the creators they want to work with get licensed and permitted.',
        ],
        sections: [
            {
                heading: 'The checklist before a campaign',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Look the creator up in the Media Council\'s public database of permit holders.',
                            'Confirm the permit covers the accounts the campaign will run on, and that the permit number is displayed there.',
                            'Sign a written agreement with the creator. Keep it where you can produce it if the Council asks.',
                            'For a visiting creator, confirm the Visitor Advertiser Permit and the approved agency behind it.',
                            'If the product is regulated, such as health, financial or real estate, clear the advertisement with that sector\'s regulator as well.',
                        ],
                    },
                ],
            },
            {
                heading: 'Extra duties for agencies',
                blocks: [
                    { text: 'The Council\'s guide requires advertising and talent management agencies to keep organised records: details of client entities, copies of the advertising content, and the names of the permit holders they contracted. Records are to be kept for three years.' },
                ],
            },
            {
                heading: 'Common gaps we see in campaign briefs',
                blocks: [
                    {
                        list: [
                            'Barter campaigns run with no written agreement because no money changed hands.',
                            'A creator flown in for a launch with no visitor permit.',
                            'Reliance on a creator\'s word that they are "licensed", when they hold a trade licence but no permit.',
                            'Staff or founders treated as exempt when they promote a company they do not own.',
                        ],
                    },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We set up licences and permits for the creators on your roster who are missing them, and we can walk your marketing team through the checks.' },
                    { text: 'We do not draft your influencer contracts or give legal opinions on a campaign. Use a lawyer for that.' },
                ],
            },
        ],
        faqs: [
            { question: 'Is the brand responsible if the influencer has no permit?', answer: 'The Council puts a duty on companies to contract only with permit holders in its public database, so the check is the company\'s responsibility as well as the creator\'s.' },
            { question: 'Do we need a contract for a gifted-product campaign?', answer: 'Yes. The guide requires a written agreement with the advertiser, and gifted campaigns are advertising.' },
            { question: 'Our founder promotes the brand personally. Is a permit needed?', answer: 'An individual promoting a company they own on their own account is exempt under the guide. An employee or ambassador is a different case.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [MEDIA_COUNCIL_GUIDE],
        related: [mainPage, { name: 'Visiting influencers', path: `${parent.path}/visiting-influencers` }, { name: 'Do I need a permit for my own business?', path: `${parent.path}/business-owners` }, contact],
    },
    {
        slug: 'finance-influencers',
        breadcrumb: 'Finance influencers',
        h1: 'Do finance influencers need a licence in the UAE?',
        seoTitle: 'Finance Influencer Rules in the UAE: SCA Finfluencer Status | NXTSTAR',
        description:
            'Finance creators in the UAE answer to two regulators: the SCA for financial recommendations and the Media Council for advertising. How the two fit together.',
        serviceName: 'Licensing support for finance and investment content creators',
        cta: 'Creating finance content from the UAE?',
        answer: [
            'Yes, and from two regulators. The Securities and Commodities Authority (SCA) has called on financial influencers to register and obtain authorised "Finfluencer" status before giving recommendations on financial products or virtual assets. Separately, the UAE Media Council requires an Advertiser Permit for any advertising content.',
            'NXTSTAR sets up the trade licence and the Media Council permit, and points you to the SCA process for the financial side.',
        ],
        sections: [
            {
                heading: 'What the SCA regulates',
                blocks: [
                    { text: 'The SCA\'s rules cover a person who gives recommendations to buy, sell or hold a financial product or virtual asset, or advice about a financial service. It applies whatever the channel: written or audio social media, blogs, seminars, forums and public appearances, including opinions or analysis about current or expected prices and performance.' },
                    { text: 'The SCA publishes a list of authorised Finfluencers on its website, so brands and followers can check who is registered.' },
                ],
            },
            {
                heading: 'What the Media Council regulates',
                blocks: [
                    { text: 'The Advertiser Permit covers advertising content of any kind. A finance creator who promotes a broker, an app, a course or a card needs it, on top of whatever the SCA requires for the recommendations themselves.' },
                ],
            },
            {
                heading: 'Which rule applies to which content',
                blocks: [
                    {
                        list: [
                            'General money education with no recommendation and no promotion: neither rule is aimed at this, but stay clear of specific buy or sell calls.',
                            'A recommendation to buy, sell or hold a specific stock, fund or token: SCA Finfluencer status.',
                            'A sponsored post for a trading platform: Advertiser Permit, and SCA status if the post recommends a product.',
                            'Promoting your own paid signals group or course: check both. The recommendations fall under the SCA.',
                        ],
                    },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We handle the trade licence with an electronic media activity and the Media Council permit application.' },
                    { text: 'We do not obtain SCA authorisation for you and we do not advise on securities regulation. The SCA accepts applications through its own website.' },
                ],
            },
        ],
        faqs: [
            { question: 'Is the Advertiser Permit enough for a finance creator?', answer: 'No. The permit covers advertising. Recommendations on financial products or virtual assets fall under the SCA, which has its own authorised Finfluencer status.' },
            { question: 'Does the SCA rule cover crypto content?', answer: 'The SCA refers to recommendations on a financial product or virtual asset, so recommendations on virtual assets are within its scope.' },
            { question: 'How can a brand check a finance creator?', answer: 'Check the SCA\'s published list of authorised Finfluencers for the financial side and the Media Council\'s database of permit holders for the advertising side.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'SCA: regulating financial content and financial influencer compliance', url: 'https://www.sca.gov.ae/en/media-center/news/4/6/2025/pioneering-global-regulatory-collaboration-uae-launches-strategic-initiatives-to-govern-financial.aspx' },
            { name: 'SCA: List of Authorized Finfluencers', url: 'https://www.sca.gov.ae/en/open-data/financial-recommendations-provider.aspx' },
            MEDIA_COUNCIL_GUIDE,
        ],
        related: [mainPage, { name: 'DIFC AI and Innovation Licence', path: '/services/difc-ai-licence' }, contact],
    },
    {
        slug: 'health-and-fitness-creators',
        breadcrumb: 'Health and fitness creators',
        h1: 'Can influencers advertise health products or clinics in the UAE?',
        seoTitle: 'Health and Fitness Influencer Advertising Rules in the UAE | NXTSTAR',
        description:
            'Health advertising in the UAE needs a health advertisement licence as well as the advertiser permit. What health, wellness and fitness creators should check.',
        serviceName: 'Licensing support for health, wellness and fitness content creators',
        cta: 'Working with clinics or health brands?',
        answer: [
            'Yes, but a health advertisement needs its own licence. The Ministry of Health and Prevention (MOHAP) licenses health advertisements across media and digital platforms, and a licensed health advertisement must carry its licence number. This is in addition to the creator\'s own Advertiser Permit from the UAE Media Council.',
            'NXTSTAR sets up the creator\'s trade licence and Media Council permit, and tells you what to ask the clinic or brand for before you post.',
        ],
        sections: [
            {
                heading: 'Two approvals for one post',
                blocks: [
                    {
                        list: [
                            'The creator: an Advertiser Permit from the UAE Media Council, built on a trade licence with an electronic media activity.',
                            'The advertisement: a health advertisement licence from MOHAP. MOHAP offers licences for healthcare institutions, for non-healthcare institutions, for websites and for social media.',
                        ],
                    },
                    { text: 'MOHAP says it reviews a health advertisement application and either approves it or asks for amendments or more documents, and gives a completion time of one to three working days.' },
                ],
            },
            {
                heading: 'What to ask the clinic or brand for',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'The health advertisement licence number for the specific advertisement you will publish.',
                            'Confirmation that the wording and visuals you post match what was licensed.',
                            'Documentation for each product featured, which MOHAP requires in the application.',
                            'For clinics in Dubai, confirmation that the content follows the Dubai Health Authority\'s standards for medical advertising on social media.',
                        ],
                    },
                ],
            },
            {
                heading: 'Fitness and wellness content',
                blocks: [
                    { text: 'A workout video with no promotion is not an advertisement. A sponsored post for a gym, a supplement or a treatment is. If the product makes a health claim, treat it as health advertising and ask the brand for its licence before you publish.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We handle the creator side: the trade licence and the Media Council permit.' },
                    { text: 'The health advertisement licence is applied for by the advertiser, usually the clinic or brand. We do not review medical claims.' },
                ],
            },
        ],
        faqs: [
            { question: 'A clinic invited me for a free treatment in return for a reel. What do I need?', answer: 'Your own Advertiser Permit, and the clinic\'s health advertisement licence for that content. Free treatment in return for coverage is advertising.' },
            { question: 'Who applies for the health advertisement licence?', answer: 'The advertiser. MOHAP has separate services for healthcare institutions and for non-healthcare institutions advertising health products or services.' },
            { question: 'Does the licence number have to appear on the post?', answer: 'MOHAP states that a health advertisement must have a licence number, and that a health facility\'s official account must state its medical advertisement licence number.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'MOHAP: Issue or renew a licence for a health advertisement', url: 'https://mohap.gov.ae/en/w/issue-license-/-renew-license-for-a-health-advertisement' },
            { name: 'MOHAP: Monitoring of health advertisements', url: 'https://mohap.gov.ae/en/services/monitoring-of-health-advertisements' },
            { name: 'Dubai Health Authority: Standards for Medical Advertisement Content on Social Media', url: 'https://dha.gov.ae/uploads/042022/Standards%20for%20Medical%20Advertisement%20Content%20in%20Social%20Media2022433965.pdf' },
            MEDIA_COUNCIL_GUIDE,
        ],
        related: [mainPage, { name: 'What brands must check before hiring an influencer', path: `${parent.path}/brands-hiring-influencers` }, contact],
    },
    {
        slug: 'real-estate-influencers',
        breadcrumb: 'Real estate influencers',
        h1: 'Can influencers advertise property in Dubai?',
        seoTitle: 'Real Estate Influencer Advertising Rules in Dubai | NXTSTAR',
        description:
            'Property advertising in Dubai needs a Dubai Land Department permit through Trakheesi, plus the creator\'s own advertiser permit. What property creators should check.',
        serviceName: 'Licensing support for real estate content creators',
        cta: 'Creating property content in Dubai?',
        answer: [
            'Yes, if two things are in place. The creator needs an Advertiser Permit from the UAE Media Council. The advertisement itself needs a real estate advertising permit from the Dubai Land Department (DLD), which real estate companies obtain through its Trakheesi system before any property advertisement is published.',
            'NXTSTAR sets up the creator\'s trade licence and Media Council permit, and tells you what to get from the broker or developer before you post.',
        ],
        sections: [
            {
                heading: 'What the Dubai Land Department requires',
                blocks: [
                    {
                        list: [
                            'Real estate companies that want to publish any real estate advertisement in Dubai must apply for a permit through Trakheesi.',
                            'The permit must be obtained before a marketing campaign launches, and the permit number must appear in the advertisement.',
                            'Each permit comes with a QR code under DLD\'s Madmoun service. Companies must show the QR code on their advertisements so the public can verify them.',
                            'The permit service covers electronic advertisements and promotional campaigns as well as print and outdoor.',
                        ],
                    },
                ],
            },
            {
                heading: 'What that means for a creator',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Hold your own Advertiser Permit before you publish any property promotion.',
                            'Ask the broker or developer for the Trakheesi permit number and QR code for the listing or project you are featuring.',
                            'Include the permit details in the post in the way the company\'s permit requires.',
                            'Keep a written agreement with the company.',
                        ],
                    },
                    { text: 'A property walkthrough made for a broker is an advertisement even if you are paid per lead or not paid at all.' },
                ],
            },
            {
                heading: 'Creator or broker?',
                blocks: [
                    { text: 'Advertising a property for a licensed company is one thing. Marketing or negotiating property deals yourself is real estate brokerage, which has its own DLD licensing and registration. If you are moving from content into sales, tell us, because the licence you need is different.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We handle the creator side: the trade licence with the right activity and the Media Council permit. We also set up real estate companies that need their own licence.' },
                    { text: 'The Trakheesi advertising permit is applied for by the real estate company. This page covers Dubai. Other emirates have their own real estate regulators.' },
                ],
            },
        ],
        faqs: [
            { question: 'I post apartment tours and earn referral fees. Do I need a permit?', answer: 'Yes. That is advertising, so you need the Advertiser Permit, and the listing needs the company\'s DLD advertising permit.' },
            { question: 'Who applies for the Trakheesi permit?', answer: 'The real estate company. DLD requires companies to apply through Trakheesi before publishing a real estate advertisement in Dubai.' },
            { question: 'How can viewers check a property advertisement is genuine?', answer: 'DLD\'s Madmoun service gives each permitted advertisement a QR code that can be scanned to verify it.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [
            { name: 'Dubai Land Department: Real Estate Ad Permit', url: 'https://dubailand.gov.ae/en/eservices/real-estate-ad-permit/' },
            { name: 'Dubai Land Department: Madmoun real estate ads service', url: 'https://dubailand.gov.ae/en/news-media/dld-madmoun-re-ads-service-enhances-trust-and-transparency-in-the-real-estate-sector-with-widespread-corporate-commitment/' },
            MEDIA_COUNCIL_GUIDE,
        ],
        related: [mainPage, { name: 'Mainland company setup', path: '/business/mainland' }, { name: 'What brands must check before hiring an influencer', path: `${parent.path}/brands-hiring-influencers` }, contact],
    },
    {
        slug: 'foreign-creators',
        breadcrumb: 'Foreign creators',
        h1: 'Can a foreign creator get a UAE advertiser permit?',
        seoTitle: 'UAE Advertiser Permit for European, American and Other Foreign Creators | NXTSTAR',
        description:
            'The UAE advertiser permit is open to every nationality. European, American, British and other foreign creators choose between the visitor and resident routes.',
        serviceName: 'Advertiser permit and relocation setup for foreign content creators',
        cta: 'Moving your creator business to the UAE?',
        answer: [
            'Yes. The UAE Media Council\'s rules do not depend on nationality. They apply to citizens, residents and visitors alike, so a creator from Europe, the United States, the United Kingdom or anywhere else can hold an Advertiser Permit.',
            'What matters is whether you are visiting or living in the UAE, because the two routes are different. NXTSTAR sets up the resident route for creators relocating from abroad: the company and trade licence, the residence visa and the permit.',
        ],
        sections: [
            {
                heading: 'The two routes for a foreign creator',
                blocks: [
                    {
                        list: [
                            'Visiting: a Visitor Advertiser Permit through an agency approved by the Media Council, valid for three months and extendable once to six.',
                            'Relocating: your own UAE trade licence with an electronic media activity, a residence visa through that licence, and the one-year renewable Advertiser Permit.',
                        ],
                    },
                    { text: 'Creators who come for a single campaign use the first. Creators who want the UAE as their base use the second.' },
                ],
            },
            {
                heading: 'The resident route, in order',
                blocks: [
                    {
                        ordered: true,
                        list: [
                            'Choose a licensing authority, mainland or free zone, and an electronic media activity.',
                            'Form the company and receive the trade licence. Several free zones allow this to be done before you arrive.',
                            'Apply for your residence visa through the company. Medical testing and biometrics are done in the UAE.',
                            'Apply to the Media Council for the Advertiser Permit.',
                            'Open a bank account, which is decided by the bank.',
                        ],
                    },
                ],
            },
            {
                heading: 'What does not change with your passport',
                blocks: [
                    {
                        list: [
                            'The permit conditions: age 18 or over, good conduct, no previous media content violations, a valid licence.',
                            'The duty to display the permit number on your accounts.',
                            'The rule that gifted and unpaid promotion counts as advertising.',
                        ],
                    },
                    { text: 'What does vary by nationality is outside the permit: entry visa rules on arrival, and your tax position in your home country. Take tax advice at home before you move. We do not advise on foreign tax.' },
                ],
            },
            {
                heading: 'What NXTSTAR does, and what we do not',
                blocks: [
                    { text: 'We run the resident route from start to finish for creators moving from abroad, and much of the company setup can be done remotely before you travel.' },
                    { text: 'We do not act as the approved agency for a visitor permit, and we do not give tax or immigration advice for your home country.' },
                ],
            },
        ],
        faqs: [
            { question: 'Is the advertiser permit only for UAE nationals?', answer: 'No. The Media Council applies it to citizens, residents and visitors. Nationality is not a condition.' },
            { question: 'Can I start the process before I move to Dubai?', answer: 'The company and licence can often be set up remotely, depending on the authority. The residence visa steps are completed in the UAE.' },
            { question: 'I am American and visit Dubai twice a year for brand trips. Which route do I need?', answer: 'The visitor route, each time you publish advertising content from within the UAE, unless you become a resident.' },
            { question: 'How much does it cost?', answer: PRICE_ANSWER },
        ],
        sources: [MEDIA_COUNCIL_GUIDE, { name: 'UAE Media Council: Visitor Advertiser Permit', url: 'https://uaemc.gov.ae/en/visitor-advertiser-permit/' }],
        related: [mainPage, { name: 'Visiting influencers', path: `${parent.path}/visiting-influencers` }, { name: 'IFZA company setup', path: '/business/freezone/ifza' }, { name: 'Visa services', path: '/services/visa' }, contact],
    },
];

const advertiserAudienceGuides = guides.map((guide) => ({
    ...guide,
    path: `${parent.path}/${guide.slug}`,
    parent,
    headerImage,
    reviewed,
    serviceType,
}));

export default advertiserAudienceGuides;
