/* ===== Data ===== */
const U = (id, w = 1200) => id.includes('/') ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
const PHONE = '+91 6372804719', TEL = 'tel:+916372804719';
const ADDR = 'Plot No-120/122, NH-5, PO-Pahal, Opposite to Utkal Heights, Bhubaneswar, Odisha 752101, India';
const MAP = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Niyati Udyog Pvt Ltd, NH-5, Pahal, Bhubaneswar, Odisha 752101');

const PRODUCTS = [
  { id: 'neosteel', n: 'JSW NeoSteel', c: 'TMT Reinforcement Bars', img: 'assets/tmt-hero.jpg', alt: 'JSW NeoSteel ribbed TMT reinforcement bars',
    d: 'TMT reinforcement bars for RCC construction. NUPL is an authorised distributor of JSW NeoSteel in Odisha.',
    t: 'Strength That Supports Every Structure.',
    u: ['Residential buildings', 'Commercial complexes', 'Industrial structures', 'Foundations and columns', 'Beams and slabs', 'Infrastructure projects'] },
  { id: 'onetmt', n: 'JSW One TMT', c: 'TMT Bars', img: '1504307651254-35680f356dfd', alt: 'Tied steel reinforcement grid for a concrete slab on site',
    d: 'TMT reinforcement steel for construction and infrastructure requirements.',
    u: ['Slabs, beams and columns', 'Foundations', 'Infrastructure requirements'] },
  { id: 'colouron', n: 'JSW Colouron+', c: 'Colour-Coated Roofing Sheets', img: '1587293852726-70cdb56c2866', alt: 'Industrial warehouse clad in colour-coated metal roofing sheets',
    d: 'Colour-coated roofing sheets made from pure steel, with anti-corrosion technology and a protective paint system designed to resist early corrosion and support roof life. Suitable for industrial, commercial and residential applications.',
    u: ['Industrial sheds', 'Commercial buildings', 'Residential roofing'] },
  { id: 'finolex', n: 'Finolex', c: 'Pipes, Wires and Cables', img: '1621905251189-08b45d6a269e', alt: 'PVC pipes and coiled electrical wires on store shelves',
    d: 'Product solutions for plumbing, electrical and building infrastructure requirements.',
    u: ['Plumbing lines', 'Electrical wiring', 'Building infrastructure'] },
  { id: 'cement', n: 'JSW Cement', c: 'Cement', img: '1508450859948-4e04fabaa4ea', alt: 'Concrete being poured into column formwork at a residential site',
    d: 'Cement products and solutions supporting homebuilders throughout the construction journey, with a focus on strength, durability and environmentally conscious construction.',
    u: ['Residential construction', 'Commercial projects', 'Infrastructure works'] },
  { id: 'paints', n: 'JSW Paints', c: 'Paints and Coatings', img: '1513694203232-719a280e022f', alt: 'Living room finished with warm terracotta and grey painted walls',
    d: 'Decorative paints and coatings with JSW Paints’ ‘Any Colour – One Price’ brand promise. Aquaglo is a water-based, low-odour, quick-drying finish designed to retain its shine. Confirm current product options and pricing with NUPL.',
    u: ['Interior walls', 'Exterior finishes', 'Commercial spaces'] },
];

