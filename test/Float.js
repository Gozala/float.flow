/* @flow */

import * as Float from "../"
import test from "blue-tape"

test("test baisc", async test => {
  test.isEqual(typeof Float, "object")
  test.isEqual(typeof Float.toFloat, "function")
  test.isEqual(typeof Float.isNaN, "function")
  test.isEqual(typeof Float.isFinite, "function")
})

parseFloat({}) //?
parseFloat("five") //?
parseFloat("0what?") //?

test("test toFloat", async test => {
  test.isEqual(Float.toFloat(0) /*?*/, 0, "0")
  test.isEqual(Float.toFloat(0 / 1) /*?*/, 0, "0 / 1")
  test.isEqual(isNaN(Float.toFloat(0 / 0) /*?*/), true, "0 / 0")
  test.isEqual(Float.toFloat(1 / 0) /*?*/, Infinity, "1 / 0")
  test.isEqual(Float.toFloat(1 / 2) /*?*/, 0.5, "1 / 2")
  test.isEqual(isNaN(Float.toFloat(NaN) /*?*/), true, "NaN")
  test.isEqual(Float.toFloat(Infinity) /*?*/, Infinity, "Infinity")
  test.isEqual(Float.toFloat(-Infinity) /*?*/, -Infinity, "-Infinity")
  test.isEqual(Float.toFloat(7 / 3) /*?*/, 7 / 3, "7 / 3")
})

test("test parseFloat", async test => {
  test.isEqual(Float.parseFloat("123") /*?*/, 123)
  test.isEqual(Float.parseFloat("3.14") /*?*/, 3.14)
  test.isEqual(Float.parseFloat("+3.14") /*?*/, 3.14)
  test.isEqual(Float.parseFloat("-3.14") /*?*/, -3.14)
  test.isEqual(Float.parseFloat("0") /*?*/, 0)
  test.isEqual(Float.parseFloat(".0") /*?*/, 0)
  test.isEqual(Float.parseFloat("0.12") /*?*/, 0.12)
  test.isEqual(Float.parseFloat(".12") /*?*/, 0.12)
  test.isEqual(Float.parseFloat("1e-42") /*?*/, 1e-42)
  test.isEqual(Float.parseFloat("6.022e23") /*?*/, 6.022e23)
  test.isEqual(Float.parseFloat("6.022E23") /*?*/, 6.022e23)
  test.isEqual(Float.parseFloat("6.022e+23") /*?*/, 6.022e23)
  test.isEqual(Float.parseFloat("6.022e") /*?*/, null)
  test.isEqual(Float.parseFloat("6.022n") /*?*/, null)
  test.isEqual(Float.parseFloat("6.022.31") /*?*/, null)
  test.isEqual(Float.parseFloat("6 / 2") /*?*/, null)
  test.isEqual(Float.parseFloat("NaN") /*?*/, null)
  test.isEqual(Float.parseFloat("-Infinity") /*?*/, null)
  test.isEqual(Float.parseFloat("Infinity") /*?*/, null)
  test.isEqual(Float.parseFloat("+Infinity") /*?*/, null)
  test.isEqual(Float.parseFloat("0xFF") /*?*/, null)
  test.isEqual(Float.parseFloat("0what?") /*?*/, null)
})

test("test isNaN", async test => {
  test.isEqual(Float.isNaN(NaN) /*?*/, true)
  test.isEqual(Float.isNaN(-NaN) /*?*/, true)
  test.isEqual(Float.isNaN(NaN / 10) /*?*/, true)
  test.isEqual(Float.isNaN(0 / 0) /*?*/, true)
  test.isEqual(Float.isNaN(0 / 1) /*?*/, false)
  test.isEqual(Float.isNaN(Infinity) /*?*/, false)
  test.isEqual(Float.isNaN(+Infinity) /*?*/, false)
  test.isEqual(Float.isNaN(-Infinity) /*?*/, false)
})

test("test isFinite", async test => {
  test.isEqual(Float.isFinite(NaN) /*?*/, false)
  test.isEqual(Float.isFinite(-NaN) /*?*/, false)
  test.isEqual(Float.isFinite(0 / 0) /*?*/, false)
  test.isEqual(Float.isFinite(1 / 0) /*?*/, false)
  test.isEqual(Float.isFinite(0 / 1) /*?*/, true)
  test.isEqual(Float.isFinite(Infinity) /*?*/, false)
  test.isEqual(Float.isFinite(+Infinity) /*?*/, false)
  test.isEqual(Float.isFinite(-Infinity) /*?*/, false)
  test.isEqual(Float.isFinite(1 / 8) /*?*/, true)
  test.isEqual(Float.isFinite(0) /*?*/, true)
})
