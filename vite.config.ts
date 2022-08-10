import { resolve } from "path";
import { readFileSync } from 'fs'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import glob from 'fast-glob'

interface Manifest {
  dependencies?: Record<string, string>,
  peerDependencies?: Record<string, string>,
  version?: string
}

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8')) as Manifest

const prePlugins = (plugins: Plugin[]): Plugin[] => {
	return plugins.map(plugin => ({ ...plugin, enforce: "pre", apply: "build" }));
};

const externalPkgs = ['@vue'].concat(
  Object.keys(pkg.dependencies || {}),
  Object.keys(pkg.peerDependencies || {})
)
const external = (id: string) => externalPkgs.some(p => p === id || id.startsWith(`${p}/`))

const componentsDir = resolve(__dirname, "src");

export default defineConfig(async () => {
  const input = await glob('components/**/*.{ts,vue}', {
    cwd: __dirname,
    absolute: true,
    onlyFiles: true
  })
	return {
		build: {
			outDir: 'es',
			lib: {
				entry: resolve(componentsDir, "index.ts"),
				name: "WCowUI"
			},
			rollupOptions: {
				input,
				external,
				output: [
					{
						format: "cjs",
						preserveModules: true,
						preserveModulesRoot: componentsDir,
						dir: "lib",
						entryFileNames: "[name].js"
					},
					{
						format: "es",
						preserveModules: true,
						preserveModulesRoot: componentsDir,
						dir: "es",
						entryFileNames: "[name].mjs"
					}
				],
				// external: ["vue"]
			}
		},
		plugins: [
			// ...prePlugins([
			// 	{
			// 		name: "wcow-ui:resolve",
			// 		resolveId(id) {
			// 			if (id.startsWith("@/style")) {
			// 				return {
			// 					id: id.replace(/@\/style\/(.+).scss$/, "wcow-ui/css/$1.css"),
			// 					external: "absolute"
			// 				};
			// 			}
			// 		}
			// 	}
			// ]),
			vue(),
			dts({
				exclude: ["node_modules", "playground", "common/icons", "common/mixins", "common/utils"],
				outputDir: ["lib", "es"],
				copyDtsFiles: false
			})
		]
	};
});
