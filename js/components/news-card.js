/**
 * NEWS CARD COMPONENT — Nirvrithi Charitable Trust
 * Renders individual news/event cards.
 */

const CATEGORY_COLORS = {
  'News':         'news',
  'Event':        'event',
  'Announcement': 'announcement',
  'Awareness':    'awareness',
  'Community':    'community',
};

/**
 * Returns the HTML string for one news card.
 * @param {Object} item - News data object from NEWS_DATA
 * @returns {string} HTML string
 */
function renderNewsCard(item) {
  const colorClass = CATEGORY_COLORS[item.category] || 'news';

  return `
<article class="news-card" data-category="${item.category}" aria-label="${item.title}">

  <!-- Featured Image / Placeholder -->
  <div class="news-card__img-wrap">
    <div class="news-card__img-placeholder" aria-hidden="true">
      <div class="news-card__img-icon">
        ${getNewsIcon(item.category)}
      </div>
      <!--
        IMAGE PLACEHOLDER
        Replace with: <img src="${item.image}" alt="${item.title}" loading="lazy">
        and remove this placeholder div.
      -->
    </div>
    <span class="news-card__category news-card__category--${colorClass}">${item.category}</span>
  </div>

  <!-- Card Body -->
  <div class="news-card__body">
    <time class="news-card__date" datetime="${item.date}">${item.dateDisplay}</time>
    <h3 class="news-card__title">${item.title}</h3>
    <p class="news-card__excerpt">${item.excerpt}</p>
    <div class="news-card__footer">
      <a href="#" class="news-card__read-more" aria-label="Read more about ${item.title}">
        Read More
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
    </div>
  </div>

</article>`;
}

function getNewsIcon(category) {
  const icons = {
    'Event': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    'News':  `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    'Announcement': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    'Awareness': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
    'Community': `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  };
  return icons[category] || icons['News'];
}

/**
 * Renders an array of news items into a container.
 * @param {Array} items - Array of news data objects
 * @param {HTMLElement} container - Target DOM element
 * @param {boolean} [animate=true]
 */
function renderNewsGrid(items, container, animate = true) {
  if (!container) return;
  container.innerHTML = items.map((item, i) => {
    const card = renderNewsCard(item);
    if (animate) {
      const delay = Math.min(i, 5) * 100;
      return `<div class="anim-fade-up" style="transition-delay:${delay}ms">${card}</div>`;
    }
    return card;
  }).join('');

  if (animate && window.initScrollAnimations) {
    window.initScrollAnimations();
  }
}
