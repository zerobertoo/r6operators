import path from "path"
import { promises as fs } from "fs"

import { OPS_DIR } from "./config"

export async function generateBarrel(): Promise<string[]> {
  const entries = await fs.readdir(OPS_DIR, { withFileTypes: true })
  const names = entries
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .toSorted()

  const content = names.map((n) => `export { ${n} } from "./${n}"`).join("\n") + "\n"
  await fs.writeFile(path.join(OPS_DIR, "index.ts"), content)

  return names
}
