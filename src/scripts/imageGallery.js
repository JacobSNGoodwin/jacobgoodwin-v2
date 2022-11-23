// Photoswip TS Support is crapoola... otherwise awesome, though!

import PhotoSwipeLightbox from 'photoswipe/lightbox';

const handleInitializeGallery = (gallery) => {
  const imageData = JSON.parse(gallery.dataset.images);

  const options = {
    dataSource: imageData,
    pswpModule: () => import('photoswipe'),
  };

  const lightbox = new PhotoSwipeLightbox(options);

  lightbox.init();

  return lightbox;
};

const handleOpenGallery = (lightboxes, i) => {
  lightboxes[i].loadAndOpen(0);
};

const initializePhotoGalleries = () => {
  // initialize lightboxes
  const galleries = document.querySelectorAll('button[data-images]');

  const lightboxes = [...galleries].map(handleInitializeGallery);

  console.log('initialized lightboxes', lightboxes);

  // add open gallery listeners
  for (let i = 0; i < galleries.length; i++) {
    galleries[i].addEventListener('click', () =>
      handleOpenGallery(lightboxes, i)
    );
  }
};

export default initializePhotoGalleries;
