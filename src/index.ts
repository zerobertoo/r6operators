export * from "@operators/index"
export { getSVGIcon } from "./functions"

import * as operators from "@operators/index"
import { getSVGIcon } from "./functions"
export default { ...operators, getSVGIcon }
