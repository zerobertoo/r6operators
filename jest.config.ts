// jest.config.ts
import type { Config } from "@jest/types"
import { pathsToModuleNameMapper } from "ts-jest"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: pathsToModuleNameMapper(
    {
      "~/*": ["./src/*"],
      "@operators/*": ["./operators/*"],
      "@temp/*": ["./temp/*"],
    },
    { prefix: "<rootDir>/" }
  ),
}
export default config
