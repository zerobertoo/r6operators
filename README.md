![r6operators Header Image](https://i.imgur.com/1qhhXYK.png)

# r6operators

![GitHub last commit](https://img.shields.io/github/last-commit/zerobertoo/r6operators?style=for-the-badge)
[![GitHub stars](https://img.shields.io/github/stars/zerobertoo/r6operators?style=for-the-badge)](https://github.com/zerobertoo/r6operators)
[![GitHub forks](https://img.shields.io/github/forks/zerobertoo/r6operators?style=for-the-badge)](https://github.com/zerobertoo/r6operators)
[![GitHub license](https://img.shields.io/github/license/zerobertoo/r6operators?style=for-the-badge)](https://github.com/zerobertoo/r6operators)
[![npm version](https://img.shields.io/npm/v/r6operators.svg?style=for-the-badge)](https://www.npmjs.com/package/r6operators)
[![npm downloads](https://img.shields.io/npm/dw/r6operators.svg?style=for-the-badge)](https://www.npmjs.com/package/r6operators)
[![bundle size](https://img.shields.io/bundlephobia/minzip/r6operators?style=for-the-badge)](https://bundlephobia.com/package/r6operators)

**[Live demo →](https://zerobertoo.github.io/r6operators)**

r6operators is a collection of high-quality vectorized Rainbow Six: Siege Operator icons & metadata for Node.js.

This project started as way for people to get high-resolution operator icons for Rainbow Six: Siege operators, especially as vector graphics gained popularity in web development in the recent years. All icons have been remade by hand and they got the same aspect ratio & alignment for more consistent usage.

> This is a fork of the original [r6operators](https://github.com/marcopixel/r6operators) project by [@marcopixel](https://github.com/marcopixel), maintained with updated operators and dependencies.

## Usage

#### 1. Install

Install the package with [npm](https://docs.npmjs.com/getting-started/what-is-npm):

```shell
npm install r6operators
```

#### 2. Use it

```js
// named imports
import { ace, alibi, getSVGIcon } from "r6operators"

// default import (all operators + getSVGIcon as one object)
import r6operators from "r6operators"

alibi
// {
// 	  id: 'alibi',
// 	  name: 'Alibi',
// 	  role: 'Defender',
// 	  org: 'GIS',
//    squad: 'VIPERSTRIKE',
// 	  ratings: {
// 		  health: 1,
// 		  speed: 3,
// 		  difficulty: 3
// 	  },
// 	  meta: {
// 		  gender: 'f',
// 		  country: 'it',
// 		  season: 'Y3S2',
// 		  height: 171,
// 		  weight: 63,
//      price: 10000
// 	  },
// 	  bio: {
// 		  real_name: 'Aria de Luca',
// 		  birthplace: 'Tripoli, Lybia'
// 	  },
// 	  svg: {
// 		  contents: [SVG Contents],
// 		  attributes: {
// 			  xmlns: 'http://www.w3.org/2000/svg',
// 			  viewBox: '0 0 350 350',
// 			  style: 'enable-background:new 0 0 350 350',
// 			  space: 'preserve',
// 			  class: 'r6operators r6operators-alibi'
// 		  }
// 	  },
// 	  toSVG: [Function]
// }

alibi.toSVG()
// <svg class="r6operators r6operators-alibi" ... >...</svg>

alibi.toSVG({ class: "large", "stroke-width": 2, color: "red" })
// <svg class="r6operators r6operators-alibi large" stroke-width="2" color="red" ... >...</svg>
```

You can also access the optimized SVG icons directly from `node_modules/r6operators/dist/icons` if you desire.

#### Using via CDN (browser)

Load the minified UMD bundle from [jsDelivr](https://www.jsdelivr.com/) or [unpkg](https://unpkg.com/) — no bundler required:

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/r6operators/dist/r6operators.min.js"></script>

<!-- unpkg -->
<script src="https://unpkg.com/r6operators/dist/r6operators.min.js"></script>
```

The library is available as the global `r6operators`:

```html
<script src="https://cdn.jsdelivr.net/npm/r6operators/dist/r6operators.min.js"></script>
<script>
  document.body.innerHTML = r6operators.alibi.toSVG({ width: 64, height: 64 })
</script>
```

Individual optimized SVG icons are also served directly via CDN:

```
https://cdn.jsdelivr.net/npm/r6operators/dist/icons/alibi.svg
https://unpkg.com/r6operators/dist/icons/alibi.svg
```

## React Component

For React applications, use the dedicated `r6operators-react` package:

#### 1. Install

```shell
npm install r6operators-react
```

#### 2. Use it

```jsx
import { R6Operator } from "r6operators-react"

function App() {
  return (
    <div>
      <R6Operator name="alibi" size={48} />
      <R6Operator name="ash" size={64} color="red" className="operator-icon" />
    </div>
  )
}
```

The component accepts the following props:

- `name`: Operator identifier (e.g. "alibi", "ash", "thermite") - TypeScript autocompletes valid names
- `size`: Width and height in pixels (default: 24)
- `color`: Fill color applied to the SVG (default: "currentColor")
- `className`: Additional CSS class
- All other SVG props are passed through

## Reference

### `r6operators.[name]`

An object containing all data about the operator, including the svg contents and attributes.

> Note: You can find all possible operator names in the [operators/index.ts](https://github.com/zerobertoo/r6operators/blob/master/operators/index.ts) file
>
> Please keep in mind that the properties `bio`, `meta` and `ratings` are not available on recruits.

##### Example:

```js
r6operators.alibi
// {
// 	  id: 'alibi',
// 	  name: 'Alibi',
// 	  role: 'Defender',
// 	  org: 'GIS',
//    squad: 'VIPERSTRIKE',
// 	  ratings: {
// 		  health: 1,
// 		  speed: 3,
// 		  difficulty: 3
// 	  },
// 	  meta: {
// 		  gender: 'f',
// 		  country: 'it',
// 		  season: 'Y3S2',
// 		  height: 171,
// 		  weight: 63,
//      price: 10000
// 	  },
// 	  bio: {
// 		  real_name: 'Aria de Luca',
// 		  birthplace: 'Tripoli, Lybia'
// 	  },
// 	  svg: {
// 		  contents: [SVG Contents],
// 		  attributes: {
// 			  xmlns: 'http://www.w3.org/2000/svg',
// 			  viewBox: '0 0 350 350',
// 			  style: 'enable-background:new 0 0 350 350',
// 			  space: 'preserve',
// 			  class: 'r6operators r6operators-alibi'
// 		  }
// 	  },
// 	  toSVG: [Function]
// }
```

---

### `r6operators.[name].toSVG([attrs])`

Returns an SVG string of the operator icon.

#### Parameters

| Name               | Type   | Description                                                                                                                                                                                                                  |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attrs` (optional) | Object | Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

```js
r6operators.alibi.toSVG()
// <svg class="r6operators r6operators-alibi" ... >...</svg>

r6operators.alibi.toSVG({ class: "large" })
// <svg class="r6operators r6operators-alibi large" ... >...</svg>

r6operators.alibi.toSVG({ "stroke-width": 2, color: "red" })
// <svg class="r6operators r6operators-alibi" stroke-width="2" color="red" ... >...</svg>
```

---

### `getSVGIcon([op], [attrs])`

Returns an SVG string of the operator icon.

#### Parameters

| Name               | Type     | Description                                                                                                                                                                                                                  |
| ------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `op`               | Operator | Operator object                                                                                                                                                                                                              |
| `attrs` (optional) | Object   | Key-value pairs in the `attrs` object will be mapped to HTML attributes on the `<svg>` tag (e.g. `{ foo: 'bar' }` maps to `foo="bar"`). All default attributes on the `<svg>` tag can be overridden with the `attrs` object. |

```js
import { alibi, getSVGIcon } from "r6operators"

getSVGIcon(alibi)
// <svg class="r6operators r6operators-alibi" ... >...</svg>

getSVGIcon(alibi, { class: "large" })
// <svg class="r6operators r6operators-alibi large" ... >...</svg>
```

## Contributing

For more info on how to contribute please see the [contribution guidelines](https://github.com/zerobertoo/r6operators/blob/master/CONTRIBUTING.md).

Caught a mistake or want to contribute to the documentation? [Edit this page on Github](https://github.com/zerobertoo/r6operators/blob/master/README.md)

## Credits

- [@marcopixel](https://github.com/marcopixel) for creating the original [r6operators](https://github.com/marcopixel/r6operators) project.
- [@colebemis](https://github.com/colebemis) for his work on [feather](https://github.com/feathericons/feather), which gave the original project an awesome reference.
- [@dtSniper](https://twitter.com/sniperdt) for creating the IQ, Thatcher, Fuze, Glaz, Bandit, Kapkan, Tachanka, Pulse, Sledge and Doc icons.
- [@joeyfjj](https://twitter.com/joeyfjj) for creating the Goyo, Mute, Smoke, Jäger and Blitz icons.
- [@danielwerg](https://github.com/danielwerg/) for creating the Fenrir, Brava and Solis icons and his awesome price calculator function.
- [@LaxisB](https://github.com/LaxisB/), [@NaughtyMuppet](https://github.com/NaughtyMuppet) & [@danielwerg](https://github.com/danielwerg) for general help on this project. <3

## License

r6operators is licensed under the [MIT License](https://github.com/zerobertoo/r6operators/blob/master/LICENSE).

This project is not affiliated with Ubisoft Entertainment. Tom Clancy's, Rainbow Six, The Soldier Icon, Ubisoft and the Ubisoft logo are trademarks of Ubisoft Entertainment.
