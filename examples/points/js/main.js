var defaultCenter = { lat: 39.98886, lng: -75.157787 };
var defaultZoom = 17.5;

var map = new mapboxgl.Map({
  container: "map",
  style: {
    version: 8,
    name: "TextureMap",
    id: "texturemap",
    sprite: window.location.href + "sprites/points-sprite",
    sources: {
      points: {
        type: "geojson",
        data: "data/points-example.geojson"
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
        id: "points-texture",
        type: "symbol",
        source: "points",
        layout: {
          "icon-image": [
            "step",
            ["get", "type"],
            "tmpoint-hexagon-blue",
            1,
            "tmpoint-circle-brown",
            2,
            "tmpoint-parallelogram-green",
            3,
            "tmpoint-triangle-down-grey",
            4,
            "tmpoint-rhombus-orange",
            5,
            "tmpoint-square-purple",
            6,
            "tmpoint-star-teal",
            7,
            "tmpoint-trapezoid-red",
            8,
            "tmpoint-triangle-up-slime",
            9,
            "tmpoint-pentagon-pink"
          ],
          "icon-allow-overlap": true,
          "icon-size": 1
        }
      }
    ]
  }
});

map.on("load", function() {
  map.setMaxBounds([
    -75.15217065811157,
    39.93619757794848,
    -75.14397382736206,
    39.94223551829257
  ]);
});
