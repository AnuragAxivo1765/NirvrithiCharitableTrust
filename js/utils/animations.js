/**
 * SCROLL ANIMATIONS — Nirvrithi Charitable Trust
 * Uses IntersectionObserver to trigger CSS animation classes on scroll.
 * Respects prefers-reduced-motion OS setting.
 */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Immediately make all animated elements visible, skip animations
    document.querySelectorAll('.anim-fade-up, .anim-fade-in').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after first trigger (animate once)
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initAnimations() {
    document.querySelectorAll('.anim-fade-up, .anim-fade-in').forEach(el => {
      observer.observe(el);
    });
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

  // Re-run when new elements are added (e.g., after dynamic rendering)
  window.initScrollAnimations = function () {
    document.querySelectorAll('.anim-fade-up:not(.is-visible), .anim-fade-in:not(.is-visible)').forEach(el => {
      observer.observe(el);
    });
  };
}());
