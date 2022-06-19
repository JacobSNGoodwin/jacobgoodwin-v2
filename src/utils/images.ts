import { AllowedImageFormats, ImageData } from 'src/types';

export const buildSrcSet = (
  { variants }: ImageData,
  allowedFormat: AllowedImageFormats,
  baseUrl: string = import.meta.env.PUBLIC_IMAGE_BASE_URL
): string => {
  const variantArray = Object.entries(variants).map(([key, value]) => {
    const imgName = value[allowedFormat];

    // for escaping (some images have spaces)
    const url = new URL(`${baseUrl}/${imgName}`);

    return `${url.href} ${key}w`;
  });

  return variantArray.join(',');
};
