import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			strict: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/ravenxd.site' : ''
		},
		prerender: {
			entries: ['*']
		}
	},
	preprocess: vitePreprocess()
};