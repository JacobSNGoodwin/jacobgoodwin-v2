import ImageKit from 'imagekit';

let client: ImageKit;

export const getClient = () => {
  if (!client) {
    client = new ImageKit({
      privateKey: import.meta.env.IMAGEKIT_PRIVATE_KEY,
      publicKey: import.meta.env.IMAGEKIT_PUBLIC_KEY,
      urlEndpoint: import.meta.env.IMAGEKIT_URL,
    });
  }

  return client;
};
