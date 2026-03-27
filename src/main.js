import './style.css'
import mermaid from 'mermaid'

// ===== i18n: Language detection & switching =====
import { introSlides as introDE } from './sections/de/01-intro.js'
import { geschichteSlides as geschichteDE } from './sections/de/02-geschichte.js'
import { kiInternetSlides as kiInternetDE } from './sections/de/03-ki-internet.js'
import { basicsSlides as basicsDE } from './sections/de/04-basics.js'
import { handoutSlides as handoutDE } from './sections/de/05-handout.js'
import { aiCodingSlides as aiCodingDE } from './sections/de/06-ai-coding.js'
import { diskussionSlides as diskussionDE } from './sections/de/06b-diskussion.js'
import { agenticSlides as agenticDE } from './sections/de/06c-agentic.js'
import { handsonSlides as handsonDE } from './sections/de/07-handson.js'
import { deepDiveSlides as deepDiveDE } from './sections/de/08-deepdive.js'
import { abschlussSlides as abschlussDE } from './sections/de/09-abschluss.js'

import { introSlides as introEN } from './sections/en/01-intro.js'
import { geschichteSlides as geschichteEN } from './sections/en/02-geschichte.js'
import { kiInternetSlides as kiInternetEN } from './sections/en/03-ki-internet.js'
import { basicsSlides as basicsEN } from './sections/en/04-basics.js'
import { handoutSlides as handoutEN } from './sections/en/05-handout.js'
import { aiCodingSlides as aiCodingEN } from './sections/en/06-ai-coding.js'
import { diskussionSlides as diskussionEN } from './sections/en/06b-diskussion.js'
import { agenticSlides as agenticEN } from './sections/en/06c-agentic.js'
import { handsonSlides as handsonEN } from './sections/en/07-handson.js'
import { deepDiveSlides as deepDiveEN } from './sections/en/08-deepdive.js'
import { abschlussSlides as abschlussEN } from './sections/en/09-abschluss.js'

const allSlides = {
  de: [introDE, geschichteDE, kiInternetDE, basicsDE, handoutDE, aiCodingDE, diskussionDE, agenticDE, handsonDE, deepDiveDE, abschlussDE],
  en: [introEN, geschichteEN, kiInternetEN, basicsEN, handoutEN, aiCodingEN, diskussionEN, agenticEN, handsonEN, deepDiveEN, abschlussEN],
};

const sectionNames = {
  de: ['Intro', 'Geschichte', 'KI \u2013 Internet 2.0', 'Basics', 'Handout', 'AI Coding', 'Diskussion', 'Agentic AI', 'Hands-On', 'Deep Dive', 'Abschluss'],
  en: ['Intro', 'History', 'AI \u2013 The New Internet', 'Basics', 'Handout', 'AI Coding', 'Discussion', 'Agentic AI', 'Hands-On', 'Deep Dive', 'Closing'],
};

const uiStrings = {
  de: { nav: 'Navigieren', fullscreen: 'Fullscreen', back: '\u2190 Zur\u00fcck', next: 'Weiter \u2192', done: 'Fertig', navigation: 'Navigation' },
  en: { nav: 'Navigate', fullscreen: 'Fullscreen', back: '\u2190 Back', next: 'Next \u2192', done: 'Done', navigation: 'Navigation' },
};

const metaStrings = {
  de: {
    title: 'Agentic AI Workshop',
    description: 'Interaktive Pr\u00e4sentation und Self-Guided Workshop \u00fcber AI Agents, LLMs und AI-Assisted Coding. Von der Geschichte der KI bis zum Hands-On mit OpenCode.',
    lang: 'de',
  },
  en: {
    title: 'Agentic AI Workshop',
    description: 'Interactive presentation and self-guided workshop about AI Agents, LLMs and AI-Assisted Coding. From the history of AI to hands-on with OpenCode.',
    lang: 'en',
  },
};

function updateMetaTags(lang) {
  const m = metaStrings[lang] || metaStrings.en;
  document.title = m.title;
  document.documentElement.lang = m.lang;
  const setMeta = (sel, val) => { const el = document.querySelector(sel); if (el) el.setAttribute('content', val); };
  setMeta('meta[name="description"]', m.description);
  setMeta('meta[name="title"]', m.title);
  setMeta('meta[property="og:title"]', m.title);
  setMeta('meta[property="og:description"]', m.description);
  setMeta('meta[name="twitter:title"]', m.title);
  setMeta('meta[name="twitter:description"]', m.description);
}

function detectLanguage() {
  // 1. URL param ?lang=de|en
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang && allSlides[urlLang]) return urlLang;
  // 2. localStorage
  const stored = localStorage.getItem('workshop-lang');
  if (stored && allSlides[stored]) return stored;
  // 3. Browser language
  const browserLang = navigator.language?.slice(0, 2);
  if (browserLang === 'de') return 'de';
  // 4. Fallback
  return 'en';
}

let currentLang = detectLanguage();

function buildSlides(lang) {
  return allSlides[lang].flat();
}

let slides = buildSlides(currentLang);

function setLanguage(lang) {
  if (!allSlides[lang] || lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('workshop-lang', lang);
  const prevSlideId = slides[currentSlide]?.id;
  slides = buildSlides(lang);
  // Clean up everything
  document.querySelector('#app').innerHTML = '';
  document.querySelector('.nav-sections')?.remove();
  document.querySelector('.progress-bar')?.remove();
  document.querySelector('.keyboard-hint')?.remove();
  document.querySelector('.mobile-progress')?.remove();
  document.querySelector('.mobile-menu')?.remove();
  document.querySelector('.mobile-nav')?.remove();
  // Re-render
  renderSlides();
  setupIntersectionObserver();
  setupNavClicks();
  setupViewToggles();
  setupCopyButtons();
  setupQuiz();
  setupHandsonQR();
  // Re-bind start button
  const startBtn = document.getElementById('mobile-start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (isMobile()) mobileGoTo(currentSlide + 1);
      else goToSlide(currentSlide + 1, 1);
    });
  }
  // Restore position
  if (isMobile()) {
    setupMobileMode();
    const idx = prevSlideId ? slides.findIndex(s => s.id === prevSlideId) : 0;
    mobileGoTo(idx >= 0 ? idx : 0);
  } else {
    const idx = prevSlideId ? slides.findIndex(s => s.id === prevSlideId) : 0;
    if (idx >= 0) {
      document.getElementById(`slide-${idx}`)?.scrollIntoView({ behavior: 'instant' });
      updateActiveSlide(idx);
    }
  }
  // Update language selector active state
  updateMetaTags(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ===== Sections =====
const sectionDefs = [
  { start: 'welcome', nameIdx: 0 },
  { start: 'section-history', nameIdx: 1 },
  { start: 'section-everyone', nameIdx: 2 },
  { start: 'section-basics', nameIdx: 3 },
  { start: 'handout', nameIdx: 4, noDots: true },
  { start: 'section-coding', nameIdx: 5 },
  { start: 'discussion', nameIdx: 6, noDots: true },
  { start: 'section-agentic', nameIdx: 7 },
  { start: 'handson-setup', nameIdx: 8 },
  { start: 'section-deepdive', nameIdx: 9 },
  { start: 'section-closing', nameIdx: 10 },
];

function getSections() {
  const names = sectionNames[currentLang];
  return sectionDefs.map(s => ({ ...s, name: names[s.nameIdx] }));
}

function getSectionRanges() {
  const sections = getSections();
  const ranges = [];
  for (let s = 0; s < sections.length; s++) {
    const startIdx = slides.findIndex(sl => sl.id === sections[s].start);
    const endIdx = s < sections.length - 1
      ? slides.findIndex(sl => sl.id === sections[s + 1].start) - 1
      : slides.length - 1;
    ranges.push({ ...sections[s], startIdx, endIdx });
  }
  return ranges;
}

// ===== Render =====
function renderSlides() {
  const app = document.querySelector('#app');
  const sectionRanges = getSectionRanges();

  // Progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.id = 'progress-bar';
  document.body.prepend(progressBar);

  // Section navigation with sub-dots
  const nav = document.createElement('nav');
  nav.className = 'nav-sections';
  nav.id = 'nav-sections';
  nav.innerHTML = sectionRanges.map((sec, si) => {
    const dotCount = sec.endIdx - sec.startIdx + 1;
    const sectionSlides = slides.slice(sec.startIdx, sec.endIdx + 1);
    const allDesktopOnly = sectionSlides.every(s => s.desktopOnly || s.mobileOnly);
    const dots = sec.noDots ? '' : Array.from({ length: dotCount }, (_, di) => {
      const slideIdx = sec.startIdx + di;
      if (slides[slideIdx]?.mobileOnly) return '';
      const isQuiz = slides[slideIdx]?.quiz;
      const isDesktopOnly = slides[slideIdx]?.desktopOnly;
      const isSelfPacedOnly = slides[slideIdx]?.selfPacedOnly;
      const extraClass = isQuiz ? 'nav-dot-quiz' : isDesktopOnly ? 'nav-dot-desktop-only' : isSelfPacedOnly ? 'nav-dot-selfpaced-only' : '';
      const slide = slides[slideIdx];
      const altLabel = slide.labelSelfPaced;
      const labelHtml = altLabel
        ? `<span class="nav-sub-dot-label"><span class="presenter-only-text">${slide.label}</span><span class="selfpaced-only-text">${altLabel}</span></span>`
        : `<span class="nav-sub-dot-label">${slide.label}</span>`;
      return `<button class="nav-sub-dot ${extraClass}" data-slide="${slideIdx}" aria-label="${slide.label}" title="${slide.label}">${labelHtml}</button>`;
    }).join('');
    // Count visible dots per mode to hide sub-dots when <=1
    const selfPacedVisible = sectionSlides.filter(s => !s.mobileOnly && !s.desktopOnly).length;
    const presenterVisible = sectionSlides.filter(s => !s.mobileOnly && !s.quiz).length;
    const dotsClasses = [
      selfPacedVisible <= 1 ? 'hide-selfpaced' : '',
      presenterVisible <= 1 ? 'hide-presenter' : '',
    ].filter(Boolean).join(' ');
    return `
      <div class="nav-section-group ${allDesktopOnly ? 'nav-section-presenter-only' : ''}" data-section="${si}">
        <button class="nav-section-btn" data-slide="${sec.startIdx}" data-section="${si}">
          <span class="nav-section-label">${sec.name}</span>
        </button>
        ${dots ? `<div class="nav-sub-dots ${dotsClasses}">${dots}</div>` : ''}
      </div>
    `;
  }).join('');
  document.body.appendChild(nav);

  // Keyboard hint
  const ui = uiStrings[currentLang];
  const hint = document.createElement('div');
  hint.className = 'keyboard-hint';
  hint.id = 'keyboard-hint';
  hint.innerHTML = `<kbd>&darr;</kbd> <kbd>&uarr;</kbd> ${ui.nav} &nbsp;&middot;&nbsp; <kbd>F</kbd> ${ui.fullscreen}`;
  document.body.appendChild(hint);

  // Language selector (fixed top-right)
  if (!document.getElementById('lang-selector')) {
    const langSel = document.createElement('div');
    langSel.className = 'lang-selector';
    langSel.id = 'lang-selector';
    langSel.innerHTML = `
      <button class="lang-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de">DE</button>
      <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
    `;
    document.body.appendChild(langSel);
    langSel.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) setLanguage(btn.dataset.lang);
    });
  }

  // Matrix canvas (for Werbung slide)
  if (!document.getElementById('matrix-canvas')) {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    document.body.appendChild(canvas);
    initMatrixRain(canvas);
  }

  // Slides
  app.innerHTML = slides.map((slide, i) => `
    <section class="slide ${slide.theme} ${slide.quiz ? 'quiz-slide' : ''} ${slide.desktopOnly ? 'desktop-only-slide' : ''} ${slide.mobileOnly ? 'mobile-only-slide' : ''} ${slide.selfPacedOnly ? 'selfpaced-only-slide' : ''}" id="slide-${i}" data-slide-index="${i}">
      <div class="slide-content">
        ${slide.content}
      </div>
    </section>
  `).join('');
}

