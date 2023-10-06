import { defineConfig } from 'astro/config';

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
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.imagekit.io',
        pathname: 'jacobgoodwin/**',
      },
    ],
  },
  site: 'https://jacobgoodiwn.me',
  // for base of deployed site
  trailingSlash: 'ignore',
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
