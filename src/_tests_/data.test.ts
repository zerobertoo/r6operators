import { readdirSync, readFileSync } from "fs"
import path from "path"
import * as ops from "@operators/index"
import type { IOperator } from "~/types/operator"

const entries = Object.entries(ops) as [string, IOperator][]
const attackers = entries.filter(([, o]) => o.role !== "Recruit")

test("every operator folder is exported and has an svg", () => {
  const dirs = readdirSync("operators", { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
  expect(Object.keys(ops).toSorted()).toEqual(dirs.toSorted())
  for (const dir of dirs) {
    expect(() => readFileSync(`operators/${dir}/${dir}.svg`)).not.toThrow()
  }
})

describe.each(entries)("operator %s", (_id, op) => {
  it("has the base fields", () => {
    expect(op.name).toBeTruthy()
    expect(["Attacker", "Defender", "Recruit"]).toContain(op.role)
    expect(op.squad).toBeTruthy()
  })

  it("has no bio, meta or ratings only when it is a recruit", () => {
    const hasExtras = Boolean(op.bio && op.meta && op.ratings)
    expect(hasExtras).toBe(op.role !== "Recruit")
    if (op.role === "Recruit") expect(op.bio || op.meta || op.ratings).toBeUndefined()
  })
})

describe.each(attackers)("meta of %s", (_id, op) => {
  it("is well formed", () => {
    const { meta } = op
    expect(meta!.gender).toMatch(/^[mfonu]$/)
    expect(meta!.country).toMatch(/^([a-z]{2}|none)$/)
    expect(meta!.season).toMatch(/^(Release|Y\d+S[1-4])$/)
    // 0 means unknown/redacted
    expect(meta!.height).toBeGreaterThanOrEqual(0)
    expect(meta!.weight).toBeGreaterThanOrEqual(0)
  })
})

describe("optimized svg icons", () => {
  const files = readdirSync("dist/icons").map((f) => [
    f,
    readFileSync(path.join("dist/icons", f), "utf8"),
  ])

  it.each(files)("%s is a safe, square, self contained svg", (_name, svg) => {
    const [, w, h] = /viewBox="0 0 (\d+) (\d+)"/.exec(svg)!
    expect(w).toBe(h)
    expect(svg).not.toMatch(/<script|<foreignObject|<image|on\w+=|xlink:href="http/i)
  })

  it("has no duplicated ids across icons", () => {
    const ids = files.flatMap(([, svg]) =>
      svg
        .matchAll(/\bid="([^"]+)"/g)
        .map((m) => m[1])
        .toArray(),
    )
    expect(new Set(ids).size).toBe(ids.length)
  })
})
