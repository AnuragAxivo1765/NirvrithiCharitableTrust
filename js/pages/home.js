/**
 * HOME PAGE — Nirvrithi Charitable Trust
 * Initialises all dynamic sections on index.html:
 *   - Equipment preview (featured items only)
 *   - News preview (featured items only)
 *   - Gallery preview (first 6 items)
 */

(function () {
  'use strict';

  function initHome() {
    /* ── Equipment Preview ─────────────────────── */
    const equipContainer = document.getElementById('equipment-preview-grid');
    if (equipContainer && typeof EQUIPMENT_DATA !== 'undefined') {
      const featured = EQUIPMENT_DATA
        .filter(e => e.featured && !e.disabled)
        .sort((a, b) => a.sortOrder - b.sortOrder);
      renderEquipmentGrid(featured, equipContainer, true);
    }

    /* ── News Preview ──────────────────────────── */
    const newsContainer = document.getElementById('news-preview-grid');
    if (newsContainer && typeof NEWS_DATA !== 'undefined') {
      const featured = NEWS_DATA
        .filter(n => n.featured)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .slice(0, 3);
      renderNewsGrid(featured, newsContainer, true);
    }

    /* ── Gallery Preview ───────────────────────── */
    const galleryContainer = document.getElementById('gallery-preview-grid');
    if (galleryContainer && typeof GALLERY_DATA !== 'undefined') {
      const preview = GALLERY_DATA.slice(0, 6);
      renderGalleryGrid(preview, galleryContainer, true);
    }

    /* ── Smooth scroll for anchor links ───────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHome);
  } else {
    initHome();
  }
}());
