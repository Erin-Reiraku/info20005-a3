// all product page add-to-cart logic
function initializeAddToCart() {
  const btn = document.getElementById('btn-add-to-cart');
  if (!btn) return;

  // handle "Add to Cart" click
  btn.addEventListener('click', () => {
    // read stock status from badge
    const badgeEl   = document.querySelector('.product-info-panel .badge');
    const statusTxt = badgeEl ? badgeEl.textContent.trim() : 'Ready Stock';

    // build cart item object
    const item = {
      id:      'tea-grandma-jsk2-blue',
      title:   "Tea Time at Grandma's - JSK II",
      thumb:   'assets/images/products-thumbnails/tea-grandma-jsk2-blue-thumb.jpg',
      price:   110,
      qty:     1,
      colour:  'Blue',
      size:    'S',
      variant: 'Blue / S',
      page:    'product-tea-time.html',
      status:  statusTxt
    };

    // add item via cart-storage API
    addToCart(item);

    // redirect to cart page
    window.location.href = 'cart.html';
  });
}

// initialize on DOM ready
document.addEventListener('DOMContentLoaded', initializeAddToCart);
