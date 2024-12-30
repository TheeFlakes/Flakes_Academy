import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

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
    preprocess: vitePreprocess()
};

export default config;