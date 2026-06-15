// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://astropaginainicio-qpdv--4321--5162ecc8.local-corp.webcontainer.io",
  integrations: [preact()]
});