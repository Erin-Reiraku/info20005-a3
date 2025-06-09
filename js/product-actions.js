// js/product-actions.js

function initializeVariantSelectors() {
  // handle color selection
  document.querySelectorAll('.color-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('selected'));
      dot.classList.add('selected');

      const label = dot.parentElement.querySelector('.color-label')?.textContent.trim() || 'None';
      document.getElementById('selected-color-label').textContent = label;
      updateActionButtons();
    });
  });

  // handle size selection
  document.querySelectorAll('.size-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');

      document.getElementById('selected-size-label').textContent = btn.textContent.trim();
      updateActionButtons();
    });
  });
}


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
    // get product stock status text
    const badgeEl   = document.querySelector('.product-info-panel .badge');
    const statusTxt = badgeEl ? badgeEl.textContent.trim() : 'Ready Stock';

    // get selected colour label
    const selectedColor = document.querySelector('.color-option .color-dot.selected');
    const colorLabel    = selectedColor?.parentElement.querySelector('.color-label')?.textContent.trim() || 'Unknown';

    // get selected size label
    const selectedSizeBtn = document.querySelector('.size-btn.selected');
    const selectedSize    = selectedSizeBtn?.textContent.trim() || 'Unknown';

    // get selected thumbnail image
    const selectedThumb = document.querySelector('.thumbnail.selected');
    const thumbSrc      = selectedThumb?.getAttribute('src') || 'assets/images/products-thumbnails/placeholder.jpg';

    // get product title text
    const titleEl = document.querySelector('.product-info-panel h1');
    const title   = titleEl ? titleEl.textContent.trim() : 'Unnamed Product';

    // get price as number
    const priceEl = document.querySelector('.product-info-panel .current-price');
    const currPrice   = priceEl ? parseFloat(priceEl.textContent.replace('$', '')) : 0;

    // get page name for link
    const page = location.pathname.split('/').pop() || 'product.html';

    // generate product id (based on slug + colour)
    const baseSlug = page.replace('.html', '').replace('product-', '');
    const productId = `${baseSlug}-${colorLabel.toLowerCase()}`;

    // build cart item object
    const item = {
      id:      productId,
      title:   title,
      thumb:   thumbSrc,
      price:   currPrice,
      qty:     getProductQuantity(), // use selected quantity
      colour:  colorLabel,
      size:    selectedSize,
      variant: `${colorLabel} / ${selectedSize}`,
      page:    page,
      status:  statusTxt
    };

    // add item to cart and redirect
    addToCart(item);
    window.location.href = 'cart.html';
  });
}

function initializeBuyNow() {
  const btn = document.getElementById('btn-buy-now');
  if (!btn) return;

  btn.addEventListener('click', () => {
    // get product stock status text
    const badgeEl   = document.querySelector('.product-info-panel .badge');
    const statusTxt = badgeEl ? badgeEl.textContent.trim() : 'Ready Stock';

    // get selected colour label
    const selectedColor = document.querySelector('.color-option .color-dot.selected');
    const colorLabel    = selectedColor?.parentElement.querySelector('.color-label')?.textContent.trim() || 'Unknown';

    // get selected size label
    const selectedSizeBtn = document.querySelector('.size-btn.selected');
    const selectedSize    = selectedSizeBtn?.textContent.trim() || 'Unknown';

    // get selected thumbnail image
    const selectedThumb = document.querySelector('.thumbnail.selected');
    const thumbSrc      = selectedThumb?.getAttribute('src') || 'assets/images/products-thumbnails/placeholder.jpg';

    // get product title text
    const titleEl = document.querySelector('.product-info-panel h1');
    const title   = titleEl ? titleEl.textContent.trim() : 'Unnamed Product';

    // get price as number
    const priceEl = document.querySelector('.product-info-panel .current-price');
    const currPrice = priceEl ? parseFloat(priceEl.textContent.replace('$', '')) : 0;

    // get page name for link
    const page = location.pathname.split('/').pop() || 'product.html';

    // generate product id
    const baseSlug = page.replace('.html', '').replace('product-', '');
    const productId = `${baseSlug}-${colorLabel.toLowerCase()}`;

    // build cart item
    const item = {
      id:      productId,
      title:   title,
      thumb:   thumbSrc,
      price:   currPrice,
      qty:     getProductQuantity(),
      colour:  colorLabel,
      size:    selectedSize,
      variant: `${colorLabel} / ${selectedSize}`,
      page:    page,
      status:  statusTxt
    };

    // clear cart, add item, go to checkout
    saveCartItems([item]); // only add current item
    window.location.href = 'checkout.html';
  });
}

function updateActionButtons() {
  const colorSelected = !!document.querySelector('.color-dot.selected');
  const sizeSelected  = !!document.querySelector('.size-btn.selected');
  const addBtn = document.getElementById('btn-add-to-cart');
  const buyBtn = document.getElementById('btn-buy-now');

  const enabled = colorSelected && sizeSelected;

  if (addBtn) addBtn.disabled = !enabled;
  if (buyBtn) buyBtn.disabled = !enabled;
}

// initialize both on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initializeQuantityControl();
  initializeVariantSelectors();
  initializeBuyNow();
  initializeAddToCart();
});