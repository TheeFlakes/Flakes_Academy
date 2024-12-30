import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    // other configurations...
    vite: {
      server: {
        host: '0.0.0.0',
        port: 3000 // or any other port you want to use
      }
    }
  },
  preprocess: vitePreprocess()
};