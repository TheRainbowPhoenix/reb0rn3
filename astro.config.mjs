import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import deno from "@astrojs/deno";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), svelte()],
  output: "server",
  adapter: vercel() // adapter: deno()
});