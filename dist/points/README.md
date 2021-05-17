# TextureMap Points

TextureMap points use the Mapbox `icon-image` property on a `symbol` layer.

## Mapbox Studio

1. Open a project in Mapbox Studio
2. Open the "Images" tab from header
3. Switch to the "Custom" tab
4. Upload images from `dist/points`
5. Create or edit a symbol layer
6. Under the "Icon" tab, set the "Image" property to a image from TextureMap

## Mapbox GL (without Mapbox Studio) or MapLibre GL

If you are working directly with the Mapbox GL or MapLibre libraries, you will need the TextureMap images as a [sprite](https://docs.mapbox.com/help/glossary/sprite/). You can download these from `dist/sprites` or generate them yourself using [spritezero](https://github.com/mapbox/spritezero). See `examples/polygons` for an example that uses a sprite generated from this method.
