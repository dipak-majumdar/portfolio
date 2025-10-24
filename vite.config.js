import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@consts': path.resolve(__dirname, './src/consts'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  server: {
    port: 3000
  }
})
