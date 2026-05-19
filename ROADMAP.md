# Roadmap

This document outlines the planned evolution of the `@zerobertoo/r6operators` ecosystem — from its current operator-focused scope into a comprehensive Rainbow Six: Siege data library.

All new packages will live in this same monorepo, sharing tooling, CI/CD, and release pipelines.

---

## Current state

- [x] Operator metadata (name, role, org, squad, ratings, bio, price)
- [x] Hand-crafted SVG operator icons
- [x] `@zerobertoo/r6operators` — Node.js / browser package
- [x] `@zerobertoo/r6operators-react` — React component wrapper
- [x] CDN distribution via jsDelivr and unpkg
- [x] TypeScript types for all entities
- [x] Season-aware data updates

---

## Phase 1 — Weapons data `@zerobertoo/r6weapons`

Introduce a new workspace package with structured weapon metadata, following the same patterns established by the operators package.

- [ ] `IWeapon` TypeScript type definition
- [ ] Weapon data for all primary and secondary weapons
  - Name, type (assault rifle, SMG, shotgun, pistol, etc.)
  - Stats: damage, fire rate, mobility, magazine capacity, reload time
  - Operators that use it (attacker / defender)
  - Attachments supported (barrel, grip, scope, underbarrel)
  - Season introduced
- [ ] Auto-generated barrel file (`weapons/index.ts`)
- [ ] Rollup bundle (ESM, CJS, UMD)
- [ ] `getWeaponsByOperator(operator)` helper function
- [ ] `getOperatorsByWeapon(weapon)` helper function
- [ ] Published as `@zerobertoo/r6weapons`

---

## Phase 2 — Maps data `@zerobertoo/r6maps`

Structured data for all maps, including layout details and objective locations.

- [ ] `IMap` TypeScript type definition
- [ ] Map data for all maps
  - Name, location (country), setting
  - Season introduced
  - Number of floors
  - Bomb sites (name, floor, area)
  - Available game modes (bomb, secure, hostage)
  - Release status (available / reworked / retired)
- [ ] Auto-generated barrel file (`maps/index.ts`)
- [ ] Rollup bundle (ESM, CJS, UMD)
- [ ] `getBombSitesByMap(map)` helper function
- [ ] Published as `@zerobertoo/r6maps`

---

## Phase 3 — React wrappers

Dedicated React packages for the new data modules, keeping the same ergonomics as `@zerobertoo/r6operators-react`.

- [ ] `@zerobertoo/r6weapons-react`
  - `<R6Weapon />` component
  - TypeScript props with autocomplete for weapon names
- [ ] `@zerobertoo/r6maps-react`
  - `<R6Map />` component
  - TypeScript props with autocomplete for map names

---

## Phase 4 — Visual assets (CDN-only)

Raster and vector assets are too large for npm bundles. These will be distributed via CDN only, with metadata packages exposing typed URL resolvers.

- [ ] Weapon render images (standardized format, consistent background)
- [ ] Map overview images (top-down floor plans per floor)
- [ ] `getWeaponImageURL(weapon)` — returns jsDelivr / unpkg URL
- [ ] `getMapImageURL(map, floor)` — returns jsDelivr / unpkg URL
- [ ] Assets versioned alongside their respective packages

---

## Phase 5 — Ecosystem polish

Quality-of-life improvements across the whole monorepo once the core packages are stable.

- [ ] Unified search across operators, weapons, and maps
- [ ] Cross-package relations (operator → weapons, map → available operators, etc.)
- [ ] `@zerobertoo/r6data` meta-package that re-exports all packages for convenience
- [ ] Interactive docs site with live search and filtering
- [ ] Changelog automation for season updates

---

## Contributing

Contributions are welcome at any phase. If you want to help, check the [contribution guidelines](./CONTRIBUTING.md) and open an issue or pull request.

Data accuracy and completeness are community efforts — if you spot outdated stats or missing entries, please open a PR.

---

> This project is not affiliated with Ubisoft Entertainment. Tom Clancy's, Rainbow Six, The Soldier Icon, Ubisoft and the Ubisoft logo are trademarks of Ubisoft Entertainment.
