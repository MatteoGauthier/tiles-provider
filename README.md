# tiles-provider

Simple js library to provide raster tiles image from different predefined sources.
The advantage of this library is that you only needs coordinates and zoom level to get the image.
`tiles-provider` return only the url to get data by default.

## Features

- 🗺️ Support multiple layer styles (for the moment 4)
- ⚡ Support CDN with subdomains (used for balancing loads)
- 💰 Support sources that needs a key (like Mapbox)

## Sources

Multiple sources are available:

- Stamen Maps <http://maps.stamen.com/> (watercolor, toner, terrain)
- OpenStreetMap <http://openstreetmap.org/> (default)

## Usage

```ts
import { getRasterTile } from "tiles-provider"

const tile = getRasterTile("stamen-watercolor", { x: 0, y: 0, z: 0 })
// "http://tile.stamen.com/watercolor/0/0/0.jpg"
```

## Alternatives 

- https://github.com/naturalatlas/tilestrata
