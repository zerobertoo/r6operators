import * as r6operators from "../../dist"
import { getSVGIcon } from "../../dist"
import type { Operator } from "~/types/operator"

const r6ops = r6operators as unknown as Record<string, Operator>

// clone so the shared operator objects from dist are never mutated
const withExampleSvg = (op: Operator): Operator => ({
  ...op,
  svg: {
    ...op.svg,
    contents: "<circle cx='50' cy='50' r='40' stroke='black' stroke-width='3' fill='red' />",
  },
})

it("toSVG() returns correct string", () => {
  const op = withExampleSvg(r6ops["ace"])

  expect(op.toSVG()).toMatchSnapshot()
  expect(op.toSVG({ "stroke-width": 1, color: "red" })).toMatchSnapshot()
  expect(op.toSVG({ class: "foo bar", color: "green" })).toMatchSnapshot()
})

it("toSVG() returns same output as getSVGIcon()", () => {
  const keys = Object.keys(r6ops).filter((key) => typeof r6ops[key] === "object" && r6ops[key]?.svg)
  for (const op of keys) {
    const exampleAttributes = { class: "test", "stroke-width": 1 }
    const example = withExampleSvg(r6ops[op])

    // test each operator
    const objFunc = example.toSVG(exampleAttributes)
    const namedFunc = getSVGIcon(example, exampleAttributes)
    expect(objFunc as string).toMatch(namedFunc as string)
  }
})

describe("getSVGIcon() errors", () => {
  const op = r6ops["ace"]

  it("returns a TypeError for a missing or invalid operator", () => {
    expect(getSVGIcon(undefined as never)).toBeInstanceOf(TypeError)
    expect(getSVGIcon({} as never)).toBeInstanceOf(TypeError)
  })

  it("returns a TypeError when userAttributes is not an object", () => {
    expect(getSVGIcon(op, "x" as never)).toBeInstanceOf(TypeError)
  })

  it("merges the class of the operator with the user class", () => {
    expect(getSVGIcon(op, { class: "foo" })).toMatch(/class="r6operators r6operators-ace foo"/)
  })
})
