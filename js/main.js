const menu   = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const close  = document.querySelector('.mobile-close');
const mobileNav = document.querySelector('.mobile-nav');
const overlay    = document.querySelector('.menu-overlay');



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
