// Saves a website form to the NXTSTAR Google Sheet through /leads/leads.js (window.SiteLeads).
// Replaces the old backend endpoints (/api/contact, /api/send-form, /api/refer).

/** react-phone-input-2 returns digits only ("971501234567"); store it with a leading "+". */
export function formatPhone(value) {
    const v = String(value || '').trim();
    return /^\d+$/.test(v) ? '+' + v : v;
}

/** Wait briefly for the deferred lead script, in case a form is submitted before it has loaded. */
function whenReady(timeoutMs = 4000) {
    return new Promise((resolve) => {
        const started = Date.now();
        const check = () => {
            const leads = /** @type {any} */ (window).SiteLeads;
            if (leads || Date.now() - started > timeoutMs) resolve(leads || null);
            else setTimeout(check, 100);
        };
        check();
    });
}

/**
 * @param {{name: string, phone: string, email?: string, subject: string, interest?: string, notes?: string}} fields
 * @param {string} source  which form this came from, shown in the sheet's "Button clicked" column
 * @returns {Promise<boolean>} true when the sheet confirmed the save
 */
export async function submitLead(fields, source) {
    const leads = await whenReady();
    if (!leads || !leads.configured) return false;
    try {
        return Boolean(await leads.capture({ ...fields, phone: formatPhone(fields.phone) }, { source, openWhatsApp: false }));
    } catch {
        return false;
    }
}

/** Hidden anti-spam field (replaces reCAPTCHA): people never see it, simple bots fill it in. */
export const HONEYPOT_NAME = 'company_website';
/** @param {{currentTarget: EventTarget}} e  the form submit event */
export function isBot(e) {
    const form = /** @type {HTMLFormElement} */ (e.currentTarget);
    return Boolean(new FormData(form).get(HONEYPOT_NAME));
}

export const LEADS_FALLBACK_MESSAGE =
    'We could not confirm your enquiry was received. Please message us on WhatsApp or call +971 58 259 4158.';
