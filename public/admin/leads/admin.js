/*
 * Leads admin (static page). Reads and updates the Google Sheet through its Apps Script web app.
 * The password is checked by the script (Script property ADMIN_PASSWORD), never stored in this site.
 */
(function () {
  'use strict';
  var C = window.SITE_LEADS || {};
  var ENDPOINT = /^https:\/\/script\.google\.com\//.test(C.endpoint || '') ? C.endpoint : '';
  var SESSION_KEY = 'leads-admin-session-' + (C.site || 'site');
  var STATUSES = ['New', 'Contacted', 'Follow up', 'Booked / Closed', 'Not interested', 'Spam'];
  var SITES = C.sites || {};
  var leads = [];
  var sortDesc = true;
  var session = null;

  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return [].slice.call((root || document).querySelectorAll(sel)); };

  function show(view) {
    $$('[data-view]').forEach(function (v) { v.hidden = v.getAttribute('data-view') !== view; });
  }
  $$('[data-site-name]').forEach(function (n) { n.textContent = (C.siteName || 'Website') + ' · Leads'; });

  if (!ENDPOINT) { show('setup'); return; }

  // ---------- Sign-in (kept for this browser tab only) ----------
  function loadSession() {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)); } catch (e) { return null; }
  }
  function saveSession(s) {
    session = s;
    try { s ? sessionStorage.setItem(SESSION_KEY, JSON.stringify(s)) : sessionStorage.removeItem(SESSION_KEY); } catch (e) { /* ignore */ }
  }
  function call(action, payload, creds) {
    var s = creds || session;
    if (!s) return Promise.reject(new Error('Signed out'));
    // site tells the script which tab this admin page may read (each website has its own tab and password).
    var body = Object.assign({ action: action, site: C.site, password: s.password, user: s.user }, payload || {});
    return fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(body)
    }).then(function (res) {
      if (!res.ok) throw new Error('The leads sheet did not respond (' + res.status + ').');
      return res.json();
    }).then(function (data) {
      if (!data.ok) {
        if (data.error === 'Unauthorized' && !creds) { saveSession(null); show('login'); throw new Error('Please sign in again.'); }
        throw new Error(data.error === 'Unauthorized' ? 'The password is incorrect.' : data.error || 'Request failed');
      }
      return data;
    });
  }

  $('[data-login]').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target;
    var err = $('.la-error', f);
    err.hidden = true;
    var btn = $('button[type=submit]', f);
    btn.disabled = true;
    btn.textContent = 'Signing in...';
    var creds = { user: f.user.value.trim(), password: f.password.value };
    call('login', {}, creds)
      .then(function () { saveSession(creds); f.reset(); startApp(); })
      .catch(function (ex) { err.textContent = ex.message; err.hidden = false; })
      .then(function () { btn.disabled = false; btn.textContent = 'Sign in'; });
  });

  $('[data-logout]').addEventListener('click', function () {
    saveSession(null);
    leads = [];
    show('login');
  });

  // ---------- Data ----------
  function appError(msg) {
    var box = $('[data-app-error]');
    box.textContent = msg || '';
    box.hidden = !msg;
  }

  function loadLeads() {
    appError('');
    $('[data-refresh]').textContent = 'Loading...';
    return call('list')
      .then(function (data) {
        leads = data.leads || [];
        fillAssignedOptions();
        render();
      })
      .catch(function (ex) { appError(ex.message); })
      .then(function () { $('[data-refresh]').textContent = 'Refresh'; });
  }

  function updateLead(id, patch, control) {
    if (control) control.classList.add('la-saving');
    return call('update', { id: id, patch: patch }).then(function () {
      var lead = leads.filter(function (l) { return l.id === id; })[0];
      if (lead) Object.assign(lead, patch);
      fillAssignedOptions();
      renderStats(filtered());
    }).catch(function (ex) { appError('Could not save: ' + ex.message); })
      .then(function () { if (control) control.classList.remove('la-saving'); });
  }

  // ---------- Filters ----------
  var filters = $('[data-filters]');
  STATUSES.forEach(function (s) { filters.elements.status.appendChild(new Option(s, s)); });

  function fillAssignedOptions() {
    var select = filters.elements.assigned;
    var current = select.value;
    var names = {};
    leads.forEach(function (l) { if (l.assigned_to) names[l.assigned_to] = true; });
    select.innerHTML = '';
    select.appendChild(new Option('Any salesperson', ''));
    select.appendChild(new Option('Not assigned', '__none'));
    Object.keys(names).sort().forEach(function (n) { select.appendChild(new Option(n, n)); });
    select.value = current;
    var list = $('#la-assignees') || document.body.appendChild(Object.assign(document.createElement('datalist'), { id: 'la-assignees' }));
    list.innerHTML = Object.keys(names).sort().map(function (n) { return '<option value="' + esc(n) + '">'; }).join('');
  }

  var dubaiDay = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Dubai', year: 'numeric', month: '2-digit', day: '2-digit' });
  var dubaiDate = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dubai', day: 'numeric', month: 'short', year: 'numeric' });
  var dubaiTime = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit' });
  function dayOf(iso) { return dubaiDay.format(new Date(iso)); }

  function filtered() {
    var f = filters.elements;
    var q = f.q.value.trim().toLowerCase();
    var qDigits = q.replace(/\D/g, '');
    var rows = leads.filter(function (l) {
      if (f.status.value && l.status !== f.status.value) return false;
      if (f.assigned.value === '__none' && l.assigned_to) return false;
      if (f.assigned.value && f.assigned.value !== '__none' && l.assigned_to !== f.assigned.value) return false;
      var day = dayOf(l.created_at);
      if (f.from.value && day < f.from.value) return false;
      if (f.to.value && day > f.to.value) return false;
      if (q) {
        var hay = [l.name, l.phone, l.email, l.subject, l.interest, l.timeframe, l.travellers, l.budget, l.notes, l.admin_notes, l.assigned_to, l.page_title]
          .join(' ').toLowerCase();
        var phoneHit = qDigits.length >= 4 && String(l.phone || '').replace(/\D/g, '').indexOf(qDigits) !== -1;
        if (hay.indexOf(q) === -1 && !phoneHit) return false;
      }
      return true;
    });
    rows.sort(function (a, b) { return sortDesc ? (a.created_at < b.created_at ? 1 : -1) : (a.created_at > b.created_at ? 1 : -1); });
    return rows;
  }

  filters.addEventListener('input', render);
  filters.addEventListener('change', render);
  filters.addEventListener('reset', function () { setTimeout(render, 0); });
  filters.addEventListener('submit', function (e) { e.preventDefault(); });
  $('[data-sort]').addEventListener('click', function () {
    sortDesc = !sortDesc;
    $('[data-sort-icon]').textContent = sortDesc ? '↓' : '↑';
    render();
  });
  $('[data-refresh]').addEventListener('click', loadLeads);

  // ---------- Rendering ----------
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function detailLines(l) {
    return [
      ['Business type', l.interest],
      ['Timeframe', l.timeframe],
      ['Extra', l.travellers],
      ['Budget', l.budget],
      ['Email', l.email],
      ['Notes', l.notes]
    ].filter(function (p) { return p[1]; });
  }

  function renderStats(rows) {
    var today = dayOf(new Date().toISOString());
    var weekAgo = dayOf(new Date(Date.now() - 6 * 864e5).toISOString());
    var count = function (fn) { return rows.filter(fn).length; };
    var stats = [
      ['Showing', rows.length],
      ['New, not contacted', count(function (l) { return l.status === 'New'; })],
      ['Today', count(function (l) { return dayOf(l.created_at) === today; })],
      ['Last 7 days', count(function (l) { return dayOf(l.created_at) >= weekAgo; })],
      ['Booked / Closed', count(function (l) { return l.status === 'Booked / Closed'; })]
    ];
    $('[data-stats]').innerHTML = stats.map(function (s) {
      return '<div class="la-stat"><small>' + s[0] + '</small><strong>' + s[1] + '</strong></div>';
    }).join('');
  }

  function render() {
    var rows = filtered();
    renderStats(rows);
    var html = rows.map(function (l) {
      var d = new Date(l.created_at);
      var digits = String(l.phone || '').replace(/\D/g, '');
      var waHref = 'https://wa.me/' + digits;
      var details = detailLines(l).map(function (p) { return '<div><b>' + p[0] + ':</b> ' + esc(p[1]) + '</div>'; }).join('');
      var path = '';
      try { path = l.page_url ? new URL(l.page_url).pathname : ''; } catch (e) { path = l.page_url || ''; }
      return '<tr class="' + (l.status === 'New' ? 'is-new' : '') + '" data-id="' + esc(l.id) + '">' +
        '<td class="la-when">' + dubaiDate.format(d) + '<small>' + dubaiTime.format(d) + ' Dubai</small></td>' +
        '<td class="la-name">' + esc(l.name) + '</td>' +
        '<td class="la-phone"><a href="tel:' + esc(l.phone) + '">' + esc(l.phone) + '</a><br><a class="la-wa" href="' + esc(waHref) + '" target="_blank" rel="noopener" data-lead-skip>WhatsApp ↗</a></td>' +
        '<td class="la-enquiry">' + esc(l.subject || 'General enquiry') + '<span class="la-sub">' + esc(l.source || '') + '</span></td>' +
        '<td class="la-details">' + (details || '<span class="la-muted">None</span>') + '</td>' +
        '<td class="la-page">' + (l.page_url ? '<a href="' + esc(l.page_url) + '" target="_blank" rel="noopener">' + esc(path) + '</a>' : '') +
          (l.channel ? '<span class="la-sub">Came from: ' + esc(l.channel) + '</span>' : '') + '</td>' +
        '<td><select data-field="status" data-status="' + esc(l.status) + '" aria-label="Status for ' + esc(l.name) + '">' +
          STATUSES.map(function (s) { return '<option' + (s === l.status ? ' selected' : '') + '>' + s + '</option>'; }).join('') + '</select></td>' +
        '<td><input data-field="assigned_to" list="la-assignees" value="' + esc(l.assigned_to || '') + '" placeholder="Assign" aria-label="Salesperson for ' + esc(l.name) + '"></td>' +
        '<td><input class="la-notes" data-field="admin_notes" value="' + esc(l.admin_notes || '') + '" placeholder="Add a note" aria-label="Team notes for ' + esc(l.name) + '"></td>' +
        '</tr>';
    }).join('');
    $('[data-rows]').innerHTML = html;
    $('[data-empty]').hidden = rows.length > 0;
    $('[data-count]').textContent = rows.length + ' of ' + leads.length + ' enquiries shown. Times are Dubai time.';
  }

  $('[data-rows]').addEventListener('change', function (e) {
    var control = e.target;
    var field = control.getAttribute('data-field');
    if (!field) return;
    var id = control.closest('tr').getAttribute('data-id');
    var value = control.value.trim();
    var patch = {};
    patch[field] = value || null;
    if (field === 'status') { patch.status = value; control.setAttribute('data-status', value); }
    updateLead(id, patch, control);
  });

  // ---------- Export ----------
  var COLUMNS = [
    ['Received (Dubai)', function (l) { var d = new Date(l.created_at); return dubaiDay.format(d) + ' ' + dubaiTime.format(d); }],
    ['Name', 'name'], ['Phone', 'phone'], ['Email', 'email'],
    ['Enquiry', 'subject'], ['Business type / Interest', 'interest'], ['Timeframe', 'timeframe'],
    ['Extra details', 'travellers'], ['Budget', 'budget'], ['Message / Notes', 'notes'],
    ['Page', 'page_url'], ['Came from', 'channel'], ['Button', 'source'],
    ['Status', 'status'], ['Salesperson', 'assigned_to'], ['Team notes', 'admin_notes']
  ];
  function tableData(rows) {
    return [COLUMNS.map(function (c) { return c[0]; })].concat(rows.map(function (l) {
      return COLUMNS.map(function (c) { var v = typeof c[1] === 'function' ? c[1](l) : l[c[1]]; return v == null ? '' : String(v); });
    }));
  }
  function fileName(ext) {
    return 'leads-' + (C.site || 'site') + '-' + dayOf(new Date().toISOString()) + '.' + ext;
  }
  function download(blob, name) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }
  $$('[data-export]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var data = tableData(filtered());
      if (btn.getAttribute('data-export') === 'csv') {
        var csv = data.map(function (r) {
          return r.map(function (v) {
            var s = /^[=+\-@]/.test(v) ? "'" + v : v; // stop spreadsheet formula injection
            return '"' + s.replace(/"/g, '""') + '"';
          }).join(',');
        }).join('\r\n');
        download(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }), fileName('csv'));
      } else {
        download(buildXlsx(data), fileName('xlsx'));
      }
    });
  });

  // Minimal .xlsx writer: one sheet, bold header, frozen first row, filter buttons on every column.
  function buildXlsx(rows) {
    var enc = new TextEncoder();
    function x(v) {
      return String(v).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '')
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    function col(i) { var s = ''; i++; while (i) { var m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; }
    var lastCol = col(rows[0].length - 1);
    var lastRow = rows.length;
    var widths = rows[0].map(function (_, i) {
      var max = 10;
      rows.slice(0, 300).forEach(function (r) { max = Math.max(max, Math.min(60, String(r[i]).length + 2)); });
      return '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + max + '" customWidth="1"/>';
    }).join('');
    var sheetRows = rows.map(function (r, ri) {
      return '<row r="' + (ri + 1) + '">' + r.map(function (v, ci) {
        return '<c r="' + col(ci) + (ri + 1) + '" t="inlineStr"' + (ri === 0 ? ' s="1"' : '') + '><is><t xml:space="preserve">' + x(v) + '</t></is></c>';
      }).join('') + '</row>';
    }).join('');
    var files = {
      '[Content_Types].xml': '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>',
      '_rels/.rels': '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
      'xl/workbook.xml': '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Leads" sheetId="1" r:id="rId1"/></sheets><definedNames><definedName name="_xlnm._FilterDatabase" localSheetId="0" hidden="1">Leads!$A$1:$' + lastCol + '$' + lastRow + '</definedName></definedNames></workbook>',
      'xl/_rels/workbook.xml.rels': '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
      'xl/styles.xml': '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/></cellXfs></styleSheet>',
      'xl/worksheets/sheet1.xml': '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>' + widths + '</cols><sheetData>' + sheetRows + '</sheetData><autoFilter ref="A1:' + lastCol + lastRow + '"/></worksheet>'
    };
    return zipStore(Object.keys(files).map(function (name) { return { name: enc.encode(name), data: enc.encode(files[name]) }; }));
  }

  var CRC_TABLE = (function () {
    var t = new Uint32Array(256);
    for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })();
  function crc32(bytes) {
    var c = 0xFFFFFFFF;
    for (var i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }
  // ZIP with no compression ("stored"), which Excel opens normally.
  function zipStore(entries) {
    var parts = [], central = [], offset = 0;
    var now = new Date();
    var dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    var dosDate = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
    entries.forEach(function (e) {
      var crc = crc32(e.data);
      var local = new DataView(new ArrayBuffer(30));
      local.setUint32(0, 0x04034b50, true); local.setUint16(4, 20, true); local.setUint16(6, 0x0800, true);
      local.setUint16(8, 0, true); local.setUint16(10, dosTime, true); local.setUint16(12, dosDate, true);
      local.setUint32(14, crc, true); local.setUint32(18, e.data.length, true); local.setUint32(22, e.data.length, true);
      local.setUint16(26, e.name.length, true); local.setUint16(28, 0, true);
      parts.push(new Uint8Array(local.buffer), e.name, e.data);
      var cd = new DataView(new ArrayBuffer(46));
      cd.setUint32(0, 0x02014b50, true); cd.setUint16(4, 20, true); cd.setUint16(6, 20, true); cd.setUint16(8, 0x0800, true);
      cd.setUint16(10, 0, true); cd.setUint16(12, dosTime, true); cd.setUint16(14, dosDate, true);
      cd.setUint32(16, crc, true); cd.setUint32(20, e.data.length, true); cd.setUint32(24, e.data.length, true);
      cd.setUint16(28, e.name.length, true); cd.setUint16(30, 0, true); cd.setUint16(32, 0, true);
      cd.setUint16(34, 0, true); cd.setUint16(36, 0, true); cd.setUint32(38, 0, true); cd.setUint32(42, offset, true);
      central.push(new Uint8Array(cd.buffer), e.name);
      offset += 30 + e.name.length + e.data.length;
    });
    var cdSize = central.reduce(function (s, p) { return s + p.length; }, 0);
    var end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true); end.setUint16(8, entries.length, true); end.setUint16(10, entries.length, true);
    end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
    return new Blob(parts.concat(central, [new Uint8Array(end.buffer)]), { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  }

  // ---------- Start ----------
  function startApp() {
    show('app');
    $('[data-user]').textContent = session && session.user ? 'Signed in as ' + session.user : '';
    loadLeads();
  }

  session = loadSession();
  if (session) startApp(); else show('login');
  // Refresh the list every two minutes while the page is open.
  setInterval(function () { if (session && !document.hidden && !$('[data-view="app"]').hidden) loadLeads(); }, 120000);
})();
