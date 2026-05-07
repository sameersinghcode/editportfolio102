// =============================================================
//  RENDERER + INTERACTIONS
//  Reads from window.SITE (config.js) and builds the page.
// =============================================================

const S = window.SITE;

// apply colors from config
const root = document.documentElement;
Object.entries(S.colors).forEach(([k, v]) => root.style.setProperty(`--${k}`, v));

// nav logo
document.getElementById('navLogo').textContent = S.name;

// hero title
document.getElementById('heroTitle').innerHTML = `
  <span class="line word1 reveal d1" data-parallax="0.15">${S.hero.line1}</span>
  <span class="line word2 reveal d2" data-parallax="-0.1">${S.hero.line2.replace(' ', ' <span class="star">✦</span> ')}</span>
  <span class="line word3 reveal d3" data-parallax="0.2">${S.hero.line3}</span>
`;

// badge
const badge = document.getElementById('badge');
badge.textContent = S.available ? 'Available for projects' : S.status;
if (S.available) badge.classList.add('live');

// lede
document.getElementById('lede').innerHTML = S.hero.intro.replace(
  /(brand films, founder stories, fitness drops, music videos, crypto launches)/,
  '<em style="font-family:Instrument Serif;font-style:italic;color:var(--punch)">$1</em>'
);

// stats
document.getElementById('stats').innerHTML = S.hero.stats.map(s => `
  <div class="stat"><div class="n" data-count="${s.number}">0</div><div class="l">${s.label}</div></div>
`).join('');

// ticker
const tickerWords = [
  `BASED IN ${S.location.toUpperCase()}`,
  '700K+ YOUTUBE AUDIENCE',
  S.status.toUpperCase(),
  'BRAND FILMS · REELS · MUSIC VIDEOS'
];
document.getElementById('tickerTrack').innerHTML =
  [...tickerWords, ...tickerWords].map(w => `<span>${w}</span>`).join('');

// niches
document.getElementById('nichesTrack').innerHTML =
  [...S.niches, ...S.niches].map((n, i) => {
    const isItalic = n === n.toLowerCase();
    return `<span class="${isItalic ? 'italic' : ''}">${n}</span>`;
  }).join('');

// work cards
const workTrack = document.getElementById('workTrack');
S.work.forEach((w, i) => {
  const cls = `w${i % 7}`;
  workTrack.insertAdjacentHTML('beforeend', `
    <div class="wcard ${cls}">
      <div class="head"><span>${String(i+1).padStart(2,'0')} / ${w.category}</span><span class="tag">${w.tag}</span></div>
      <div class="vis">${w.visual}</div>
      <div class="foot">${w.title.replace(/—\s*(.+)$/, '— <em style="font-family:Instrument Serif;font-style:italic;color:var(--punch)">$1</em>')}</div>
    </div>
  `);
});

// reels
document.getElementById('reelStrip').innerHTML = S.reels.map((r, i) => `
  <div class="phone p${i % 6}">
    <div class="screen">
      <div class="top"><span><span class="dot"></span>LIVE</span><span>${r.duration}</span></div>
      <div class="center-text">${r.text}</div>
      <div class="bottom">
        <div class="handle">${r.handle}</div>
        <div class="caption">${r.caption}</div>
        <div class="stats-r"><span>♥ ${r.likes}</span><span>↗ ${r.shares}</span><span>💬 ${r.comments}</span></div>
      </div>
    </div>
  </div>
`).join('');

// shoot section
document.getElementById('shootTitle').innerHTML = S.shoot.title.replace(
  S.shoot.italic, `<em>${S.shoot.italic}</em>`
);
document.getElementById('shootIntro').textContent = S.shoot.intro;

const mosaic = document.getElementById('shootMosaic');
mosaic.innerHTML = S.shoot.photos.map((p, i) => `
  <div class="shoot-photo">
    <img src="${p.url}" alt="${p.caption}" loading="lazy" />
    <span class="signature">— Sameer ✦</span>
    <div class="overlay">
      <div class="cap">${p.caption}</div>
      <div class="loc">${p.location}</div>
    </div>
  </div>
`).join('');

// signature line at end of shoot section
mosaic.insertAdjacentHTML('afterend', `
  <div class="shoot-signature">
    <span class="by">All stills shot by</span>
    <span class="name">Sameer Singh <span class="star">✦</span></span>
  </div>
`);

// services
document.getElementById('svcGrid').innerHTML = S.services.map((s, i) => {
  const titleHTML = s.title.replace(s.italic, `<em>${s.italic}</em>`);
  return `
    <div class="svc">
      <div class="svc-num">/ ${String(i+1).padStart(2,'0')}</div>
      <h3>${titleHTML}</h3>
      <p>${s.desc}</p>
    </div>
  `;
}).join('');

