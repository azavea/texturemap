# TextureMap Lines Demo

## Start the demo

This demo can be launche with a simple local server. You might want to [learn how to set up a local testing server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server), or try running the following code from your command line:

- Run `$ python3 -m http.server 8000`
- Go to [http://localhost:8000](http://localhost:8000)

## Implementing

TextureMap lines are trickier to implement than the other geometry types. To achieve unique line styles, TextureMap builds compound lines using several overlapping lines. For example, the "railroad style" lines -`|-|-|-` are constructed from 1.) a thin line as the base; 2.) a thick line with a dash array for the perpendicular lines.

Here is what the Mapbox style definition looks like for the example described above:

```js
// Thin base line
{
  id: "line7-a",
  type: "line",
  source: "lines",
  filter: ["match", ["get", "type"], 7, true, false],
  layout: { "line-miter-limit": 0 },
  paint: { "line-color": "#8c564b", "line-width": 3 }
}
// Thick line with dash array for the perpendicular lines
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
}
```

See [`js/main.js`](js/main.js) for a full list of the line styles used in TextureMap.
