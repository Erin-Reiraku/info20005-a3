const menu   = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const close  = document.querySelector('.mobile-close');
const mobileNav = document.querySelector('.mobile-nav');
const overlay    = document.querySelector('.menu-overlay');

const accordionHeaders = document.querySelectorAll('.accordion-header');

/* handle mobile menu display */
hamburger.addEventListener('click', () => {
  menu.classList.add('is-open');
  overlay.classList.add('is-active');
  hamburger.style.display = 'none';
  close.style.display  = 'block';
});

/* handle close button on mobile menu display */
close.addEventListener('click', () => {
  menu.classList.remove('is-open');
  overlay.classList.remove('is-active');
  close.style.display  = 'none';
  hamburger.style.display = ''; // reset control to media
});

/* handle size change to screen that can safety display navbar, then close mobile menu */
const desktop = window.matchMedia('(min-width:1025px)');
desktop.addEventListener('change', e => {
  if(e.matches){                 // already change to big screen
    menu.classList.remove('is-open');
    overlay.classList.remove('is-active');
    close.style.display  = 'none';
    hamburger.style.display = '';   // reset control to media
  }
});

/* handle click on outside moile menu will first close it */
document.addEventListener('click', (e) => {
  if ( menu.classList.contains('is-open') &&
        !menu.contains(e.target) &&
        !hamburger.contains(e.target) &&
        !mobileNav.contains(e.target) ) {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-active');
    close.style.display  = 'none';
    hamburger.style.display = '';
  }
});

/* Handle click on each accordion header to toggle its panel */
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const iconOpen   = header.querySelector('.accordion-open');
    const iconClose  = header.querySelector('.accordion-close');
    const item = header.parentElement;            // .accordion-item
    const body = header.nextElementSibling;       // .accordion-body

    // If this panel is already open then close otherwise open it
    if (item.classList.contains('open')) {
      item.classList.remove('open');
      body.style.maxHeight = null;                // collapse body
      // Show “+” icon, hide “–” icon
      iconOpen.style.display = '';
      iconClose.style.display = 'none';
    } else {
      // Close any other open panels first
      accordionHeaders.forEach(h => {
        const siblingItem = h.parentElement;
        const siblingBody = h.nextElementSibling;
        if (siblingItem.classList.contains('open')) {
          siblingItem.classList.remove('open');
          siblingBody.style.maxHeight = null;
        }
      });
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px'; // expand body
      // Show “–” icon, hide “+” icon
      iconOpen.style.display = 'none';
      iconClose.style.display = 'flex';
    }
  });
});