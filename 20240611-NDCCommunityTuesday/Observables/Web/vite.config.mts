// Copyright (c) Cratis. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        outDir: './wwwroot',
        assetsDir: '',
        rollupOptions: {
            external: [],
        },
    },
    plugins: [react()],
    server: {
        port: 9000,
        open: false,
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                ws: true,
            }
        },
    }
});
