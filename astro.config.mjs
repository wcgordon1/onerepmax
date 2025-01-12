import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://onerepmaxcalculator.com',
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'zh', 'es', 'fr', 
      'de', 'ja', 'pa', 'jv', 
      'ko', 'vi', 'tr', 'sw', 
      'it', 'fa', 'ar', 'bn', 
      'pt', 'ru', 'ur', 'hi', 
      'ta', 'pl'
    ],
    routing: {
      prefixDefaultLocale: true
    }
  }
});