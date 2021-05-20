var defaultCenter = { lng: -75.17705316570994, lat: 39.97833441433514 };
var defaultZoom = 16.5;
var defaultBearing = 0;

function getMapConfig(useTextureMap) {
  return {
    style: {
      version: 8,
      name: "Blank",
      id: "blank",
      sprite: window.location.href + "js/polygons-sprite@2x",
      sources: {
        polygons: {
          type: "geojson",
          data: "js/polygon.geojson"
        }
      },
      layers: [
        {
          id: "background",
          type: "background",
          paint: {
            "background-color": "#fff"
          }
        },
        {
          id: "polygons-fill",
          type: "fill",
          source: "polygons",
          layout: {},
          paint: {
            "fill-color": [
              "step",
              ["get", "C_DIG1"],
              "#bcbd22",
              1,
              "#2ca02c",
              2,
              "#ff7f0e",
              3,
              "#d62728",
              4,
              "#9467bd",
              5,
              "transparent",
              6,
              "#1f77b4",
              7,
              "#e377c2",
              8,
              "#17becf",
              9,
              "#8c564b"
            ],
            "fill-opacity": 1
          }
        },
        useTextureMap
          ? {
              id: "polygons-texture",
              type: "fill",
              source: "polygons",
              layout: {},
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
                  "tmpoly-plus-200-black"
                ],
                "fill-opacity": 0.75
              }
            }
          : null
      ]
    },
    minZoom: defaultZoom,
    center: defaultCenter,
    zoom: defaultZoom,
    bearing: defaultBearing,
    pitchWithRotate: false,
    dragRotate: false,
    touchZoomRotate: false,
    maxBounds: [
      -75.17986178398132,
      39.976330828104786,
      -75.17422914505005,
      39.979849588073435
    ]
  };
}

var beforeMap = new mapboxgl.Map({
  container: "before",
  ...getMapConfig(true)
});

var afterMap = new mapboxgl.Map({
  container: "after",
  ...getMapConfig(true)
});

var map = new mapboxgl.Compare(beforeMap, afterMap, "#map");

beforeMap.addControl(
  new mapboxgl.NavigationControl({ showCompass: false }),
  "top-right"
);

beforeMap.scrollZoom.disable();

afterMap.addControl(
  new mapboxgl.NavigationControl({ showCompass: false }),
  "top-right"
);

afterMap.scrollZoom.disable();