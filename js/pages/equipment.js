/**
 * EQUIPMENT PAGE — Nirvrithi Charitable Trust
 * Renders all equipment with client-side filtering by availability and category.
 */

(function () {
  'use strict';

  let activeFilter = 'all';

  function initEquipmentPage() {
    const container     = document.getElementById('equipment-all-grid');
    const filterBar     = document.getElementById('equipment-filter-bar');
    const resultsCount  = document.getElementById('equipment-results-count');

    if (!container || typeof EQUIPMENT_DATA === 'undefined') return;

    /* ── Build filter buttons ─────────────────── */
    if (filterBar) {
      const filters = [
        { id: 'all',         label: 'All Equipment' },
        { id: 'available',   label: 'Available' },
        { id: 'unavailable', label: 'Unavailable' },
        ...EQUIPMENT_CATEGORIES.map(cat => ({ id: cat, label: cat }))
      ];

      filterBar.innerHTML = filters.map(f => `
        <button
          class="filter-btn${f.id === 'all' ? ' is-active' : ''}"
          data-filter="${f.id}"
          type="button"
          aria-pressed="${f.id === 'all'}"
        >${f.label}</button>
      `).join('');

      filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          activeFilter = btn.dataset.filter;
          filterBar.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('is-active', b.dataset.filter === activeFilter);
            b.setAttribute('aria-pressed', b.dataset.filter === activeFilter);
          });
          renderFiltered();
        });
      });
    }

    /* ── Render filtered results ──────────────── */
    function renderFiltered() {
      let filtered;
      if (activeFilter === 'all') {
        filtered = EQUIPMENT_DATA.filter(e => !e.disabled);
      } else if (activeFilter === 'available') {
        filtered = EQUIPMENT_DATA.filter(e => e.available && !e.disabled);
      } else if (activeFilter === 'unavailable') {
        filtered = EQUIPMENT_DATA.filter(e => !e.available && !e.disabled);
      } else {
        filtered = EQUIPMENT_DATA.filter(e => e.category === activeFilter && !e.disabled);
      }

      filtered.sort((a, b) => a.sortOrder - b.sortOrder);

      if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results">No equipment found for this filter.</div>`;
      } else {
        renderEquipmentGrid(filtered, container, true);
      }

      if (resultsCount) {
        resultsCount.textContent = `Showing ${filtered.length} item${filtered.length !== 1 ? 's' : ''}`;
      }
    }

    /* ── Initial render ───────────────────────── */
    renderFiltered();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEquipmentPage);
  } else {
    initEquipmentPage();
  }
}());
