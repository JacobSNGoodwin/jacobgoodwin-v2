const replaceImage = (img: HTMLImageElement) => {
  const imgId = img.getAttribute('data-img-id');

  const placeholderEl: HTMLImageElement = document.querySelector(
    `img[data-placeholder-id="${imgId}"]`
  );

  placeholderEl.style.display = 'none';
};

const loadImages = () => {
  const resultImages =
    document.querySelectorAll<HTMLImageElement>('[data-img-id]');

  // if images were, cached, for example
  const loadedImages = [...resultImages].filter(
    (img) => img.complete && img.naturalHeight !== 0
  );
  const unloadedImages = [...resultImages].filter(
    (img) => !img.complete || img.naturalHeight === 0
  );

  for (let i = 0; i < unloadedImages.length; i++) {
    unloadedImages[i].addEventListener('load', (e) => {
      if (e.target instanceof HTMLImageElement) {
        replaceImage(e.target);
      }
    });
  }

  for (let i = 0; i < loadedImages.length; i++) {
    replaceImage(loadedImages[i]);
  }
};

export default loadImages;