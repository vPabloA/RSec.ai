import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [sveltekit()],
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version)
    },
    server: {
        proxy: {
            // Configuración de proxy
            '/api': {
                target: 'http://127.0.0.1:8080', // La URL del servidor backend
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