// ===== Navigation Logic =====
let currentSlide = 0;

function updateActiveSlide(index) {
  if (index !== currentSlide) {
    resetRevealState();
  }
  currentSlide = index;

  // Initialize spec stage when entering spec-example slide
  if (!isMobile()) {
    requestAnimationFrame(() => {
      const stage = getSpecStage();
      if (stage) {
        const initialStep = presenterMode ? parseInt(stage.dataset.step || '0') : 2;
        updateSpecStage(stage, initialStep);
        if (presenterMode) return; // skip generic reveal for this slide
      }
      if (!presenterMode) return; // no reveal system in self-paced
      // Pre-init step reveal for presenter mode
      const items = getRevealableItems();
      if (items.length > 1) {
        const anyReady = Array.from(items).some(i => i.classList.contains('reveal-ready'));
        if (!anyReady) {
          items.forEach((item, i) => {
            item.classList.add('reveal-ready');
            if (i > 0) {
              // Disable transition momentarily for instant hide
              item.style.transition = 'none';
              item.classList.add('reveal-hidden');
              // Re-enable transition after paint
              requestAnimationFrame(() => { item.style.transition = ''; });
            }
          });
        }
      }
    });
  }

  // Update URL hash
  const slideId = slides[index]?.id;
  if (slideId && window.location.hash !== `#${slideId}`) {
    history.replaceState(null, '', `#${slideId}`);
  }

  // Save progression to localStorage
  saveProgression(index);

  // Update progress bar
  const progress = ((index + 1) / slides.length) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;

  // Update section nav + sub-dots
  const sectionRanges = getSectionRanges();
  document.querySelectorAll('.nav-section-group').forEach((group, i) => {
    const sec = sectionRanges[i];
    const isActive = index >= sec.startIdx && index <= sec.endIdx;
    group.classList.toggle('active', isActive);
    group.querySelector('.nav-section-btn').classList.toggle('active', isActive);
  });
  document.querySelectorAll('.nav-sub-dot').forEach((dot) => {
    const slideIdx = parseInt(dot.dataset.slide, 10);
    dot.classList.toggle('active', slideIdx === index);
  });

  // Update nav color based on slide background
  const navEl = document.getElementById('nav-sections');
  const slideTheme = slides[index]?.theme || '';
  const isDark = slideTheme.includes('slide--dark') || slideTheme.includes('slide--primary') || slideTheme.includes('slide--hero') || slideTheme.includes('slide-werbung');
  navEl.classList.toggle('nav-on-dark', isDark);
  navEl.classList.toggle('nav-on-light', !isDark);

  // "Werbung" slide: green theme on nav + progress
  const isWerbung = slides[index]?.id === 'setup-keys';
  document.body.classList.toggle('slide-werbung', isWerbung);

  // Show language selector only on hero slide
  const langSel = document.getElementById('lang-selector');
  if (langSel) {
    const isHero = slides[index]?.id === 'hero' && !presenterMode;
    langSel.classList.toggle('hidden', !isHero);
  }

  // Slide timers (handout + discussion)
  handlePauseTimer(slides[index]?.id === 'handout');
  handleSlideTimer('discussion', slides[index]?.id === 'discussion', 15 * 60);
}

// ===== Pause Timer =====
const debugTimer = parseInt(new URLSearchParams(window.location.search).get('timer'), 10) || 0;
let pauseTimerInterval = null;
let pauseTimerSeconds = debugTimer || 20 * 60;
let pauseTimerStarted = false;

function handlePauseTimer(isHandoutVisible) {
  if (isHandoutVisible && !pauseTimerStarted && !isMobile() && presenterMode) {
    pauseTimerStarted = true;
    pauseTimerSeconds = debugTimer || 20 * 60;
    updatePauseTimerDisplay();
    pauseTimerInterval = setInterval(() => {
      pauseTimerSeconds--;
      if (pauseTimerSeconds <= 0) {
        pauseTimerSeconds = 0;
        clearInterval(pauseTimerInterval);
        pauseTimerInterval = null;
        const timerEl = document.getElementById('pause-timer');
        if (timerEl) timerEl.classList.add('pause-timer-done');
        showTimerOverlay('handout');
      }
      updatePauseTimerDisplay();
    }, 1000);
  }
}

function updatePauseTimerDisplay() {
  const display = document.getElementById('pause-timer-display');
  if (!display) return;
  const mins = Math.floor(pauseTimerSeconds / 60);
  const secs = pauseTimerSeconds % 60;
  display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  if (pauseTimerSeconds <= 0) {
    display.textContent = 'Weiter geht\u2019s!';
  }
}

function dismissConfettiOverlay() {
  const overlay = document.querySelector('.confetti-overlay');
  if (!overlay || overlay.classList.contains('confetti-fade-out')) return;
  overlay.classList.add('confetti-fade-out');
  setTimeout(() => overlay.remove(), 500);
}

// ===== Generic Slide Timers =====
const slideTimers = {};

function handleSlideTimer(name, isVisible, durationSeconds) {
  if (!presenterMode || isMobile()) return;
  if (slideTimers[name]?.started) return;
  if (!isVisible) return;

  const timerEl = document.getElementById(`${name}-timer`);
  const displayEl = document.getElementById(`${name}-timer-display`);
  if (!timerEl || !displayEl) return;

  slideTimers[name] = { started: true, seconds: debugTimer || durationSeconds, interval: null, name: name };
  const t = slideTimers[name];

  function updateDisplay() {
    const mins = Math.floor(t.seconds / 60);
    const secs = t.seconds % 60;
    displayEl.textContent = t.seconds <= 0
      ? 'Weiter geht\u2019s!'
      : `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  updateDisplay();
  t.interval = setInterval(() => {
    t.seconds--;
    if (t.seconds <= 0) {
      t.seconds = 0;
      clearInterval(t.interval);
      t.interval = null;
      timerEl.classList.add('pause-timer-done');
      showTimerOverlay(name);
    }
    updateDisplay();
  }, 1000);
}

function showTimerOverlay(timerName) {
  if (isMobile()) return;
  // Only show overlay if currently on the timer's slide
  const expectedSlideId = timerName === 'discussion' ? 'discussion' : 'handout';
  if (slides[currentSlide]?.id !== expectedSlideId) return;
  const isDiscussion = timerName === 'discussion';
  const overlay = document.createElement('div');
  overlay.className = 'confetti-overlay';
  overlay.innerHTML = `
    <div class="confetti-content">
      <div class="confetti-emoji">${isDiscussion ? '&#128172;' : '&#127881;'}</div>
      <h2 class="confetti-title">${isDiscussion ? 'Zeit ist um!' : 'Weiter geht\u2019s!'}</h2>
      <p class="confetti-sub">${isDiscussion ? 'Diskussion beenden oder verl\u00e4ngern?' : 'Pause vorbei \u2013 auf zu AI Assisted Coding'}</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        ${isDiscussion ? `
          <button class="confetti-btn" style="background:rgba(255,255,255,0.15);color:var(--color-text-on-dark);border:1px solid rgba(255,255,255,0.2)" id="timer-extend">+5 Min verl\u00e4ngern</button>
          <button class="confetti-btn" id="timer-continue">Mit Hands-On fortfahren &#128640;</button>
        ` : `
          <button class="confetti-btn" id="timer-continue">Los geht\u2019s &#128640;</button>
        `}
      </div>
    </div>
    ${!isDiscussion ? '<div class="confetti-particles" id="confetti-particles"></div>' : ''}
  `;
  document.body.appendChild(overlay);

  // Confetti particles for handout only
  if (!isDiscussion) {
    const particles = document.getElementById('confetti-particles');
    const colors = ['#ffed00', '#2f6c7a', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f7dc6f', '#bb8fce', '#ff9ff3'];
    for (let i = 0; i < 80; i++) {
      const p = document.createElement('div');
      p.className = 'confetti-piece';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDelay = Math.random() * 3 + 's';
      p.style.animationDuration = (2 + Math.random() * 3) + 's';
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.transform = `rotate(${Math.random() * 360}deg)`;
      const size = 6 + Math.random() * 10;
      p.style.width = size + 'px';
      p.style.height = size * (0.4 + Math.random() * 0.6) + 'px';
      particles.appendChild(p);
    }
  }

  // Continue button
  document.getElementById('timer-continue').addEventListener('click', () => {
    dismissConfettiOverlay();
    if (isDiscussion) {
      // Navigate to next slide (Hands-On)
      goToSlide(currentSlide + 1, 1);
    }
  });

  // Extend button (discussion only)
  const extendBtn = document.getElementById('timer-extend');
  if (extendBtn) {
    extendBtn.addEventListener('click', () => {
      dismissConfettiOverlay();
      // Restart the discussion timer with 5 more minutes
      const t = slideTimers['discussion'];
      if (t) {
        t.seconds = 5 * 60;
        t.started = true;
        const timerEl = document.getElementById('discussion-timer');
        const displayEl = document.getElementById('discussion-timer-display');
        if (timerEl) timerEl.classList.remove('pause-timer-done');
        function updateDisplay() {
          const mins = Math.floor(t.seconds / 60);
          const secs = t.seconds % 60;
          displayEl.textContent = t.seconds <= 0
            ? 'Weiter geht\u2019s!'
            : `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        }
        updateDisplay();
        t.interval = setInterval(() => {
          t.seconds--;
          if (t.seconds <= 0) {
            t.seconds = 0;
            clearInterval(t.interval);
            t.interval = null;
            timerEl.classList.add('pause-timer-done');
            showTimerOverlay('discussion');
          }
          updateDisplay();
        }, 1000);
      }
    });
  }

  // Background click dismiss
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) dismissConfettiOverlay();
  });
}

