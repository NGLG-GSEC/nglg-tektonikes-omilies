/* Fiore Rubinetterie — κοινή λογική σελίδων */
(function () {
  'use strict';

  var CFG = window.FIORE_CONFIG || {};
  var SERIES = window.FIORE_SERIES || [];
  var FINISHES = window.FIORE_FINISHES || [];
  var CATS = window.FIORE_CATS || {};

  var FIN = {};
  FINISHES.forEach(function (g) { g.items.forEach(function (f) { FIN[f.code] = f; }); });
  var PRIMAVERA = FINISHES.filter(function (g) { return g.id === 'matt' || g.id === 'met'; })
    .reduce(function (a, g) { return a.concat(g.items); }, []);

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]; }); };
  // FIORE_SPA: έκδοση ενός αρχείου (όλες οι σελίδες και οι εικόνες σε ένα HTML)
  var SPA = window.FIORE_SPA;
  var img = function (name) { return SPA ? SPA.img[name] : 'img/' + name + '.webp'; };
  var hashSub = function () { return SPA ? SPA.sub() : location.hash.slice(1); };

  var ICON = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
  };

  /* ---------- Header & footer ---------- */
  var page = document.body.getAttribute('data-page');
  var links = [
    ['index.html', 'Αρχική', 'home'],
    ['seires.html', 'Σειρές', 'series'],
    ['finirismata.html', 'Φινιρίσματα', 'finishes'],
    ['katalogos.html', 'Κατάλογοι', 'catalogue'],
    ['etaireia.html', 'Εταιρεία', 'company'],
    ['epikoinonia.html', 'Επικοινωνία', 'contact']
  ];

  var header = $('#site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML =
      '<div class="wrap nav">' +
        '<a class="brand" href="index.html" aria-label="Fiore Rubinetterie — Αρχική"><img src="img/fiore-logo.png" alt="Fiore Rubinetterie — Made in Italy since 1965" width="160" height="72"></a>' +
        '<ul class="nav-links" id="nav-links">' +
          links.map(function (l) { return '<li><a href="' + l[0] + '"' + (page === l[2] ? ' aria-current="page"' : '') + '>' + l[1] + '</a></li>'; }).join('') +
        '</ul>' +
        '<div class="nav-cta">' +
          '<a class="btn btn-line" href="katalogos.html">Κατάλογος 2026</a>' +
          '<a class="btn btn-accent" href="b2b.html"' + (page === 'b2b' ? ' aria-current="page"' : '') + '>' + ICON.lock + 'B2B</a>' +
          '<button class="menu-btn" aria-label="Μενού" aria-expanded="false" aria-controls="nav-links"><span></span></button>' +
        '</div>' +
      '</div>';
    var mb = $('.menu-btn', header);
    mb.addEventListener('click', function () {
      var open = document.body.classList.toggle('menu-open');
      mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var footer = $('#site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML =
      '<div class="wrap">' +
        '<div class="foot-grid">' +
          '<div><a class="brand" href="index.html"><img src="img/fiore-logo.png" alt="Fiore Rubinetterie" width="160" height="72"></a>' +
          '<p>Ιταλικές μπαταρίες και αναμικτήρες μπάνιου και κουζίνας. Σχεδιασμός και παραγωγή στο Borgomanero της Novara από το 1965.</p></div>' +
          '<div><h4>Προϊόντα</h4><ul>' +
            '<li><a href="seires.html#bagno">Μπάνιο</a></li><li><a href="seires.html#cucina">Κουζίνα</a></li>' +
            '<li><a href="seires.html#doccia">Ντους</a></li><li><a href="seires.html#classico">Κλασικά</a></li></ul></div>' +
          '<div><h4>Πόροι</h4><ul>' +
            '<li><a href="finirismata.html">Φινιρίσματα</a></li><li><a href="katalogos.html">Κατάλογοι</a></li>' +
            '<li><a href="b2b.html">Πύλη B2B</a></li></ul></div>' +
          '<div><h4>Fiore</h4><ul>' +
            '<li><a href="etaireia.html">Η εταιρεία</a></li><li><a href="epikoinonia.html">Επικοινωνία</a></li>' +
            '<li><a href="' + esc(CFG.parent) + '" target="_blank" rel="noopener">fiore.it</a></li></ul></div>' +
        '</div>' +
        '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' Fiore Rubinetterie S.r.l. · Made in Italy since 1965</span><span>60 χρόνια · 1965–2025</span></div>' +
      '</div>';
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveal(root) {
    var els = $$('.reveal:not(.in)', root);
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e) { io.observe(e); });
  }

  /* ---------- Series cards ---------- */
  function swatchRow(s) {
    var codes = s.finishes.slice(0, 7);
    var html = codes.map(function (c) { var f = FIN[c]; return f ? '<span class="sw" style="--c:' + f.hex + '" title="' + esc(f.name) + '"></span>' : ''; }).join('');
    var extra = (s.finishes.length - codes.length) + (s.primavera ? PRIMAVERA.length : 0);
    if (extra > 0) html += '<span class="sw-more">+' + extra + (s.primavera ? ' Primavera' : '') + '</span>';
    return '<div class="swatches">' + html + '</div>';
  }

  function card(s) {
    var first = s.images[0];
    var media = first
      ? '<img src="' + img(first.src) + '" alt="' + esc(first.alt) + '" loading="lazy">'
      : '<span class="mono">' + esc(s.name) + '</span>';
    var count = s.images.length > 1 ? '<span class="chip count">' + s.images.length + ' φωτογραφίες</span>' : '';
    return '<button class="series-card reveal" type="button" data-id="' + s.id + '" style="--t:' + s.tone + '">' +
      '<div class="media">' + media + count + '</div>' +
      '<div class="body">' +
        '<div class="meta"><span>' + s.cat.map(function (c) { return CATS[c]; }).join(' · ') + '</span><span>' + esc(s.code) + '</span></div>' +
        '<h3>' + esc(s.name) + '</h3>' +
        '<p>' + esc(s.tag) + '</p>' +
        swatchRow(s) +
      '</div></button>';
  }

  function bindCards(root) {
    $$('.series-card[data-id]', root).forEach(function (b) {
      b.addEventListener('click', function () { openSeries(b.getAttribute('data-id')); });
    });
  }

  $$('[data-series-grid]').forEach(function (grid) {
    var ids = grid.getAttribute('data-ids');
    var list = ids ? ids.split(',').map(function (id) { return SERIES.filter(function (s) { return s.id === id; })[0]; }).filter(Boolean) : SERIES;
    var state = { cat: 'all', q: '' };
    var render = function () {
      var q = state.q.trim().toLowerCase();
      var items = list.filter(function (s) {
        var okCat = state.cat === 'all' || s.cat.indexOf(state.cat) > -1;
        var okQ = !q || (s.name + ' ' + s.tag + ' ' + s.text + ' ' + s.code).toLowerCase().indexOf(q) > -1;
        return okCat && okQ;
      });
      grid.innerHTML = items.length ? items.map(card).join('') : '<p class="empty">Δεν βρέθηκαν σειρές. Δοκιμάστε άλλη αναζήτηση.</p>';
      bindCards(grid);
      observeReveal(grid);
    };
    var filters = grid.getAttribute('data-filters') ? $('#' + grid.getAttribute('data-filters')) : null;
    if (filters) {
      var chips = [['all', 'Όλες']].concat(Object.keys(CATS).map(function (k) { return [k, CATS[k]]; }));
      filters.innerHTML = chips.map(function (c) {
        return '<button class="filter" type="button" data-cat="' + c[0] + '" aria-pressed="false">' + c[1] + '</button>';
      }).join('') +
        '<label class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
        '<input type="search" placeholder="Αναζήτηση σειράς ή κωδικού" aria-label="Αναζήτηση σειράς"></label>';
      var setCat = function (cat) {
        state.cat = CATS[cat] ? cat : 'all';
        $$('.filter', filters).forEach(function (f) { f.setAttribute('aria-pressed', f.getAttribute('data-cat') === state.cat ? 'true' : 'false'); });
        render();
      };
      filters.addEventListener('click', function (e) {
        var b = e.target.closest('.filter'); if (!b) return;
        setCat(b.getAttribute('data-cat'));
        var c = b.getAttribute('data-cat');
        try { history.replaceState(null, '', SPA ? SPA.hash('seires', c === 'all' ? '' : c) : (c === 'all' ? location.pathname : '#' + c)); } catch (err) {}
      });
      $('input', filters).addEventListener('input', function (e) { state.q = e.target.value; render(); });
      setCat(hashSub());
      window.addEventListener('hashchange', function () { setCat(hashSub()); });
    } else {
      render();
    }
  });

  /* ---------- Series modal ---------- */
  var modal;
  function openSeries(id) {
    var s = SERIES.filter(function (x) { return x.id === id; })[0];
    if (!s) return;
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      document.body.appendChild(modal);
      modal.addEventListener('click', function (e) { if (e.target.hasAttribute('data-close')) closeModal(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });
    }
    var main = s.images.length
      ? '<img id="m-img" src="' + img(s.images[0].src) + '" alt="' + esc(s.images[0].alt) + '">'
      : '<span class="mono">' + esc(s.name) + '</span>';
    var thumbs = s.images.length > 1 ? '<div class="m-thumbs">' + s.images.map(function (im, i) {
      return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === 0) + '" aria-label="' + esc(im.label) + '"><img src="' + img(im.src) + '" alt=""></button>';
    }).join('') + '</div>' : '';
    var fins = s.finishes.map(function (c) {
      var f = FIN[c]; return f ? '<div><span class="sw" style="--c:' + f.hex + '"></span>' + esc(f.name) + ' <span class="muted">' + c + '</span></div>' : '';
    }).join('');
    modal.innerHTML =
      '<div class="modal-backdrop" data-close></div>' +
      '<div class="modal-panel" style="--t:' + s.tone + '">' +
        '<button class="modal-close" type="button" data-close aria-label="Κλείσιμο">×</button>' +
        '<div class="m-gallery"><div class="m-main">' + main + '</div>' +
          (s.images.length ? '<div class="m-caption" id="m-cap">' + esc(s.images[0].label) + '</div>' : '') + thumbs + '</div>' +
        '<div class="m-info">' +
          '<span class="eyebrow">' + s.cat.map(function (c) { return CATS[c]; }).join(' · ') + ' · Κωδ. ' + esc(s.code) + '</span>' +
          '<h2 id="m-title">' + esc(s.name) + '</h2>' +
          '<p class="lead">' + esc(s.tag) + '</p>' +
          '<p>' + esc(s.text) + '</p>' +
          '<h4>Διαθέσιμα φινιρίσματα</h4><div class="fin-list">' + fins + '</div>' +
          (s.primavera ? '<p class="muted">Διατίθεται επίσης στις ' + PRIMAVERA.length + ' αποχρώσεις της Collezione Primavera (Matt & Met). <a href="finirismata.html#matt">Δείτε τα φινιρίσματα →</a></p>' : '') +
          '<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">' +
            '<a class="btn btn-dark" href="katalogos.html">Κατάλογος ' + ICON.arrow + '</a>' +
            '<a class="btn btn-line" href="b2b.html">Τιμές B2B</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    modal.setAttribute('aria-labelledby', 'm-title');
    $$('.m-thumbs button', modal).forEach(function (b) {
      b.addEventListener('click', function () {
        var im = s.images[+b.getAttribute('data-i')];
        var el = $('#m-img', modal); el.src = img(im.src); el.alt = im.alt;
        $('#m-cap', modal).textContent = im.label;
        $$('.m-thumbs button', modal).forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      });
    });
    modal.classList.add('open');
    document.body.classList.add('lock');
    $('.modal-close', modal).focus();
  }
  function closeModal() { modal.classList.remove('open'); document.body.classList.remove('lock'); }
  bindCards(document);

  /* ---------- Primavera colour studio ---------- */
  var studio = $('#studio');
  if (studio) {
    // Φωτογραφίες ανά κωδικό χρώματος (όπου υπάρχει), αλλιώς ουδέτερη εικόνα Kube.
    var photo = { CB: '100cb8515', PR: '100pr8545', TO: '140to4415', CH: '444ch5240', BB: '100bb8517', NN: '88nn5513', CR: '140cr4417', OO: '26oo0623' };
    var groups = { matt: FINISHES.filter(function (g) { return g.id === 'matt'; })[0], met: FINISHES.filter(function (g) { return g.id === 'met'; })[0] };
    var stage = $('.studio-stage', studio), pic = $('img', stage), nameEl = $('.caption b', stage), subEl = $('.caption small', stage);
    var sws = $('.studio-swatches', studio);
    var pick = function (f) {
      stage.style.setProperty('--stage', f.hex);
      nameEl.textContent = f.name;
      subEl.textContent = f.it + ' · ' + f.code;
      var src = photo[f.code];
      if (src) {
        pic.style.opacity = 0;
        setTimeout(function () { pic.src = img(src); pic.alt = 'Αναμικτήρας Fiore σε ' + f.name; pic.style.opacity = 1; }, 180);
      }
      $$('button', sws).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-code') === f.code ? 'true' : 'false'); });
    };
    var show = function (gid) {
      var g = groups[gid];
      sws.innerHTML = g.items.map(function (f) {
        return '<button type="button" data-code="' + f.code + '" style="--c:' + f.hex + '" aria-label="' + esc(f.name) + '" title="' + esc(f.name) + '"></button>';
      }).join('');
      $$('.studio-tabs button', studio).forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-g') === gid ? 'true' : 'false'); });
      var first = g.items.filter(function (f) { return photo[f.code]; })[0] || g.items[0];
      pick(first);
    };
    sws.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      pick(FIN[b.getAttribute('data-code')]);
    });
    $$('.studio-tabs button', studio).forEach(function (b) { b.addEventListener('click', function () { show(b.getAttribute('data-g')); }); });
    show('met');
  }

  /* ---------- Finishes page ---------- */
  var finRoot = $('#finishes');
  if (finRoot) {
    var nav = $('#fin-nav');
    nav.innerHTML = FINISHES.map(function (g) { return '<a class="filter" href="#' + g.id + '">' + esc(g.title.replace('Collezione ', '')) + ' <span class="muted">' + g.items.length + '</span></a>'; }).join('') +
      '<a class="filter" href="#diathesimotita">Διαθεσιμότητα ανά σειρά</a>';
    finRoot.innerHTML = FINISHES.map(function (g) {
      return '<section class="fin-cat" id="' + g.id + '">' +
        '<div class="fin-cat-head reveal"><div><span class="eyebrow">' + esc(g.kicker) + '</span><h2 style="margin-top:12px">' + esc(g.title) + '</h2></div>' +
        '<div><p class="lead">' + esc(g.text) + '</p><p class="count" style="margin-top:12px">' + g.items.length + ' φινιρίσματα</p></div></div>' +
        '<div class="fin-grid">' + g.items.map(function (f) {
          return '<div class="fin reveal"><div class="swatch" style="--c:' + f.hex + '"><span class="code">' + f.code + '</span></div>' +
            '<div class="info"><b>' + esc(f.name) + '</b><span>' + esc(f.it) + '</span>' + (f.note ? '<em>' + esc(f.note) + '</em>' : '') + '</div></div>';
        }).join('') + '</div></section>';
    }).join('');

    var table = $('#avail');
    if (table) {
      var cols = ['CR', 'NN', 'BB', 'AA', 'CN', 'OO', 'ZZ', 'RR', 'AI'];
      table.innerHTML = '<thead><tr><th>Σειρά</th>' + cols.map(function (c) { return '<th title="' + esc(FIN[c].name) + '">' + c + '</th>'; }).join('') + '<th>Primavera</th></tr></thead><tbody>' +
        SERIES.map(function (s) {
          return '<tr><td>' + esc(s.name) + '</td>' + cols.map(function (c) {
            return '<td>' + (s.finishes.indexOf(c) > -1 ? '<span class="y" style="--c:' + FIN[c].hex + '" title="' + esc(FIN[c].name) + '"></span>' : '<span class="n">—</span>') + '</td>';
          }).join('') + '<td>' + (s.primavera ? '<b style="color:var(--accent-ink)">25 χρώματα</b>' : '<span class="n">—</span>') + '</td></tr>';
        }).join('') + '</tbody>';
    }
  }

  /* ---------- B2B portal link ---------- */
  $$('[data-b2b-link]').forEach(function (a) {
    if (CFG.b2bUrl && CFG.b2bUrl !== '#') { a.href = CFG.b2bUrl; a.target = '_blank'; a.rel = 'noopener'; }
    else {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var s = $('#portal-status'); if (s) { s.textContent = 'Η πύλη B2B ενεργοποιείται σύντομα. Υποβάλετε αίτηση πρόσβασης παρακάτω.'; }
        var f = $('#request'); if (f) f.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });

  /* ---------- Forms (mailto) ---------- */
  $$('form[data-mail]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = $('.form-status', form);
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      var lines = [];
      data.forEach(function (v, k) { if (k !== 'consent') lines.push(k + ': ' + v); });
      var subject = form.getAttribute('data-mail') + ' — ' + (data.get('Επωνυμία') || data.get('Ονοματεπώνυμο') || '');
      if (!CFG.email) {
        status.className = 'form-status warn';
        status.textContent = 'Η φόρμα δεν έχει ακόμη συνδεθεί με διεύθυνση email. Επικοινωνήστε μέσω του fiore.gr.';
        return;
      }
      window.location.href = 'mailto:' + CFG.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
      status.className = 'form-status ok';
      status.textContent = 'Ανοίγει το πρόγραμμα email σας με το μήνυμα έτοιμο προς αποστολή.';
    });
  });

  observeReveal(document);
})();
