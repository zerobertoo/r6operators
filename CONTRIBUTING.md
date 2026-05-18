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

---

## Getting started

**What does "contributing" mean?**

Creating an issue is the simplest form of contributing to a project. But there are many ways to contribute, including the following:

- Updating or correcting documentation
- Feature requests
- Bug reports

If you'd like to learn more about contributing in general, the [Guide to Idiomatic Contributing](https://github.com/jonschlinkert/idiomatic-contributing) has a lot of useful information.

## Issues

Please only create issues for bug reports or feature requests. Issues discussing any other topics may be closed by the project's maintainers without further explanation.

Do not create issues about bumping dependencies unless a bug has been identified and you can demonstrate that it effects this library.

**Help us to help you**

Remember that we’re here to help, but not to make guesses about what you need help with:

- Whatever bug or issue you're experiencing, assume that it will not be as obvious to the maintainers as it is to you.
- Spell it out completely. Keep in mind that maintainers need to think about _all potential use cases_ of a library. It's important that you explain how you're using a library so that maintainers can make that connection and solve the issue.

_It can't be understated how frustrating and draining it can be to maintainers to have to ask clarifying questions on the most basic things, before it's even possible to start debugging. Please try to make the best use of everyone's time involved, including yourself, by providing this information up front._

### Before creating an issue

Please try to determine if the issue is caused by an underlying library, and if so, create the issue there. Sometimes this is difficult to know. We only ask that you attempt to give a reasonable attempt to find out. Oftentimes the readme will have advice about where to go to create issues.

Try to follow these guidelines:

- **Avoid creating issues for implementation help** - It's much better for discoverability, SEO, and semantics - to keep the issue tracker focused on bugs and feature requests - to ask implementation-related questions please go to [stackoverflow.com](https://stackoverflow.com/)
- **Investigate the issue** - Search for exising issues (open or closed) that address the issue, and might have even resolved it already.
- **Check the readme** - oftentimes you will find notes about creating issues, and where to go depending on the type of issue.
- Create the issue in the appropriate repository.

### Creating an issue

Please be as descriptive as possible when creating an issue. Give us the information we need to successfully answer your question or address your issue by answering the following in your issue:

- **description**: (required) What is the bug you're experiencing? How are you using this library/app?
- **version**: (required) please note the version you are using
- **error messages**: (required) please paste any error messages into the issue, or a [gist](https://gist.github.com/)

### Closing issues

The original poster or the maintainers may close an issue at any time. Typically, but not exclusively, issues are closed when:

- The issue is resolved
- The project's maintainers have determined the issue is out of scope
- An issue is clearly a duplicate of another issue, in which case the duplicate issue will be linked.
- A discussion has clearly run its course

## Next steps

**Tips for creating idiomatic issues**

Spending just a little extra time to review best practices and brush up on your contributing skills will, at minimum, make your issue easier to read, easier to resolve, and more likely to be found by others who have the same or similar issue in the future. At best, it will open up doors and potential career opportunities by helping you be at your best.

The following resources were hand-picked to help you be the most effective contributor you can be:

- The [Guide to Idiomatic Contributing](https://github.com/jonschlinkert/idiomatic-contributing) is a great place for newcomers to start, but there is also information for experienced contributors there.
- Take some time to learn basic markdown. We can't stress this enough. Don't start pasting code into GitHub issues before you've taken a moment to review this [markdown cheatsheet](https://gist.github.com/jonschlinkert/5854601)
- And if you want to really go above and beyond, read [mastering markdown](https://guides.github.com/features/mastering-markdown/).

At the very least, please try to:

- Use backticks to wrap code. This ensures that it retains its formatting and isn't modified when it's rendered by GitHub, and makes the code more readable to others
- When applicable, use syntax highlighting by adding the correct language name after the first "code fence"
