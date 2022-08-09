import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const componentsDir = resolve(__dirname, 'src')

export default defineConfig({
  build: {
    // outDir: 'es',
    lib: {
      entry: resolve(componentsDir, 'index.ts'),
      name: 'WCowUI',
      fileName: (format) => `wcow-ui.${format}.js`
    },
    rollupOptions: {
      output: {
        // {
        //   format: 'cjs',
        //   preserveModules: true,
        //   preserveModulesRoot: componentsDir,
        //   dir: 'lib',
        //   entryFileNames: '[name].js'
        // },
        // {
        //   format: 'es',
        //   preserveModules: true,
        //   preserveModulesRoot: componentsDir,
        //   dir: 'es',
        //   entryFileNames: '[name].mjs'
        // }
        globals: {
          vue: 'Vue'
        }
      },
      external: ['vue']
    }
  },
  plugins: [
    vue(),
    dts({
      exclude: ['node_modules', 'playground', 'common/icons', 'common/mixins', 'common/utils'],
      outputDir: ['lib', 'es'],
      copyDtsFiles: false
    })
  ]
})