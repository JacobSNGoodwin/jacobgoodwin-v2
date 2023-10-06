import { getClient } from './imagekit-client';
import type ImageKit from 'imagekit';
import type { FileObject } from 'imagekit/dist/libs/interfaces'; // GARRRR, breach deeply!
import orderBy from 'lodash/orderBy';

type ImagePrefixData = {
  prefix: string;
  caption: string; // all have same caption
};

type ImageListData = Array<{
  name: string;
  caption: string;
}>;

export type BuildImagesData = {
  path: string;
  widths?: number[];
  data: ImagePrefixData | ImageListData;
};

type DataSources = Array<{
  srcset: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}>;

const createDataSources = ({
  client,
  files,
  caption,
  widths,
}: {
  client: ImageKit;
  files: FileObject[];
  caption: string;
  widths: number[];
}): DataSources => {
  const orderedFiles = orderBy(files, ['name']);
  return orderedFiles.map((file) => ({
    src: file.url,
    width: file.width,
    height: file.height,
    alt: caption,
    srcset: widths
      .map(
        (width) =>
          `${client.url({
            src: file.url,
            transformation: [{ width }],
          })} ${width}w`
      )
      .join(','),
  }));
};

const buildImagesFromPrefix = async (
  client: ImageKit,
  options: BuildImagesData
) => {
  // definitely gotta be a better way to do this.
  const imagePrefixOptions = options.data as ImagePrefixData;
  const files = await client.listFiles({
    fileType: 'image',
    path: options.path,
    searchQuery: `name : ${imagePrefixOptions.prefix}`,
  });

  // Might be better to use meta data, but that requires fetching
  // metadata for all type. So this is good enough for me!
  const jpegFiles = files.filter((file) => {
    const extension = file.name.split('.')[1];

    return ['jpg', 'jpeg'].includes(extension);
  });

  return createDataSources({
    client,
    files: jpegFiles,
    caption: imagePrefixOptions.caption,
    widths: options?.widths ?? [2400, 1800, 1200, 800],
  });
};

export const buildImages = async (options: BuildImagesData) => {
  const client = getClient();

  // const results = Array.isArray(options)
  //   ? await buildImagesFromArray(bucket, options)
  //   : await buildImagesFromPrefix(client, options);
  return await buildImagesFromPrefix(client, options);
};
