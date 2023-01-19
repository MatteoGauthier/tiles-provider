import { test, assert, assertType, expect, describe } from "vitest"
import { getRasterTile, Source } from "../src"

const camera = {
  x: 4,
  y: 2,
  z: 3,
}

// prettier-ignore
const series = [
  ["stamen-watercolor", "https://stamen-tiles.a.ssl.fastly.net/watercolor/3/4/2.jpg"],
  ["stamen-toner", "https://stamen-tiles.a.ssl.fastly.net/toner/3/4/2.png"],
  ["stamen-terrain", "https://stamen-tiles.a.ssl.fastly.net/terrain/3/4/2.jpg"],
  ["osm", "https://tile.openstreetmap.org/4/2/3.png"],
  ["carto-light_all", "https://a.basemaps.cartocdn.com/light_all/3/4/2.png"],
  ["carto-dark_all", "https://a.basemaps.cartocdn.com/dark_all/3/4/2.png"],
  ["carto-light_nolabels", "https://a.basemaps.cartocdn.com/light_nolabels/3/4/2.png"],
  ["carto-light_only_labels", "https://a.basemaps.cartocdn.com/light_only_labels/3/4/2.png"],
  ["carto-dark_nolabels", "https://a.basemaps.cartocdn.com/dark_nolabels/3/4/2.png"],
  ["carto-dark_only_labels", "https://a.basemaps.cartocdn.com/dark_only_labels/3/4/2.png"],
  ["carto-rastertiles/voyager", "https://a.basemaps.cartocdn.com/rastertiles/voyager/3/4/2.png"],
  ["carto-rastertiles/voyager_nolabels", "https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/3/4/2.png"],
  ["carto-rastertiles/voyager_only_labels", "https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/3/4/2.png"],
  ["carto-rastertiles/voyager_labels_under", "https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/3/4/2.png"],
]

// @todo Add test for subdomains (a, b, c)
// @todo Check if the tile is the right one (position, zoom, etc.)

describe("Check each sources existence", () => {
  for (const [source, expected] of series) {
    test(`${source} exist`, () => {
      assertType<Source>(source as Source)
    })
  }
})

describe("Check each sources output", () => {
  for (const [source, expected] of series) {
    test(`With ${source} source`, () => {
      const output = getRasterTile(source as Source, camera)
      assert.equal(output, expected)
    })
  }
})
