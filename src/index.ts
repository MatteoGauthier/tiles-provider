import { getTilesFromTemplate } from "./lib/source"
import { Camera, Source } from "./types"

export function getRasterTile(source: Source, camera: Camera) {
  if (typeof source === "string") {
    return getTilesFromTemplate(source, camera)
  }
}

export { Camera, Source }
