// js/product-gallery.js

function initializeGalleryNavigation() {
  const galleryImage = document.querySelector('.gallery-image');
  const variantLabel = document.querySelector('.variant-name');
  const thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
  const leftBtn = document.querySelector('.gallery-arrow-left');
  const rightBtn = document.querySelector('.gallery-arrow-right');

  if (!galleryImage || thumbnails.length === 0) return;

  // Derive full-size image and label from thumbnail
  const imageData = thumbnails.map(thumb => {
    const fullSrc = thumb.src
      .replace('products-thumbnails', 'products')
      .replace('-thumb', '');
    const altText = thumb.alt.replace('Thumbnail of ', '').trim();
    return { fullSrc, altText };
  });

  let currentIndex = thumbnails.findIndex(t => t.classList.contains('selected'));
  if (currentIndex === -1) currentIndex = 0;

  function updateGallery(index) {
    currentIndex = Math.max(0, Math.min(index, imageData.length - 1));
    
    // Update main image
    galleryImage.src = imageData[currentIndex].fullSrc;
    galleryImage.alt = imageData[currentIndex].altText;

    // Update variant text
    if (variantLabel) {
      variantLabel.textContent = imageData[currentIndex].altText;
    }

    // Update thumbnail selection
    thumbnails.forEach((thumb, i) => {
      thumb.classList.toggle('selected', i === currentIndex);
    });

    // Disable buttons at boundaries
    // Update button enabled/disabled class + icon image
        if (currentIndex === 0) {
        leftBtn.classList.add('disabled');
        leftBtn.querySelector('img').src = 'assets/icons/ui/left-arrow-disabled.svg';
        } else {
        leftBtn.classList.remove('disabled');
        leftBtn.querySelector('img').src = 'assets/icons/ui/left-arrow-btn.svg';
        }

        if (currentIndex === imageData.length - 1) {
        rightBtn.classList.add('disabled');
        rightBtn.querySelector('img').src = 'assets/icons/ui/right-arrow-disabled.svg';
        } else {
        rightBtn.classList.remove('disabled');
        rightBtn.querySelector('img').src = 'assets/icons/ui/right-arrow-btn.svg';
        }
  }

  window.updateGalleryByColorLabel = (labelText) => {
    const index = imageData.findIndex(data =>
      data.altText.toLowerCase().includes(labelText.toLowerCase())
    );
    if (index !== -1) updateGallery(index);
  };

  // Bind click to arrows
  leftBtn?.addEventListener('click', () => {
    if (currentIndex > 0) updateGallery(currentIndex - 1);
  });

  rightBtn?.addEventListener('click', () => {
    if (currentIndex < imageData.length - 1) updateGallery(currentIndex + 1);
  });

  // Bind click to thumbnails
  thumbnails.forEach((thumb, i) => {
    thumb.addEventListener('click', () => updateGallery(i));
  });

  // Initialize on load
  updateGallery(currentIndex);
}

document.addEventListener('DOMContentLoaded', initializeGalleryNavigation);