// ===== Matrix Rain =====
function initMatrixRain(canvas) {
  const ctx = canvas.getContext('2d');
  const chars = '01アイウエオカキクケコサシスセソタチツテトABCDEFGH';
  let drops = [];
  let animId = null;
  let lastTime = 0;
  const fps = 8; // slow -- ~8 frames per second

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const cols = Math.floor(canvas.width / 16);
    drops = Array.from({ length: cols }, () => Math.random() * -80);
  }

  function draw(now) {
    animId = requestAnimationFrame(draw);
    if (now - lastTime < 1000 / fps) return;
    lastTime = now;
    ctx.fillStyle = 'rgba(13,17,23,0.07)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < drops.length; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillStyle = Math.random() > 0.95 ? '#7ee2a8' : '#3fb950';
      ctx.font = '13px SF Mono, monospace';
      ctx.fillText(char, i * 16, drops[i] * 16);
      if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }

  window.addEventListener('resize', resize);
  resize();

  const observer = new MutationObserver(() => {
    if (document.body.classList.contains('slide-werbung')) {
      if (!animId) { ctx.clearRect(0, 0, canvas.width, canvas.height); animId = requestAnimationFrame(draw); }
    } else {
      if (animId) { cancelAnimationFrame(animId); animId = null; ctx.clearRect(0, 0, canvas.width, canvas.height); }
    }
  });
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
}

function goToSlide(index, direction) {
  if (index < 0 || index >= slides.length) return;
  if (isMobile()) {
    mobileGoTo(index);
  } else {
    // Skip slides based on mode
    const shouldSkip = (s) => {
      if (!s) return false;
      if (s.mobileOnly) return true;
      if (presenterMode && s.quiz) return true;
      if (presenterMode && s.selfPacedOnly) return true;
      if (!presenterMode && s.desktopOnly) return true;
      return false;
    };
    if (shouldSkip(slides[index])) {
      const dir = direction || 1;
      while (index >= 0 && index < slides.length && shouldSkip(slides[index])) {
        index += dir;
      }
      if (index < 0 || index >= slides.length) return;
    }
    const target = document.getElementById(`slide-${index}`);
    if (target) {
      const distance = Math.abs(index - currentSlide);
      if (distance > 3) {
        target.scrollIntoView({ behavior: 'instant' });
      } else {
        smoothScrollTo(target);
      }
    }
  }
}

// ===== Step Reveal (Presenter Mode) =====
function getRevealableItems() {
  const slideEl = document.getElementById(`slide-${currentSlide}`);
  if (!slideEl) return [];
  // spec-stage has its own reveal -- skip generic system
  if (slideEl.querySelector('#spec-stage')) return [];
  // timeline items and tags
  return slideEl.querySelectorAll('.timeline-item, .tags');
}

function initSlideReveal() {
  const items = getRevealableItems();
  if (items.length <= 1) return;
  items.forEach((item) => {
    if (!item.classList.contains('reveal-ready')) {
      item.classList.add('reveal-ready', 'reveal-hidden');
    }
  });
  // Show first item immediately
  if (items[0]) items[0].classList.remove('reveal-hidden');
}

function revealNextItem() {
  const items = getRevealableItems();
  if (items.length <= 1) return false;
  const anyReady = Array.from(items).some(i => i.classList.contains('reveal-ready'));
  if (!anyReady) {
    initSlideReveal();
    return true;
  }
  const nextHidden = Array.from(items).find(i => i.classList.contains('reveal-hidden'));
  if (!nextHidden) return false;
  nextHidden.classList.remove('reveal-hidden');

  // After revealing the last timeline-item or spec-step-2, auto-reveal tags/step-3 after 1s
  const justRevealedWasTimeline = nextHidden.classList.contains('timeline-item');
  const justRevealedWasSpecStep2 = nextHidden.classList.contains('spec-step-2');
  if (justRevealedWasTimeline || justRevealedWasSpecStep2) {
    const stillHiddenTags = Array.from(items).filter(
      i => (i.classList.contains('tags') || i.classList.contains('spec-step-3')) && i.classList.contains('reveal-hidden')
    );
    if (stillHiddenTags.length > 0) {
      setTimeout(() => {
        stillHiddenTags.forEach(tag => tag.classList.remove('reveal-hidden'));
      }, 1000);
    }
  }
  return true;
}

function unrevealLastItem() {
  const items = getRevealableItems();
  if (items.length <= 1) return false;
  const anyReady = Array.from(items).some(i => i.classList.contains('reveal-ready'));
  if (!anyReady) return false;
  const visibleItems = Array.from(items).filter(i => i.classList.contains('reveal-ready') && !i.classList.contains('reveal-hidden'));
  if (visibleItems.length <= 1) return false;
  visibleItems[visibleItems.length - 1].classList.add('reveal-hidden');
  return true;
}

function resetRevealState() {
  document.querySelectorAll('.reveal-ready').forEach(el => {
    el.classList.remove('reveal-ready', 'reveal-hidden');
  });
  // Also reset spec stage
  const stage = document.getElementById('spec-stage');
  if (stage) updateSpecStage(stage, presenterMode ? 0 : 2);
}

// ===== Spec Stage Animation =====
function getSpecStage() {
  const slideEl = document.getElementById(`slide-${currentSlide}`);
  return slideEl?.querySelector('#spec-stage') || null;
}

function updateSpecStage(stage, step) {
  stage.dataset.step = step;
  const cols = stage.querySelectorAll('.spec-columns');
  const colItems = stage.querySelectorAll('.spec-col');
  const advantage = stage.querySelector('.spec-advantage');
  // Width of one column + gap = 33.33% + 16px ≈ calc(33.33% + 16px)
  // step 0: requirements centered → translate right by one col-width
  // step 1: requirements + design centered → translate by half col-width
  // step 2: all three visible, no translate
  const slideEl = document.getElementById(`slide-${currentSlide}`);
  const container = slideEl?.querySelector('.spec-columns');
  if (!container) return;
  const containerW = container.parentElement?.offsetWidth || 800;
  const colW = (containerW - 32) / 3; // 3 cols, 2 gaps of 16
  const offsets = [colW + 8, (colW + 8) / 2, 0]; // center for step 0,1,2
  container.style.transform = `translateX(${offsets[step] || 0}px)`;
  // Show/hide columns
  colItems.forEach((col, i) => {
    if (step === 0) {
      col.style.opacity = i === 0 ? '1' : '0';
      col.style.pointerEvents = i === 0 ? '' : 'none';
    } else if (step === 1) {
      col.style.opacity = i <= 1 ? '1' : '0';
      col.style.pointerEvents = i <= 1 ? '' : 'none';
    } else {
      col.style.opacity = '1';
      col.style.pointerEvents = '';
    }
  });
  if (advantage) {
    advantage.style.opacity = step === 2 ? '1' : '0';
    advantage.style.transform = step === 2 ? 'translateY(0)' : 'translateY(10px)';
    advantage.style.pointerEvents = step === 2 ? '' : 'none';
  }
}

function advanceSpecStage() {
  const stage = getSpecStage();
  if (!stage) return false;
  const step = parseInt(stage.dataset.step || '0');
  if (step >= 2) return false;
  updateSpecStage(stage, step + 1);
  return true;
}

function retreatSpecStage() {
  const stage = getSpecStage();
  if (!stage) return false;
  const step = parseInt(stage.dataset.step || '0');
  if (step <= 0) return false;
  updateSpecStage(stage, step - 1);
  return true;
}

function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.slideIndex, 10);
          updateActiveSlide(index);
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  document.querySelectorAll('.slide').forEach((slide) => {
    observer.observe(slide);
  });
}

