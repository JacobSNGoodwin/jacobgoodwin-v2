import type { ParentComponent } from 'solid-js';

type SliderImageProps = {
  caption?: string;
};

// simple component to wrap BaseImage.astro
const SliderImage: ParentComponent<SliderImageProps> = ({
  children,
  caption,
}) => {
  return (
    <div>
      {children}
      <h3>{caption}</h3>
    </div>
  );
};

export default SliderImage;
