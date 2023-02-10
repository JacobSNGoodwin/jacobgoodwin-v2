import { Storage } from '@google-cloud/storage';

let client;

export const getClient = () => {
  if (!client) {
    console.log('creating cloud storage client');

    client = new Storage({
      projectId: import.meta.env.CLOUD_STORAGE_PROJECT,
    });
  }

  return client;
};
