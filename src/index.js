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
      { name: "blue", color: "#1f77b4" },
      { name: "orange", color: "#ff7f0e" },
      { name: "green", color: "#2ca02c" },
      { name: "red", color: "#d62728" },
      { name: "purple", color: "#9467bd" },
      { name: "brown", color: "#8c564b" },
      { name: "pink", color: "#e377c2" },
      { name: "grey", color: "#333" },
      { name: "slime", color: "#bcbd22" },
      { name: "teal", color: "#17becf" },
    ],
  },
];

function generateSVGs({ name, styles }) {
  const input = `${inputDir}/${name}`;
  const output = `${outputDir}/${name}`;
  fs.mkdirSync(output, { recursive: true });
  const files = fs.readdirSync(input);

  styles.forEach(({ name: colorName, color: colorHex }) => {
    files.forEach((filename) => {
      const oldFile = `${input}/${filename}`;
      const newFile = `${output}/${filename.replace(
        ".svg",
        `-${colorName}.svg`
      )}`;

      fs.readFile(oldFile, "utf8", function (err, data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/%COLOR%/g, colorHex);

        fs.writeFile(newFile, result, "utf8", function (err) {
          if (err) return console.log(err);
        });
      });
    });
  });
}

try {
  types.forEach((type) => generateSVGs(type));
} catch (err) {
  console.error(err);
}
