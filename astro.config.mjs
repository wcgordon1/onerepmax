import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react(), tailwind()],
  site: 'https://onerepmaxcalculator.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'es', 'fr', 'ar', 'bn', 'pt', 'ru', 'ur', 'hi', 'ta'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});