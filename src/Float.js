/* @flow */

import * as Number from "./Number"

/*::
opaque type float:number = number
*/

export const parseFloat = (input:string):?float => {
  switch (input) {
    case "":
      return null
    default: {
      if (/[\sxbo]/.test(input)) {
        return null
      } else {
        const n = +input
        switch (n) {
          case Infinity:
            return null
          case -Infinity:
            return null
          // Faster isNaN check
          case n:
            return n
          default:
            return null
        }
      }
    }
  }
}

export const toFloat = (value:number):float => value
export const isNaN = Number.isNaN
export const isFinite = Number.isFinite
