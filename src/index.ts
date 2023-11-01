import { getTilesFromTemplate } from "./lib/source"
import { Camera, Source } from "./types"
import { availableTilesSource } from "./constants"

export function getRasterTile(source: Source, camera: Camera) {
  if (typeof source === "string") {
    return getTilesFromTemplate(source, camera)
  }
}

export { Camera, Source, availableTilesSource }
