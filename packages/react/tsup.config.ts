import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
  },
  tsconfig: "tsconfig.json",
  sourcemap: true,
  clean: true,
  external: ["react", "r6operators"],
  treeshake: true,
})
