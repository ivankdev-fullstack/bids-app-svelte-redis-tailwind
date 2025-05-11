import adapter from '@sveltejs/adapter-vercel';
import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		floc: true,
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$services: resolve('./src/services')
				}
			}
		}
	}
};

export default config;