// quote
function wrapWords(str, italic){
  return str.split(' ').map(w => `<span class="word">${italic ? `<span class="${italic}">${w}</span>` : w}</span>`).join(' ');
}
const q = S.quote;
const q1Words = q.line1.split(' ');
const q1Last = q1Words.pop();
const q2Words = q.line2.split(' ');
const q2LastTwo = q2Words.splice(-3).join(' ');
document.getElementById('quoteEl').innerHTML = `
  ${q1Words.map(w => `<span class="word">${w}</span>`).join(' ')} <span class="word"><span class="hi">${q1Last}</span></span><br>
  ${q2Words.map(w => `<span class="word">${w}</span>`).join(' ')} <span class="word"><span class="red">${q2LastTwo}</span></span>
`;
document.getElementById('quoteAttr').textContent = `— ${q.attr}`;

// contact
document.getElementById('contactTitle').innerHTML = `${S.contact.title1} <em>make</em><br>something <em>loud.</em>`;
document.getElementById('contactSide').innerHTML = S.contact.rows.map(r => `
  <div class="contact-row"><span>${r.label}</span><a href="${r.link}">${r.value}</a></div>
`).join('');

// footer
document.getElementById('footL').textContent = S.footer.left;
document.getElementById('footR').textContent = S.footer.right;

// =============================================================
//  INTERACTIONS — cursor, scroll, parallax, counters, reveal
// =============================================================

const cursor = document.getElementById('cursor');
let mx=0, my=0, cx=0, cy=0, big=false;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
function loopCursor(){
  cx += (mx-cx)*0.18; cy += (my-cy)*0.18;
  cursor.style.transform = `translate(${cx-7}px, ${cy-7}px) scale(${big ? 3.5 : 1})`;
  requestAnimationFrame(loopCursor);
}
loopCursor();
document.querySelectorAll('a, button, .phone, .wcard, .svc, .shoot-photo').forEach(el => {
  el.addEventListener('mouseenter', () => big = true);
  el.addEventListener('mouseleave', () => big = false);
});

const progress = document.getElementById('progress');
const niches = document.getElementById('nichesTrack');
const parallaxEls = document.querySelectorAll('[data-parallax]');
const workPin = document.querySelector('.work-pin');
const wTrack = document.getElementById('workTrack');

function onScroll(){
  const sy = window.scrollY;
  const dh = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (sy/dh*100) + '%';

  if(niches) niches.style.transform = `translateX(${-sy*0.4}px)`;

  parallaxEls.forEach(el => {
    const sp = parseFloat(el.dataset.parallax);
    el.style.transform = `translateY(${sy*sp}px)`;
  });

  if(workPin && window.innerWidth > 860){
    const start = workPin.offsetTop;
    const end = start + workPin.offsetHeight - window.innerHeight;
    if(sy >= start && sy <= end){
      const p = (sy-start)/(end-start);
      const lastCard = wTrack.querySelector('.wcard:last-child');
      const trackPadRight = parseFloat(getComputedStyle(wTrack).paddingRight) || 0;
      const tw = lastCard
        ? (lastCard.offsetLeft + lastCard.offsetWidth + trackPadRight) - window.innerWidth
        : wTrack.scrollWidth - window.innerWidth;
      wTrack.style.transform = `translateX(${-p*Math.max(0, tw)}px)`;
    } else if(sy < start){
      wTrack.style.transform = `translateX(0)`;
    }
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// stat counters
const counters = document.querySelectorAll('[data-count]');
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const el = e.target, target = parseInt(el.dataset.count);
      let cur = 0, step = Math.max(1, Math.ceil(target/40));
      const t = setInterval(() => {
        cur += step;
        if(cur >= target){ cur = target; clearInterval(t); }
        el.textContent = cur;
      }, 30);
      countObs.unobserve(el);
    }
  });
}, {threshold:0.4});
counters.forEach(c => countObs.observe(c));

// service reveal
const svcs = document.querySelectorAll('.svc');
const svcObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      const i = Array.from(svcs).indexOf(e.target);
      setTimeout(() => e.target.classList.add('in'), (i%4)*80);
      svcObs.unobserve(e.target);
    }
  });
}, {threshold:0.2});
svcs.forEach(s => svcObs.observe(s));

// quote words
const quoteWords = document.querySelectorAll('#quoteEl .word');
const quoteObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){
      quoteWords.forEach((w,i) => setTimeout(() => w.classList.add('in'), i*120));
      quoteObs.disconnect();
    }
  });
}, {threshold:0.5});
const qe = document.getElementById('quoteEl');
if(qe) quoteObs.observe(qe);
