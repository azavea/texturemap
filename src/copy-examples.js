var fs = require("fs-extra");

try {
  fs.copy("website", "_site", function(err) {
    if (err) return console.error(err);
    console.log("Copy website to _site");
  });

  fs.copy("examples", "_site/examples", function(err) {
    if (err) return console.error(err);
    console.log("Success: examples copied to website directory");
  });
} catch (err) {
  console.error(err);
}