const SEGMENTS = [
  { id: 'dealers', n: 'Dealers and Retailers', img: '1586528116311-ad8dd3c8310d', alt: 'Building materials dealer shop stocked with cement, pipes and steel',
    d: 'Retail counters need a dependable source across categories. NUPL handles enquiries for steel, cement, roofing, pipes, cables and paints so dealers can plan stock with one point of contact.',
    r: ['TMT bars', 'Cement', 'Pipes and cables', 'Paints'] },
  { id: 'homes', n: 'Individual House Builders', img: '1600585154340-be6161a56a0c', alt: 'Newly built two-storey family house at dusk',
    d: 'Building a home means sourcing many materials at different stages. We help home builders enquire for everything from foundations to finishing in one place.',
    r: ['TMT bars', 'Cement', 'Plumbing and wiring', 'Paints'] },
  { id: 'contractors', n: 'Contractors and Builders', img: '1503387762-592deb58ef4e', alt: 'Contractor and engineer reviewing drawings on a building site',
    d: 'Contractors work to schedules and drawings. We coordinate quotations and supply enquiries for the quantities and categories each project stage requires.',
    r: ['Reinforcement steel', 'Cement', 'Roofing sheets', 'Pipes and cables'] },
  { id: 'infra', n: 'Infrastructure Developers', img: '1535732759880-bbd5c7265e3f', alt: 'Highway flyover under construction at sunset',
    d: 'Infrastructure works call for structural materials in planned volumes. NUPL supports enquiries for reinforcement steel and cement aligned to project requirements.',
    r: ['TMT reinforcement bars', 'Cement'] },
  { id: 'industrial', n: 'Industrial and Institutional Buyers', img: '1486406146926-c627a92ad1ab', alt: 'Modern industrial and institutional building with glass facade',
    d: 'Factories, campuses and institutions need materials for new builds, expansions and maintenance. We handle enquiries across structural, roofing, electrical and finishing categories.',
    r: ['Colour-coated roofing', 'Wires and cables', 'Paints and coatings', 'Steel'] },
];

const ICON = {
  grid: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.5 7 22l5-3 5 3-1.2-8.5"/>',
  layers: '<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  build: '<path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
};
const ic = (k, s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICON[k]}</svg>`;
const AR = '<span class="ar">→</span>';

const WHY = [
  ['grid', 'Multiple material categories', 'Steel, cement, roofing, pipes, cables and paints under one roof.'],
  ['award', 'Established product brands', 'Products from recognised names including JSW and Finolex.'],
  ['layers', 'Integrated sourcing enquiries', 'Raise one enquiry for several categories instead of many.'],
  ['chat', 'Customer-oriented service', 'Direct communication with a team that understands construction.'],
  ['truck', 'Supply coordination', 'We coordinate confirmed orders from quotation through supply.'],
  ['build', 'Support for varied projects', 'From a single home to commercial and infrastructure works.'],
];
const STEPS = [
  ['Customer Requirement', 'Share what you are building and the materials you need.'],
  ['Product Enquiry', 'We review the brands, categories and quantities involved.'],
  ['Quotation', 'You receive a quotation for the requested products.'],
  ['Order Confirmation', 'Once you approve, the order is confirmed with you.'],
  ['Supply Coordination', 'We coordinate supply of the confirmed materials.'],
];
const TESTI = [
  ['I recently purchased JSW Steel from Niyati Udyog for our Allure Agro Dragon Fruit farm in Odisha and I couldn\'t be happier with both the quality of the product and the service provided. The distribution company was highly professional and efficient, ensuring a smooth and timely delivery of the steel. I would highly recommend both the JSW Steel and Niyati Udyog to anyone in need of top-notch quality products and excellent service.', 'Allure Agro', 'Business'],
  ['Overall, I highly recommend Niyati Udyog for their excellent steel quality and top-notch service. Their dedication to customer satisfaction sets them apart, and I look forward to continuing my business relationship with them.', 'Sitansu Sekhar', 'House Owner'],
  ['I have been a client of Niyati Udyog for the past 3 years and I have always been impressed with the high quality of their JSW Neo Steel TMT rods and their excellent service. JSW TMT rods are always strong, durable, and corrosion-resistant, and they always deliver them on time and at a competitive price. I would highly recommend Niyati Udyog to anyone looking for a reliable supplier of high-quality TMT rods.', 'Himansu Steel', 'Dealer'],
];

/* ===== Templates ===== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;
const NAV = [['index.html', 'Home', 'home'], ['about.html', 'About Us', 'about'], ['products.html', 'Products & Brands', 'products', 'Products'], ['industries.html', 'Industries We Serve', 'industries', 'Industries'], ['capabilities.html', 'Our Capabilities', 'capabilities'], ['contact.html', 'Contact Us', 'contact', 'Contact']];
const img = (id, alt, w) => `<img src="${U(id, w)}" alt="${alt}" loading="lazy" onerror="this.style.opacity=0">`;

const header = `<div id="prog"></div><div class="glow"></div>
<header class="nav"><div class="wrap">
  <a href="index.html" class="logo"><span class="mark">N</span><span><b>NUPL</b><small>NIYATI UDYOG PVT. LTD.</small></span></a>
  <ul class="menu">${NAV.map(([h, t, k]) => `<li><a href="${h}" class="${k === page ? 'on' : ''}">${t}</a></li>`).join('')}</ul>
  <a href="contact.html" class="btn" data-mag>Request a Quote ${AR}</a>
  <button class="burger" aria-label="Menu"><span></span><span></span><span></span></button>
