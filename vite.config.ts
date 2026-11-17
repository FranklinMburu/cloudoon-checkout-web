import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // allowedHosts: AI Studio serves the dev server from its own *.run.app preview hostname.
  server: { port: 3000, host: '0.0.0.0', allowedHosts: true },
});