function setupKeyboardNavigation() {
  let hintHidden = false;

  document.addEventListener('keydown', (e) => {
    // Hide hint on first keypress
    if (!hintHidden) {
      hintHidden = true;
      document.getElementById('keyboard-hint').classList.add('hidden');
    }

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case 'PageUp': // Presenter: PageUp = next slide
      case 'F5': // Logitech / Kensington "Start Slideshow" button → next slide, prevent browser reload
      case ' ':
        e.preventDefault();
        dismissConfettiOverlay();
        if (presenterMode && advanceSpecStage()) break;
        if (presenterMode && revealNextItem()) break;
        goToSlide(currentSlide + 1, 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'PageDown': // Presenter: PageDown = previous slide
        e.preventDefault();
        dismissConfettiOverlay();
        if (presenterMode && retreatSpecStage()) break;
        if (presenterMode && unrevealLastItem()) break;
        goToSlide(currentSlide - 1, -1);
        break;
      case 'Tab': // 1st Tab → presenter mode, 2nd Tab (already in presenter mode) → fullscreen
        e.preventDefault();
        if (!presenterMode) {
          setPresenterMode(true);
        } else {
          toggleFullscreen();
        }
        break;
      case '.': // Logitech R400/R800 black screen button → just prevent default, no action
        e.preventDefault();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(slides.length - 1);
        break;
      case 'f':
      case 'F':
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          toggleFullscreen();
        }
        break;
      case 'p':
      case 'P':
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          setPresenterMode(!presenterMode);
        }
        break;
    }
  });
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function setupNavClicks() {
  document.getElementById('nav-sections').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-section-btn');
    const dot = e.target.closest('.nav-sub-dot');
    if (btn) {
      const index = parseInt(btn.dataset.slide, 10);
      goToSlide(index);
    } else if (dot) {
      const index = parseInt(dot.dataset.slide, 10);
      goToSlide(index);
    }
  });
}

// ===== Mobile App Mode =====
const isMobile = () => window.innerWidth <= 768;

// Custom smooth scroll (replaces CSS scroll-snap on desktop)
let isScrolling = false;
function smoothScrollTo(element, duration = 900) {
  if (isScrolling) return;
  isScrolling = true;
  const start = window.scrollY;
  const target = element.offsetTop;
  const distance = target - start;
  if (Math.abs(distance) < 5) { isScrolling = false; return; }
  let startTime = null;

  function ease(t) {
    // easeInOutQuart — slow start, slow end
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  }

  function step(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    window.scrollTo(0, start + distance * ease(progress));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      isScrolling = false;
    }
  }
  requestAnimationFrame(step);
}

