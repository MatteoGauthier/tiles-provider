import { test, assert, assertType, expect, describe } from "vitest"
import { Source, getRasterTile } from "../dist"

const camera = {
  x: 4,
  y: 2,
  z: 3,
}
const series = [
  ["stamen-watercolor", "https://stamen-tiles.a.ssl.fastly.net/watercolor/4/2/3.jpg"],
  ["stamen-toner", "https://stamen-tiles.a.ssl.fastly.net/toner/4/2/3.jpg"],
  ["stamen-terrain", "https://stamen-tiles.a.ssl.fastly.net/terrain/4/2/3.jpg"],
  ["osm", "https://tile.openstreetmap.org/4/2/3.png"],
]

// @todo Add test for subdomains (a, b, c)
// @todo Check if the tile is the right one (position, zoom, etc.)

series.forEach(([source, expected]) => {
  test(`With ${source} source`, () => {
    const output = getRasterTile(source as Source, camera)
    assert.equal(output, expected)
  })
})
