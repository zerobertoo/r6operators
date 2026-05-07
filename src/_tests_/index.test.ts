import * as r6operators from "../../dist"
import * as ops from "@operators/index"

test("exports all operators as named exports", () => {
  Object.keys(ops).map((op) => {
    expect(r6operators).toHaveProperty(op)
  })
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
