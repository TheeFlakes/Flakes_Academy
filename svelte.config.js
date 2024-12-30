import { preprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};