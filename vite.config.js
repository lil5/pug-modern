import { defineConfig } from "vitest/config";
import typescript from "@rollup/plugin-typescript";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  build: {
    outDir: "lib",
    manifest: false,
    minify: true,
    include: ["node_modules/pug-parser/index.js"],
    reportCompressedSize: true,
    lib: {
      entry: "./src/main.ts",
      fileName: "main",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [],
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: "lib",
        }),
      ],
    },
  },
});
