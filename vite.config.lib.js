import {
	resolve,
} from 'path';

import {
	defineConfig,
} from 'vite';

import viteConfig from './vite.config.base.js';

// https://vitejs.dev/config/
export default defineConfig(Object.assign(viteConfig, {
	build: {
		cssCodeSplit: true,
		lib: {
			entry: resolve(__dirname, 'src/plugin.js'),
			name: 'vigil',
		},
		rollupOptions: {
			external: ['vue', 'vue-router'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
}));
