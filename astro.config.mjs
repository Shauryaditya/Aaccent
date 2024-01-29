import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(),
    mdx(), 
		sitemap(),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],
});