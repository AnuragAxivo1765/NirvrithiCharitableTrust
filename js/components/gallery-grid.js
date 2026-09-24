/**
 * GALLERY GRID + LIGHTBOX — Nirvrithi Charitable Trust
 * Renders the gallery grid and a keyboard-accessible modal lightbox.
 */

(function () {
  'use strict';

  /* ── Gallery Grid Renderer ─────────────────────── */

  /**
   * Renders gallery items into a container as a masonry-inspired grid.
   * @param {Array}       items     - Gallery data objects
   * @param {HTMLElement} container - Target DOM element
   * @param {boolean}     [showCaption=true]
   */
  window.renderGalleryGrid = function (items, container, showCaption = true) {
    if (!container) return;

    container.innerHTML = items.map((item, i) => {
      const delay = (i % 6) * 80;
      return `
      <figure class="gallery-item gallery-item--${item.aspect} anim-fade-in"
              style="transition-delay:${delay}ms"
              data-index="${i}"
              data-category="${item.category}"
              tabindex="0"
              role="button"
              aria-label="View larger: ${item.alt}"
              aria-haspopup="dialog">
        <div class="gallery-item__img-wrap">
          <img src="${item.src}" alt="${item.alt}" class="gallery-item__img" loading="lazy">
          <div class="gallery-item__overlay" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
            </svg>
          </div>
        </div>
        ${showCaption ? `
        <figcaption class="gallery-item__caption">
          <span class="gallery-item__event">${item.event}</span>
          <span class="gallery-item__date">${item.dateDisplay}</span>
        </figcaption>` : ''}
      </figure>`;
    }).join('');

    // Wire up click/keyboard for lightbox
    container.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index, 10), items));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(parseInt(item.dataset.index, 10), items);
        }
      });
    });

    if (window.initScrollAnimations) {
      window.initScrollAnimations();
    }
  };

  /* ── Lightbox ──────────────────────────────────── */

  let lightboxEl = null;
  let currentIndex = 0;
  let currentItems = [];

  function buildLightbox() {
    if (document.getElementById('lightbox')) return;

    const el = document.createElement('div');
    el.id = 'lightbox';
    el.className = 'lightbox';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Image lightbox');
    el.setAttribute('aria-hidden', 'true');

    el.innerHTML = `
      <div class="lightbox__backdrop"></div>
      <div class="lightbox__content">
        <button class="lightbox__close" id="lightbox-close" aria-label="Close lightbox" type="button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="Previous image" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div class="lightbox__img-wrap">
          <div class="lightbox__placeholder" id="lightbox-placeholder" aria-hidden="true" style="display:none;"></div>
          <img class="lightbox__img" id="lightbox-img" src="" alt="" loading="eager">
        </div>
        <button class="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="Next image" type="button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
        <div class="lightbox__caption" id="lightbox-caption" aria-live="polite"></div>
        <div class="lightbox__counter" id="lightbox-counter" aria-live="polite"></div>
      </div>`;

    document.body.appendChild(el);
    lightboxEl = el;

    el.querySelector('#lightbox-close').addEventListener('click', closeLightbox);
    el.querySelector('.lightbox__backdrop').addEventListener('click', closeLightbox);
    el.querySelector('#lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
    el.querySelector('#lightbox-next').addEventListener('click', () => navigateLightbox(1));

    document.addEventListener('keydown', e => {
      if (lightboxEl && lightboxEl.getAttribute('aria-hidden') === 'false') {
        if (e.key === 'Escape')     closeLightbox();
        if (e.key === 'ArrowLeft')  navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
      }
    });
  }

  function openLightbox(index, items) {
    buildLightbox();
    currentItems = items;
    currentIndex = index;
    updateLightbox();
    lightboxEl.setAttribute('aria-hidden', 'false');
    lightboxEl.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lightboxEl.querySelector('#lightbox-close').focus();
  }

  function closeLightbox() {
    if (!lightboxEl) return;
    lightboxEl.setAttribute('aria-hidden', 'true');
    lightboxEl.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + currentItems.length) % currentItems.length;
    updateLightbox();
  }

  function updateLightbox() {
    const item = currentItems[currentIndex];
    const placeholder = lightboxEl.querySelector('#lightbox-placeholder');
    const img         = lightboxEl.querySelector('#lightbox-img');
    const caption     = lightboxEl.querySelector('#lightbox-caption');
    const counter     = lightboxEl.querySelector('#lightbox-counter');

    placeholder.style.display = 'none';
    img.style.display = 'block';
    img.src = item.src;
    img.alt = item.alt;

    img.onerror = () => {
      placeholder.style.display = 'flex';
      img.style.display = 'none';
      placeholder.innerHTML = `
        <div class="lightbox__placeholder-content">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <p>${item.event}</p>
          <span>${item.dateDisplay}</span>
        </div>`;
    };

    caption.innerHTML = `<strong>${item.caption}</strong><span>${item.event} · ${item.dateDisplay}</span>`;
    counter.textContent = `${currentIndex + 1} / ${currentItems.length}`;
  }

  window.galleryLightbox = { open: openLightbox, close: closeLightbox };
}());
