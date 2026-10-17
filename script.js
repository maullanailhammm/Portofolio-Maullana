
/* ===== EDITABLE CONTENT — update here, no need to touch the design ===== */
const DATA = {
  email: "maullanailham65@gmail.com",
  stats: [
    { value: 3, suffix: "", label: "Selected projects" },
    { value: "3.61", suffix: "", label: "GPA" },
    { value: 7, suffix: "th", label: "Semester" }
  ],
  skills: ["Python", "PHP", "JavaScript", "Dart", "Flutter", "Laravel", "Supabase", "Firebase", "Pandas", "Scikit-learn", "Streamlit", "Plotly"],
  projects: [
    {
      name: "Fishllet Marketplace", category: "Mobile application",
      description: "A mobile marketplace for fish and seafood products. Built with Flutter, with Supabase for products, stock, users, and orders, Firebase for notifications, and map-based delivery tracking, so buying, order handling, and shipment monitoring stay simple and structured.",
      tech: ["Flutter", "Dart", "Supabase", "Firebase", "Kotlin", "Java", "Gradle", "SQL"],
      images: [{ src: "fishllet.png", alt: "Fishllet marketplace app screens" }],
      demo: "", source: ""
    },
    {
      name: "PetCare Platform", category: "Full-stack web application",
      description: "A web platform for pet care services with an admin side to manage users, pets, services, staff teams, and appointments, making booking and service management easier and more organized.",
      tech: ["PHP", "Laravel 10", "Blade", "JavaScript", "HTML", "CSS", "SQL", "JSON"],
      images: [{ src: "petcare.png", alt: "PetCare platform interface" }],
      demo: "", source: ""
    },
    {
      name: "FAOLEX Food Analysis", category: "Data analysis & NLP dashboard",
      description: "Analysis of FAOLEX food and agriculture regulations to find patterns by subject, country, language, and year, presented in an interactive dashboard. Methods: exploration, aggregation, visualization, TF-IDF, and Decision Tree classification.",
      tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Plotly", "Streamlit"],
      metrics: [{ value: 40530, label: "Documents" }, { value: 453, label: "Countries / regions" }, { value: 191, label: "Languages" }],
      insight: "Food and nutrition is the dominant subject, and document volume rises sharply from around the year 2000.",
      images: [
        { src: "faolex-food-dashboard.png", alt: "FAOLEX Food dashboard overview" },
        { src: "fao lex-waktu-model.png", alt: "Document timeline and classification model evaluation" }
      ],
      demo: "", source: ""
    }
  ],
  stack: [
    { title: "Programming", items: ["Python", "PHP", "JavaScript", "Dart", "Kotlin", "Java"] },
    { title: "Web Development", items: ["HTML & CSS", "Laravel 10 / Blade", "REST API", "JSON"] },
    { title: "Mobile", items: ["Flutter", "Firebase notifications", "Map & delivery tracking"] },
    { title: "AI & Data Science", items: ["Data exploration", "TF-IDF & Decision Tree", "Pandas · NumPy · Scikit-learn", "Plotly · Streamlit"] },
    { title: "Database & Tools", items: ["SQL · Supabase", "Git & GitHub", "VS Code", "Android Studio"] }
  ],
  journey: [
    { tag: "Base", title: "Informatics at UMM", text: "Undergraduate studies in Informatics, building foundations in programming, databases, and software engineering." },
    { tag: "Web", title: "PetCare Platform", text: "First full-stack build with Laravel, including an admin side for managing services and appointments." },
    { tag: "Mobile", title: "Fishllet Marketplace", text: "Cross-platform app with Flutter, Supabase, Firebase, and delivery tracking." },
    { tag: "Data", title: "FAOLEX Food Analysis", text: "Exploratory analysis, text features, and an interactive Streamlit dashboard." },
    { tag: "Now", title: "Semester 7 · GPA 3.61", text: "Open to internships, freelance work, and collaboration." }
  ]
};
/* ======================================================================= */

