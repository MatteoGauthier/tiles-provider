export type Provider = "mapbox"

export type TileSource = "stamen-watercolor" | "stamen-toner" | "stamen-terrain" | "osm"

export type SourceProvider = {
  source: TileSource
  provider?: Provider
  variant?: string
  access_token?: string
}

export type Source = SourceProvider | TileSource

export type Camera = {
  x: number | string
  y: number | string
  z: number | string
}
