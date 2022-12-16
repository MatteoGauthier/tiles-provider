import { test, assert, assertType, expect, describe } from "vitest"
import { Source, getRasterTile } from "../src"

const camera = {
  x: 1,
  y: 2,
  z: 3,
}
const series = [
  ["stamen-watercolor", "https://stamen-tiles.a.ssl.fastly.net/watercolor/1/2/3.jpg"],
  ["stamen-toner", "https://stamen-tiles.a.ssl.fastly.net/toner/1/2/3.jpg"],
  ["stamen-terrain", "https://stamen-tiles.a.ssl.fastly.net/terrain/1/2/3.jpg"],
]
series.forEach(([source, expected]) => {
  test(`With ${source} source`, () => {
    const output = getRasterTile(source as Source, camera)
    assert.equal(output, expected)
  })
})
