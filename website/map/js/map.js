var defaultCenter = { lng: -75.17758, lat: 39.97833 };
var defaultZoom = 17.5;
var defaultBearing = 0;

function getMapConfig({ simulate, texture }) {
  return {
    style: {
      version: 8,
      name: "Blank",
      id: "blank",
      sprite: window.location.href + "/js/polygons-sprite",
      sources: {
        polygons: {
          type: "geojson",
          data: "/map/js/polygon.geojson",
        },
      },
      layers: [
        {
          id: "background",
          type: "background",
          paint: {
            "background-color": "#fff",
          },
        },
        simulate
          ? {
              id: "polygons-fill",
              type: "fill",
              source: "polygons",
              layout: {},
              paint: {
                "fill-color": [
                  "step",
                  ["get", "C_DIG1"],
                  "#ABABAB",
                  1,
                  "#707070",
                  2,
                  "#989898",
                  3,
                  "#5B5B5B",
                  4,
                  "#7E7E7E",
                  5,
                  "transparent",
                  6,
                  "#646464",
                  7,
                  "#A0A0A0",
                  8,
                  "#8E8E8E",
                  9,
                  "#656565",
                ],
                "fill-opacity": 1,
              },
            }
          : {
              id: "polygons-fill",
              type: "fill",
              source: "polygons",
              layout: {},
              paint: {
                "fill-color": [
                  "step",
                  ["get", "C_DIG1"],
                  "#1b9e77",
                  1,
                  "#d95f02",
                  2,
                  "#7570b3",
                  3,
                  "#e7298a",
                  4,
                  "#66a61e",
                  5,
                  "transparent",
                  6,
                  "#e6ab02",
                  7,
                  "#a6761d",
                  8,
                  "#666666",
                  9,
                  "#17becf",
                ],
                "fill-opacity": 1,
              },
            },
        texture
          ? {
              id: "polygons-texture",
              type: "fill",
              source: "polygons",
              layout: {},
              filter: ["all", ["match", ["get", "C_DIG1"], [5], false, true]],
              paint: {
                "fill-pattern": [
                  "step",
                  ["get", "C_DIG1"],
                  "tmpoly-plus-100-black",
                  1,
                  "tmpoly-circle-light-100-black",
                  2,
                  "tmpoly-grid-light-200-black",
                  3,
                  "tmpoly-line-vertical-down-light-100-black",
                  4,
                  "tmpoly-caret-200-black",
                  6,
                  "tmpoly-square-100-black",
                  7,
                  "tmpoly-slash-forward-100-black",
                  8,
                  "tmpoly-line-vertical-light-100-black",
                  9,
                  "tmpoly-plus-200-black",
                ],
                "fill-opacity": 1,
              },
            }
          : {
              id: "polygons-texture",
              type: "fill",
              source: "polygons",
              layout: {},
              paint: {
                "fill-color": "transparent",
              },
            },
      ],
    },
    minZoom: defaultZoom,
    center: defaultCenter,
    zoom: defaultZoom,
    bearing: defaultBearing,
    pitchWithRotate: false,
    dragRotate: false,
    touchZoomRotate: false,
    maxBounds: [
      -75.17986178398132, 39.976330828104786, -75.17422914505005,
      39.979849588073435,
    ],
  };
}

var mapTexturemap = new maplibregl.Map({
  container: "map-texturemap",
  ...getMapConfig({ simulate: false, texture: true }),
});

mapTexturemap.addControl(
  new maplibregl.NavigationControl({ showCompass: false }),
  "top-right"
);

mapTexturemap.scrollZoom.disable();
