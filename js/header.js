document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
    <header class="navbar">
        <div class="logo">
        <a href="index.html"><img src="assets/images/logo.png" alt="Logo"></a>
        </div>
        <nav>
        <div class="nav-links">
            <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Lookbooks</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </div>
        </nav>
        <div class="nav-actions">
        <a href="#"><img src="assets/icons/ui/search.svg" alt="Search"></a>
        <a href="#">
            <img src="assets/icons/ui/shopping_cart.svg" alt="Shopping Cart">
            <span class="dot">1</span>
        </a>
        <a href="#"><img src="assets/icons/ui/account.svg" alt="Account"></a>
        </div>
        <button class="icon-btn hamburger" aria-label="Toggle menu">
        <img src="assets/icons/ui/hamburger.svg" alt="Menu">
        </button>
    <!-- OVERLAY WHEN MOBILE MENU ACTIVATES -->
    <div class="menu-overlay"></div>
    <!-- MOBILE MENU -->
    <nav class="mobile-menu">
        <!-- MOBILE OFF-CANVAS BUTTON -->
        <button class="icon-btn mobile-close" data-close-menu>
        <img src="assets/icons/ui/mobile-close.svg" alt="Close">
        </button>
        <ul class="mobile-menu-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Lookbooks</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <div class="mobile-social">
        <a href="#"><img src="assets/icons/ui/facebook.svg"  alt="Facebook"></a>
        <a href="#"><img src="assets/icons/ui/instagram.svg" alt="Instagram"></a>
        <a href="#"><img src="assets/icons/ui/mail.svg"      alt="Mail"></a>
        </div>
    </nav>
    </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  initializeMobileMenu();
});