import * as r6operators from "../../dist"
import * as ops from "@operators/index"

test("exports all operators as named exports", () => {
  for (const op of Object.keys(ops)) {
    expect(r6operators).toHaveProperty(op)
  }
})

test("exports extended object", () => {
  expect(r6operators.alibi).toMatchObject({
    ...ops.alibi,
    id: "alibi",
    svg: {
      contents: expect.any(String),
    },
    toSVG: expect.any(Function),
  })
})

test("default export holds only operators", () => {
  const all = Object.values(r6operators.default)
  expect(all).toHaveLength(Object.keys(ops).length)
  expect(r6operators.default).not.toHaveProperty("getSVGIcon")
})
