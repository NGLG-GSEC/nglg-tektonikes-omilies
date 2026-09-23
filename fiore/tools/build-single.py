#!/usr/bin/env python3
"""Χτίζει όλο τον ιστότοπο Fiore σε ΕΝΑ αυτόνομο αρχείο HTML (dist/fiore-gr.html).

Όλες οι σελίδες, τα CSS/JS και οι εικόνες (base64) ενσωματώνονται. Η πλοήγηση γίνεται
με hash (#/seires, #/finirismata/matt, ...), ώστε το αρχείο να ανοίγει με διπλό κλικ.

Χρήση:  python3 tools/build-single.py
"""
import base64
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / 'dist' / 'fiore-gr.html'

# αρχείο -> κλειδί data-page (ίδια με το main.js)
PAGES = [
    ('index', 'home'), ('seires', 'series'), ('finirismata', 'finishes'),
    ('katalogos', 'catalogue'), ('b2b', 'b2b'), ('etaireia', 'company'), ('epikoinonia', 'contact'),
]


def data_uri(path):
    mime = 'image/png' if path.suffix == '.png' else 'image/webp'
    return 'data:%s;base64,%s' % (mime, base64.b64encode(path.read_bytes()).decode())


images = {p.stem: data_uri(p) for p in sorted((ROOT / 'img').iterdir()) if p.suffix in ('.webp', '.png')}


def inline_imgs(text):
    return re.sub(r'img/([\w-]+)\.(?:webp|png)', lambda m: images[m.group(1)], text)


titles, routes = {}, []
for name, key in PAGES:
    html = (ROOT / (name + '.html')).read_text(encoding='utf-8')
    titles[name] = re.search(r'<title>(.*?)</title>', html).group(1)
    main = re.search(r'<main>(.*)</main>', html, re.S).group(1)
    if name == 'index':  # μοναδικά id μέσα στο ενιαίο αρχείο
        main = main.replace('id="series-grid"', 'id="series-grid-home"')
    routes.append('<div class="route" data-route="%s" data-key="%s"%s>%s</div>'
                  % (name, key, '' if name == 'index' else ' hidden', inline_imgs(main)))

index = (ROOT / 'index.html').read_text(encoding='utf-8')
head = re.search(r'<head>(.*)</head>', index, re.S).group(1)
head = head.replace('<link rel="stylesheet" href="css/style.css">',
                    '<style>\n%s\n.route[hidden]{display:none}\n</style>' % (ROOT / 'css/style.css').read_text(encoding='utf-8'))
head = inline_imgs(head)

spa = """
window.FIORE_SPA = (function () {
  var routes = %s, titles = %s;
  function parse() {
    var m = location.hash.match(/^#\\/([a-z0-9]+)(?:\\/(.*))?$/);
    var r = m && routes.indexOf(m[1]) > -1 ? m[1] : 'index';
    return { route: r, sub: m && m[2] ? decodeURIComponent(m[2]) : '' };
  }
  return {
    img: %s,
    routes: routes, titles: titles, parse: parse,
    sub: function () { var p = parse(); return p.route === 'seires' ? p.sub : ''; },
    hash: function (r, sub) { return '#/' + r + (sub ? '/' + sub : ''); }
  };
})();
""" % (json.dumps([n for n, _ in PAGES]), json.dumps(titles, ensure_ascii=False), json.dumps(images))

router = r"""
(function () {
  var SPA = window.FIORE_SPA;
  var current = null;
  function show() {
    var p = SPA.parse();
    var changed = p.route !== current;
    current = p.route;
    Array.prototype.forEach.call(document.querySelectorAll('.route'), function (el) {
      el.hidden = el.getAttribute('data-route') !== p.route;
      if (!el.hidden) document.body.setAttribute('data-page', el.getAttribute('data-key'));
    });
    document.title = SPA.titles[p.route];
    Array.prototype.forEach.call(document.querySelectorAll('.nav-links a, .nav-cta a'), function (a) {
      var m = (a.getAttribute('href') || '').match(/^([a-z0-9]+)\.html$/);
      if (m && m[1] === p.route) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    document.body.classList.remove('menu-open');
    var modal = document.querySelector('.modal.open');
    if (modal) { modal.classList.remove('open'); document.body.classList.remove('lock'); }
    var target = p.sub && p.route !== 'seires' && document.getElementById(p.sub);
    if (target) target.scrollIntoView({ behavior: changed ? 'auto' : 'smooth' });
    else if (changed) window.scrollTo(0, 0);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank') return;
    var href = a.getAttribute('href');
    var m = href.match(/^([a-z0-9]+)\.html(?:#(.*))?$/);
    if (m && SPA.routes.indexOf(m[1]) > -1) {
      e.preventDefault();
      location.hash = SPA.hash(m[1], m[2]);
    } else if (/^#[A-Za-z][\w-]*$/.test(href)) {
      e.preventDefault();
      var h = SPA.hash(SPA.parse().route, href.slice(1));
      if (location.hash === h) show(); else location.hash = h;
    }
  });
  window.addEventListener('hashchange', show);
  show();
})();
"""

out = """<!doctype html>
<html lang="el">
<head>%s</head>
<body data-page="home">
<header id="site-header"></header>

<main>
%s
</main>

<footer id="site-footer"></footer>
<script>%s</script>
<script>%s</script>
<script>%s</script>
<script>%s</script>
</body>
</html>
""" % (head, '\n'.join(routes), spa,
       (ROOT / 'js/data.js').read_text(encoding='utf-8'),
       inline_imgs((ROOT / 'js/main.js').read_text(encoding='utf-8')),
       router)

OUT.parent.mkdir(exist_ok=True)
OUT.write_text(out, encoding='utf-8')
print('%s  %.2f MB  (%d εικόνες, %d σελίδες)' % (OUT.relative_to(ROOT), OUT.stat().st_size / 1e6, len(images), len(PAGES)))
