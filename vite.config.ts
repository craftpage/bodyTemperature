import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/bodyTemperature/' : './',
  resolve: {
    alias: {
      '@': path.resolve('__dirname', '/src')
    }
  },
  build: {
    outDir: 'docs'
  },
  plugins: [vue()]
})
