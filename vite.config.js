import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  root: './',
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  }
}))
