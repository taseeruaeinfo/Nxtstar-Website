/**
 * Website leads for NXTSTAR (nxtstar.ae).
 * Leads are written to the tab "NXTSTAR Leads" in this spreadsheet.
 * The nxtstar.ae/admin/leads page reads and updates that tab with the password below.
 *
 * Paste this into the Google Sheet: Extensions > Apps Script > Code.gs, then Deploy.
 * Full steps: docs/leads-setup.md
 *
 * Script properties (Project Settings > Script properties), at least 10 characters each:
 *   ADMIN_PASSWORD_NXTSTAR  password for nxtstar.ae/admin/leads (at least 10 characters)
 */

var SITE_TABS = { nxtstar: 'NXTSTAR Leads' };
var STATUSES = ['New', 'Contacted', 'Follow up', 'Booked / Closed', 'Not interested', 'Spam'];
var COLUMNS = [
  'id', 'created_at', 'name', 'phone', 'email', 'subject', 'source', 'interest', 'timeframe',
  'travellers', 'budget', 'notes', 'page_url', 'page_title', 'channel', 'landing_page',
  'status', 'assigned_to', 'admin_notes', 'updated_at', 'updated_by', 'client_ref'
];
var HEADERS = [
  'ID', 'Received', 'Name', 'Phone', 'Email', 'Service / Enquiry', 'Button clicked', 'Business type / Interest', 'Timeframe',
  'Extra details', 'Budget', 'Message / Notes', 'Page', 'Page title', 'Came from', 'Landing page',
  'Status', 'Salesperson', 'Team notes', 'Updated', 'Updated by', 'Client ref'
];
var LIMITS = { name: 100, phone: 30, email: 200, subject: 300, interest: 100, timeframe: 120, travellers: 100,
  budget: 100, notes: 2000, page_url: 500, page_title: 300, source: 60, channel: 200, landing_page: 300,
  client_ref: 80, assigned_to: 100, admin_notes: 2000 };

function doGet() {
  return json({ ok: true, service: 'website-leads' });
}

