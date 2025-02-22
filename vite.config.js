import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwind()],
  server: {
    port: 3000,
    open: true,
  },
	css: {
    postcss: './postcss.config.js',
  },
});
