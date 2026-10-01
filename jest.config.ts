// jest.config.ts
import type { Config } from "@jest/types"
import { pathsToModuleNameMapper } from "ts-jest"

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          jsx: "react-jsx",
          esModuleInterop: true,
          module: "commonjs",
          strict: true,
          types: ["jest", "node"],
        },
      },
    ],
  },
  moduleNameMapper: {
    "^@zerobertoo/r6operators$": "<rootDir>/dist",
    ...pathsToModuleNameMapper(
      {
        "~/*": ["./src/*"],
        "@operators/*": ["./operators/*"],
        "@temp/*": ["./temp/*"],
      },
      { prefix: "<rootDir>/" },
    ),
  },
}
export default config
