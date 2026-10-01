import { promises as fs } from "fs"
import { rollup } from "rollup"

import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import { generateDtsBundle } from "dts-bundle-generator"

import pkg from "../package.json"
import { ENTRY_FILE, DIST_DIR } from "./config"
import { r6operatorsPlugin } from "./rollup-plugin-operators"

// build ts
export async function buildBundle(): Promise<void> {
  const bundle = await rollup({
    input: ENTRY_FILE,
    plugins: [
      r6operatorsPlugin(),
      nodeResolve(),
      typescript({ declaration: false, tsconfig: "./tsconfig.rollup.json" }),
    ],
  })

  await bundle.write({
    file: pkg.main,
    format: "cjs",
    sourcemap: true,
    exports: "auto",
  })
  await bundle.write({
    file: pkg.module,
    format: "esm",
    sourcemap: true,
    exports: "auto",
  })
  await bundle.write({
    file: pkg.unpkg,
    format: "iife",
    name: "r6operators",
    sourcemap: false,
    exports: "auto",
    plugins: [terser()],
  })
  console.log(`\nSuccessfully bundled library!\n`)
}

// build type declarations
export async function buildDts(): Promise<void> {
  const bundle = generateDtsBundle([
    { filePath: ENTRY_FILE, output: { umdModuleName: "r6operators" } },
  ])

  // check if folder exists and create if not
  await fs.stat(`${DIST_DIR}`).catch(async () => {
    await fs.mkdir(`${DIST_DIR}`, { recursive: true })
  })

  // write bundle to file
  // operators are objects with `id`, `svg` and `toSVG` at runtime, so type them as `Operator`
  const dts = bundle
    .toString()
    .replaceAll(/^((?:export declare const )?\t?\w+: )IOperator;$/gm, "$1Operator;")
  await fs.writeFile(`${DIST_DIR}/index.d.ts`, dts)

  console.log(`Successfully created type declarations!\n`)
}
