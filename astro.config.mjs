import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";
import astroExpressiveCode from "astro-expressive-code";
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
  integrations: [
    tailwind(),
    astroExpressiveCode({
      themes: ["poimandres", "light-plus"],
      styleOverrides: {
        borderRadius: "0.5rem",
        borderWidth: "0px",
      },
    }),
    mdx(),
  ],
});
