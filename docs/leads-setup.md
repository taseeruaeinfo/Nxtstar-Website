# NXTSTAR leads: Google Sheet setup

All enquiries from nxtstar.ae are saved in the **NXTSTAR Google Sheet** (separate from Tuwaiq and Al Basel).
No backend server is used any more: the old `/api/contact`, `/api/send-form` and `/api/refer` endpoints are replaced.

## What is captured

| Where on the site | What happens |
|---|---|
| Any **WhatsApp** button (floating button, service guides, success page) | Short form (name, phone, email optional) → saved → visitor chooses WhatsApp or Call |
| Any **Call** button (`tel:` links) | Same short form first → saved → visitor chooses Call or WhatsApp |
| **Contact** page form | Saved with the message → "Thank you" shown |
| **Home** cost calculator form | Saved with the business type → success page (reCAPTCHA replaced by a hidden anti-spam field) |
| **Refer & Earn** form | Saved with the friend's name, email and phone in the notes |

Every row records the date and time, the button or form used, and the page.

## One-time setup (about 5 minutes)

1. Open the NXTSTAR Google Sheet. Click **Extensions > Apps Script**.
2. Delete everything in `Code.gs`, paste the whole of `docs/leads-apps-script.gs`, press **Ctrl + S**.
3. Click the gear (**Project Settings**):
   - **Time zone**: `(GMT+04:00) Dubai`.
   - **Script properties > Add script property**: `ADMIN_PASSWORD_NXTSTAR` = a password of at least 10 characters (for `nxtstar.ae/admin/leads`).
4. **Deploy > New deployment > Web app**: Execute as **Me**, Who has access **Anyone** → **Deploy** → authorise (Advanced > Go to project).
5. Copy the **Web app URL** (ends in `/exec`) and put it in `endpoint: ''` in `public/leads/config.js`.
6. Build and deploy. The tab **NXTSTAR Leads** is created with the first enquiry.

To turn on email alerts, set `LEAD_NOTIFICATION_EMAIL` to the team's approved inbox in Script properties. Run `bindLeadSpreadsheet` from the bound project once and approve the Sheets and Mail permissions. Redeploy a new version using the existing URL. A saved lead sends an email with its ID and a link to the sheet. Duplicate delivery attempts and admin edits do not send another email. A failed email is logged separately from the saved lead.

Later script changes: **Deploy > Manage deployments > pencil > New version > Deploy** (the URL stays the same).

## Admin page

`https://www.nxtstar.ae/admin/leads` — sign in with your name and `ADMIN_PASSWORD_NXTSTAR`. Filter, set status and salesperson, add notes, download Excel.

## Note

The `backend/` folder and the `VITE_BACKEND_URL` / `VITE_RECAPTCHA_SITE_KEY` settings are no longer used by the website.
