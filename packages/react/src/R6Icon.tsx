import type { Operator } from "@zerobertoo/r6operators"
import React from "react"

export interface R6IconProps extends Omit<React.SVGProps<SVGSVGElement>, "name"> {
  /** Operator object (e.g. `import { ace } from "@zerobertoo/r6operators"`) */
  op: Operator
  /** Width and height in pixels (default: 24) */
  size?: number
  /** Fill color applied to the SVG (default: "currentColor") */
  color?: string
}

/** Tree-shakeable variant of `R6Operator`: only the operator you pass gets bundled. */
export function R6Icon({
  op,
  size = 24,
  color = "currentColor",
  className,
  style,
  ...rest
}: R6IconProps) {
  if (!op || !op.svg) {
    return null
  }

  const {
    width: _w,
    height: _h,
    class: svgClass,
    ...svgAttrs
  } = op.svg.attributes as Record<string, unknown>

  const combinedClass =
    [svgClass as string | undefined, className].filter(Boolean).join(" ") || undefined

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
