import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/ravenxd.site' : '',
			assets: process.env.NODE_ENV === 'production' ? 'https://yourusername.github.io/ravenxd.site' : ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;