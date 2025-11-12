import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [process.env.RENDER_EXTERNAL_HOSTNAME || 'hospital-appointment-frontend-0v12.onrender.com'],
    port: process.env.PORT || 10000,
    host: true
  },
  server: {
    host: true,
    port: 5173
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.test.{js,jsx}'],
    setupFiles: './src/setupTests.js'  
  }
})
