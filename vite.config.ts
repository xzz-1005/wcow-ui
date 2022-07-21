import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import postcssImport from "postcss-import"
import autoprefixer from 'autoprefixer'

export default defineConfig({
  //样式表插件
  css:{
    postcss:{
      plugins:[
        postcssImport,
        autoprefixer,
        // tailwindcss
      ]
    }
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['vue']
    }
  },
  plugins: [vue(), dts({ insertTypesEntry: true, copyDtsFiles: false })]
})