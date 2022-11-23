import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config

// https://astro.build/config
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
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
