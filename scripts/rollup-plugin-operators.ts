import path from "path"
import * as cheerio from "cheerio"
import stringifyObject from "stringify-object"
import { promises as fs } from "fs"
import type { Plugin } from "rollup"

import type { IOperator } from "~/types/operator"
import { CURRENT_SEASON, OPS_DIR, TEMP_DIR } from "./config"

const VIRTUAL_PREFIX = "\0r6op:"

const getSeasonId = (shorthand: string) => {
  if (shorthand === "Release") return 0
  const [year, season] = /Y(\d+)S(\d)/.exec(shorthand)?.slice(1).map(Number) as [number, number]
  return year === 0 ? 0 : year * 4 - 4 + season
}

const getPrice = (seasonId: number, lastSeasonId: number) => {
  const ratio = (lastSeasonId - seasonId) / 4
  let result = { renown: 0, r6credits: 0 }
  switch (Math.floor(ratio)) {
    case 0: {
      result = { renown: 25000, r6credits: 600 }
      break
    }
    case 1: {
      result = { renown: 20000, r6credits: 480 }
      break
    }
    case 2: {
      result = { renown: 15000, r6credits: 360 }
      break
    }
    default: {
      result = { renown: 10000, r6credits: 240 }
    }
  }
  return seasonId === 0 ? { renown: 1000, r6credits: 0 } : result
}

export function r6operatorsPlugin(): Plugin {
  const moduleCache = new Map<string, string>()
  let operatorNames: string[] = []
  const lastSeasonId = getSeasonId(CURRENT_SEASON)

  return {
    name: "r6operators",

    async buildStart() {
      const entries = await fs.readdir(OPS_DIR, { withFileTypes: true })
      operatorNames = entries
        .filter((e) => e.isDirectory())
        .map((e) => e.name)
        .toSorted()

      await Promise.all(
        operatorNames.map(async (op) => {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          const opData = (require(path.join(OPS_DIR, op)) as Record<string, IOperator>)[op]

          const svgPath = path.resolve(`${TEMP_DIR}/svg/${op}.svg`)
          const svg = await fs.readFile(svgPath, "utf8")
          const $ = cheerio.load(svg)
          const svgData = {
            contents: $("svg").html(),
            attributes: {
              ...$("svg").get(0)!.attribs,
              class: `r6operators r6operators-${op}`,
            },
          }

          let price: { renown: number; r6credits: number } | undefined
          if (opData.meta?.season) {
            const seasonId = getSeasonId(opData.meta.season)
            price = getPrice(seasonId, lastSeasonId)
          }

          const merged = {
            id: op,
            ...opData,
            svg: svgData,
            ...((opData.meta || price) && { meta: { ...opData.meta, price } }),
            toSVG: "",
          }

          const stringified = stringifyObject(merged, {
            transform: (obj, property, original) => {
              if (property === "toSVG") return "function(userAttr){return getSVGIcon(this, userAttr)}"
              return original
            },
          })

          moduleCache.set(
            op,
            `import { getSVGIcon } from "~/functions"\nexport const ${op} = ${stringified}\n`,
          )
        }),
      )
    },

    resolveId(source, importer) {
      if (importer?.startsWith(VIRTUAL_PREFIX) && source.startsWith("~/")) {
        return path.resolve("./src", source.slice(2)) + ".ts"
      }
      if (source === "@operators" || source === "@operators/index") {
        return `${VIRTUAL_PREFIX}index`
      }
      if (source.startsWith("@operators/")) {
        return `${VIRTUAL_PREFIX}${source.slice("@operators/".length)}`
      }
      return
    },

    load(id) {
      if (!id.startsWith(VIRTUAL_PREFIX)) return
      const name = id.slice(VIRTUAL_PREFIX.length)
      if (name === "index") {
        return operatorNames.map((n) => `export { ${n} } from "@operators/${n}"`).join("\n") + "\n"
      }
      return moduleCache.get(name) ?? undefined
    },
  }
}
