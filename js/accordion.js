const accordionHeaders = document.querySelectorAll('.accordion-header');
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

/* Create a plain text accordion item */
const createTextAccordion = (title, htmlContent) => {
  const item = document.createElement('div');
  item.className = 'accordion-item';

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
        ${htmlContent}
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


/* Handle dynamically create single filter accordion with checkboxes */
const createFilterAccordion = (title, name, options) => {
  const item = document.createElement('div');
  item.className = 'accordion-item';

  // Accordion header: title + icons
  item.innerHTML = `
    <!-- START ACCORDION -->
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
    <!-- END ACCORDION -->
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