(function () {
  var $ = function (s) { return document.querySelector(s) }, esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;') };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* render data */
  if ($('#stats')) $('#stats').innerHTML = DATA.stats.map(function (s) { return '<li><b>' + esc(s.value) + esc(s.suffix || '') + '</b><span class="label">' + esc(s.label) + '</span></li>' }).join('');
  var tk = DATA.skills.concat(DATA.skills).map(function (s) { return '<span>' + esc(s) + '</span>' }).join('');
  if ($('#ticker')) $('#ticker').innerHTML = tk;
  if ($('#count')) $('#count').textContent = String(DATA.projects.length).padStart(2, '0') + ' projects';
  if ($('#projects')) $('#projects').innerHTML = DATA.projects.map(function (p, i) {
    var imgs = p.images.map(function (m) { return '<img src="' + encodeURI(m.src) + '" alt="' + esc(m.alt) + '" loading="lazy">' }).join('');
    var met = p.metrics ? '<div class="metrics">' + p.metrics.map(function (m) { return '<div><b data-n="' + m.value + '">' + m.value.toLocaleString('en-US') + '</b><span class="label">' + esc(m.label) + '</span></div>' }).join('') + '</div>' : '';
    var links = (p.demo || p.source) ? '<div class="plinks">' + (p.demo ? '<a href="' + esc(p.demo) + '" target="_blank" rel="noopener noreferrer">Live demo ↗</a>' : '') + (p.source ? '<a href="' + esc(p.source) + '" target="_blank" rel="noopener noreferrer">Source code ↗</a>' : '') + '</div>' : '';
    return '<article class="work rv" tabindex="0"><div class="shot' + (p.images.length > 1 ? ' duo' : '') + '">' + imgs + '</div><div class="info"><div class="num" aria-hidden="true">' + String(i + 1).padStart(2, '0') + '</div><h3>' + esc(p.name) + '</h3><p class="cat">' + esc(p.category) + '</p><p class="d">' + esc(p.description) + '</p>' + met + (p.insight ? '<p class="insight"><strong>Key insight:</strong> ' + esc(p.insight) + '</p>' : '') + '<ul class="chips">' + p.tech.map(function (t) { return '<li>' + esc(t) + '</li>' }).join('') + '</ul>' + links + '</div></article>';
  }).join('');
  var iconSlugs = {
    "Python": "python", "PHP": "php", "JavaScript": "javascript", "Dart": "dart", "Flutter": "flutter", "Kotlin": "kotlin", "Java": "openjdk",
    "HTML & CSS": "html5", "Laravel 10 / Blade": "laravel", "REST API": "fastapi", "JSON": "json", "Firebase notifications": "firebase",
    "Map & delivery tracking": "mapbox", "Data exploration": "pandas", "TF-IDF & Decision Tree": "scikitlearn",
    "Pandas · NumPy · Scikit-learn": "pandas", "Plotly · Streamlit": "plotly", "SQL · Supabase": "supabase", "Git & GitHub": "git",
    "VS Code": "visualstudiocode", "Android Studio": "androidstudio"
  };
  var iconFallback = function (label) { return label.replace(/[^A-Za-z0-9]/g, '').slice(0, 2).toUpperCase() || '•' };
  if ($('#stackGrid')) $('#stackGrid').innerHTML = DATA.stack.map(function (g, i) { return '<div class="rv" style="--d:' + (i % 3) + '"><span class="label">' + String(i + 1).padStart(2, '0') + '</span><h3>' + esc(g.title) + '</h3><ul>' + g.items.map(function (x) { var slug = iconSlugs[x], src = slug ? 'https://cdn.simpleicons.org/' + slug + '/F2ECE8' : ''; return '<li><span class="stack-item">' + (src ? '<img class="stack-icon" src="' + src + '" alt="" loading="eager" decoding="async" onerror="this.classList.add(\'is-missing\')">' : '<span class="stack-fallback" aria-hidden="true">' + iconFallback(x) + '</span>') + (src ? '<span class="stack-fallback" aria-hidden="true">' + iconFallback(x) + '</span>' : '') + '<span>' + esc(x) + '</span></span></li>' }).join('') + '</ul></div>' }).join('');
  if ($('#journeyList')) $('#journeyList').innerHTML = DATA.journey.map(function (j) { return '<div class="step rv"><b>' + esc(j.tag) + '</b><h3>' + esc(j.title) + '</h3><p>' + esc(j.text) + '</p></div>' }).join('');
  if ($('#mail')) { $('#mail').href = 'mailto:' + DATA.email; $('#mail').textContent = DATA.email }
  if ($('#year')) $('#year').textContent = new Date().getFullYear();
  var particleRoot = $('#heroParticles');
  if (particleRoot && !reduce) {
    for (var pi = 0; pi < 14; pi++) {
      var particle = document.createElement('i');
      particle.style.setProperty('--left', (8 + (pi * 29) % 86) + '%');
      particle.style.setProperty('--top', (18 + (pi * 47) % 70) + '%');
      particle.style.setProperty('--drift', ((pi % 2 ? '' : '-') + (8 + (pi % 5) * 5)) + 'px');
      particle.style.setProperty('--duration', (7 + (pi % 5) * 1.5) + 's');
      particle.style.setProperty('--delay', (-((pi % 7) * 1.1)) + 's');
      particleRoot.appendChild(particle);
    }
  }

  /* shared cosmic background: one lightweight canvas for every section and the loader */
  (function cosmicBackground() {
    var canvas = $('#cosmicCanvas'), ctx = canvas && canvas.getContext('2d');
    if (!canvas || !ctx) return;
    var dpr = 1, width = 0, height = 0, stars = [], nodes = [], shooters = [], ripples = [], pointer = { x: .5, y: .5, tx: .5, ty: .5 }, raf = 0, last = 0, nextShot = 0;
    var palette = ['#6f0b18', '#b80f20', '#e22a38', '#f2d8cf'];
    function random(min, max) { return Math.random() * (max - min) + min }
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.min(width < 650 ? 54 : width < 1000 ? 82 : 118, Math.max(42, Math.round(width * height / 12000)));
      stars = []; nodes = [];
      for (var i = 0; i < count; i++)stars.push({ x: Math.random(), y: Math.random(), r: random(.5, 1.7), a: random(.38, .95), speed: random(.35, 1.15), phase: random(0, Math.PI * 2), color: palette[Math.floor(Math.random() * palette.length)], depth: random(.25, 1) });
      var nodeCount = width < 650 ? 8 : width < 1000 ? 12 : 18;
      for (var n = 0; n < nodeCount; n++)nodes.push({ x: random(.04, .96), y: random(.08, .92), r: random(.7, 1.8), depth: random(.35, 1) });
      shooters = [];
      ripples = [];
      nextShot = performance.now() + random(2200, 5200);
    }
    function sectionMood() {
      var ids = ['home', 'about', 'work', 'stack', 'journey', 'contact'], mid = scrollY + height * .42, active = 'home';
      ids.forEach(function (id) { var el = document.getElementById(id); if (el && mid >= el.offsetTop) active = id });
      return { hero: active === 'home', network: active === 'home' || active === 'stack', contact: active === 'contact' };
    }
    function draw(now) {
      if (document.hidden) { raf = 0; return }
      var delta = Math.min(40, now - last || 16); last = now;
      pointer.x += (pointer.tx - pointer.x) * .035; pointer.y += (pointer.ty - pointer.y) * .035;
      ctx.clearRect(0, 0, width, height);
      var mood = sectionMood(), px = (pointer.x - .5) * 18, py = (pointer.y - .5) * 14, breath = Math.sin(now * .00018) * .5 + .5;
      var nebulaX = width * (.68 + Math.sin(now * .00011) * .06) + px * .9, nebulaY = height * (.37 + Math.cos(now * .00014) * .045) + py * .7;
      var nebula = ctx.createRadialGradient(nebulaX, nebulaY, 0, nebulaX, nebulaY, width * (.5 + breath * .12));
      nebula.addColorStop(0, 'rgba(185,8,28,' + (mood.hero ? .16 : .065) + ')'); nebula.addColorStop(.42, 'rgba(100,5,18,.08)'); nebula.addColorStop(1, 'rgba(7,4,5,0)');
      ctx.fillStyle = nebula; ctx.fillRect(0, 0, width, height);
      var edge = ctx.createRadialGradient(width * .02 - px, height * .86 - py, 0, width * .02 - px, height * .86 - py, width * .45);
      edge.addColorStop(0, 'rgba(211,16,31,' + (mood.contact ? .16 : .07) + ')'); edge.addColorStop(1, 'rgba(7,4,5,0)');
      ctx.fillStyle = edge; ctx.fillRect(0, 0, width, height);
      stars.forEach(function (s) {
        var twinkle = s.a * (.62 + .38 * Math.sin(now * .001 * s.speed + s.phase)), x = s.x * width + px * s.depth, y = s.y * height + py * s.depth;
        if (x < 0) x += width; if (x > width) x -= width; if (y < 0) y += height; if (y > height) y -= height;
        var cursorDistance = Math.hypot(x - pointer.x * width, y - pointer.y * height);
        if (cursorDistance < 110) { var push = (1 - cursorDistance / 110) * 7; x += (x - pointer.x * width) / (cursorDistance || 1) * push; y += (y - pointer.y * height) / (cursorDistance || 1) * push }
        ctx.globalAlpha = twinkle * (mood.hero ? 1 : .88); ctx.fillStyle = s.color; ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2); ctx.fill();
        if (s.r > 1.05) { ctx.globalAlpha = twinkle * (mood.hero ? .28 : .14); ctx.beginPath(); ctx.arc(x, y, s.r * 4.5, 0, Math.PI * 2); ctx.fill() }
      });
      if (!reduce && ripples.length) {
        ctx.lineWidth = 1;
        ripples = ripples.filter(function (r) {
          r.life += delta;
          var p = Math.min(1, r.life / r.max), radius = 18 + p * 170;
          ctx.globalAlpha = (1 - p) * .55; ctx.strokeStyle = '#e22a38'; ctx.beginPath(); ctx.arc(r.x, r.y, radius, 0, Math.PI * 2); ctx.stroke();
          ctx.globalAlpha = (1 - p) * .22; ctx.fillStyle = '#b80f20'; ctx.beginPath(); ctx.arc(r.x, r.y, radius * .32, 0, Math.PI * 2); ctx.fill();
          return p < 1;
        });
      }
      if (mood.hero && !reduce) {
        if (now > nextShot && shooters.length < 2) {
          shooters.push({ x: random(.12, .82), y: random(.1, .52), vx: random(.42, .72), vy: random(.16, .3), life: 0, max: random(720, 1150), width: random(38, 82), depth: random(.45, 1) });
          nextShot = now + random(3600, 7600);
        }
        ctx.lineCap = 'round';
        shooters = shooters.filter(function (s) {
          s.life += delta; s.x += s.vx * delta / 1000; s.y += s.vy * delta / 1000;
          var fade = Math.min(1, s.life / 180) * Math.min(1, (s.max - s.life) / 220);
          if (fade <= 0) return false;
          var sx = s.x * width + px * s.depth, sy = s.y * height + py * s.depth, ex = sx - s.vx * s.width, ey = sy - s.vy * s.width;
          var trail = ctx.createLinearGradient(ex, ey, sx, sy);
          trail.addColorStop(0, 'rgba(211,16,31,0)'); trail.addColorStop(.72, 'rgba(211,16,31,' + (fade * .38) + ')'); trail.addColorStop(1, 'rgba(242,216,207,' + (fade * .95) + ')');
          ctx.globalAlpha = 1; ctx.strokeStyle = trail; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(sx, sy); ctx.stroke();
          return s.life < s.max;
        });
      }
      if (mood.hero) {
        var orbitX = width * .58 + px * .55, orbitY = height * .45 + py * .4;
        ctx.save(); ctx.translate(orbitX, orbitY); ctx.rotate(-.18 + Math.sin(now * .00012) * .06); ctx.scale(1, .28);
        ctx.globalAlpha = .18; ctx.strokeStyle = '#D3101F'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(0, 0, Math.min(width * .3, 380), 0, Math.PI * 2); ctx.stroke();
        ctx.globalAlpha = .1; ctx.beginPath(); ctx.arc(0, 0, Math.min(width * .39, 500), 0, Math.PI * 2); ctx.stroke(); ctx.restore();
      }
      var drift = now * .000012;
      nodes.forEach(function (n) { n._x = (n.x + drift * n.depth) % 1; n._y = n.y + Math.sin(now * .00035 + n.x * 8) * .012; });
      if (mood.network) {
        ctx.lineWidth = .55; ctx.strokeStyle = 'rgba(211,16,31,.18)';
        nodes.forEach(function (a, i) { nodes.slice(i + 1).forEach(function (b) { var dx = (a._x - b._x) * width, dy = (a._y - b._y) * height, dist = Math.hypot(dx, dy); if (dist < Math.min(width * .2, 180)) { ctx.globalAlpha = (1 - dist / Math.min(width * .2, 180)) * .5; ctx.beginPath(); ctx.moveTo(a._x * width + px * a.depth, a._y * height + py * a.depth); ctx.lineTo(b._x * width + px * b.depth, b._y * height + py * b.depth); ctx.stroke() } }) });
        nodes.forEach(function (n) { ctx.globalAlpha = .45; ctx.fillStyle = '#D3101F'; ctx.beginPath(); ctx.arc(n._x * width + px * n.depth, n._y * height + py * n.depth, n.r, 0, Math.PI * 2); ctx.fill() });
      }
      if (mood.hero && !reduce) {
        var waveBase = height * .91 + Math.sin(now * .0003) * 4;
        ctx.globalAlpha = .16; ctx.strokeStyle = '#D3101F'; ctx.lineWidth = .7;
        for (var wi = 0; wi < 3; wi++) {
          ctx.beginPath();
          for (var wx = 0; wx <= width; wx += Math.max(14, width / 70)) {
            var wy = waveBase + wi * 12 + Math.sin(wx * .018 + now * .00045 + wi) * 5 + Math.sin(wx * .006 - now * .00028) * 4;
            if (wx === 0) ctx.moveTo(wx, wy); else ctx.lineTo(wx, wy);
          }
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
      if (!reduce) raf = requestAnimationFrame(draw);
    }
    resize();
    addEventListener('resize', resize, { passive: true });
    addEventListener('pointermove', function (e) { if (matchMedia('(hover:hover) and (pointer:fine)').matches) { pointer.tx = e.clientX / innerWidth; pointer.ty = e.clientY / innerHeight } }, { passive: true });
    addEventListener('pointerdown', function (e) {
      if (reduce || e.pointerType === 'touch') return;
      ripples.push({ x: e.clientX, y: e.clientY, life: 0, max: 900 });
      if (ripples.length > 4) ripples.shift();
      if (!raf) raf = requestAnimationFrame(draw);
    }, { passive: true });
    addEventListener('visibilitychange', function () { if (!document.hidden && !reduce && !raf) raf = requestAnimationFrame(draw) });
    draw(performance.now());
  })();

  /* photo fallback */
  var img = $('#photo img');
  function nophoto() { if ($('#photo')) $('#photo').classList.add('none') }
  img.addEventListener('error', nophoto); if (img.complete && img.naturalWidth === 0) nophoto();
  document.querySelectorAll('.shot img').forEach(function (i) { i.addEventListener('error', function () { i.style.display = 'none' }) });

  /* cinematic loader: simulated progress is capped until the hero is ready */
  var loader = $('#loader'), loaderBar = $('#loader-bar'), loaderPercent = $('#loader-percent'), loaderStatus = $('#loader-status');
  if ($('#loader-year')) $('#loader-year').textContent = new Date().getFullYear();
  function ready() {
    document.body.classList.add('ready');
    loader.classList.add('done');
  }
  function hideImmediately() { ready() }
  function heroReady() {
    var image = $('#photo img');
    var imageReady = new Promise(function (resolve) {
      if (!image || image.complete) { resolve(); return }
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
      setTimeout(resolve, 1200);
    });
    var fontReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    return Promise.all([imageReady, fontReady]);
  }
  if (reduce) hideImmediately();
  else {
    var progress = 0, finished = false, start = performance.now();
    function paint(value) {
      progress = Math.max(progress, Math.min(100, value));
      loaderBar.style.width = progress + '%';
      loaderPercent.textContent = String(Math.round(progress)).padStart(2, '0') + '%';
      loaderStatus.textContent = progress < 35 ? 'Initializing digital experience' : progress < 72 ? 'Designing the experience' : progress < 96 ? 'Preparing the hero' : 'Welcome to the portofolio';
    }
    function finish() {
      if (finished) return;
      finished = true;
      paint(100);
      loaderStatus.textContent = 'Welcome to the portofolio';
      setTimeout(ready, 300);
    }
    function tick(now) {
      if (finished) return;
      var elapsed = now - start;
      var target = elapsed < 500 ? Math.min(52, elapsed / 500 * 52) : Math.min(91, 52 + (elapsed - 500) / 1500 * 39);
      paint(target);
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    heroReady().then(function () {
      var settle = progress;
      var started = performance.now();
      function complete(now) {
        var t = Math.min(1, (now - started) / 350);
        paint(settle + (100 - settle) * t);
        if (t < 1) requestAnimationFrame(complete); else finish();
      }
      requestAnimationFrame(complete);
    });
    setTimeout(finish, 3000);
  }

  /* nav */
  var top = $('#top'), prog = $('#progress'), giant = $('#giant'), photo = $('#photo'), desk = matchMedia('(min-width:821px)');
  var ticking = false;
  function onScroll() {
    var y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    if (top) top.classList.toggle('solid', y > 40);
    if (prog) prog.style.transform = 'scaleX(' + (h > 0 ? y / h : 0) + ')';
    if (!reduce && desk.matches && y < innerHeight * 1.2) {
      if (giant) giant.style.setProperty('--sy', (y * .18) + 'px');
      if (photo) photo.style.setProperty('--py', (y * -.06) + 'px');
    } else if (!desk.matches) {
      if (giant) giant.style.setProperty('--sy', '0px');
      if (photo) photo.style.setProperty('--py', '0px');
    }
    ticking = false;
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll) } }, { passive: true }); onScroll();
  var burger = $('#burger'), links = $('#links');
  if (!burger || !links) return;
  burger.addEventListener('click', function () { var o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); burger.textContent = o ? 'CLOSE' : 'MENU' });
  links.addEventListener('click', function (e) { if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.textContent = 'MENU' } });
  addEventListener('keydown', function (e) { if (e.key === 'Escape' && links.classList.contains('open')) burger.click() });

  /* active link */
  var anchors = [].slice.call(links.querySelectorAll('a'));
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) anchors.forEach(function (a) { a.classList.toggle('act', a.getAttribute('href') === '#' + e.target.id) }) }) }, { rootMargin: '-45% 0px -50% 0px' });
    ['home', 'about', 'work', 'stack', 'journey', 'contact'].forEach(function (id) { var section = document.getElementById(id); if (section) so.observe(section) });
  }

  /* reveal + counters */
  function count(el) {
    var t = +el.dataset.n; if (reduce) return; var t0 = null;
    (function f(ts) { if (!t0) t0 = ts; var p = Math.min((ts - t0) / 1400, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(t * e).toLocaleString('en-US'); if (p < 1) requestAnimationFrame(f) })(performance.now());
  }
  var rvs = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var ro = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('show'); e.target.querySelectorAll('[data-n]').forEach(count); ro.unobserve(e.target) } }) }, { threshold: .12 });
    rvs.forEach(function (el) { ro.observe(el) });
  } else rvs.forEach(function (el) { el.classList.add('show') });

  /* copy email */
  if ($('#copy')) $('#copy').addEventListener('click', function () {
    var t = $('#toast');
    function ok(m) { t.textContent = m; t.classList.add('on'); setTimeout(function () { t.classList.remove('on') }, 1800) }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(DATA.email).then(function () { ok('Email copied') }, function () { ok('Copy failed — select the email above') }) }
    else ok('Copy not supported — select the email above');
  });

  /* desktop-only: custom cursor + magnetic CTA */
  if (reduce || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var cur = $('#cursor'), cx = 0, cy = 0, tx = 0, ty = 0;
  document.body.classList.add('cur');
  var hero = $('#home'), heroX = 0, heroY = 0;
  addEventListener('pointermove', function (e) {
    tx = e.clientX; ty = e.clientY; cur.classList.add('on');
    if (hero) {
      var hr = hero.getBoundingClientRect();
      if (e.clientY >= hr.top && e.clientY <= hr.bottom) {
        heroX = ((e.clientX - hr.left) / hr.width - .5) * 18;
        heroY = ((e.clientY - hr.top) / hr.height - .5) * 12;
        hero.style.setProperty('--mx', heroX.toFixed(2) + 'px');
        hero.style.setProperty('--my', heroY.toFixed(2) + 'px');
      }
    }
  }, { passive: true });
  (function loop() { cx += (tx - cx) * .2; cy += (ty - cy) * .2; cur.style.left = cx + 'px'; cur.style.top = cy + 'px'; requestAnimationFrame(loop) })();
  document.querySelectorAll('a,button,.work').forEach(function (el) {
    el.addEventListener('pointerenter', function () { cur.classList.add('big') });
    el.addEventListener('pointerleave', function () { cur.classList.remove('big') });
  });
  document.querySelectorAll('.mag').forEach(function (b) {
    b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); b.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * .2) + 'px,' + ((e.clientY - r.top - r.height / 2) * .3) + 'px)' });
    b.addEventListener('pointerleave', function () { b.style.transform = '' });
  });
})();
