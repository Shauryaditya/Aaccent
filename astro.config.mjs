import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercelServerless from '@astrojs/vercel/serverless';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: vercelServerless(),
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    maxDuration: 8,
  }),
});