// js/product-cart.js

// quantity control logic (product page only)
function initializeQuantityControl() {
  const section = document.querySelector('.product-option .quantity-selector');
  if (!section) return;

  const minusBtn = section.querySelector('.quantity-btn:first-child');
  const plusBtn  = section.querySelector('.quantity-btn:last-child');
  const display  = section.querySelector('.quantity-display');

  let count = parseInt(display.textContent, 10) || 1;
  updateButtons();

  minusBtn.addEventListener('click', () => {
    if (count > 1) {
      count--;
      display.textContent = count;
      updateButtons();
    }
  });

  plusBtn.addEventListener('click', () => {
    count++;
    display.textContent = count;
    updateButtons();
  });

  function updateButtons() {
    minusBtn.disabled = count <= 1;
  }

  // expose count getter
  window.getProductQuantity = () => count;
}

// add-to-cart logic (product page only)
function initializeAddToCart() {
  const btn = document.getElementById('btn-add-to-cart');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const badgeEl   = document.querySelector('.product-info-panel .badge');
    const statusTxt = badgeEl ? badgeEl.textContent.trim() : 'Ready Stock';

    const item = {
      id:      'tea-grandma-jsk2-blue',
      title:   "Tea Time at Grandma's - JSK II",
      thumb:   'assets/images/products-thumbnails/tea-grandma-jsk2-blue-thumb.jpg',
      price:   110,
      qty:     getProductQuantity(), // ✅ use selected quantity
      colour:  'Blue',
      size:    'S',
      page:    'product-tea-time.html',
      status:  statusTxt
    };

    addToCart(item);
    window.location.href = 'cart.html';
  });
}

// initialize both on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initializeQuantityControl();
  initializeAddToCart();
});