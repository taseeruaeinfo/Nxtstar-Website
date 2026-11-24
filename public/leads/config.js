/*
 * Lead capture settings for nxtstar.ae.
 * endpoint: the NXTSTAR Google Apps Script "Web app URL" (ends in /exec). See docs/leads-setup.md.
 * NXTSTAR uses its own Google Sheet (separate from Tuwaiq and Al Basel).
 */
window.SITE_LEADS = {
  endpoint: 'https://script.google.com/macros/s/AKfycbwIQP3Iz1AJsfEv7o6yCNscnrkbIngGZUc5NCc0P3ZYQzuv-evXhJReerA1MJcskCchWA/exec',
  site: 'nxtstar',
  siteName: 'NXTSTAR',
  kind: 'business',
  whatsapp: '971582594158',
  greeting: 'Hi NXTSTAR, I am from your website.',
  phoneDisplay: '+971 58 259 4158',
  phoneTel: '+971582594158',
  privacyUrl: '/privacy-policy',
  gateCalls: true,
  text: { eyebrow: 'SPEAK WITH A UAE SETUP ADVISOR', title: 'A few details first.', subjectLabel: 'Your enquiry' },
  sites: { nxtstar: 'NXTSTAR' }
};
