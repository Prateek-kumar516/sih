import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure assets resolve correctly when served from /admin on Vercel
  base: '/admin/',
  server: {
    port: 3001,
    host: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
