import PhotoSwipe from '../../node_modules/photoswipe';

export const initPhotoSwipe = (imageData, initialSlide, handleSlideChange) => {
  console.log('in initPhotoSwipe', imageData);
  const options = {
    dataSource: imageData,
    index: initialSlide,
  };

  console.log('received options', options);
  const pswp = new PhotoSwipe(options);

  pswp.on('change', () => {
    console.log('slidechanged', pswp.currIndex);
    handleSlideChange(pswp.currIndex);
  });

  pswp.init();
};
