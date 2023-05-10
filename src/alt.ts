type TileSource = "stamen-watercolor" | "stamen-toner" | "stamen-terrain" | "mapbox/streets-v11"

interface RasterTileOptionsBase {
  x: number
  y: number
  z: number
  tileSource: TileSource
}

interface RasterTileOptionsWithApiKey extends RasterTileOptionsBase {
  apiKey: string
}

type RasterTileOptions = RasterTileOptionsBase | RasterTileOptionsWithApiKey

interface TileProvider<T extends TileSource> {
  getUrl: (x: string, y: string, z: string, apiKey?: string) => string
}

type TileProviders = {
  [K in TileSource]: K extends "mapbox/streets-v11"
    ? TileProvider<K> & { requiresApiKey: true }
    : TileProvider<K> & { requiresApiKey: false }
}

const tileProviders: TileProviders = {
  "stamen-watercolor": {
    getUrl: (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/watercolor/${z}/${x}/${y}.jpg`,
    requiresApiKey: false,
  },
  "stamen-toner": {
    getUrl: (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/toner/${z}/${x}/${y}.png`,
    requiresApiKey: false,
  },
  "stamen-terrain": {
    getUrl: (x, y, z) => `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}.jpg`,
    requiresApiKey: false,
  },
  "mapbox/streets-v11": {
    getUrl: (x, y, z, apiKey) =>
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/${z}/${x}/${y}?access_token=${apiKey}`,
    requiresApiKey: true,
  },
} as const

function getRasterTileUrl(options: RasterTileOptions): string {
  const { x, y, z, tileSource } = options
  const tileProvider = tileProviders[tileSource]

  if (!tileProvider) {
    throw new Error(`Invalid tile source: ${tileSource}`)
  }

  if (tileProvider.requiresApiKey && !("apiKey" in options)) {
    throw new Error(`API key is required for ${tileSource} tile provider`)
  }

  return tileProvider.getUrl(x.toString(), y.toString(), z.toString(), "apiKey" in options ? options.apiKey : undefined)
}

getRasterTileUrl({
  x: 0,
  y: 0,
  z: 0,
  tileSource: "mapbox/streets-v11",
})
