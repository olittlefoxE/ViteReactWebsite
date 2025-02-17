import { defineConfig } from "vite";
import react from "@vite/plugin-react"; // Korrekter Import

export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		open: true,
	},
});
