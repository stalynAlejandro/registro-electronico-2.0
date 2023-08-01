/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            provider: 'c8',
            reporter: ['text', 'json', 'html'],
        },
    },
});
