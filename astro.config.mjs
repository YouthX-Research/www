import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import mdx from "@astrojs/mdx";

const isStatic = process.env.ASTRO_OUTPUT === "static" || Boolean(process.env.ASTRO_BASE);

// https://astro.build/config
export default defineConfig({
  output: isStatic ? "static" : "server",
  base: process.env.ASTRO_BASE || "/",
  ...(isStatic ? {} : {
    adapter: vercel({
      webAnalytics: {
        enabled: true,
      },
    }),
  }),
  integrations: [mdx()],
});
