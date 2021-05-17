# Polygons

TextureMap polygons use the Mapbox `fill-pattern` property to add a pattern layer to the map. If your polygon style includes color and pattern, each of those properties will be handled by a separate layer. In other words, you will have one layer for `fill-color` beneath a second layer for `fill-pattern`. If you want to allow your user to toggle the pattern on and off, you can set the `visibility` to `none` for the pattern layer.

## Mapbox Studio

1. Open a project in Mapbox Studio
2. Open the "Images" tab from header
3. Switch to the "Custom" tab
4. Upload images from `dist/polygons`
5. Create or edit a fill (polygons) or symbol (points) layer
6. Set the "Pattern" property to an image from TextureMap

## Mapbox GL (without Mapbox Studio) or MapLibre GL

If you are working directly with the Mapbox GL or MapLibre libraries, you will need the TextureMap images as a [sprite](https://docs.mapbox.com/help/glossary/sprite/). You can download these from `dist/sprites` or generate them yourself using [spritezero](https://github.com/mapbox/spritezero). See `examples/polygons` for an example that uses a sprite generated from this method.
