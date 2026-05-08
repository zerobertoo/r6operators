import * as operators from "@zerobertoo/r6operators"
import type { Operator } from "@zerobertoo/r6operators"
import React from "react"

type AllExports = typeof operators
export type OperatorName = Exclude<keyof AllExports, "getSVGIcon">

export interface R6OperatorProps extends React.SVGProps<SVGSVGElement> {
  /** Operator identifier (e.g. "alibi", "ash", "thermite") */
  name: OperatorName
  /** Width and height in pixels (default: 24) */
  size?: number
  /** Fill color applied to the SVG (default: "currentColor") */
  color?: string
}

export function R6Operator({ name, size = 24, color = "currentColor", className, style, ...rest }: R6OperatorProps) {
  const op = operators[name] as Operator

  if (!op || !op.svg) {
    return null
  }

  const { width: _w, height: _h, class: svgClass, ...svgAttrs } = op.svg.attributes as Record<string, unknown>

  const combinedClass = [svgClass as string | undefined, className].filter(Boolean).join(" ") || undefined

  return (
    <svg
      {...(svgAttrs as React.SVGProps<SVGSVGElement>)}
      {...rest}
      width={size}
      height={size}
      fill={color}
      className={combinedClass}
      style={style}
      dangerouslySetInnerHTML={{ __html: op.svg.contents }}
    />
  )
}
