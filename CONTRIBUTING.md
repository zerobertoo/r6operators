# Contribution Guidelines

Thank you for your interest to contribute to this project. You're awesome! :+1:

Below here are some guidelines for contributing to this project, please read them before creating a pull request/issue on Github.

Feel free to improve these guidelines with a pull request! 😄

## Adding a New Operator

The most common contribution is adding an operator from a new season. Here's an end-to-end example using **Alibi** (Y3S2) as the reference.

### 1. Create the operator directory

```
operators/
└── alibi/
    ├── alibi.svg     ← raw SVG icon (350×350 viewBox)
    └── index.ts      ← operator metadata
```

### 2. Write the metadata file

`operators/alibi/index.ts`:

```ts
import { IOperator } from "~/types/operator"

export const alibi: IOperator = {
  name: "Alibi",
  role: "Defender",
  org: "GIS",
  squad: "VIPERSTRIKE",
  ratings: {
    health: 1,
    speed: 3,
    difficulty: 3,
  },
  meta: {
    gender: "f",
    country: "it",
    season: "Y3S2",
    height: 171,
    weight: 63,
  },
  bio: {
    realName: "Aria de Luca",
    birthplace: "Tripoli, Libya",
  },
}
```

Key rules:

- The exported `const` name must match the directory name (e.g. `alibi` for `operators/alibi/`)
- `role` is either `"Attacker"` or `"Defender"`
- `season` follows the format `"YxSx"` (e.g. `"Y10S1"`) or `"Release"` for launch operators
- Recruits omit `bio`, `meta`, and `ratings` — see `operators/recruit_blue/index.ts` for the shape
- `IOperator` and all sub-types are defined in `src/types/operator.d.ts`

### 3. Add the SVG icon

Place the raw SVG at `operators/alibi/alibi.svg`. Requirements:

- `viewBox="0 0 350 350"` — all icons share this viewport
- No inline `<script>` or external references (security)
- The build pipeline runs SVGO automatically; you do not need to pre-optimize

### 4. Run the build

```bash
npm run build
```

This regenerates `operators/index.ts` (the barrel file — do not edit manually), optimizes the SVG, and produces the bundles in `dist/`.

### 5. Verify

```bash
npm run test
```

Then check that your operator appears in `dist/icons/alibi.svg` and that `import { alibi } from "@zerobertoo/r6operators"` resolves correctly.

### 6. Open a pull request

Commit using [Conventional Commits](https://www.conventionalcommits.org/):

```bash
git commit -m "feat(operators): add Alibi (Y3S2)"
```
