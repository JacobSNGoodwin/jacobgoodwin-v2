type BuildImageOptions = {
  base: string;
  suffix: string;
  start: number;
  end: number;
  digits: number;
  description: string;
};

type BuildImageResult = Array<{
  src: string;
  caption: string;
}>;

export const buildImages = (
  options: BuildImageOptions
): Array<BuildImageResult> => {
  const result = [];

  for (let i = options.start; i <= options.end; i++) {
    result.push({
      src: `${options.base}-${i.toString().padStart(options.digits, '0')}.${
        options.suffix
      }`,
      caption: options.description,
    });
  }

  return result;
};
