// update checkout page totals from localStorage
document.addEventListener('DOMContentLoaded', () => {
  const SHIPPING_FEE = 20;

  // try to get subtotal from localStorage
  const raw = localStorage.getItem('cartSubtotal');
  const subtotal = raw ? parseFloat(raw) : 0;
  const total = subtotal + SHIPPING_FEE;

  // update UI elements
  const subtotalEl = document.querySelector('.totals li:nth-child(1) span:last-child');
  const shippingEl = document.querySelector('.totals li:nth-child(2) span:last-child');
  const totalEl    = document.querySelector('.totals li.total span:last-child');

  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = `$${SHIPPING_FEE.toFixed(2)}`;
  if (totalEl)    totalEl.textContent    = `$${total.toFixed(2)}`;
});