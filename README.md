# TextureMap

Textures, patterns, and shapes that make web maps work for people with color vision deficiency. Built for Mapbox GL and MapLibre GL.

![Screenshot of several textures from Texturemap](website/img/texturemap-meta.png)

## How to use

### Mapbox GL JS

#### Mapbox Studio

1. Open a project in Mapbox Studio
2. Open "Images" tab from header
3. Upload images from `/patterns`
4. These images should now be available as patterns for `fill` features

#### Mapbox GL, Without Mapbox Studio

If you are not using Mapbox Studio for your Mapbox GL JS project, you will need to convert these SVGs into a sprite using [spritezero](https://github.com/mapbox/spritezero) or a similar tool.
