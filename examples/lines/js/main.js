var defaultCenter = { lat: 39.98886, lng: -75.157787 };
var defaultZoom = 17.5;

var map = new mapboxgl.Map({
  container: "map",
  style: {
    version: 8,
    name: "TextureMap",
    id: "texturemap",
    sources: {
      lines: {
        type: "geojson",
        data: "data/lines-example.geojson"
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
        id: "line1-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 1, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "hsl(300, 0%, 100%)", "line-width": 7 }
      },
      {
        id: "line1-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 1, true, false],
        layout: { "line-miter-limit": 0 },
        paint: {
          "line-gap-width": 2,
          "line-color": "#9467bd",
          "line-width": 4
        }
      },
      {
        id: "line2-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 2, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-width": 10, "line-color": "#17becf" }
      },
      {
        id: "line2-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 2, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-width": 6, "line-color": "hsl(186, 80%, 90%)" }
      },
      {
        id: "line3-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 3, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "#ff7f0f", "line-width": 7 }
      },
      {
        id: "line3-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 3, true, false],
        layout: { "line-miter-limit": 0 },
        paint: {
          "line-dasharray": [2, 2],
          "line-color": "hsl(43, 0%, 100%)",
          "line-width": 3
        }
      },
      {
        id: "line4-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 4, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "#d62728", "line-width": 3 }
      },
      {
        id: "line4-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 4, true, false],
        layout: { "line-miter-limit": 0, "line-join": "bevel" },
        paint: {
          "line-dasharray": [0.5, 0.25],
          "line-color": "#d62728",
          "line-width": 9
        }
      },
      {
        id: "line5-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 5, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "hsl(318, 66%, 90%)", "line-width": 9 }
      },
      {
        id: "line5-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 5, true, false],
        layout: { "line-miter-limit": 0 },
        paint: {
          "line-dasharray": [1, 0.5],
          "line-color": "#e377c2",
          "line-gap-width": 3,
          "line-width": 3
        }
      },
      {
        id: "line6-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 6, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "hsl(311, 0%, 100%)", "line-width": 9 }
      },
      {
        id: "line6-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 6, true, false],
        layout: { "line-miter-limit": 0 },
        paint: {
          "line-dasharray": [1, 0.5],
          "line-color": "#bcbd22",
          "line-width": 3
        }
      },
      {
        id: "line6-c",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 6, true, false],
        layout: { "line-miter-limit": 0 },
        paint: {
          "line-color": "#bcbd22",
          "line-width": 3,
          "line-gap-width": 4
        }
      },
      {
        id: "line7-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 7, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "#8c564b", "line-width": 3 }
      },
      {
        id: "line7-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 7, true, false],
        layout: { "line-miter-limit": 0 },
        paint: {
          "line-color": "#8c564b",
          "line-dasharray": [0.15, 0.4],
          "line-width": 11
        }
      },
      {
        id: "line8-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 8, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "#2ca02c", "line-width": 5 }
      },
      {
        id: "line8-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 8, true, false],
        layout: { "line-miter-limit": 0, "line-cap": "round" },
        paint: {
          "line-color": "hsl(120, 57%, 40%)",
          "line-dasharray": [0, 1.2],
          "line-width": 9
        }
      },
      {
        id: "line9-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 9, true, false],
        layout: { "line-miter-limit": 0 },
        paint: { "line-color": "#1f77b4", "line-width": 9 }
      },
      {
        id: "line9-b",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 9, true, false],
        layout: { "line-miter-limit": 0, "line-join": "bevel" },
        paint: {
          "line-color": "hsl(205, 0%, 100%)",
          "line-dasharray": [0.2, 0.4],
          "line-width": 5
        }
      },
      {
        id: "line10-a",
        type: "line",
        source: "lines",
        filter: ["match", ["get", "type"], 10, true, false],
        paint: {
          "line-color": "#999",
          "line-width": 2
        }
      }
    ]
  }
});

map.on("load", function() {
  map.setMaxBounds([
    -75.15212774276732,
    39.93524330429293,
    -75.14405965805052,
    39.940508096580274
  ]);
});