function doPost(e) {
  var body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return json({ ok: false, error: 'Bad request' }); }
  try {
    if (body.action === 'add') return json(addLead(body.lead || {}));
    var site = siteOf(body.site);
    if (body.action === 'login') { checkPassword(site, body.password); return json({ ok: true }); }
    if (body.action === 'list') { checkPassword(site, body.password); return json({ ok: true, leads: listLeads(site) }); }
    if (body.action === 'update') { checkPassword(site, body.password); return json(updateLead(site, body.id, body.patch || {}, body.user)); }
    return json({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return json({ ok: false, error: String(err.message || err) });
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function siteOf(value) {
  var site = String(value || '');
  if (!SITE_TABS.hasOwnProperty(site)) throw new Error('Unknown site');
  return site;
}

function sheet(site) {
  var name = SITE_TABS[site];
  var id = PropertiesService.getScriptProperties().getProperty('LEADS_SPREADSHEET_ID');
  var ss = id ? SpreadsheetApp.openById(id) : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Lead spreadsheet is not configured');
  var sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).createFilter();
    sh.hideColumns(1); // ID
    sh.hideColumns(COLUMNS.indexOf('client_ref') + 1);
  }
  return sh;
}

function text(v, key) {
  var s = String(v == null ? '' : v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim();
  return s.slice(0, LIMITS[key] || 300);
}

// Stop spreadsheet formulas: anything starting with = + - @ is stored as plain text.
function cell(v) {
  var s = String(v == null ? '' : v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function addLead(lead) {
  var site;
  try { site = siteOf(lead.site); } catch (err) { return { ok: false, error: 'Unknown site' }; }
  var name = text(lead.name, 'name');
  var phone = text(lead.phone, 'phone');
  if (name.length < 2) return { ok: false, error: 'Name required' };
  if (phone.replace(/\D/g, '').length < 7 || !/^[+0-9 ()\-.]+$/.test(phone)) return { ok: false, error: 'Phone required' };

  var ref = text(lead.client_ref, 'client_ref');
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  var sh;
  var id = Utilities.getUuid();
  try {
    sh = sheet(site);
    var last = sh.getLastRow();
    if (ref && last > 1 && sh.getRange(2, COLUMNS.indexOf('client_ref') + 1, last - 1, 1)
        .createTextFinder(ref).matchEntireCell(true).findNext()) return { ok: true, duplicate: true };
    var row = COLUMNS.map(function (c) {
      if (c === 'id') return id;
      if (c === 'created_at') return new Date();
      if (c === 'status') return 'New';
      if (c === 'name') return cell(name);
      if (c === 'phone') return cell(phone);
      if (['assigned_to', 'admin_notes', 'updated_at', 'updated_by'].indexOf(c) !== -1) return '';
      return cell(text(lead[c], c));
    });
    sh.appendRow(row);
    SpreadsheetApp.flush();
  } finally {
    lock.releaseLock();
  }
  notifyNewLead(sh, id);
  return { ok: true };
}

// Run once from the spreadsheet's Apps Script editor before redeployment.
function bindLeadSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) throw new Error('Open Apps Script from the NXTSTAR spreadsheet');
  PropertiesService.getScriptProperties().setProperty('LEADS_SPREADSHEET_ID', ss.getId());
  MailApp.getRemainingDailyQuota(); // Requests mail permission without sending an email.
}

function notifyNewLead(sh, id) {
  try {
    var to = PropertiesService.getScriptProperties().getProperty('LEAD_NOTIFICATION_EMAIL');
    if (!to) return;
    var url = sh.getParent().getUrl() + '#gid=' + sh.getSheetId();
    MailApp.sendEmail(to, 'New NXTSTAR website enquiry', 'A new enquiry was saved to NXTSTAR Leads.\nLead ID: ' + id + '\nOpen the sheet: ' + url);
  } catch (err) {
    console.error('Lead saved but email notification failed', err.message);
  }
}

function checkPassword(site, password) {
  var props = PropertiesService.getScriptProperties();
  var expected = props.getProperty('ADMIN_PASSWORD_' + site.toUpperCase()) || props.getProperty('ADMIN_PASSWORD');
  if (!expected || expected.length < 10) throw new Error('Set ADMIN_PASSWORD_' + site.toUpperCase() + ' (10+ characters) in Script properties');
  var cache = CacheService.getScriptCache();
  var key = 'login-fails-' + site;
  var fails = Number(cache.get(key) || 0);
  if (fails >= 10) throw new Error('Too many attempts. Try again in 15 minutes.');
  if (String(password || '') !== expected) {
    cache.put(key, String(fails + 1), 900);
    throw new Error('Unauthorized');
  }
}

function listLeads(site) {
  var sh = sheet(site);
  var last = sh.getLastRow();
  if (last < 2) return [];
  var values = sh.getRange(2, 1, last - 1, COLUMNS.length).getValues();
  return values.filter(function (r) { return r[0]; }).map(function (r) {
    var o = { site: site };
    COLUMNS.forEach(function (c, i) {
      var v = r[i];
      if (v instanceof Date) { o[c] = v.toISOString(); return; }
      var s = String(v);
      if (/^'[=+\-@]/.test(s)) s = s.slice(1); // undo the plain-text marker added by cell()
      o[c] = s === '' ? null : s;
    });
    delete o.client_ref;
    return o;
  });
}

function updateLead(site, id, patch, user) {
  if (!id) return { ok: false, error: 'Missing id' };
  var allowed = ['status', 'assigned_to', 'admin_notes'];
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sh = sheet(site);
    var last = sh.getLastRow();
    if (last < 2) return { ok: false, error: 'Not found' };
    var ids = sh.getRange(2, 1, last - 1, 1).getValues();
    var rowIndex = -1;
    for (var i = 0; i < ids.length; i++) { if (String(ids[i][0]) === String(id)) { rowIndex = i + 2; break; } }
    if (rowIndex === -1) return { ok: false, error: 'Not found' };
    allowed.forEach(function (key) {
      if (!(key in patch)) return;
      var value = text(patch[key], key);
      if (key === 'status' && STATUSES.indexOf(value) === -1) return;
      sh.getRange(rowIndex, COLUMNS.indexOf(key) + 1).setValue(cell(value));
    });
    sh.getRange(rowIndex, COLUMNS.indexOf('updated_at') + 1).setValue(new Date());
    sh.getRange(rowIndex, COLUMNS.indexOf('updated_by') + 1).setValue(cell(text(user, 'assigned_to')));
  } finally {
    lock.releaseLock();
  }
  return { ok: true };
}
