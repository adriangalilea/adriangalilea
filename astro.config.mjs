import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://adriangalilea.vercel.app/",
  integrations: [preact(), tailwind()],
  prefetch: true,
  image: {
    domains: ["astro.build"]
  }
});