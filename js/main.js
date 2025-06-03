const menu   = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');
const close  = document.querySelector('.mobile-close');

/* handle mobile menu display */
hamburger.addEventListener('click', () => {
  menu.classList.add('is-open');
  hamburger.style.display = 'none';
  close.style.display  = 'block';
});

/* handle close button on mobile menu display */
close.addEventListener('click', () => {
  menu.classList.remove('is-open');
  close.style.display  = 'none';
  hamburger.style.display = ''; // reset control to media
});

/* handle size change to screen that can safety display navbar, then close mobile menu */
const desktop = window.matchMedia('(min-width:1025px)');
desktop.addEventListener('change', e => {
  if(e.matches){                 // already change to big screen
    menu.classList.remove('is-open');
    close.style.display  = 'none';
    hamburger.style.display = '';   // reset control to media
  }
});
