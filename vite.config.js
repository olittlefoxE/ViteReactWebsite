import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Remove the tailwind import since it's not needed

export default defineConfig({
  plugins: [react()], // Remove tailwind() from here
  server: {
    port: 3000,
    open: true,
  },
  css: {
    postcss: './postcss.config.js',
  },
});
