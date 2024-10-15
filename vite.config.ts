// Dependencies
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    build: {
        outDir: './out'  // Specify the desired output folder here
    },
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            '@lib': resolve(__dirname, './lib'),
        },
    },
});
