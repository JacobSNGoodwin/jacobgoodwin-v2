import { Storage } from '@google-cloud/storage';

let client;

export const getClient = () => {
  if (!client) {
    const credsConfig =
      import.meta.env.MODE === 'production'
        ? {
            credentials: {
              client_email: import.meta.env.CLOUD_STORAGE_EMAIL,
              client_secret: import.meta.env.CLOUD_STORAGE_KEY.split(
                '\\n'
              ).join('\n'),
            },
          }
        : {};

    console.log('creating cloud storage client for environment: ', credsConfig);

    client = new Storage({
      projectId: import.meta.env.CLOUD_STORAGE_PROJECT,
      ...credsConfig,
    });
  }

  return client;
};
