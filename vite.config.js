import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for build files
    rollupOptions: {
      input: resolve(__dirname, 'index.html'), // Entry point
    },
  },
});
