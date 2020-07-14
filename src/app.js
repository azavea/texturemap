import textures from "./main.js";
import patterns from "./patterns.js";

var version = "1.0";

function getLinePattern(patternDefinition, color) {
  return textures
    .lines()
    .size(patternDefinition.size)
    .strokeWidth(patternDefinition.strokeWidth)
    .orientation(patternDefinition.orientation)
    .stroke(color)
    .shapeRendering("crispEdges");
}

function getCirclePattern(patternDefinition, color) {
  return textures
    .circles()
    .size(patternDefinition.size)
    .radius(patternDefinition.radius)
    .fill(color);
}

function getCrossPattern(patternDefinition, color) {
  return textures
    .paths()
    .d("crosses")
    .lighter(patternDefinition.lighter)
    .thinner(patternDefinition.thinner)
    .stroke(color);
}

function getWavesPattern(patternDefinition, color) {
  return textures
    .paths()
    .d("waves")
    .size(patternDefinition.size)
    .stroke(color);
}

function getCaretPattern(patternDefinition, color) {
  return textures
    .paths()
    .d("caps")
    .lighter(patternDefinition.lighter)
    .thicker(patternDefinition.thicker)
    .stroke(color);
}

function makePattern(index, color, background, patternDefinition) {
  const svg = d3
    .select(`#box-${color}-${index}`)
    .select(`.pattern`)
    .append("svg")
    .attr("class", "pattern");

  let texture;

  if (patternDefinition.type === "line") {
    texture = getLinePattern(patternDefinition, color);
  } else if (patternDefinition.type === "circle") {
    texture = getCirclePattern(patternDefinition, color);
  } else if (patternDefinition.type === "cross") {
    texture = getCrossPattern(patternDefinition, color);
  } else if (patternDefinition.type === "waves") {
    texture = getWavesPattern(patternDefinition, color);
  } else if (patternDefinition.type === "caret") {
    texture = getCaretPattern(patternDefinition, color);
  }

  svg.call(texture);

  svg
    .append("rect")
    .attr("width", 100)
    .attr("height", 100)
    .style("fill", texture.url());
}

const downloadFile = (data, fileName, type = "image/svg+xml") => {
  const a = document.createElement("a");
  a.style.display = "none";
  document.body.appendChild(a);

  a.href = window.URL.createObjectURL(new Blob([data], { type }));

  a.setAttribute("download", fileName);

  a.click();

  window.URL.revokeObjectURL(a.href);
  document.body.removeChild(a);
};

document.getElementById("example").innerHTML = patterns
  .map(
    (item, index) =>
      `<span class="type"><div data-id="${index}" data-type="${item.type}" data-color="black" id="box-black-${index}" class="box black"><div class="pattern"></div><button class="download">Download</button></div>
        <div data-id="${index}" data-type="${item.type}" data-color="white" id="box-white-${index}" class="box white"><div class="pattern"></div><button class="download">Download</button></div></span>`
  )
  .join("");

var downloadButtons = document.getElementsByClassName("download");

document.addEventListener(
  "click",
  function(event) {
    if (event.target.matches(".download")) {
      var svg = event.target.parentNode;
      var patternNumber = svg.getAttribute("data-id");
      var patternColor = svg.getAttribute("data-color");
      var patternType = svg.getAttribute("data-type");
      downloadFile(
        svg
          .querySelectorAll("defs")[0]
          .innerHTML.replace(' patternUnits="userSpaceOnUse"', "")
          .replace("<pattern", "<svg")
          .replace("</pattern>", "</svg>"),
        `texturemap${version}-${patternType}-${patternColor}-${patternNumber}.svg`
      );
    }
  },
  false
);

patterns.forEach((patternDefinition, index) => {
  if (patternDefinition.type === "line") {
    makePattern(index, "black", "white", patternDefinition);
    makePattern(index, "white", "black", patternDefinition);
  } else if (patternDefinition.type === "circle") {
    makePattern(index, "black", "white", patternDefinition);
    makePattern(index, "white", "black", patternDefinition);
  } else if (patternDefinition.type === "cross") {
    makePattern(index, "black", "white", patternDefinition);
    makePattern(index, "white", "black", patternDefinition);
  } else if (patternDefinition.type === "waves") {
    makePattern(index, "black", "white", patternDefinition);
    makePattern(index, "white", "black", patternDefinition);
  } else if (patternDefinition.type === "caret") {
    makePattern(index, "black", "white", patternDefinition);
    makePattern(index, "white", "black", patternDefinition);
  }
});
