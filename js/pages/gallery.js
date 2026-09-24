/**
 * GALLERY PAGE — Nirvrithi Charitable Trust
 * Renders the full gallery grid with category filter and lightbox.
 */

(function () {
  'use strict';

  let activeCategory = 'All';

  function initGalleryPage() {
    const container    = document.getElementById('gallery-all-grid');
    const filterBar    = document.getElementById('gallery-filter-bar');
    const resultsCount = document.getElementById('gallery-results-count');

    if (!container || typeof GALLERY_DATA === 'undefined') return;

    /* ── Build filter buttons ─────────────────── */
    if (filterBar) {
      filterBar.innerHTML = GALLERY_CATEGORIES.map(cat => `
        <button
          class="filter-btn${cat === 'All' ? ' is-active' : ''}"
          data-category="${cat}"
          type="button"
          aria-pressed="${cat === 'All'}"
        >${cat}</button>
      `).join('');

      filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          activeCategory = btn.dataset.category;
          filterBar.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('is-active', b.dataset.category === activeCategory);
            b.setAttribute('aria-pressed', b.dataset.category === activeCategory);
          });
          renderFiltered();
        });
      });
    }

    /* ── Render filtered results ──────────────── */
    function renderFiltered() {
      const filtered = activeCategory === 'All'
        ? [...GALLERY_DATA]
        : GALLERY_DATA.filter(g => g.category === activeCategory);

      if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">No photos found for this category.</div>`;
      } else {
        renderGalleryGrid(filtered, container, true);
      }

      if (resultsCount) {
        resultsCount.textContent = `Showing ${filtered.length} photo${filtered.length !== 1 ? 's' : ''}`;
      }
    }

    /* ── Initial render ───────────────────────── */
    renderFiltered();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGalleryPage);
  } else {
    initGalleryPage();
  }
}());
