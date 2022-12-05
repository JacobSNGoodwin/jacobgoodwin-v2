import { Storage } from '@google-cloud/storage';

let client;

export const getClient = () => {
  if (!client) {
    console.log('creating cloud storage client');

    client = new Storage({
      projectId: import.meta.env.CLOUD_STORAGE_PROJECT,
      credentials: {
        client_email: import.meta.env.CLOUD_STORAGE_EMAIL,
        private_key: import.meta.env.CLOUD_STORAGE_KEY,
      },
    });
  }

  return client;
};
