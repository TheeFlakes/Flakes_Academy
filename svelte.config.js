import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            out: 'build'
        }),
        vite: {
            server: {
                host: '0.0.0.0',
                port: 3000
            }
        }
    },
    preprocess: vitePreprocess(),
    extends: "./.svelte-kit/tsconfig.json"
};

export default config;