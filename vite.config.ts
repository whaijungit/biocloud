import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), inspect()],
  server: {
    host: '127.0.0.1',
    proxy: {
      '^/api': {
        target: 'https://wiseed.higentec.com:28016/'
      }
    },
    hmr: {
      overlay: true
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    }
  }
})
