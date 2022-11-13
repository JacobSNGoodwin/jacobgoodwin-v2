import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import solid from '@astrojs/solid-js';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    vue(),
    solid(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  markdown: {
    drafts: true,
  },
  site: 'https://jacobgoodiwn.me',
  // for base of deployed site
  trailingSlash: 'never',
  server: {
    host: true, // for allowing access on local network
  },
});
