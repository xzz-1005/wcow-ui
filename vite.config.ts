import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [vue()]
})