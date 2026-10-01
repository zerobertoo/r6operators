import { Operator } from "~/types/operator"

/**
 * Convert attributes object to string of HTML attributes.
 * @param {Object} attributes - Object containing the attributes.
 */
function attributesToString(attributes: Record<string, unknown>): string {
  return Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ")
}
/**
 * Returns the icon from the operator object as an SVG string.
 * @param op Object containing operator object.
 * @param userAttributes Object containing additional element attributes.
 * @returns String containing the SVG element.
 *
 * Deprecation notice: for an invalid `op` or `userAttributes` this function currently
 * *returns* a `TypeError` instead of throwing it. From 2.0 it will throw and the return
 * type will be just `string`. Do not rely on `instanceof Error` checks on the result;
 * wrap the call in `try/catch` instead.
 */
export function getSVGIcon(
  op: Operator,
  userAttributes?: { [key: string]: unknown },
): string | Error {
  // check if parameter is an object
  if (userAttributes && typeof userAttributes !== "object") {
    return new TypeError("The parameter `userAttributes` is either missing or invalid.")
  }

  // check if parameter is an object
  if (!op || !op.svg || !op.svg.attributes || !op.svg.contents) {
    return new TypeError("The parameter `op` is either missing or invalid.")
  }

  // create an object containing all attributes from the icon + user attributes
  const combinedAttributes = {
    ...op.svg.attributes,
    ...userAttributes,
    class: [op.svg.attributes.class, userAttributes?.class].filter(Boolean).join(" "),
  }

  // return as a SVG string
  return `<svg ${attributesToString(combinedAttributes)}>${op.svg.contents}</svg>`
}
