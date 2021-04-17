var fs = require("fs");

const templateString = "%COLOR%";
const inputDir = "src";
const outputDir = "dist";
const types = [
  {
    name: "polygons",
    styles: [
      { name: "black", color: "#000" },
      { name: "white", color: "#fff" },
    ],
  },
  {
    name: "points",
    styles: [
      {
        name: "blue",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#1f77b4",
      },
      {
        name: "orange",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#ff7f0e",
      },
      {
        name: "green",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#2ca02c",
      },
      {
        name: "red",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#d62728",
      },
      {
        name: "purple",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#9467bd",
      },
      {
        name: "brown",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#8c564b",
      },
      {
        name: "pink",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#e377c2",
      },
      {
        name: "grey",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#333",
      },
      {
        name: "slime",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#bcbd22",
      },
      {
        name: "teal",
        strokeColor: "#fff",
        strokeWidth: "1.5",
        fillColor: "#17becf",
      },
    ],
  },
];

function generateSVGs({ name, styles }) {
  const input = `${inputDir}/${name}`;
  const output = `${outputDir}/${name}`;
  fs.mkdirSync(output, { recursive: true });
  const files = fs.readdirSync(input);

  styles.forEach(
    ({
      name,
      fillColor = "#000",
      strokeColor = "#fff",
      strokeWidth = "1.5",
    }) => {
      files.forEach((filename) => {
        const oldFile = `${input}/${filename}`;
        const newFile = `${output}/${filename.replace(".svg", `-${name}.svg`)}`;

        fs.readFile(oldFile, "utf8", function (err, data) {
          if (err) {
            return console.log(err);
          }
          data = data.replace(/%FILLCOLOR%/g, fillColor);
          data = data.replace(/%STROKECOLOR%/g, strokeColor);
          data = data.replace(/%STROKEWIDTH%/g, strokeWidth);

          fs.writeFile(newFile, data, "utf8", function (err) {
            if (err) return console.log(err);
          });
        });
      });
    }
  );
}

try {
  types.forEach((type) => generateSVGs(type));
} catch (err) {
  console.error(err);
}
