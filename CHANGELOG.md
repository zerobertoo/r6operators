# Changelog

## [2.0.0](https://github.com/zerobertoo/r6operators/compare/v1.4.0...v2.0.0) (2026-10-01)


### ⚠ BREAKING CHANGES

* **react:** @zerobertoo/r6operators-react needs @zerobertoo/r6operators ^2.0.0.
* r6operators.getSVGIcon from the default import is gone. Use import { getSVGIcon } from "@zerobertoo/r6operators" instead.
* the org property is gone from IOperator and from every operator.
* getSVGIcon and toSVG no longer return a TypeError. Wrap calls in try/catch instead of checking the result with instanceof Error.

### Features

* drop getSVGIcon from the default export ([#50](https://github.com/zerobertoo/r6operators/issues/50)) ([a92d33e](https://github.com/zerobertoo/r6operators/commit/a92d33e20ad171a8e3b647ac2b0efe8f16ce91f2))
* **react:** require @zerobertoo/r6operators ^2.0.0 ([#51](https://github.com/zerobertoo/r6operators/issues/51)) ([b9037d2](https://github.com/zerobertoo/r6operators/commit/b9037d2e95023c82f87df749a6708baf370e6cec))
* remove org from IOperator and the operator data ([#49](https://github.com/zerobertoo/r6operators/issues/49)) ([06ca94c](https://github.com/zerobertoo/r6operators/commit/06ca94cf219f82dcdff1bf5cf4d294f0dbaff7c1))
* throw TypeError on invalid input instead of returning it ([#48](https://github.com/zerobertoo/r6operators/issues/48)) ([ea4ea9e](https://github.com/zerobertoo/r6operators/commit/ea4ea9e6880a10c6b7e6c76a82a6d3f0f3340d7e))

## [1.4.0](https://github.com/zerobertoo/r6operators/compare/v1.3.0...v1.4.0) (2026-10-01)


### Features

* **docs:** announce that getSVGIcon will throw instead of returning a TypeError ([#41](https://github.com/zerobertoo/r6operators/issues/41)) ([410a51a](https://github.com/zerobertoo/r6operators/commit/410a51a463dd7535cdad189f2d8ed744b6cdb14d))
* **docs:** filter operators by squad instead of org ([#43](https://github.com/zerobertoo/r6operators/issues/43)) ([126fb6a](https://github.com/zerobertoo/r6operators/commit/126fb6a0ce2dd3fd1aad6e0c500f41eea779a598))
* **types:** deprecate operator org and make it optional ([#42](https://github.com/zerobertoo/r6operators/issues/42)) ([510f877](https://github.com/zerobertoo/r6operators/commit/510f8777991a06656fd904fa177426bc1d587b31))

## [1.3.0](https://github.com/zerobertoo/r6operators/compare/v1.2.0...v1.3.0) (2026-10-01)


### Features

* **docs:** add new banner, favicon and social preview tags ([#38](https://github.com/zerobertoo/r6operators/issues/38)) ([2b0b816](https://github.com/zerobertoo/r6operators/commit/2b0b8166d3e5308d1e4f8e9b0738d8481a938415))
