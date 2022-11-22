import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';

export const initPhotoSwipe = (imageData, handleSlideChange) => {
  console.log('in initPhotoSwipe', imageData);
  const options = {
    dataSource: imageData,
    pswpModule: () => import('../../node_modules/photoswipe'),
  };

  const lightbox = new PhotoSwipeLightbox(options);

  lightbox.on('change', () => {
    // console.log('slidechanged', lightbox.currIndex);
    handleSlideChange(lightbox?.pswp?.currIndex);
  });

  lightbox.init();

  return lightbox;
};

export const openPhotoSwipe = (lightbox, initialSlide) => {
  lightbox.loadAndOpen(initialSlide);
};