</div></header>`;

const cta = `<section class="cta-band"><div class="wrap"><div class="cta-box" data-r="z">
  <div><h2>Planning a project or restocking?</h2><p>Tell us the products and quantities you need and our team will get back to you with a quotation.</p></div>
  <a href="contact.html" class="btn" data-mag>Request a Quote ${AR}</a></div></div></section>`;

const footer = `<footer><div class="wrap"><div class="fgrid">
  <div><a href="index.html" class="logo flogo"><span class="mark">N</span><span><b>NUPL</b><small>NIYATI UDYOG PVT. LTD.</small></span></a>
    <p style="margin-top:18px">Construction-material distribution for dealers, builders, contractors and institutions in Odisha.</p>
    <div class="soc"><a href="https://www.facebook.com/NiyatiUdyogPvtLtd" target="_blank" rel="noopener" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-4 0-5 3-5 5v2H6v4h3v11h5V12h3.5l.5-4z"/></svg></a>
    <a href="https://www.linkedin.com/company/niyati-udyog-pvt-ltd/" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9z"/></svg></a></div></div>
  <div><h4>Quick Links</h4><ul>${NAV.filter(n => n[2] !== 'capabilities').map(([h, t, , s]) => `<li><a href="${h}">${s || t}</a></li>`).join('')}</ul></div>
  <div><h4>Products</h4><ul>${PRODUCTS.map(p => `<li><a href="products.html#${p.id}">${p.n}</a></li>`).join('')}</ul></div>
  <div><h4>Contact</h4><ul>
    <li>${ADDR}</li><li><a href="${TEL}">${PHONE}</a></li><li>Mon–Sat 8:00 AM – 6:00 PM</li><li>Email address to be confirmed</li>
    <li><a href="${MAP}" target="_blank" rel="noopener" class="link">Visit Us ${AR}</a></li></ul></div>
