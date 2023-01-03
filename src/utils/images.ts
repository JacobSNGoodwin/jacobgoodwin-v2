import { Bucket, File, Storage } from '@google-cloud/storage';

type ImageProps = {
  path: string;
  name: string;
  caption?: string;
};
export type BuildImageOptions = Array<ImageProps> | ImageProps;

let storageClient;

const createDataSources = (files: File[], caption) => {
  const filesWithMetadata = files.reduce<
    Record<
      string,
      Array<{
        publicUrl: string;
        alt?: string;
        width: number;
        height: number;
      }>
    >
  >((imageVariants, file) => {
    const name = file.name;
    const baseNameSeparatorIndex = name.lastIndexOf('-');
    const baseFileName = name.slice(0, baseNameSeparatorIndex);

    const width = parseInt(file.metadata.metadata.width);
    const height = parseInt(file.metadata.metadata.height);

    const variantData = {
      publicUrl: file.publicUrl(),
      alt: caption,
      width,
      height,
    };

    if (!imageVariants[baseFileName]) {
      imageVariants[baseFileName] = [variantData];
    } else {
      imageVariants[baseFileName].push(variantData);
    }

    return imageVariants;
  }, {});

  const dataSources = Object.values(filesWithMetadata).map((images) => {
    const srcset = images
      .map(({ publicUrl, width }) => `${publicUrl} ${width}w`)
      .join(',');

    const largestImage = images.sort((a, b) => a.width - b.width)[
      images.length - 1
    ];

    return {
      srcset,
      src: largestImage.publicUrl,
      width: largestImage.width,
      height: largestImage.height,
      alt: largestImage.alt,
    };
  });

  return dataSources;
};

const buildImagesFromArray = async (
  bucket: Bucket,
  options: Array<ImageProps>
) => {
  console.log('options', options);
  const datasources = await Promise.all(
    options.map(async ({ path, name, caption }) => {
      const prefix = `${path}/${name}`;

      const [files] = await bucket.getFiles({ prefix });

      const jpegFiles = files.filter((file) => {
        const extension = file.name.split('.')[1];

        return ['jpg', 'jpeg'].includes(extension);
      });

      const datasources = createDataSources(jpegFiles, caption);

      return datasources[0];
    })
  );

  return datasources;
};

const buildImagesFromPrefix = async (bucket: Bucket, options: ImageProps) => {
  const prefix = `${options.path}/${options.name}`;
  console.info('building images from prefix', prefix);

  const [files] = await bucket.getFiles({
    prefix,
  });

  // Might be better to use meta data, but that requires fetching
  // metadata for all type. So this is good enough for me!
  const jpegFiles = files.filter((file) => {
    const extension = file.name.split('.')[1];

    return ['jpg', 'jpeg'].includes(extension);
  });

  return createDataSources(jpegFiles, options.caption);
};

export const buildImages = async (options: BuildImageOptions) => {
  if (!storageClient) {
    storageClient = new Storage({
      projectId: import.meta.env.CLOUD_STORAGE_PROJECT,
      credentials: {
        client_email: import.meta.env.CLOUD_STORAGE_EMAIL,
        private_key: import.meta.env.CLOUD_STORAGE_KEY,
      },
    });
  }

  const bucket = storageClient.bucket(import.meta.env.CLOUD_STORAGE_BUCKET);

  const results = Array.isArray(options)
    ? await buildImagesFromArray(bucket, options)
    : await buildImagesFromPrefix(bucket, options);

  return results;
};
