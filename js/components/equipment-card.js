/**
 * EQUIPMENT CARD COMPONENT — Nirvrithi Charitable Trust
 * Renders a single equipment card from a data object.
 *
 * Usage:
 *   renderEquipmentCard(equipmentItem) → returns HTML string
 *   renderEquipmentGrid(items, containerEl) → injects cards into container
 */

/* Equipment category icons (SVG) */
const EQUIPMENT_ICONS = {
  'Patient Care': `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  'Mobility':     `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="5" r="3"/><path d="M12 8v8"/><path d="M5 14h6"/><path d="M13 14h6"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>`,
  'Respiratory':  `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21c0-2.21-2.24-4-5-4s-5 1.79-5 4"/><circle cx="12" cy="11" r="4"/><path d="M12 7V4"/><path d="M5.2 7.2 3.78 5.78"/><path d="M18.8 7.2l1.42-1.42"/></svg>`,
  'Monitoring':   `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  'Medical':      `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
};

/**
 * Returns the HTML string for one equipment card.
 * @param {Object} item - Equipment data object from EQUIPMENT_DATA
 * @returns {string} HTML string
 */
function renderEquipmentCard(item) {
  if (item.disabled) return '';
  const icon = EQUIPMENT_ICONS[item.category] || EQUIPMENT_ICONS['Medical'];
  
  const availClass = item.available ? 'available' : 'unavailable';
  const availLabel = item.available ? 'Available' : 'Currently Unavailable';
  const unitText   = item.available ? `${String(item.availableUnits).padStart(2, '0')} of ${item.totalUnits}` : '00';

  const imgContent = item.image
    ? `<img src="${item.image}" alt="${item.name} image from Magnific" class="equipment-card__img" loading="lazy" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
    <div class="equipment-card__img-placeholder" aria-hidden="true" style="display:none;">
      <div class="equipment-card__icon">${icon}</div>
    </div>`
    : `<div class="equipment-card__img-placeholder" aria-hidden="true">
      <div class="equipment-card__icon">${icon}</div>
    </div>`;

  return `
<article class="equipment-card" data-category="${item.category}" data-available="${item.available ? 'true' : 'false'}" aria-label="${item.name}">

  <!-- Equipment Image / Placeholder -->
  <div class="equipment-card__img-wrap">
    ${imgContent}
    <span class="equipment-card__category">${item.category}</span>
  </div>

  <!-- Card Body -->
  <div class="equipment-card__body">
    <h3 class="equipment-card__name">${item.name}</h3>
    <p class="equipment-card__desc">${item.description}</p>

    <!-- Availability -->
    <div class="equipment-card__footer">
      <div class="availability-badge availability-badge--${availClass}" role="status" aria-label="Availability status: ${availLabel}">
        <span class="availability-badge__dot" aria-hidden="true"></span>
        <span class="availability-badge__text">${availLabel}</span>
      </div>
      <div class="equipment-card__units" aria-label="Units available: ${item.available ? item.availableUnits : 0}">
        <span class="equipment-card__units-label">Units Available</span>
        <span class="equipment-card__units-count">${unitText}</span>
      </div>
    </div>
  </div>

</article>`;
}

/**
 * Renders an array of equipment items into a container.
 * @param {Array} items - Array of equipment data objects
 * @param {HTMLElement} container - Target DOM element
 * @param {boolean} [animate=true] - Whether to add animation classes
 */
function renderEquipmentGrid(items, container, animate = true) {
  if (!container) return;
  const activeItems = items.filter(item => !item.disabled);
  container.innerHTML = activeItems.map((item, i) => {
    const card = renderEquipmentCard(item);
    if (animate) {
      // Wrap with animation div
      const delay = Math.min(i, 5) * 100;
      return `<div class="anim-fade-up delay-${delay}" style="--delay:${delay}ms">${card}</div>`;
    }
    return card;
  }).join('');

  if (animate && window.initScrollAnimations) {
    window.initScrollAnimations();
  }
}