</div><div class="copy">© 2026 Niyati Udyog Pvt. Ltd. All rights reserved.</div></div></footer>`;

document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('beforeend', (document.body.dataset.nocta ? '' : cta) + footer);

/* Fill blocks */
const fill = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
fill('marq', [...PRODUCTS, ...PRODUCTS].map(p => `<a href="products.html#${p.id}"><b>${p.n}</b><span>${p.c}</span></a>`).join(''));
fill('pgrid', PRODUCTS.map((p, i) => `<article class="pcard tilt" data-r style="--d:${(i % 3) * .1}s">
  <div class="ph">${img(p.img, p.alt, 800)}<span class="tag">${p.c}</span><span class="num-badge">0${i + 1}</span></div>
  <div class="body"><h3>${p.n}</h3><p>${p.d}</p><a class="link" href="contact.html?product=${p.id}">Enquire Now ${AR}</a></div></article>`).join(''));
fill('indstrip', SEGMENTS.map((s, i) => `<a href="industries.html#${s.id}" data-r style="--d:${i * .08}s">${img(s.img, s.alt, 900)}<span><small>0${i + 1}</small>${s.n}</span></a>`).join(''));
fill('why', WHY.map(([k, t, d], i) => `<div data-r style="--d:${(i % 3) * .1}s"><span class="ic">${ic(k)}</span><h3>${t}</h3><p>${d}</p></div>`).join(''));
fill('steps', STEPS.map(([t, d], i) => `<div class="step" data-r style="--d:${i * .1}s"><div class="n">0${i + 1}</div><h3>${t}</h3><p>${d}</p></div>`).join(''));
fill('tst', `<div class="tst-track">${TESTI.map(([q, n, r]) => `<div class="tst-item"><blockquote>${q}<cite><i>${n[0]}</i><span><b>${n}</b><small>${r}</small></span></cite></blockquote></div>`).join('')}</div><div class="dots">${TESTI.map((_, i) => `<button aria-label="Slide ${i + 1}"></button>`).join('')}</div>`);
fill('plist', PRODUCTS.map((p, i) => `<a href="products.html#${p.id}" data-r style="--d:${i * .06}s"><b>${p.n}</b><span>${p.c}</span></a>`).join(''));
fill('tabs', PRODUCTS.map(p => `<a href="#${p.id}">${p.n}</a>`).join(''));
const prodHTML = (p, i) => `<div class="prod${i % 2 ? " flip" : ""}" id="${p.id}">
  <div class="tilt" data-r="${i % 2 ? 'r' : 'l'}"><div class="ph">${img(p.img, p.alt, 1100)}<span class="num-badge">0${i + 1}</span></div></div>
  <div data-r><span class="eyebrow">${p.c}</span><h2>${p.n}</h2>${p.t ? `<div class="tagline">${p.t}</div>` : ''}<p>${p.d}</p>
  <div class="uses">${p.u.map(u => `<span>${u}</span>`).join('')}</div><a class="btn" data-mag href="contact.html?product=${p.id}">Enquire Now ${AR}</a></div></div>`;
fill('p0', prodHTML(PRODUCTS[0], 0));
fill('prest', PRODUCTS.slice(1).map((p, i) => prodHTML(p, i + 1)).join(''));
fill('segs', SEGMENTS.map((s, i) => `<div class="seg" id="${s.id}">
  <div class="tilt" data-r="${i % 2 ? 'r' : 'l'}"><div class="ph">${img(s.img, s.alt, 1100)}</div></div>
  <div data-r><small>SEGMENT 0${i + 1}</small><h2>${s.n}</h2><p>${s.d}</p><h5>Typical requirements</h5>
  <ul class="req">${s.r.map(r => `<li>${r}</li>`).join('')}</ul><a class="btn" data-mag href="contact.html?segment=${s.id}">Request a quote ${AR}</a></div></div>`).join(''));
const sel = $('#product');
if (sel) {
  sel.insertAdjacentHTML('beforeend', PRODUCTS.map(p => `<option value="${p.id}">${p.n} – ${p.c}</option>`).join('') + '<option value="multiple">Multiple products</option>');
  $('#category').insertAdjacentHTML('beforeend', SEGMENTS.map(s => `<option value="${s.id}">${s.n}</option>`).join('') + '<option value="other">Other</option>');
  const q = new URLSearchParams(location.search);
  if (q.get('product')) sel.value = q.get('product');
  if (q.get('segment')) $('#category').value = q.get('segment');
}

/* ===== Hero: split words + 3D TMT bars ===== */
$$('.hero h1').forEach(h => {
  let k = 0;
  h.innerHTML = h.innerHTML.split(/(<br>|<em>.*?<\/em>|\s+)/).map(t => {
    if (!t || /^\s+$/.test(t)) return t ? ' ' : '';
    if (t === '<br>') return t;
    return `<span class="w"><span style="animation-delay:${.15 + k++ * .07}s">${t}</span></span>`;
  }).join('');
});
/* ===== Interactions ===== */
const nav = $('header.nav'), prog = $('#prog'), glow = $('.glow');
$('.burger').onclick = () => document.body.classList.toggle('open');
$$('.menu a').forEach(a => a.onclick = () => document.body.classList.remove('open'));

// reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .14, rootMargin: '0px 0px -40px' });
$$('[data-r]').forEach(el => io.observe(el));

// scroll-driven
const steps = $('#steps'), heroBg = $('.hero .bg');
let ticking = false;
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  nav.classList.toggle('solid', y > 40);
  prog.style.width = (y / h * 100) + '%';
  if (heroBg) heroBg.style.translate = `0 ${y * .35}px`;
  if (steps) {
    const r = steps.getBoundingClientRect(), p = Math.min(1, Math.max(0, (innerHeight * .8 - r.top) / (r.height + innerHeight * .3)));
    steps.style.setProperty('--p', p);
    $$('.step', steps).forEach((s, i) => s.classList.toggle('lit', p >= i / 4.2));
  }
  ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
onScroll();

// mouse: glow, hero parallax, spotlight
const tmt = $('.tmt-hero .t');
addEventListener('mousemove', e => {
  glow.style.translate = `${e.clientX}px ${e.clientY}px`;
  const mx = e.clientX / innerWidth - .5, my = e.clientY / innerHeight - .5;
  if (tmt && innerWidth > 1000) { tmt.style.transform = `rotateY(${mx * 14}deg) rotateX(${-my * 10}deg) translateZ(${40 + Math.abs(mx) * 40}px)`; tmt.style.setProperty('--gx', (mx + .5) * 100 + '%'); tmt.style.setProperty('--gy', (my + .5) * 100 + '%'); }
}, { passive: true });
$$('.dark').forEach(d => d.addEventListener('mousemove', e => {
  const r = d.getBoundingClientRect(); d.style.setProperty('--mx', e.clientX - r.left + 'px'); d.style.setProperty('--my', e.clientY - r.top + 'px');
}));

// 3D tilt
if (matchMedia('(hover:hover)').matches) {
  $$('.tilt').forEach(t => {
    const ph = $('.ph', t);
    t.addEventListener('mousemove', e => {
      const r = t.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      t.style.transition = 'transform .1s';
      t.style.transform = `perspective(1000px) rotateY(${(x - .5) * 14}deg) rotateX(${(.5 - y) * 12}deg) scale(1.02)`;
      ph.style.setProperty('--gx', x * 100 + '%'); ph.style.setProperty('--gy', y * 100 + '%');
    });
    t.addEventListener('mouseleave', () => { t.style.transition = ''; t.style.transform = ''; });
  });
  // magnetic buttons
  $$('[data-mag]').forEach(b => {
    b.addEventListener('mousemove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px,${(e.clientY - r.top - r.height / 2) * .35}px)`; });
    b.addEventListener('mouseleave', () => b.style.transform = '');
  });
}

