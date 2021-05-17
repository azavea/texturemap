var defaultCenter = { lat: 39.98886, lng: -75.157787 };
var defaultZoom = 17.5;

var toggleTextureMap = false;

function toggleTM() {
  toggleTextureMap = !toggleTextureMap;
  if (toggleTextureMap) {
    document.getElementById("body").classList.add("tm-on");
    map.setLayoutProperty("polygons-texture", "visibility", "visible");
  } else {
    document.getElementById("body").classList.remove("tm-on");
    map.setLayoutProperty("polygons-texture", "visibility", "none");
  }
}

var map = new mapboxgl.Map({
  container: "map",
  style: {
    version: 8,
    name: "TextureMap",
    id: "texturemap",
    sprite: window.location.href + "sprites/polygons-sprite",
    sources: {
      polygons: {
        type: "geojson",
        data: "data/polygons-example.geojson"
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
            ["get", "type"],
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
            "#1f77b4",
            6,
            "#e377c2",
            7,
            "#17becf",
            8,
            "#8c564b"
          ],
          "fill-opacity": 1
        }
      },
      {
        id: "polygons-texture",
        type: "fill",
        source: "polygons",
        layout: {
          visibility: "none"
        },
        paint: {
          "fill-pattern": [
            "step",
            ["get", "type"],
            "tmpoly-plus-100-black",
            1,
            "tmpoly-circle-light-100-black",
            2,
            "tmpoly-grid-light-200-black",
            3,
            "tmpoly-line-vertical-down-light-100-black",
            4,
            "tmpoly-caret-200-black",
            5,
            "tmpoly-square-100-black",
            6,
            "tmpoly-slash-forward-100-black",
            7,
            "tmpoly-line-vertical-light-100-black",
            8,
            "tmpoly-plus-200-black"
          ],
          "fill-opacity": 0.75
        }
      }
    ]
  }
});

map.on("load", function() {
  map.setMaxBounds([
    -75.15305042266846,
    39.934683896308584,
    -75.14283657073975,
    39.941149715449896
  ]);
});
