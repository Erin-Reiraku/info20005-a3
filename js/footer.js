document.addEventListener("DOMContentLoaded", () => {
  const footerHTML = `
    <!-- FOOTER -->
    <footer>
      <p>© 2025 Lady Sloth. All rights reserved.</p>
    </footer>

    <!-- MOBILE BOTTOM NAV -->
    <nav class="mobile-nav">
      <a href="#">
        <img src="assets/icons/ui/search.svg" alt="Search">
      </a>
      <a href="cart.html">
        <img src="assets/icons/ui/shopping_cart.svg" alt="Cart">
        <span class="dot">1</span>
      </a>
      <a href="#">
        <img src="assets/icons/ui/account.svg" alt="Account">
      </a>
    </nav>
  `;

  document.body.insertAdjacentHTML("beforeend", footerHTML);
});