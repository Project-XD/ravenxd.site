import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			strict: false // Allows dynamic routes
		}),
		prerender: {
			entries: ['*'] // Prerender all possible routes
		}
	},
	preprocess: vitePreprocess()
};

export default config;