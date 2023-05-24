import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/adaptive.scss";
       `
			}
		}
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
})
