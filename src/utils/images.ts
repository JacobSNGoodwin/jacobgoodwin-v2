import { match } from 'assert';
import { getClient } from './imagekit-client';
import type ImageKit from 'imagekit';
import orderBy from 'lodash/orderBy';
import pMap from 'p-map';

const DEFAULT_WIDTHS = [2400, 1800, 1200, 800];

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

const buildImagesFromPrefix = async (
  client: ImageKit,
  options: BuildImagesData
): Promise<DataSources> => {
  // definitely gotta be a better way to do this.
  const imagePrefixOptions = options.data as ImagePrefixData;
  const widths = options?.widths ?? DEFAULT_WIDTHS;
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

  const orderedFiles = orderBy(jpegFiles, ['name']);
  return orderedFiles.map((file) => ({
    src: file.url,
    width: file.width,
    height: file.height,
    alt: imagePrefixOptions.caption,
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

const buildImagesFromArray = async (
  client: ImageKit,
  options: BuildImagesData
): Promise<DataSources> => {
  // definitely gotta be a better way to do this.
  const imagesListData = options.data as ImageListData;
  const widths = options?.widths ?? DEFAULT_WIDTHS;

  return pMap(
    imagesListData,
    async (imageData) => {
      const images = await client.listFiles({
        path: options.path,
        searchQuery: `name : ${imageData.name}`,
      });

      const file = images[0];

      return {
        src: file.url,
        width: file.width,
        height: file.height,
        alt: imageData.caption,
        srcset: widths
          .map(
            (width) =>
              `${client.url({
                src: file.url,
                transformation: [{ width }],
              })} ${width}w`
          )
          .join(','),
      };
    },
    { concurrency: 5 }
  );
};

export const buildImages = async (options: BuildImagesData) => {
  const client = getClient();

  return Array.isArray(options.data)
    ? buildImagesFromArray(client, options)
    : buildImagesFromPrefix(client, options);
};
