/* ════════════════════════════════════════════
   APP.JS — All interactive behaviour
   Reads from CONFIG (config.js) for settings.
════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. Apply config: testimonials visibility ──
  if (typeof CONFIG !== 'undefined' && !CONFIG.showTestimonials) {
    const t = document.getElementById('testimonials');
    if (t) t.style.display = 'none';
  }

  // ── 2. Apply Stripe links from config ────────
  if (typeof CONFIG !== 'undefined' && CONFIG.stripeLinks) {
    Object.entries(CONFIG.stripeLinks).forEach(([plan, url]) => {
      const card = document.querySelector(`[data-plan="${plan}"]`);
      if (card && url && url !== '#') {
        const btn = card.querySelector('.btn');
        if (btn) btn.href = url;
      }
    });
  }

  // ── 3. Navbar scroll shadow ──────────────────
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 16);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on load in case page starts scrolled

  // ── 4. Mobile hamburger menu ─────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu when any link is tapped
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    }
  });

  // ── 5. FAQ accordion ─────────────────────────
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all open items
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));

      // Open the clicked one (unless it was already open)
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── 6. Scroll fade-in (IntersectionObserver) ─
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.10, rootMargin: '0px 0px -32px 0px' }
  );

  document.querySelectorAll('.fi').forEach(el => observer.observe(el));

  // ── 7. Smooth scroll for all anchor links ────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--nav-h')) || 68;
      const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
