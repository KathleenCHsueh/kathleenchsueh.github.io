import { defineConfig } from "@pandacss/dev";
import kathleenPreset from "./src/style/kathleenPreset";

export default defineConfig({
  presets: [kathleenPreset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  jsxFramework: "react",
  theme: {},

  globalCss: {
    ":root": {
      bg: "background.dark",
      maxWidth: "1440px",
      mx: "auto",
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
