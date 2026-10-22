import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Сборка в папку dist — её и публикует Cloudflare Pages
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist', assetsInlineLimit: 0 }
});
