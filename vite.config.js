import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,

      // front
      '@front': new URL('./src/front', import.meta.url).pathname,
      '@f-sections': new URL('./src/front/sections', import.meta.url).pathname,
      '@f-components': new URL('./src/front/components', import.meta.url).pathname,
      '@f-layout': new URL('./src/front/layout', import.meta.url).pathname,
      '@f-styles': new URL('./src/front/styles', import.meta.url).pathname,

      // admin
      '@admin': new URL('./src/admin', import.meta.url).pathname,
      '@a-pages': new URL('./src/admin/pages', import.meta.url).pathname,
      '@a-components': new URL('./src/admin/components', import.meta.url).pathname,
      '@a-layout': new URL('./src/admin/layout', import.meta.url).pathname,

      // shared
      '@shared': new URL('./src/shared', import.meta.url).pathname,
      '@api': new URL('./src/shared/api', import.meta.url).pathname,
      '@utils': new URL('./src/shared/utils', import.meta.url).pathname,
      '@hooks': new URL('./src/shared/hooks', import.meta.url).pathname,
      '@assets': new URL('./src/shared/assets', import.meta.url).pathname
    }
  },

  server: {
    port: 5173,
    open: true,

    proxy: {
      '/agent': {
        target: 'http://127.0.0.1:9090',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/agent/, '')
      }
    }
  },

  build: {
    outDir: 'dist',
    sourcemap: false
  }
})