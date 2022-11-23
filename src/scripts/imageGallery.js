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

const handleOpenGallery = (lightbox, startIndex) => {
  lightbox.loadAndOpen(startIndex);
};

const initializePhotoGalleries = () => {
  // initialize lightboxes
  const galleries = document.querySelectorAll('button[data-images]');

  const lightboxes = [...galleries].map(handleInitializeGallery);

  const closedIndices = new Array(2).fill(0);

  // track last index
  for (let i = 0; i < lightboxes.length; i++) {
    lightboxes[i].on('close', () => {
      closedIndices[i] = lightboxes[i]?.pswp?.currIndex ?? 0;
    });
  }

  // add open gallery listeners
  for (let i = 0; i < galleries.length; i++) {
    galleries[i].addEventListener('click', () =>
      handleOpenGallery(lightboxes[i], closedIndices[i])
    );
  }
};

export default initializePhotoGalleries;
