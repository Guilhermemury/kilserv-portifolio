import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://kilserv.vercel.app/',
  output: 'server', // CHANGE THIS to 'server' to force dynamic behavior globally for now
  adapter: vercel({
    maxDuration: 10,
  }),
  compressHTML: true
});