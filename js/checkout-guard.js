document.addEventListener('DOMContentLoaded', () => {
  const checkoutBtn = document.getElementById('btn-checkout');
  if (!checkoutBtn) return;

  const subtotalEl = document.querySelector('.totals li span:last-child');
  if (!subtotalEl) return;

  // extract numeric value from $xx.xx
  const value = parseFloat(subtotalEl.textContent.replace('$', ''));
  if (isNaN(value) || value === 0) {
    checkoutBtn.classList.add('disabled');
  }
});