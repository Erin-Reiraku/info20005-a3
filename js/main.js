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

/* Handle toggle logic for one accordion */
const handleAccordionToggle = (item, body, iconOpen, iconClose) => {
  const isOpen = item.classList.contains('open');

  if (isOpen) {
    
    item.classList.remove('open');
    body.style.maxHeight = null; // collapse body
    iconOpen.style.display = '';
    iconClose.style.display = 'none';
  } else {
    // Show “–” icon, hide “+” icon
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    iconOpen.style.display = 'none';
    iconClose.style.display = 'flex';
  }
};

/* Handle dynamically create single accordion */
const createAccordionItem = (title, name, options) => {
  const item = document.createElement('div');
  item.className = 'accordion-item';

  // Accordion header: title + icons
  item.innerHTML = `
    <div class="accordion-header">
      <h3>${title}</h3>
      <button class="icon-btn accordion-open">
        <img src="assets/icons/ui/accordion-open.svg" alt="Expand">
      </button>
      <button class="icon-btn accordion-close" style="display:none;">
        <img src="assets/icons/ui/accordion-close.svg" alt="Collapse">
      </button>
    </div>
    <div class="accordion-body">
      <div class="accordion-inner">
        ${options.map(opt => `
          <label class="color-option">
            <input type="checkbox" name="${name}" value="${opt.value}">
            ${opt.colorCode
              ? `<span class="color-label"><span class="color-dot" style="background-color: ${opt.colorCode}"></span>${opt.label}</span>`
              : `<span class="color-label">${opt.label}</span>`}
          </label>
        `).join('')}
      </div>
    </div>
  `;

  // Bind click event to toggle this accordion
  const header     = item.querySelector('.accordion-header');
  const body       = item.querySelector('.accordion-body');
  const iconOpen   = item.querySelector('.accordion-open');
  const iconClose  = item.querySelector('.accordion-close');

  header.addEventListener('click', () => {
    handleAccordionToggle(item, body, iconOpen, iconClose);
  });

  return item;
};

/* Data definition for accordion groups */
const filters = [
  {
    title: "Price",
    name: "price",
    options: [
      { label: "$0 - $50", value: "0-50" },
      { label: "$51 - $100", value: "51-100" },
      { label: "$101 - $200", value: "101-200" },
      { label: "$201 - $300", value: "201-300" },
      { label: "$300+", value: "300+" }
    ]
  },
  {
    title: "Availability",
    name: "availability",
    options: [
      { label: "In Stock", value: "in-stock" },
      { label: "Pre-order", value: "pre-order" },
      { label: "Sold Out", value: "sold-out" }
    ]
  },
  {
    title: "Size",
    name: "size",
    options: [
      { label: "S", value: "s" },
      { label: "M", value: "m" },
      { label: "L", value: "l" },
      { label: "XL", value: "xl" },
      { label: "XXL+", value: "xxl" },
      { label: "Custom Size", value: "custom" }
    ]
  },
  {
    title: "Colour",
    name: "colour",
    options: [
    { label: "Black", value: "black", colorCode: "#000000" },
    { label: "White", value: "white", colorCode: "#ffffff" },
    { label: "Pink", value: "pink", colorCode: "#D2AAAF" },
    { label: "Blue", value: "blue", colorCode: "#385E93" }
    ]
  },
  {
    title: "Collection",
    name: "collection",
    options: [
      { label: "Tea Time at Grandma's", value: "tea-time-grandmas" },
      { label: "Spooky Gotchi", value: "spooky-gotchi" },
      { label: "Galaxy Witch", value: "galaxy-witch" }
    ]
  }
];

/* Inject all accordion filters into the sidebar */
const sidebar = document.getElementById('filter-accordion');
filters.forEach(f => sidebar.appendChild(createAccordionItem(f.title, f.name, f.options)));