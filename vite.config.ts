import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import webfontDownload from "vite-plugin-webfont-dl";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), webfontDownload()],
  resolve: {
    alias: {
      "@styled-system": path.resolve(__dirname, "./styled-system"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
    },
  },
});
