import * as r6operators from "../../dist"
import { getSVGIcon } from "../../dist"
import type { Operator } from "~/types/operator"

const r6ops = r6operators as unknown as Record<string, Operator>

it("toSVG() returns correct string", () => {
  // overwrite svg contents with example string
  const op = r6ops["ace"]
  op.svg.contents = "<circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />"

  expect(op.toSVG()).toMatchSnapshot()
  expect(op.toSVG({ "stroke-width": 1, color: "red" })).toMatchSnapshot()
  expect(op.toSVG({ class: "foo bar", color: "green" })).toMatchSnapshot()
})

it("toSVG() returns same output as getSVGIcon()", () => {
  Object.keys(r6ops)
    .filter((key) => typeof r6ops[key] === "object" && r6ops[key]?.svg)
    .map((op) => {
      const exampleAttributes = { class: "test", "stroke-width": 1 }
      // overwrite svg contents with example string
      r6ops[op].svg.contents =
        "<circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />"

      // test each operator
      const objFunc = r6ops[op].toSVG(exampleAttributes)
      const namedFunc = getSVGIcon(r6ops[op], exampleAttributes)
      expect(objFunc as string).toMatch(namedFunc as string)
    })
})
