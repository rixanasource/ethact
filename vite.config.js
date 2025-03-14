import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // Use './' to work on both IPFS and browsers
  build: {
    outDir: 'dist',
    emptyOutDir: true, // Ensure a clean build
  },
  server: {
    open: true, // Auto-opens in dev mode
  },
});
