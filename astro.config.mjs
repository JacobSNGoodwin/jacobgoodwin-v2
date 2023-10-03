import { defineConfig } from 'astro/config';

// https://astro.build/config
import image from '@astrojs/image';

// https://astro.build/config

// https://astro.build/config
import mdx from '@astrojs/mdx';

import Icons from 'unplugin-icons/vite';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      drafts: true,
    }),
  ],
  markdown: {
    drafts: true,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer', 'nofollow'] },
      ],
    ],
  },
  site: 'https://jacobgoodiwn.me',
  // for base of deployed site
  trailingSlash: 'never',
  server: {
    host: true, // for allowing access on local network
  },
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});
