import { Camera, TileSource } from "../types"

// @todo add an option to choose format (png, jpg, etc.)

const tilesSourceTemplates: Record<TileSource, (x: string, y: string, z: string) => string> = {
  "stamen-watercolor": (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/watercolor/${z}/${x}/${y}.jpg`,
  "stamen-toner": (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/toner/${z}/${x}/${y}.png`,
  "stamen-terrain": (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}.jpg`,
  osm: (x, y, z) => `https://tile.openstreetmap.org/${x}/${y}/${z}.png`,
}

export const getTilesFromTemplate = (
  source: TileSource,
  camera: Camera = {
    x: 0,
    y: 0,
    z: 0,
  }
) => {
  const { x, y, z } = camera

  const tileSourceTemplate = tilesSourceTemplates[source]
  if (tileSourceTemplate) {
    return tileSourceTemplate(String(x), String(y), String(z))
  }
  return null
}
