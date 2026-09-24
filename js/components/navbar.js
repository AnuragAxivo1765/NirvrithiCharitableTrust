/**
 * NAVBAR — Nirvrithi Charitable Trust
 * Renders the shared navigation bar and wires up all interactive behaviour:
 *   - Active link detection by page
 *   - Scroll: transparent → solid background
 *   - Mobile hamburger open / close
 *   - Keyboard-accessible menu
 */

(function () {
  'use strict';

  /* ── Helpers ─────────────────────────────────── */
  function getActivePage() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('equipment')) return 'equipment';
    if (path.includes('news'))      return 'news';
    if (path.includes('gallery'))   return 'gallery';
    if (path.includes('privacy'))   return '';
    if (path.includes('terms'))     return '';
    return 'home'; // index.html or /
  }

  const NAV_LINKS = [
    { id: 'home',      label: 'Home',          href: 'index.html' },
    { id: 'equipment', label: 'Equipment',     href: 'equipment.html' },
    { id: 'news',      label: 'News & Events', href: 'news.html' },
    { id: 'gallery',   label: 'Gallery',       href: 'gallery.html' },
    { id: 'donate',    label: 'Donate',        href: 'index.html#donate' },
    { id: 'contact',   label: 'Contact',       href: 'index.html#contact' },
  ];

  /* ── Template ─────────────────────────────────── */
  function buildNavHTML(activePage) {
    const links = NAV_LINKS.map(link => {
      const isActive = link.id === activePage;
      return `<li>
        <a href="${link.href}"
           class="nav__link${isActive ? ' nav__link--active' : ''}"
           ${isActive ? 'aria-current="page"' : ''}>
          ${link.label}
        </a>
      </li>`;
    }).join('');

    return `
<header class="navbar" id="navbar" role="banner">
  <div class="navbar__inner container">

    <!-- Logo + Brand -->
    <a href="index.html" class="navbar__brand" aria-label="Nirvrithi Charitable Trust — Home">
      <img
        src="assets/images/logo.png"
        alt="Pookoya Thangal Hospice logo"
        class="navbar__logo"
        width="48"
        height="48"
        loading="eager"
      />
      <span class="navbar__brand-text">
        <span class="navbar__brand-name">Nirvrithi</span>
        <span class="navbar__brand-sub">Charitable Trust</span>
      </span>
    </a>

    <!-- Desktop Nav -->
    <nav class="navbar__nav" aria-label="Primary navigation">
      <ul class="navbar__links" role="list">
        ${links}
      </ul>
    </nav>

    <!-- Hamburger (mobile) -->
    <button
      class="navbar__hamburger"
      id="navbar-hamburger"
      aria-controls="mobile-menu"
      aria-expanded="false"
      aria-label="Open navigation menu"
      type="button"
    >
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true" role="dialog" aria-label="Navigation menu">
    <nav aria-label="Mobile navigation">
      <ul class="mobile-menu__links" role="list">
        ${NAV_LINKS.map(link => `
        <li>
          <a href="${link.href}"
             class="mobile-menu__link${link.id === activePage ? ' mobile-menu__link--active' : ''}"
             ${link.id === activePage ? 'aria-current="page"' : ''}>
            ${link.label}
          </a>
        </li>`).join('')}
      </ul>
    </nav>
  </div>
</header>`;
  }

  /* ── Behaviour ────────────────────────────────── */
  function initNavbar() {
    const root = document.getElementById('navbar-root');
    if (!root) return;

    const activePage = getActivePage();
    root.innerHTML = buildNavHTML(activePage);

    const navbar     = document.getElementById('navbar');
    const hamburger  = document.getElementById('navbar-hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!navbar || !hamburger || !mobileMenu) return;

    /* Scroll: add --scrolled class */
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            navbar.classList.add('navbar--scrolled');
          } else {
            navbar.classList.remove('navbar--scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    /* Hamburger toggle */
    function openMenu() {
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close navigation menu');
      mobileMenu.setAttribute('aria-hidden', 'false');
      hamburger.classList.add('is-open');
      mobileMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });

    /* Close on Escape */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeMenu();
    });

    /* Close when a mobile link is clicked */
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    /* Close on outside click */
    document.addEventListener('click', e => {
      if (
        mobileMenu.classList.contains('is-open') &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ── Init ─────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavbar);
  } else {
    initNavbar();
  }
}());
