// Dependencies
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
    ],
    resolve: {
        alias: {
            '@lib': resolve(__dirname, './lib'),
        },
    },
});
