// all unload warning logic
function initializeUnloadWarning() {
  const THANKYOU_PAGE = 'thankyou.html';

  // show native beforeunload dialog on refresh/close
  function handleBeforeUnload(e) {
    e.preventDefault();
    // Chrome requires returnValue to be set
    e.returnValue = '';
  }

  // attach unload warning on window
  window.addEventListener('beforeunload', handleBeforeUnload);

  // intercept all link clicks
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a');
    if (!anchor) return;

    const href = anchor.getAttribute('href');
    // ignore anchors and empty hrefs
    if (!href || href.startsWith('#')) return;

    // if going to thankyou page, remove warning and allow
    if (href.includes(THANKYOU_PAGE)) {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      return;
    }

    // otherwise, confirm with the user before navigating away
    const leave = window.confirm(
      'Are you sure you want to leave the checkout page? Your order won\'t be saved.'
    );
    if (!leave) {
      // user chose to stay, cancel navigation
      e.preventDefault();
    } else {
      // user confirmed, remove warning so link proceeds without dialog
      window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  });
}

// initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeUnloadWarning);