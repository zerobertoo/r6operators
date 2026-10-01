/* eslint-disable unicorn/prefer-top-level-await */
/* eslint-disable unicorn/no-process-exit */
import { promises as fs } from "fs"
import path from "path"
import { OPS_DIR, CURRENT_SEASON } from "./config"

// usage: npm run new-operator -- <name> <Attacker|Defender> [season]
async function main(): Promise<void> {
  const [name, role, season = CURRENT_SEASON] = process.argv.slice(2)
  if (!/^[a-z][a-z0-9_]*$/.test(name ?? "") || !["Attacker", "Defender"].includes(role ?? "")) {
    throw new Error("usage: npm run new-operator -- <lowercase_name> <Attacker|Defender> [season]")
  }

  const dir = path.join(OPS_DIR, name)
  await fs.mkdir(dir) // fails if the operator already exists

  const title = name[0].toUpperCase() + name.slice(1)
  await fs.writeFile(
    path.join(dir, "index.ts"),
    `import { IOperator } from "~/types/operator"

export const ${name}: IOperator = {
  name: "${title}",
  role: "${role}",
  squad: "TODO",
  ratings: { health: 2, speed: 2, difficulty: 2 },
  meta: { gender: "u", country: "xx", season: "${season}", height: 0, weight: 0 },
  bio: { realName: "TODO", birthplace: "TODO, Country" },
}
`,
  )
  console.log(`Created operators/${name}/index.ts. Now:
  1. fill in every TODO (country is an ISO 3166-1 alpha-2 code, lowercase)
  2. add operators/${name}/${name}.svg (square viewBox, 350x350 preferred)
  3. run npm run build && npm test (the barrel and the data tests check your work)`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
