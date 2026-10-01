import * as operators from "@zerobertoo/r6operators"
import type { Operator } from "@zerobertoo/r6operators"
import React from "react"
import { R6Icon, type R6IconProps } from "./R6Icon"

type AllExports = typeof operators
export type OperatorName = Exclude<keyof AllExports, "getSVGIcon" | "default">

export interface R6OperatorProps extends Omit<R6IconProps, "op"> {
  /** Operator identifier (e.g. "alibi", "ash", "thermite") */
  name: OperatorName
}

/** Looks the operator up by name. Bundles every operator; use `R6Icon` to bundle only the ones you use. */
export function R6Operator({ name, ...rest }: R6OperatorProps) {
  return <R6Icon op={operators[name] as Operator} {...rest} />
}