function setupMobileMode(startIdx) {
  if (!isMobile()) return;

  // Wrap all tables in scrollable containers (so swipe handler detects scrollWidth)
  document.querySelectorAll('.slide table').forEach(table => {
    if (table.parentElement.classList.contains('table-scroll-wrapper')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-scroll-wrapper';
    wrapper.style.cssText = 'overflow-x:auto;-webkit-overflow-scrolling:touch;max-width:100%;';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  const sectionRanges = getSectionRanges();

  // Create mobile progress bar at top with burger
  const progress = document.createElement('div');
  progress.className = 'mobile-progress';
  progress.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px">
      <button class="mobile-burger" id="mobile-burger" aria-label="Navigation">&#9776;</button>
      <div style="flex:1;min-width:0">
        <div class="mobile-progress-section" id="mobile-section-name"></div>
        <div class="mobile-progress-bar"><div class="mobile-progress-fill" id="mobile-progress-fill"></div></div>
      </div>
    </div>
  `;
  document.body.appendChild(progress);

  // Create burger menu overlay
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';
  menu.id = 'mobile-menu';
  menu.innerHTML = `
    <div class="mobile-menu-header">
      <span style="font-weight:700;color:var(--color-text-on-dark)">Navigation</span>
      <div style="display:flex;align-items:center;gap:8px">
        <button class="lang-btn mobile-lang-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de">DE</button>
        <button class="lang-btn mobile-lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
        <button class="mobile-menu-close" id="mobile-menu-close">&times;</button>
      </div>
    </div>
    <div class="mobile-menu-sections">
      ${sectionRanges.map((sec, si) => {
        const slideItems = [];
        for (let i = sec.startIdx; i <= sec.endIdx; i++) {
          if (slides[i].desktopOnly || slides[i].mobileOnly) continue;
          slideItems.push(`<button class="mobile-menu-item" data-slide="${i}">${slides[i].label}</button>`);
        }
        // Find first non-skipped slide for section button
        let secStart = sec.startIdx;
        while (secStart <= sec.endIdx && (slides[secStart]?.desktopOnly || slides[secStart]?.mobileOnly)) secStart++;
        if (secStart > sec.endIdx) return '';
        return `
          <div class="mobile-menu-section">
            <button class="mobile-menu-section-btn" data-slide="${secStart}">${sec.name}</button>
            ${slideItems.length > 1 ? `<div class="mobile-menu-items">${slideItems.join('')}</div>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
  document.body.appendChild(menu);

  // Burger toggle
  document.getElementById('mobile-burger').addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  document.getElementById('mobile-menu-close').addEventListener('click', () => {
    menu.classList.remove('open');
  });
  menu.addEventListener('click', (e) => {
    // Language switch
    const langBtn = e.target.closest('.mobile-lang-btn');
    if (langBtn) {
      menu.classList.remove('open');
      setLanguage(langBtn.dataset.lang);
      return;
    }
    const btn = e.target.closest('[data-slide]');
    if (btn) {
      const idx = parseInt(btn.dataset.slide, 10);
      mobileGoTo(idx);
      menu.classList.remove('open');
    }
  });

  // Create mobile nav at bottom
  const nav = document.createElement('div');
  nav.className = 'mobile-nav';
  nav.innerHTML = `
    <button class="mobile-nav-btn mobile-nav-btn--prev" id="mobile-prev">${uiStrings[currentLang].back}</button>
    <div class="mobile-nav-info">
      <div class="mobile-nav-section" id="mobile-nav-section"></div>
      <div class="mobile-nav-counter" id="mobile-nav-counter"></div>
    </div>
    <button class="mobile-nav-btn mobile-nav-btn--next" id="mobile-next">${uiStrings[currentLang].next}</button>
  `;
  document.body.appendChild(nav);

  // Button handlers
  document.getElementById('mobile-prev').addEventListener('click', () => {
    if (currentSlide > 0) mobileGoTo(currentSlide - 1);
  });
  document.getElementById('mobile-next').addEventListener('click', () => {
    if (currentSlide < slides.length - 1) mobileGoTo(currentSlide + 1);
  });

  // Swipe support
  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartEl = null;
  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartEl = e.target;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    // Don't navigate if swipe started inside a scrollable element
    if (touchStartEl) {
      let el = touchStartEl;
      while (el && el !== document.body) {
        if (el.scrollWidth > el.clientWidth + 2) {
          // Element has horizontal scroll - don't intercept
          return;
        }
        el = el.parentElement;
      }
    }

    if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0 && currentSlide < slides.length - 1) mobileGoTo(currentSlide + 1);
      if (dx > 0 && currentSlide > 0) mobileGoTo(currentSlide - 1);
    }
  }, { passive: true });

  // Show first slide
  mobileGoTo(startIdx != null ? startIdx : getStartSlide());
}

function mobileGoTo(index) {
  // Skip desktopOnly slides on mobile
  const dir = index > currentSlide ? 1 : index < currentSlide ? -1 : 1;
  while (index >= 0 && index < slides.length && slides[index]?.desktopOnly) {
    index += dir;
  }
  if (index < 0 || index >= slides.length) return;

  // Hide all, show target
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('mobile-active'));
  const target = document.getElementById(`slide-${index}`);
  if (target) {
    target.classList.add('mobile-active');
    target.classList.add('visible');
    target.scrollTop = 0;
  }
  updateActiveSlide(index);
  updateMobileNav(index);
}
// Expose for testing
window.mobileGoTo = mobileGoTo;

function updateMobileNav(index) {
  if (!isMobile()) return;
  const sectionRanges = getSectionRanges();
  const currentSection = sectionRanges.find(s => index >= s.startIdx && index <= s.endIdx);

  const isHero = slides[index]?.id === 'hero';
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileProgress = document.querySelector('.mobile-progress');
  if (mobileNav) mobileNav.style.display = isHero ? 'none' : '';
  if (mobileProgress) mobileProgress.style.display = isHero ? 'none' : '';

  // Update buttons
  const prevBtn = document.getElementById('mobile-prev');
  const nextBtn = document.getElementById('mobile-next');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.textContent = index === slides.length - 1 ? uiStrings[currentLang].done : uiStrings[currentLang].next;

  // Update section info
  const sectionEl = document.getElementById('mobile-nav-section');
  const counterEl = document.getElementById('mobile-nav-counter');
  if (sectionEl && currentSection) sectionEl.textContent = currentSection.name;
  if (counterEl) {
    const visibleSlides = slides.filter(s => !s.desktopOnly && s.id !== 'hero');
    const visibleIndex = visibleSlides.findIndex(s => s.id === slides[index]?.id);
    const isHero = slides[index]?.id === 'hero';
    counterEl.textContent = isHero ? '' : `${(visibleIndex >= 0 ? visibleIndex : index) + 1} / ${visibleSlides.length}`;
  }

  // Update top progress - show slide title
  const sectionNameEl = document.getElementById('mobile-section-name');
  const fillEl = document.getElementById('mobile-progress-fill');
  if (sectionNameEl) sectionNameEl.textContent = slides[index]?.label || '';
  if (fillEl && currentSection) {
    const sectionProgress = ((index - currentSection.startIdx + 1) / (currentSection.endIdx - currentSection.startIdx + 1)) * 100;
    fillEl.style.width = `${sectionProgress}%`;
  }
}

function setupHandsonQR() {
  const qrImg = document.getElementById('handson-qr');
  const urlEl = document.getElementById('handson-url');
  if (!qrImg || !urlEl) return;
  const handsonUrl = window.location.origin + window.location.pathname + '#handson-setup';
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(handsonUrl)}&bgcolor=ffed00&color=001631`;
  urlEl.textContent = handsonUrl;
}

// ===== Architecture Builder (Mermaid) =====
function setupArchBuilder() {
  const diagram = document.getElementById('arch-diagram');
  const select = document.getElementById('arch-usecase');
  const detailBox = document.getElementById('arch-builder-detail');
  if (!diagram || !select) return;

  const isDE = currentLang === 'de';

  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      primaryColor: '#e0f2fe',
      primaryBorderColor: '#7dd3fc',
      primaryTextColor: '#0c4a6e',
      lineColor: '#94a3b8',
      fontSize: '13px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    },
    flowchart: { htmlLabels: true, curve: 'basis', rankSpacing: 30, nodeSpacing: 20, padding: 10 },
  });

  const presets = {
    coding: {
      label: 'Coding Assistant',
      desc: isDE ? 'Entwickler arbeitet lokal mit KI-Agent an Code. Agent liest/schreibt Dateien, führt Tests aus.' : 'Developer works locally with AI agent on code. Agent reads/writes files, runs tests.',
      chart: () => `flowchart LR
  DEV(("👤 ${isDE ? 'Entwickler' : 'Developer'}"))
  subgraph LOCAL["${isDE ? '💻 Lokal (Entwickler-PC)' : '💻 Local (Developer PC)'}"]
    A["🖥️ <b>IDE Plugin</b><br/><small>${isDE ? 'VS Code / JetBrains' : 'VS Code / JetBrains'}</small>"]
    B["⚙️ <b>OpenCode</b><br/><small>${isDE ? 'Plant Schritte, ruft Tools' : 'Plans steps, calls tools'}</small>"]
    E["📋 <b>agents.md + Codebase</b><br/><small>${isDE ? 'Projekt-Kontext + Regeln' : 'Project context + rules'}</small>"]
    F1["Shell"] & F2["Filesystem"] & F3["Git"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>${isDE ? 'Reasoning + Code-Generierung' : 'Reasoning + code generation'}</small>"]
  end
  DEV -->|"${isDE ? 'Aufgabe beschreiben' : 'Describe task'}"| A
  A --> B
  B <-->|"${isDE ? 'Reasoning-Loop' : 'Reasoning loop'}"| C
  B <-->|"${isDE ? 'Kontext laden' : 'Load context'}"| E
  B -->|"${isDE ? 'Befehle ausführen' : 'Execute commands'}"| F1
  B -->|"${isDE ? 'Dateien lesen/schreiben' : 'Read/write files'}"| F2
  B -->|"${isDE ? 'Commit + Push' : 'Commit + push'}"| F3
  F1 & F2 & F3 --> G["✅ <b>Code / PR + Tests</b>"]
  G -.->|"${isDE ? 'Ergebnis im Editor' : 'Result in editor'}"| DEV
  style LOCAL fill:#f0fdf4,stroke:#86efac,stroke-width:2px,color:#14532d
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px,color:#9a3412
  style A fill:#dbeafe,stroke:#60a5fa,stroke-width:2px
  style C fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    review: {
      label: isDE ? 'Code Review (CI/CD)' : 'Code Review (CI/CD)',
      desc: isDE ? 'Agent wird in Pipeline getriggert, reviewt MR automatisch.' : 'Agent is triggered in pipeline, reviews MR automatically.',
      chart: () => `flowchart LR
  DEV(("👤 ${isDE ? 'Entwickler' : 'Developer'}"))
  subgraph SERVER["${isDE ? '🏢 On-Prem Server' : '🏢 On-Prem Server'}"]
    A["🔗 <b>API / Webhook</b><br/><small>Interface</small>"]
    B["⚙️ <b>LangChain</b><br/><small>Framework</small>"]
    E["📋 <b>Diff + MR Context</b>"]
    F1["Git MCP"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>LLM</small>"]
  end
  subgraph SAAS["🌐 SaaS"]
    H["🔧 <b>GitLab / GitHub</b>"]
  end
  DEV -->|"MR ${isDE ? 'erstellt' : 'created'}"| A
  A -->|Trigger| B
  B <-->|"${isDE ? 'Reasoning' : 'Reasoning'}"| C
  B <-->|"${isDE ? 'Diff laden' : 'Load diff'}"| E
  B <-->|"${isDE ? 'MR lesen + kommentieren' : 'Read MR + comment'}"| F1
  F1 <-->|"API"| H
  H --> G["✅ <b>MR Comments + Approval</b>"]
  G -.->|${isDE ? 'Review-Ergebnis' : 'Review Result'}| DEV
  style SERVER fill:#f0f9ff,stroke:#93c5fd,stroke-width:2px
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    docs: {
      label: isDE ? 'Doku-Agent' : 'Docs Agent',
      desc: isDE ? 'Agent generiert Dokumentation aus Code und schreibt sie in Confluence.' : 'Agent generates docs from code and writes to Confluence.',
      chart: () => `flowchart LR
  DEV(("👤 ${isDE ? 'Entwickler' : 'Developer'}"))
  subgraph LOCAL["${isDE ? '💻 Lokal' : '💻 Local'}"]
    A["💻 <b>CLI / TUI</b><br/><small>Interface</small>"]
    B["⚙️ <b>OpenCode</b><br/><small>Framework</small>"]
    E["📋 <b>Codebase + History</b>"]
    F1["Filesystem"] & F2["Git"] & F3["Confluence MCP"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>LLM</small>"]
  end
  subgraph SAAS["🌐 SaaS"]
    H["🔧 <b>Confluence API</b>"]
  end
  DEV -->|"${isDE ? 'Auftrag' : 'Task'}"| A
  A --> B
  B <-->|"${isDE ? 'Reasoning' : 'Reasoning'}"| C
  B <-->|"${isDE ? 'Code lesen' : 'Read code'}"| E
  B <-->|"${isDE ? 'Dateien lesen' : 'Read files'}"| F1
  B <-->|"${isDE ? 'History lesen' : 'Read history'}"| F2
  B -->|"${isDE ? 'Seiten schreiben' : 'Write pages'}"| F3
  F3 -->|"API"| H
  H --> G["✅ <b>${isDE ? 'Confluence-Seiten + Markdown' : 'Confluence Pages + Markdown'}</b>"]
  G -.->|${isDE ? 'Bestätigung' : 'Confirmation'}| DEV
  style LOCAL fill:#f0fdf4,stroke:#86efac,stroke-width:2px
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    chatbot: {
      label: isDE ? 'Kunden-Chatbot' : 'Customer Chatbot',
      desc: isDE ? 'Chatbot beantwortet Kundenfragen basierend auf Wissensbasis (RAG).' : 'Chatbot answers customer questions based on knowledge base (RAG).',
      chart: () => `flowchart LR
  KUNDE(("👤 ${isDE ? 'Kunde' : 'Customer'}"))
  subgraph CLOUD["☁️ Cloud"]
    A["💬 <b>Chatbot Widget</b><br/><small>Interface</small>"]
    B["⚙️ <b>LangChain</b><br/><small>Framework</small>"]
    E["📋 <b>${isDE ? 'Vektor-DB RAG' : 'Vector DB RAG'}</b>"]
    F1["Search MCP"]
  end
  subgraph OPENAI["☁️ OpenAI"]
    C["🧠 <b>GPT-4</b><br/><small>LLM</small>"]
  end
  subgraph BACK["🔧 Backends"]
    H1["🗄️ <b>Pinecone</b>"]
    H2["🔧 <b>${isDE ? 'Produkt-API' : 'Product API'}</b>"]
  end
  KUNDE -->|"💬 ${isDE ? 'Frage' : 'Question'}"| A
  A --> B
  B <-->|"${isDE ? 'Reasoning' : 'Reasoning'}"| C
  B <-->|"${isDE ? 'Embeddings suchen' : 'Search embeddings'}"| E
  B -->|"${isDE ? 'Suche starten' : 'Start search'}"| F1
  F1 <-->|"${isDE ? 'Daten abrufen' : 'Fetch data'}"| H1
  F1 <-->|"${isDE ? 'Produkte laden' : 'Load products'}"| H2
  B --> G["✅ <b>${isDE ? 'Chat-Antwort' : 'Chat Response'}</b>"]
  G -.->|"💬 ${isDE ? 'Antwort' : 'Answer'}"| KUNDE
  style CLOUD fill:#faf5ff,stroke:#c4b5fd,stroke-width:2px
  style OPENAI fill:#f0fdf4,stroke:#86efac,stroke-width:2px
  style BACK fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style A fill:#dbeafe,stroke:#60a5fa,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    voice: {
      label: 'Call Center Voice Agent',
      desc: isDE ? 'Telefon → STT → Agent → TTS → Antwort. Braucht Azure Whisper/TTS.' : 'Phone → STT → Agent → TTS → Answer. Requires Azure Whisper/TTS.',
      chart: () => `flowchart LR
  KUNDE(("👤 ${isDE ? 'Kunde ruft an' : 'Customer calls'}"))
  subgraph CLOUD["☁️ Cloud"]
    A["📞 <b>${isDE ? 'Voice / Telefon' : 'Voice / Phone'}</b><br/><small>Interface</small>"]
    B["⚙️ <b>LangChain</b><br/><small>${isDE ? 'Orchestriert den Dialog' : 'Orchestrates dialog'}</small>"]
    E["📋 <b>${isDE ? 'Kundenprofil + Session' : 'Customer Profile + Session'}</b><br/><small>${isDE ? 'Kontext aus CRM' : 'Context from CRM'}</small>"]
    F1["CRM MCP"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>${isDE ? 'Versteht Anfrage, formuliert Antwort' : 'Understands request, formulates answer'}</small>"]
  end
  subgraph AZURE["☁️ Azure"]
    STT["🎤 <b>Whisper STT</b><br/><small>${isDE ? 'Wandelt Audio → Text' : 'Converts Audio → Text'}</small>"]
    TTS["🔊 <b>Azure TTS</b><br/><small>${isDE ? 'Wandelt Text → Audio' : 'Converts Text → Audio'}</small>"]
  end
  subgraph SAAS["🌐 SaaS"]
    H["🔧 <b>CRM API</b><br/><small>${isDE ? 'Kundendaten lesen/schreiben' : 'Read/write customer data'}</small>"]
  end
  KUNDE -->|"📞 ${isDE ? 'Spricht' : 'Speaks'}"| A
  A -->|"${isDE ? 'Audio-Stream' : 'Audio stream'}"| STT
  STT -->|"${isDE ? 'Transkript' : 'Transcript'}"| B
  B <-->|"${isDE ? 'Reasoning + Planung' : 'Reasoning + planning'}"| C
  B <-->|"${isDE ? 'Kontext laden' : 'Load context'}"| E
  B -->|"${isDE ? 'Kundendaten abrufen' : 'Fetch customer data'}"| F1 --> H
  B -->|"${isDE ? 'Antwort-Text' : 'Response text'}"| TTS
  TTS -->|"${isDE ? 'Sprach-Audio' : 'Speech audio'}"| G["✅ <b>${isDE ? 'Sprach-Antwort' : 'Voice Response'}</b>"]
  G -.->|"🔊 ${isDE ? 'Hört Antwort' : 'Hears answer'}"| KUNDE
  style CLOUD fill:#faf5ff,stroke:#c4b5fd,stroke-width:2px
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style AZURE fill:#eff6ff,stroke:#93c5fd,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    tickets: {
      label: isDE ? 'Ticket-Automatisierung' : 'Ticket Automation',
      desc: isDE ? 'Agent klassifiziert Jira-Tickets, erstellt Subtasks, weist zu.' : 'Agent classifies Jira tickets, creates subtasks, assigns.',
      chart: () => `flowchart LR
  USER(("👤 ${isDE ? 'Kunde / System' : 'Customer / System'}"))
  subgraph SERVER["${isDE ? '🏢 On-Prem' : '🏢 On-Prem'}"]
    A["🔗 <b>API / Webhook</b><br/><small>Interface</small>"]
    B["⚙️ <b>CrewAI</b><br/><small>Framework</small>"]
    E["📋 <b>${isDE ? 'Ticket-Historie' : 'Ticket History'}</b>"]
    F1["Jira MCP"]
  end
  subgraph OPENAI["☁️ OpenAI"]
    C["🧠 <b>GPT-4</b><br/><small>LLM</small>"]
  end
  subgraph SAAS["🌐 SaaS"]
    H["🔧 <b>Jira API</b>"]
  end
  USER -->|"${isDE ? 'Ticket erstellt' : 'Ticket created'}"| A
  A -->|Trigger| B
  B <-->|API| C
  B <--> E
  B --> F1 -->|API| H
  H --> G["✅ <b>${isDE ? 'Tickets + Subtasks' : 'Tickets + Subtasks'}</b>"]
  G -.->|${isDE ? 'Benachrichtigung' : 'Notification'}| USER
  style SERVER fill:#f0f9ff,stroke:#93c5fd,stroke-width:2px
  style OPENAI fill:#f0fdf4,stroke:#86efac,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    knowledge: {
      label: isDE ? 'Wissens-Agent' : 'Knowledge Agent',
      desc: isDE ? 'Durchsucht Confluence/SharePoint, antwortet mit Quellenangabe.' : 'Searches Confluence/SharePoint, answers with source references.',
      chart: () => `flowchart LR
  USER(("👤 ${isDE ? 'Mitarbeiter' : 'Employee'}"))
  subgraph SERVER["${isDE ? '🏢 On-Prem' : '🏢 On-Prem'}"]
    A["💬 <b>Chat UI</b><br/><small>Interface</small>"]
    B["⚙️ <b>LangChain</b><br/><small>Framework</small>"]
    E["📋 <b>${isDE ? 'Vektor-DB RAG' : 'Vector DB RAG'}</b>"]
    F1["Confluence MCP"] & F2["SharePoint MCP"]
    VDB["🗄️ <b>${isDE ? 'Vektor-DB' : 'Vector DB'}</b>"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>LLM</small>"]
  end
  subgraph SAAS["🌐 SaaS"]
    H1["🔧 <b>Confluence API</b>"]
    H2["🔧 <b>SharePoint API</b>"]
  end
  USER -->|"💬 ${isDE ? 'Frage' : 'Question'}"| A
  A --> B
  B <-->|API| C
  B <--> E & VDB
  B --> F1 --> H1
  B --> F2 --> H2
  B --> G["✅ <b>${isDE ? 'Antwort + Quellen' : 'Answer + Sources'}</b>"]
  G -.->|"${isDE ? 'Antwort' : 'Answer'}"| USER
  style SERVER fill:#f0f9ff,stroke:#93c5fd,stroke-width:2px
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style A fill:#dbeafe,stroke:#60a5fa,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    data: {
      label: 'Data Pipeline Agent',
      desc: isDE ? 'Analysiert DB, schreibt Queries, erstellt Reports. Läuft als Cronjob.' : 'Analyzes DB, writes queries, creates reports. Runs as cron job.',
      chart: () => `flowchart LR
  ADMIN(("👤 ${isDE ? 'Admin / Cron' : 'Admin / Cron'}"))
  subgraph SERVER["${isDE ? '🏢 On-Prem' : '🏢 On-Prem'}"]
    A["🔗 <b>API / Cron</b><br/><small>Interface</small>"]
    B["⚙️ <b>LangChain</b><br/><small>Framework</small>"]
    E["📋 <b>DB Schema + History</b>"]
    F1["Database MCP"] & F2["Shell"]
    DB["🗄️ <b>PostgreSQL</b>"]
  end
  subgraph OPENAI["☁️ OpenAI"]
    C["🧠 <b>GPT-4</b><br/><small>LLM</small>"]
  end
  subgraph AWS_S["☁️ AWS"]
    S3["🗄️ <b>S3 ${isDE ? 'Speicher' : 'Storage'}</b>"]
  end
  ADMIN -->|Trigger| A
  A --> B
  B <-->|API| C
  B <--> E
  B --> F1 --> DB
  B --> F2 --> S3
  DB & S3 --> G["✅ <b>Reports + CSV + Dashboards</b>"]
  G -.->|${isDE ? 'Report fertig' : 'Report ready'}| ADMIN
  style SERVER fill:#f0f9ff,stroke:#93c5fd,stroke-width:2px
  style OPENAI fill:#f0fdf4,stroke:#86efac,stroke-width:2px
  style AWS_S fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    cve: {
      label: isDE ? 'CVE Auto-Patching (ohne User)' : 'CVE Auto-Patching (no user)',
      desc: isDE ? 'Agent prüft täglich CVE-Datenbanken, findet betroffene Dependencies und stellt automatisch PRs mit Fixes.' : 'Agent checks CVE databases daily, finds affected dependencies and automatically creates PRs with fixes.',
      chart: () => `flowchart LR
  CRON(("⏰ ${isDE ? 'Cron / Scheduler' : 'Cron / Scheduler'}"))
  subgraph SERVER["${isDE ? '🏢 On-Prem / CI' : '🏢 On-Prem / CI'}"]
    A["🔗 <b>Cron Trigger</b><br/><small>Headless</small>"]
    B["⚙️ <b>LangChain</b><br/><small>Framework</small>"]
    E["📋 <b>${isDE ? 'Dependency-Liste + Lock Files' : 'Dependency List + Lock Files'}</b>"]
    F1["Git MCP"] & F2["Shell"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>LLM</small>"]
  end
  subgraph SAAS["🌐 SaaS / APIs"]
    CVE["🛡️ <b>CVE Database</b><br/><small>NVD / OSV / Snyk</small>"]
    GH["🔧 <b>GitHub / GitLab</b>"]
    SLACK["💬 <b>Slack</b>"]
  end
  CRON -->|${isDE ? 'Täglich' : 'Daily'}| A --> B
  B <-->|API| C
  B <--> E
  B --> F2 -->|${isDE ? 'Scan' : 'Scan'}| CVE
  B --> F1 -->|"PR ${isDE ? 'erstellen' : 'create'}"| GH
  GH --> G["✅ <b>${isDE ? 'PRs mit Fixes' : 'PRs with Fixes'}</b>"]
  G -.->|${isDE ? 'Benachrichtigung' : 'Notification'}| SLACK
  style SERVER fill:#f0f9ff,stroke:#93c5fd,stroke-width:2px
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style CVE fill:#fef3c7,stroke:#f59e0b,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
    anomaly: {
      label: isDE ? 'Anomalie-Erkennung (ohne User)' : 'Anomaly Detection (no user)',
      desc: isDE ? 'Agent überwacht Logs, Metriken und Error-Rates – erkennt Muster und alarmiert bevor Nutzer es merken.' : 'Agent monitors logs, metrics and error rates – detects patterns and alerts before users notice.',
      chart: () => `flowchart LR
  STREAM(("📊 ${isDE ? 'Log-Stream / Metriken' : 'Log Stream / Metrics'}"))
  subgraph SERVER["${isDE ? '🏢 On-Prem' : '🏢 On-Prem'}"]
    A["🔗 <b>${isDE ? 'Event-Listener' : 'Event Listener'}</b><br/><small>Headless</small>"]
    B["⚙️ <b>LangChain</b><br/><small>Framework</small>"]
    E["📋 <b>${isDE ? 'Baseline-Metriken + Regeln' : 'Baseline Metrics + Rules'}</b>"]
    F1["${isDE ? 'Monitoring MCP' : 'Monitoring MCP'}"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>LLM</small>"]
  end
  subgraph SAAS["🌐 Services"]
    DD["📈 <b>Datadog / Grafana</b>"]
    PD["🚨 <b>PagerDuty / Slack</b>"]
    JIRA["🔧 <b>Jira</b>"]
  end
  STREAM -->|${isDE ? 'Echtzeit' : 'Real-time'}| A --> B
  B <-->|API| C
  B <--> E
  B --> F1 --> DD
  B -->|"${isDE ? 'Anomalie erkannt' : 'Anomaly detected'}"| G["🚨 <b>${isDE ? 'Alert + Analyse' : 'Alert + Analysis'}</b>"]
  G --> PD
  G -->|"${isDE ? 'Ticket erstellen' : 'Create ticket'}"| JIRA
  style SERVER fill:#f0f9ff,stroke:#93c5fd,stroke-width:2px
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style G fill:#fef3c7,stroke:#f59e0b,stroke-width:2px`
    },
    healthcheck: {
      label: isDE ? 'System-Prüfung (ohne User)' : 'System Health Check (no user)',
      desc: isDE ? '1x täglich: Health Checks, Dependency Updates, Zertifikate prüfen, Security Scans – Report per Slack.' : 'Once daily: health checks, dependency updates, certificate checks, security scans – report via Slack.',
      chart: () => `flowchart LR
  CRON(("⏰ ${isDE ? 'Täglich 6:00' : 'Daily 6:00 AM'}"))
  subgraph SERVER["${isDE ? '🏢 On-Prem' : '🏢 On-Prem'}"]
    A["🔗 <b>Cron Trigger</b><br/><small>Headless</small>"]
    B["⚙️ <b>CrewAI</b><br/><small>Multi-Agent</small>"]
    E["📋 <b>${isDE ? 'Infra-Config + Baselines' : 'Infra Config + Baselines'}</b>"]
    F1["Shell"] & F2["Database MCP"] & F3["Git MCP"]
  end
  subgraph AWS["☁️ AWS"]
    C["🧠 <b>Claude Bedrock</b><br/><small>LLM</small>"]
  end
  subgraph SAAS["🌐 Services"]
    SLACK["💬 <b>Slack / Teams</b>"]
    GH["🔧 <b>GitHub</b>"]
  end
  CRON -->|${isDE ? 'Täglich' : 'Daily'}| A --> B
  B <-->|API| C
  B <--> E
  B --> F1 & F2 & F3
  F1 -->|"${isDE ? 'Health + Certs + Scans' : 'Health + Certs + Scans'}"| CHECK["🔍 <b>${isDE ? 'Prüfungen' : 'Checks'}</b>"]
  F3 -->|"${isDE ? 'Dep. Updates' : 'Dep. Updates'}"| GH
  CHECK & GH --> G["✅ <b>${isDE ? 'Tagesbericht' : 'Daily Report'}</b>"]
  G -->|${isDE ? 'Report' : 'Report'}| SLACK
  style SERVER fill:#f0f9ff,stroke:#93c5fd,stroke-width:2px
  style AWS fill:#fff7ed,stroke:#fdba74,stroke-width:2px
  style SAAS fill:#fef2f2,stroke:#fca5a5,stroke-width:2px
  style CHECK fill:#faf5ff,stroke:#c4b5fd,stroke-width:2px
  style G fill:#dcfce7,stroke:#4ade80,stroke-width:2px`
    },
  };

  let renderCounter = 0;

  async function showDiagram(preset) {
    diagram.style.opacity = '0';
    diagram.style.transform = 'translateY(8px)';
    if (detailBox) detailBox.style.opacity = '0';
    await new Promise(r => setTimeout(r, diagram.innerHTML ? 300 : 50));

    renderCounter++;
    const id = 'arch-mermaid-' + renderCounter;
    const useCaseLabel = preset.label;
    try {
      const { svg } = await mermaid.render(id, preset.chart());
      const shareUrl = window.location.origin + window.location.pathname + '?uc=' + select.value + '#arch-builder';
      diagram.innerHTML = `
        <div id="arch-diagram-inner" style="position:relative">
          ${svg}
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;padding:6px 14px;background:#f8fafc;border-top:1px solid #e2e8f0;border-radius:0 0 12px 12px">
            <span style="font-size:0.62rem;color:#64748b;font-weight:500">${useCaseLabel} &ndash; Agentic AI Architecture</span>
            <div style="display:flex;gap:8px;align-items:center;position:relative">
              <button id="arch-btn-clip" style="display:flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;border:1px solid #e2e8f0;background:#fff;color:#475569;font-size:0.72rem;cursor:pointer;transition:all 0.2s" title="${isDE ? 'Link kopieren' : 'Copy link'}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                <span id="arch-clip-text">${isDE ? 'Link' : 'Link'}</span>
              </button>
              <button id="arch-btn-png" style="display:flex;align-items:center;gap:5px;padding:5px 12px;border-radius:8px;border:1px solid #e2e8f0;background:#fff;color:#475569;font-size:0.72rem;cursor:pointer;transition:all 0.2s" title="${isDE ? 'Als PNG speichern' : 'Save as PNG'}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>PNG</span>
              </button>
            </div>
          </div>
        </div>`;
      const svgEl = diagram.querySelector('svg');
      if (svgEl) {
        svgEl.style.maxWidth = '100%'; svgEl.style.height = 'auto'; svgEl.removeAttribute('height');
        // Inject watermark into largest subgraph box
        const rects = svgEl.querySelectorAll('.cluster rect, .cluster-bg');
        let largest = null;
        let maxArea = 0;
        rects.forEach(r => {
          const w = parseFloat(r.getAttribute('width') || 0);
          const h = parseFloat(r.getAttribute('height') || 0);
          if (w * h > maxArea) { maxArea = w * h; largest = r; }
        });
        if (largest) {
          const x = parseFloat(largest.getAttribute('x') || 0) + 4;
          const y = parseFloat(largest.getAttribute('y') || 0) + parseFloat(largest.getAttribute('height') || 0) - 4;
          const wm = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          wm.setAttribute('x', x.toString());
          wm.setAttribute('y', y.toString());
          wm.setAttribute('fill', '#94a3b8');
          wm.setAttribute('font-size', '8');
          wm.setAttribute('font-family', 'system-ui, sans-serif');
          wm.setAttribute('opacity', '0.5');
          wm.textContent = 'agentic-ai.weisser.dev \u2192 ' + useCaseLabel + ' Agentic AI Architecture';
          svgEl.appendChild(wm);
        }
      }

      // Clipboard
      document.getElementById('arch-btn-clip')?.addEventListener('click', function() {
        navigator.clipboard.writeText(shareUrl).then(() => {
          const txt = document.getElementById('arch-clip-text');
          const btn = this;
          if (txt) txt.textContent = isDE ? 'Kopiert!' : 'Copied!';
          btn.style.borderColor = '#22c55e'; btn.style.color = '#16a34a';
          setTimeout(() => { if (txt) txt.textContent = 'Link'; btn.style.borderColor = '#e2e8f0'; btn.style.color = '#475569'; }, 2000);
        });
      });

      // Download PNG (watermark is already in SVG)
      document.getElementById('arch-btn-png')?.addEventListener('click', () => {
        const svgSource = diagram.querySelector('svg');
        if (!svgSource) return;
        const clone = svgSource.cloneNode(true);
        const svgData = new XMLSerializer().serializeToString(clone);
        const canvas = document.createElement('canvas');
        const img = new Image();
        img.onload = () => {
          const s = 2;
          canvas.width = img.width * s;
          canvas.height = img.height * s;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.scale(s, s);
          ctx.drawImage(img, 0, 0);
          const a = document.createElement('a');
          a.download = 'agent-architecture-' + select.value + '.png';
          a.href = canvas.toDataURL('image/png');
          a.click();
        };
        img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
      });

    } catch (e) {
      diagram.innerHTML = '<div style="color:red;font-size:0.8rem;padding:12px">Diagram error: ' + e.message + '</div>';
      console.error('Mermaid render error:', e);
    }

    requestAnimationFrame(() => {
      diagram.style.opacity = '1';
      diagram.style.transform = 'translateY(0)';
      if (detailBox) {
        detailBox.innerHTML = '<strong style="color:var(--color-primary)">' + preset.label + ':</strong> ' + preset.desc;
        detailBox.style.opacity = '1';
      }
    });
  }

  function switchToCompactLayout() {
    const controls = document.getElementById('arch-controls');
    const ctaText = document.getElementById('arch-cta-text');
    if (controls) { controls.style.flexDirection = 'row'; controls.style.alignItems = 'center'; controls.style.justifyContent = 'flex-start'; }
    if (ctaText) ctaText.style.display = 'none';
  }

  select.addEventListener('change', () => {
    const preset = presets[select.value];
    if (!preset) return;
    switchToCompactLayout();
    showDiagram(preset);
  });

  // Auto-load from URL parameter ?uc=coding
  const urlUc = new URLSearchParams(window.location.search).get('uc');
  if (urlUc && presets[urlUc]) {
    select.value = urlUc;
    switchToCompactLayout();
    setTimeout(() => showDiagram(presets[urlUc]), 500);
  }
}

function setupQuiz() {
  document.addEventListener('click', (e) => {
    const option = e.target.closest('.quiz-option');
    if (!option) return;
    const container = option.closest('.quiz-options');
    const correct = option.dataset.correct === 'true';
    const feedbackEl = container.parentElement.querySelector('.quiz-feedback');

    // Disable all options
    container.querySelectorAll('.quiz-option').forEach(o => {
      o.classList.add('disabled');
      if (o.dataset.correct === 'true') o.classList.add('correct');
    });

    if (correct) {
      option.classList.add('correct');
      if (feedbackEl) {
        feedbackEl.classList.add('show', 'correct');
        feedbackEl.textContent = '\u2705 Richtig!';
      }
    } else {
      option.classList.add('wrong');
      if (feedbackEl) {
        feedbackEl.classList.add('show', 'wrong');
        feedbackEl.textContent = '\u274C Nicht ganz \u2013 schau dir die gr\u00fcne Antwort an.';
      }
    }
  });
}

function setupCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.dataset.copy;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '\u2705 Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '\uD83D\uDCCB Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
}

function setupViewToggles() {
  const btnTable = document.getElementById('btn-table');
  const btnLive = document.getElementById('btn-live');
  const viewTable = document.getElementById('view-table');
  const viewLive = document.getElementById('view-live');

  if (!btnTable || !btnLive) return;

  let iframeLoaded = false;

  function switchView(view) {
    if (view === 'live') {
      viewTable.style.display = 'none';
      viewLive.style.display = 'block';
      btnTable.classList.remove('active');
      btnLive.classList.add('active');

      // Lazy-load iframe on first switch
      if (!iframeLoaded) {
        const iframe = document.getElementById('leaderboard-iframe');
        if (iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
          iframeLoaded = true;
        }
      }
    } else {
      viewTable.style.display = 'block';
      viewLive.style.display = 'none';
      btnTable.classList.add('active');
      btnLive.classList.remove('active');
    }
  }

  btnTable.addEventListener('click', () => switchView('table'));
  btnLive.addEventListener('click', () => switchView('live'));
}

// ===== Presenter Mode =====
let presenterMode = new URLSearchParams(window.location.search).has('presenter');

function setPresenterMode(enabled) {
  presenterMode = enabled;
  document.body.classList.toggle('presenter-mode', enabled);
  document.body.classList.toggle('self-paced-mode', !enabled);
  // Update URL without reload
  const url = new URL(window.location);
  if (enabled) {
    url.searchParams.set('presenter', 'true');
  } else {
    url.searchParams.delete('presenter');
  }
  window.history.replaceState({}, '', url);
}

// ===== Init =====
renderSlides();
setPresenterMode(presenterMode); // Apply initial mode
updateMetaTags(currentLang);
setupIntersectionObserver();
setupKeyboardNavigation();

// Desktop: intercept wheel scroll to navigate slides smoothly
if (!isMobile()) {
  let wheelCooldown = false;
  document.addEventListener('wheel', (e) => {
    if (wheelCooldown || isScrolling) return;

    // Check if current slide has scrollable content
    const slideEl = document.getElementById(`slide-${currentSlide}`);
    if (slideEl) {
      const hasScroll = slideEl.scrollHeight > slideEl.clientHeight + 5;
      if (hasScroll) {
        const dir = e.deltaY > 0 ? 1 : -1;
        const atBottom = slideEl.scrollTop + slideEl.clientHeight >= slideEl.scrollHeight - 5;
        const atTop = slideEl.scrollTop <= 5;
        // Allow internal scroll if not at the edge in scroll direction
        if (dir > 0 && !atBottom) return;
        if (dir < 0 && !atTop) return;
      }
    }

    const dir = e.deltaY > 0 ? 1 : -1;
    const nextIdx = currentSlide + dir;
    if (nextIdx < 0 || nextIdx >= slides.length) return;
    e.preventDefault();
    wheelCooldown = true;
    goToSlide(nextIdx, dir);
    setTimeout(() => { wheelCooldown = false; }, 1000);
  }, { passive: false });
}

setupNavClicks();
setupViewToggles();
setupCopyButtons();
setupQuiz();
setupHandsonQR();
setupArchBuilder();

// Mobile start button (works in both mobile and self-paced desktop)
const mobileStartBtn = document.getElementById('mobile-start-btn');
if (mobileStartBtn) {
  mobileStartBtn.addEventListener('click', () => {
    if (isMobile()) {
      mobileGoTo(currentSlide + 1);
    } else {
      goToSlide(currentSlide + 1, 1);
    }
  });
}

// Restore position from URL hash or start at 0
// ===== Progression: Save & Resume =====
const PROGRESSION_KEY = 'workshop-progression';
const WORKSHOP_VERSION = '1.9.9';
const VERSION_KEY = 'workshop-version';

function saveProgression(index) {
  try {
    const sectionRanges = getSectionRanges();
    const section = sectionRanges.find(s => index >= s.startIdx && index <= s.endIdx);
    localStorage.setItem(PROGRESSION_KEY, JSON.stringify({
      index,
      slideId: slides[index]?.id || '',
      sectionName: section?.name || '',
      timestamp: Date.now(),
      totalSlides: slides.length,
      lang: currentLang,
      version: WORKSHOP_VERSION,
    }));
    localStorage.setItem(VERSION_KEY, WORKSHOP_VERSION);
  } catch(e) {}
}

function getSavedProgression() {
  try {
    const raw = localStorage.getItem(PROGRESSION_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // Only show resume if saved within last 7 days and at least slide 2
    const age = Date.now() - (data.timestamp || 0);
    if (age > 7 * 24 * 60 * 60 * 1000) return null;
    if (data.index < 2) return null;
    // Validate index is still in range
    if (data.index >= slides.length) return null;
    return data;
  } catch(e) { return null; }
}

function showResumeModal(savedData) {
  return new Promise((resolve) => {
    const lang = currentLang;
    const isDE = lang === 'de';
    
    const sectionName = savedData.sectionName || (isDE ? 'Unbekannt' : 'Unknown');
    const slideNum = savedData.index + 1;
    const totalSlides = savedData.totalSlides || slides.length;
    const progress = Math.round((slideNum / totalSlides) * 100);
    const savedVersion = savedData.version || localStorage.getItem(VERSION_KEY) || '';
    const hasUpdate = savedVersion && savedVersion !== WORKSHOP_VERSION;
    const newSlideCount = slides.length - (savedData.totalSlides || slides.length);
    
    const overlay = document.createElement('div');
    overlay.id = 'resume-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(10,10,30,0.92);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(8px);animation:fadeIn 0.3s ease';
    
    const updateBadge = hasUpdate ? `
      <div style="background:rgba(37,204,120,0.12);border:1px solid rgba(37,204,120,0.3);border-radius:8px;padding:8px 12px;margin-bottom:12px">
        <p style="font-size:0.8rem;color:rgba(255,255,255,0.8);line-height:1.4;margin:0">
          <strong style="color:#4ade80">&#10024; ${isDE ? 'Neue Inhalte!' : 'New content!'}</strong>
          ${isDE
            ? ` Version ${WORKSHOP_VERSION} (vorher ${savedVersion})${newSlideCount > 0 ? `. ${newSlideCount} neue Slides.` : '.'}`
            : ` Version ${WORKSHOP_VERSION} (was ${savedVersion})${newSlideCount > 0 ? `. ${newSlideCount} new slides.` : '.'}`}
        </p>
      </div>` : '';

    overlay.innerHTML = `
      <div style="background:var(--color-bg-dark,#1a1a2e);border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:32px 28px;max-width:400px;width:100%;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.5)">
        <div style="font-size:2.5rem;margin-bottom:12px">&#128075;</div>
        <h2 style="color:#fff;font-size:1.3rem;margin-bottom:8px;font-weight:700">${isDE ? 'Willkommen zur\u00fcck!' : 'Welcome back!'}</h2>
        ${updateBadge}
        <p style="color:rgba(255,255,255,0.7);font-size:0.9rem;line-height:1.5;margin-bottom:16px">
          ${isDE 
            ? `Du warst zuletzt bei <strong style="color:var(--color-accent,#ffed00)">${sectionName}</strong> (Folie ${slideNum}/${totalSlides}).`
            : `You were last at <strong style="color:var(--color-accent,#ffed00)">${sectionName}</strong> (slide ${slideNum}/${totalSlides}).`}
        </p>
        <div style="background:rgba(255,255,255,0.05);border-radius:8px;padding:8px 12px;margin-bottom:20px">
          <div style="display:flex;justify-content:space-between;font-size:0.75rem;color:rgba(255,255,255,0.5);margin-bottom:4px">
            <span>${isDE ? 'Fortschritt' : 'Progress'}</span>
            <span>${progress}%</span>
          </div>
          <div style="height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden">
            <div style="height:100%;width:${progress}%;background:var(--color-accent,#ffed00);border-radius:3px;transition:width 0.5s ease"></div>
          </div>
        </div>
        <div style="display:flex;gap:10px">
          <button id="resume-btn-continue" style="flex:1;padding:12px 16px;border-radius:10px;border:none;background:var(--color-accent,#ffed00);color:#1a1a2e;font-weight:700;font-size:0.9rem;cursor:pointer">
            ${isDE ? 'Weitermachen' : 'Continue'}
          </button>
          <button id="resume-btn-restart" style="flex:1;padding:12px 16px;border-radius:10px;border:1px solid rgba(255,255,255,0.15);background:transparent;color:rgba(255,255,255,0.7);font-size:0.9rem;cursor:pointer">
            ${isDE ? 'Neu beginnen' : 'Start over'}
          </button>
        </div>
        <p style="font-size:0.6rem;color:rgba(255,255,255,0.3);margin-top:12px">v${WORKSHOP_VERSION} &bull; ${slides.length} slides</p>
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Animate in
    requestAnimationFrame(() => {
      overlay.querySelector('div').style.transform = 'scale(1)';
    });
    
    document.getElementById('resume-btn-continue').addEventListener('click', () => {
      overlay.remove();
      resolve(savedData.index);
    });
    
    document.getElementById('resume-btn-restart').addEventListener('click', () => {
      try { localStorage.removeItem(PROGRESSION_KEY); } catch(e) {}
      overlay.remove();
      resolve(0);
    });
    
    // Also close on overlay click (outside modal)
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
        resolve(savedData.index);
      }
    });
  });
}

function getStartSlide() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const idx = slides.findIndex(s => s.id === hash);
    if (idx >= 0) return idx;
  }
  return 0;
}

// Init based on mode
async function initPresentation() {
  const hash = window.location.hash.replace('#', '');
  let startSlide = 0;
  
  if (hash) {
    // URL has a specific hash -- go there directly
    const idx = slides.findIndex(s => s.id === hash);
    if (idx >= 0) startSlide = idx;
  } else {
    // No hash -- check for saved progression
    const saved = getSavedProgression();
    if (saved) {
      startSlide = await showResumeModal(saved);
    }
  }

  if (isMobile()) {
    setupMobileMode(startSlide);
  } else {
    if (startSlide > 0) {
      // Hide all slides instantly, jump to target without animation, then reveal
      const app = document.getElementById('app');
      app.style.visibility = 'hidden';
      const target = document.getElementById(`slide-${startSlide}`);
      if (target) {
        target.classList.add('visible');
        target.scrollIntoView({ behavior: 'instant' });
      }
      updateActiveSlide(startSlide);
      // Reveal after browser has jumped
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          app.style.visibility = '';
        });
      });
    } else {
      document.getElementById('slide-0')?.classList.add('visible');
      updateActiveSlide(0);
    }
  }
}

initPresentation();

// Also override keyboard nav for mobile
document.addEventListener('keydown', (e) => {
  if (!isMobile()) return;
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    if (currentSlide < slides.length - 1) mobileGoTo(currentSlide + 1);
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (currentSlide > 0) mobileGoTo(currentSlide - 1);
  }
});