// testimonials
const tst = $('#tst');
if (tst) {
  const track = $('.tst-track', tst), dots = $$('.dots button', tst); let i = 0, timer;
  const go = n => { i = (n + TESTI.length) % TESTI.length; track.style.transform = `translateX(-${i * 100}%)`; dots.forEach((d, k) => d.classList.toggle('on', k === i)); };
  const auto = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 15000); };
  dots.forEach((d, k) => d.onclick = () => { go(k); auto(); });
  go(0); auto();
}

// accordion
$$('.acc button').forEach(b => b.onclick = () => b.parentElement.classList.toggle('open'));

// tabs scrollspy
const tabs = $$('#tabs a');
if (tabs.length) {
  const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) tabs.forEach(a => a.classList.toggle('on', a.hash === '#' + e.target.id)); }), { rootMargin: '-40% 0px -55%' });
  PRODUCTS.forEach(p => { const el = document.getElementById(p.id); el && spy.observe(el); });
}

// contact form
const form = $('form.q');
if (form) form.addEventListener('submit', e => {
  e.preventDefault(); let ok = true;
  $$('[required]', form).forEach(f => {
    const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value)) || (f.name === 'mobile' && !/^[6-9]\d{9}$/.test(f.value.replace(/\D/g, '').slice(-10)));
    f.parentElement.classList.toggle('err', bad); if (bad) ok = false;
  });
  if (ok) { $('.ok', form).classList.add('show'); form.reset(); }
});
