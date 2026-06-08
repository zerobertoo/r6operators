## What type of change is this?

- [ ] New operator
- [ ] Data correction (existing operator)
- [ ] Code / feature / refactor
- [ ] Other (describe below)

---

## New operator checklist

_Fill this in only if you checked "New operator" above._

- [ ] `operators/<name>/` directory created with `<name>.svg` and `index.ts`
- [ ] All `IOperator` fields filled: `name`, `role`, `org`, `squad`, `ratings`, `meta`, `bio`
- [ ] `season` set correctly (format: `Y10S1`, or `Release` for launch operators)
- [ ] `npm run build` passes — operator appears in `dist/icons/<name>.svg`
- [ ] `npm run test` passes

---

## Data correction checklist

_Fill this in only if you checked "Data correction" above._

- [ ] Field changed: <!-- e.g. meta.height -->
- [ ] Old value → new value: <!-- e.g. 170 → 171 -->
- [ ] Source / reference linked: <!-- URL or screenshot -->

---

## Code / feature checklist

_Fill this in only if you checked "Code / feature / refactor" above._

- [ ] `npm run build` passes
- [ ] `npm run test` passes
- [ ] `npm run lint` passes
- [ ] Breaking change? <!-- yes / no — if yes, describe what callers need to update -->

---

## Description

<!-- Briefly describe what this PR does and why. -->
