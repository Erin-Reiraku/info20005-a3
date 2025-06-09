// js/cart-badge.js
;(() => {
  /**
   * Update all shopping-cart badge dots in header and footer.
   * @param {number} count  Number of items; if ≤0, hides the badge.
   */
  function updateCartBadge(count) {
    const badges = document.querySelectorAll('.nav-actions .dot, .mobile-nav .dot');
    badges.forEach(dot => {
      if (count > 0) {
        dot.textContent = count;
        dot.style.display = 'inline-flex';
      } else {
        dot.style.display = 'none';
      }
    });
  }

  // Expose globally so we can also call updateCartBadge() later
  window.updateCartBadge = updateCartBadge;

  // Cache the <script> element reference right now (while it's still current)
  const thisScript = document.currentScript;
  // Read its data-count, parse to integer
  const initialCount = Number(thisScript.dataset.count);

  // Once the DOM is ready, initialize the badge
  document.addEventListener('DOMContentLoaded', () => {
    if (!isNaN(initialCount)) {
      updateCartBadge(initialCount);
    }
  });
})();