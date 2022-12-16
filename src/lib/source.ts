import { Camera } from ".."

const tilesSourceTemplates: Record<string, (x: string, y: string, z: string) => string> = {
  "stamen-watercolor": (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/watercolor/${x}/${y}/${z}.jpg`,
  "stamen-toner": (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/toner/${x}/${y}/${z}.jpg`,
  "stamen-terrain": (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/terrain/${x}/${y}/${z}.jpg`,
  osm: (x, y, z) => `https://tile.openstreetmap.org/${x}/${y}/${z}.png`,
}

export const getTilesFromTemplate = (
  source: string,
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
