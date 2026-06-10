import svgr from 'vite-plugin-svgr';
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import htmlPlugin from 'vite-plugin-html-config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const THEME_COLOR_DARK = '#000000';
const THEME_COLOR_LIGHT = '#ffffff';
const APP_TITLE = 'DoHabit | Build Habits, Break Limits & Crush Your Goals';
const OG_BANNER_URL = '/assets/img/Repo-Card-Template.jpg';

const APP_DOMAIN = new URL(pkg.homepage).hostname;

export default defineConfig({
  base: '/',

  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@app': path.resolve('./src/app'),
      '@pages': path.resolve('./src/pages'),
      '@widgets': path.resolve('./src/widgets'),
      '@features': path.resolve('./src/features'),
      '@entities': path.resolve('./src/entities'),
      '@shared': path.resolve('./src/shared'),
    },
  },

  server: {
    open: true,
    host: true,
  },

  build: {
    target: 'esnext',
  },

  plugins: [
    react(),
    svgr(),
    htmlPlugin({
      title: APP_TITLE,
      metas: [
        { name: 'description', content: pkg.description },
        { name: 'theme-color', content: THEME_COLOR_DARK },
        {
          name: 'theme-color',
          content: THEME_COLOR_LIGHT,
          media: '(prefers-color-scheme: light)',
        },
        { property: 'og:url', content: pkg.homepage },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: APP_TITLE },
        { property: 'og:description', content: pkg.description },
        { property: 'og:image', content: OG_BANNER_URL },
        { name: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:domain', content: APP_DOMAIN },
        { property: 'twitter:url', content: pkg.homepage },
        { name: 'twitter:title', content: APP_TITLE },
        { name: 'twitter:description', content: pkg.description },
        { name: 'twitter:image', content: OG_BANNER_URL },
      ],
    }),
  ],
});