import { getTilesFromTemplate } from "./lib/source"

type Provider = "mapbox"

type TileSource = "stamen-watercolor"

type SourceProvider = {
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

export function getRasterTile(source: Source, camera: Camera) {
  if (typeof source === "string") {
    return getTilesFromTemplate(source, camera)
  }
}
// console.log(getRasterTile("stamen-watercolor", { x: 5, y: 17, z: 9 }))
// https://tile.openstreetmap.org/5/17/9.png
