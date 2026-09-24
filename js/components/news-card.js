/**
 * NEWS CARD COMPONENT — Nirvrithi Charitable Trust
 * Renders individual news/event cards and accessible detail modal.
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
<article class="news-card" data-category="${item.category}" data-id="${item.id}" tabindex="0" role="button" aria-label="View details: ${item.title}">

  <!-- Featured Image -->
  <div class="news-card__img-wrap">
    <img src="${item.image}" alt="${item.title}" class="news-card__img" loading="lazy">
    <span class="news-card__category news-card__category--${colorClass}">${item.category}</span>
  </div>

  <!-- Card Body -->
  <div class="news-card__body">
    <time class="news-card__date" datetime="${item.date}">${item.dateDisplay}</time>
    <h3 class="news-card__title">${item.title}</h3>
    <p class="news-card__excerpt">${item.excerpt}</p>
    <div class="news-card__footer">
      <button type="button" class="news-card__read-more" aria-label="Read full details about ${item.title}">
        Read Details
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>
    </div>
  </div>

</article>`;
}

/* ── News Detail Modal ────────────────────────────── */

let newsModalEl = null;

function buildNewsModal() {
  if (document.getElementById('news-modal')) {
    newsModalEl = document.getElementById('news-modal');
    return;
  }

  const el = document.createElement('div');
  el.id = 'news-modal';
  el.className = 'news-modal';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.setAttribute('aria-label', 'News details');
  el.setAttribute('aria-hidden', 'true');

  el.innerHTML = `
    <div class="news-modal__backdrop"></div>
    <div class="news-modal__content">
      <button class="news-modal__close" id="news-modal-close" aria-label="Close modal" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
      <div class="news-modal__media">
        <img class="news-modal__img" id="news-modal-img" src="" alt="" loading="eager">
      </div>
      <div class="news-modal__body">
        <div class="news-modal__meta">
          <span class="news-modal__category" id="news-modal-category"></span>
          <time class="news-modal__date" id="news-modal-date"></time>
        </div>
        <h2 class="news-modal__title" id="news-modal-title"></h2>
        <div class="news-modal__text" id="news-modal-text"></div>
      </div>
    </div>`;

  document.body.appendChild(el);
  newsModalEl = el;

  el.querySelector('#news-modal-close').addEventListener('click', closeNewsModal);
  el.querySelector('.news-modal__backdrop').addEventListener('click', closeNewsModal);

  document.addEventListener('keydown', e => {
    if (newsModalEl && newsModalEl.classList.contains('is-open')) {
      if (e.key === 'Escape') closeNewsModal();
    }
  });
}

function openNewsModal(item) {
  buildNewsModal();
  if (!newsModalEl || !item) return;

  const colorClass = CATEGORY_COLORS[item.category] || 'news';
  const img        = newsModalEl.querySelector('#news-modal-img');
  const catEl      = newsModalEl.querySelector('#news-modal-category');
  const dateEl     = newsModalEl.querySelector('#news-modal-date');
  const titleEl    = newsModalEl.querySelector('#news-modal-title');
  const textEl     = newsModalEl.querySelector('#news-modal-text');

  img.src = item.image;
  img.alt = item.title;
  catEl.textContent = item.category;
  catEl.className = `news-modal__category news-card__category--${colorClass}`;
  dateEl.textContent = item.dateDisplay;
  dateEl.setAttribute('datetime', item.date);
  titleEl.textContent = item.title;
  textEl.innerHTML = `<p>${item.content}</p>`;

  newsModalEl.setAttribute('aria-hidden', 'false');
  newsModalEl.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  newsModalEl.querySelector('#news-modal-close').focus();
}

function closeNewsModal() {
  if (!newsModalEl) return;
  newsModalEl.setAttribute('aria-hidden', 'true');
  newsModalEl.classList.remove('is-open');
  document.body.style.overflow = '';
}

window.newsDetailModal = { open: openNewsModal, close: closeNewsModal };

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

  // Wire up click / keyboard handlers for modal
  container.querySelectorAll('.news-card').forEach(card => {
    const id = card.dataset.id;
    const item = items.find(n => n.id === id);
    if (!item) return;

    card.addEventListener('click', () => openNewsModal(item));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openNewsModal(item);
      }
    });
  });

  if (animate && window.initScrollAnimations) {
    window.initScrollAnimations();
  }
}
