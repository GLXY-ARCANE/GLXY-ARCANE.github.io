import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/GLXY-ARCANE.github.io/', // Set this to your repo name
});
