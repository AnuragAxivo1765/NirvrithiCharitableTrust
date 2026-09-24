/**
 * NEWS PAGE — Nirvrithi Charitable Trust
 * Renders all news & events with client-side category filtering.
 */

(function () {
  'use strict';

  let activeCategory = 'All';

  function initNewsPage() {
    const container     = document.getElementById('news-all-grid');
    const filterBar     = document.getElementById('news-filter-bar');
    const resultsCount  = document.getElementById('news-results-count');

    if (!container || typeof NEWS_DATA === 'undefined') return;

    /* ── Build filter buttons ─────────────────── */
    if (filterBar) {
      filterBar.innerHTML = NEWS_CATEGORIES.map(cat => `
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
        ? [...NEWS_DATA]
        : NEWS_DATA.filter(n => n.category === activeCategory);

      filtered.sort((a, b) => a.sortOrder - b.sortOrder);

      if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">No items found for this category.</div>`;
      } else {
        renderNewsGrid(filtered, container, true);
      }

      if (resultsCount) {
        resultsCount.textContent = `Showing ${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;
      }
    }

    /* ── Initial render ───────────────────────── */
    renderFiltered();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewsPage);
  } else {
    initNewsPage();
  }
}());
