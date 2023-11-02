import { Camera, TileSource } from "../types"

// @todo add an option to choose format (png, jpg, etc.)
// @todo add validation for x, y, z (based on basemaps defintion)
// @todo add support for CDN
// @todo add support for provider styling (like carto)

// prettier-ignore
const tilesSourceTemplates: Record<TileSource, (x: string, y: string, z: string) => string> = {
  "stamen-watercolor": (x, y, z) => `https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/${z}/${x}/${y}.jpg`,
  "stamen-toner": (x, y, z) => `https://watercolormaps.collection.cooperhewitt.org/tile/toner/${z}/${x}/${y}.png`,
  "stamen-terrain": (x, y, z) => `https://watercolormaps.collection.cooperhewitt.org/tile/terrain/${z}/${x}/${y}.jpg`,
  osm: (x, y, z) => `https://tile.openstreetmap.org/${x}/${y}/${z}.png`,
  "carto-light_all": (x, y, z) => `https://a.basemaps.cartocdn.com/light_all/${z}/${x}/${y}.png`,
  "carto-dark_all": (x, y, z) => `https://a.basemaps.cartocdn.com/dark_all/${z}/${x}/${y}.png`,
  "carto-light_nolabels": (x, y, z) => `https://a.basemaps.cartocdn.com/light_nolabels/${z}/${x}/${y}.png`,
  "carto-light_only_labels": (x, y, z) => `https://a.basemaps.cartocdn.com/light_only_labels/${z}/${x}/${y}.png`,
  "carto-dark_nolabels": (x, y, z) => `https://a.basemaps.cartocdn.com/dark_nolabels/${z}/${x}/${y}.png`,
  "carto-dark_only_labels": (x, y, z) => `https://a.basemaps.cartocdn.com/dark_only_labels/${z}/${x}/${y}.png`,
  "carto-rastertiles/voyager": (x, y, z) => `https://a.basemaps.cartocdn.com/rastertiles/voyager/${z}/${x}/${y}.png`,
  "carto-rastertiles/voyager_nolabels": (x, y, z) => `https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/${z}/${x}/${y}.png`,
  "carto-rastertiles/voyager_only_labels": (x, y, z) => `https://a.basemaps.cartocdn.com/rastertiles/voyager_only_labels/${z}/${x}/${y}.png`,
  "carto-rastertiles/voyager_labels_under": (x, y, z) => `https://a.basemaps.cartocdn.com/rastertiles/voyager_labels_under/${z}/${x}/${y}.png`,
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
