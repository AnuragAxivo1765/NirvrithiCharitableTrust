/**
 * FOOTER — Nirvrithi Charitable Trust
 * Renders the shared site footer.
 * Replace placeholder values (marked with [PLACEHOLDER]) with real information.
 */

(function () {
  'use strict';

  const FOOTER_HTML = `
<footer class="footer" role="contentinfo">
  <div class="footer__inner container">

    <!-- Col 1: Org Info -->
    <div class="footer__col footer__col--brand">
      <a href="index.html" class="footer__brand" aria-label="Nirvrithi Charitable Trust — Home">
        <img
          src="assets/images/logo.png"
          alt="Pookoya Thangal Hospice logo"
          class="footer__logo"
          width="56"
          height="56"
          loading="lazy"
        />
      </a>
      <div class="footer__org-info">
        <p class="footer__org-name">Nirvrithi Charitable Trust</p>
        <p class="footer__org-reg">Reg. No: ALP-58/2026</p>
        <p class="footer__org-desc">
          Supporting dignity, comfort, and care for palliative patients and their families in the Mannancherry community through the Pookoya Thangal Hospice.
        </p>
        <p class="footer__affiliation">
          An initiative affiliated with<br>
          <strong>Pookoya Thangal Hospice (PTH)</strong><br>
          <em>An initiative of IUML Kerala State Committee · Est. 15 August 2020</em>
        </p>
      </div>
    </div>

    <!-- Col 2: Quick Links -->
    <div class="footer__col">
      <h3 class="footer__heading">Quick Links</h3>
      <ul class="footer__links" role="list">
        <li><a href="index.html" class="footer__link">Home</a></li>
        <li><a href="index.html#about" class="footer__link">About Us</a></li>
        <li><a href="equipment.html" class="footer__link">Equipment</a></li>
        <li><a href="news.html" class="footer__link">News &amp; Events</a></li>
        <li><a href="gallery.html" class="footer__link">Gallery</a></li>
        <li>
          <a href="assets/Docs/NirvrithiCharitableTrust.pdf" target="_blank" rel="noopener noreferrer" class="footer__link" style="display:inline-flex;align-items:center;gap:6px;">
            Trust Deed (PDF)
            <span style="font-size:9px;font-weight:700;padding:1px 5px;background:rgba(30,86,60,0.12);color:var(--clr-primary-dark);border-radius:3px;">16P ↗</span>
          </a>
        </li>
        <li><a href="index.html#donate" class="footer__link">Donate</a></li>
        <li><a href="index.html#contact" class="footer__link">Contact</a></li>
        <li><a href="privacy.html" class="footer__link">Privacy Policy</a></li>
        <li><a href="terms.html" class="footer__link">Disclaimer</a></li>
      </ul>
    </div>

    <!-- Col 3: Contact -->
    <div class="footer__col">
      <h3 class="footer__heading">Contact Us</h3>
      <address class="footer__contact" aria-label="Organisation contact details">

        <div class="footer__contact-item">
          <svg class="footer__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>
            Chiyamveli, Building No. 142.E<br>
            Mannancerry PO, Alappuzha<br>
            Kerala, PIN: 688538
          </span>
        </div>

        <div class="footer__contact-item">
          <svg class="footer__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.43 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 5.86 5.86l.91-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.27 16z"/>
          </svg>
          <div>
            <a href="tel:+919633709243" class="footer__link">+91 96337 09243</a><br>
            <a href="tel:+919495759236" class="footer__link">+91 94957 59236</a>
          </div>
        </div>

        <div class="footer__contact-item">
          <svg class="footer__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href="mailto:nirvrithi2@gmail.com" class="footer__link">nirvrithi2@gmail.com</a>
        </div>

      </address>
    </div>

    <!-- Col 4: Social & Info -->
    <div class="footer__col">
      <h3 class="footer__heading">Follow Us</h3>
      <div class="footer__social">
        <a href="#" class="footer__social-link" aria-label="Facebook page (coming soon)" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
          <span>Facebook</span>
        </a>
        <a href="#" class="footer__social-link" aria-label="Instagram profile (coming soon)" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          <span>Instagram</span>
        </a>
        <a href="#" class="footer__social-link" aria-label="YouTube channel (coming soon)" rel="noopener noreferrer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42C1 8.14 1 11.73 1 11.73s0 3.59.46 5.31a2.78 2.78 0 0 0 1.95 1.95C5.12 19.46 12 19.46 12 19.46s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95C23 15.32 23 11.73 23 11.73s0-3.59-.46-5.31zM9.75 15.02V8.44l5.74 3.29-5.74 3.29z"/>
          </svg>
          <span>YouTube</span>
        </a>
      </div>

      <div class="footer__hours">
        <h4 class="footer__subheading">Contact Hours</h4>
        <p>Monday – Saturday<br>9:00 AM – 4:00 PM</p>
      </div>
    </div>

  </div>

  <!-- Footer Bottom Bar -->
  <div class="footer__bottom">
    <div class="container footer__bottom-inner">
      <p class="footer__copyright">
        &copy; 2026 Nirvrithi Charitable Trust. All rights reserved.
      </p>
      <nav class="footer__legal-links" aria-label="Legal links">
        <a href="privacy.html" class="footer__legal-link">Privacy Policy</a>
        <a href="terms.html" class="footer__legal-link">Disclaimer</a>
      </nav>
    </div>
  </div>

</footer>`;

  function initFooter() {
    const root = document.getElementById('footer-root');
    if (!root) return;
    root.innerHTML = FOOTER_HTML;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
  } else {
    initFooter();
  }
}());
