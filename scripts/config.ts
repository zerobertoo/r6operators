import path from "path"
import type { CustomPlugin, PluginConfig } from "svgo"

const OPS_DIR = path.resolve(`./operators`)
const TEMP_DIR = path.resolve(`./temp`)
const DIST_DIR = path.resolve(`./dist`)

const ENTRY_FILE = path.resolve("./src/index.ts")

const CURRENT_SEASON = "Y11S3"

// Illustrator exports wrap the artwork in <switch><foreignObject requiredExtensions=.../>...</switch>,
// which no preset-default plugin removes. Unwrap it and drop xml:space.
const removeIllustratorLeftovers: CustomPlugin = {
  name: "removeIllustratorLeftovers",
  fn: () => ({
    element: {
      enter(node) {
        if (node.name === "svg") delete node.attributes["xml:space"]
        node.children = node.children.flatMap((child) =>
          child.type === "element" && child.name === "switch"
            ? child.children.filter((c) => !(c.type === "element" && c.name === "foreignObject"))
            : [child],
        )
      },
    },
  }),
}

// "prefixIds" is added in build-optimized-svg.ts, it needs the operator id
const SVGO_PLUGINS: PluginConfig[] = [
  "preset-default",
  "removeDimensions",
  removeIllustratorLeftovers,
]

export { OPS_DIR, TEMP_DIR, DIST_DIR, ENTRY_FILE, CURRENT_SEASON, SVGO_PLUGINS }
