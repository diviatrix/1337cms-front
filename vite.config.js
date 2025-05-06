import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3010,
    allowedHosts: ['1337.plus'], // Corrected to an array of hostnames
    proxy: {
      '/api': {
        target: 'https://api.1337.plus', // Backend URL
        changeOrigin: true,
        secure: false
      }
    }
  }
});