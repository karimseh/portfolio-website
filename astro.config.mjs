// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://karimdev.me',
  redirects: {
    '/about': '/',
    '/contact': '/',
    '/blog': '/',
    '/projects': '/',

    '/projects/findjournal': '/',
    '/projects/hotstuff-2-blockchain': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(), 
    sitemap({
      filter: (page) => new URL(page).pathname === '/' ,
    })],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-default',
    },
  },
});