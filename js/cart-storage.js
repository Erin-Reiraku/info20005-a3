// all cart storage logic
(function() {
  // get items array from localStorage
  function getCartItems() {
    const raw = localStorage.getItem('cartItems');
    return raw ? JSON.parse(raw) : [];
  }

  // save items array to localStorage
  function saveCartItems(items) {
    localStorage.setItem('cartItems', JSON.stringify(items));
    const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
    localStorage.setItem('cartSubtotal', subtotal.toFixed(2));
  }

  // update cart badge in header/footer
  function updateCartBadge(count) {
    document.querySelectorAll('.nav-actions .dot, .mobile-nav .dot')
      .forEach(dot => {
        if (count > 0) {
          dot.textContent   = count;
          dot.style.display = 'inline-flex';
        } else {
          dot.style.display = 'none';
        }
      });
  }

  // add an item (or increase qty) and refresh badge
  function addToCart(item) {
    const items = getCartItems();
    const idx   = items.findIndex(i => i.id === item.id);

    if (idx > -1) {
      items[idx].qty += item.qty;
    } else {
      items.push(item);
    }

    saveCartItems(items);
    updateCartBadge(items.reduce((sum, i) => sum + i.qty, 0));
  }

  // render cart table; assumes <tbody id="cart-items">
  function renderCart() {
  const tbody = document.getElementById('cart-items');
  if (!tbody) return;

  const items = getCartItems();
  tbody.innerHTML = '';

  let subtotal = 0;

  items.forEach(item => {
    // fallback for legacy variant field
    let colour = item.colour, size = item.size;
    if ((!colour || !size) && item.variant) {
      const [c, s] = item.variant.split('/').map(x => x.trim());
      colour = colour || c;
      size   = size   || s;
    }
    const status = item.status || '';
    const itemTotal = item.qty * item.price;
    subtotal += itemTotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="cart-product">
        <div class="cart-prod-box">
          <a href="${item.page}">
            <img src="${item.thumb}" alt="${item.title}" />
          </a>
          <div class="cart-info">
            <p><a href="${item.page}"><strong>${item.title}</strong></a></p>
            <p>Colour: <strong>${colour}</strong></p>
            <p>Size:   <strong>${size}</strong></p>
            <p>Status: <strong>${status}</strong></p>
          </div>
        </div>
      </td>
      <td class="cart-quantity">
        <div class="cart-actions">
          <div class="quantity-selector">
            <button class="quantity-btn" data-id="${item.id}" data-delta="-1">-</button>
            <span class="quantity-display">${item.qty}</span>
            <button class="quantity-btn" data-id="${item.id}" data-delta="1">+</button>
          </div>
          <button class="btn btn-danger" data-remove-id="${item.id}">Remove</button>
          <br><strong class="price">$${itemTotal.toFixed(2)}</strong>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });

  // update subtotal in <ul class="totals">
  const subtotalEl = document.querySelector('.totals li span:last-child');
  if (subtotalEl) {
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  }

  updateCartBadge(items.reduce((sum, i) => sum + i.qty, 0));
}

  // initialize: renderCart, update badge on all pages, bind cart events
  document.addEventListener('DOMContentLoaded', () => {
    const page = location.pathname.split('/').pop();
    if (page === 'thankyou.html') { // when complete payment, clear localStorage
      saveCartItems([]);            // clear cartItems of localStorage
      updateCartBadge(0);           // update badge to 0
    }

    renderCart();

    // always refresh badge even on non-cart pages
    const total = getCartItems().reduce((sum, i) => sum + i.qty, 0);
    updateCartBadge(total);

    // delegate quantity +/- and remove on cart page
    const tbody = document.getElementById('cart-items');
    tbody?.addEventListener('click', e => {
      const btn    = e.target.closest('button');
      const id     = btn?.dataset.id;
      const delta  = parseInt(btn?.dataset.delta, 10);
      const remove = btn?.dataset.removeId;

      if (id && !isNaN(delta)) {
        const items = getCartItems().map(i => {
          if (i.id === id) i.qty = Math.max(1, i.qty + delta);
          return i;
        });
        saveCartItems(items);
        return renderCart();
      }

      if (remove) {
        saveCartItems(getCartItems().filter(i => i.id !== remove));
        renderCart();
      }
    });
  });

  // expose API for external use
  window.getCartItems    = getCartItems;
  window.saveCartItems   = saveCartItems;
  window.updateCartBadge = updateCartBadge;
  window.addToCart       = addToCart;
  window.renderCart      = renderCart;
})();