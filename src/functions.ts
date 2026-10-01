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
 * @throws {TypeError} If `op` or `userAttributes` is missing or invalid.
 */
export function getSVGIcon(op: Operator, userAttributes?: { [key: string]: unknown }): string {
  // check if parameter is an object
  if (userAttributes && typeof userAttributes !== "object") {
    throw new TypeError("The parameter `userAttributes` is either missing or invalid.")
  }

  // check if parameter is an object
  if (!op || !op.svg || !op.svg.attributes || !op.svg.contents) {
    throw new TypeError("The parameter `op` is either missing or invalid.")
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
