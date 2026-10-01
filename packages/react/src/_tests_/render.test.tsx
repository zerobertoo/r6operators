import { ace } from "@zerobertoo/r6operators"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { R6Icon } from "../R6Icon"
import { R6Operator } from "../R6Operator"

const op = {
  ...ace,
  svg: { ...ace.svg, contents: "<circle cx='50' cy='50' r='40' />" },
}

describe("R6Icon", () => {
  it("renders the operator svg with defaults", () => {
    expect(renderToStaticMarkup(<R6Icon op={op} />)).toMatchSnapshot()
  })

  it("applies size, color, className and extra props", () => {
    const html = renderToStaticMarkup(
      <R6Icon op={op} size={48} color="red" className="foo" aria-label="Ace" />,
    )
    expect(html).toMatchSnapshot()
  })

  it("renders nothing without an operator", () => {
    expect(renderToStaticMarkup(<R6Icon op={undefined as never} />)).toBe("")
  })
})

describe("R6Operator", () => {
  it("looks the operator up by name", () => {
    expect(renderToStaticMarkup(<R6Operator name="ace" size={32} />)).toMatchSnapshot()
  })
})
