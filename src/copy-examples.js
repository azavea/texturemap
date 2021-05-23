var fs = require("fs-extra");

fs.copy("examples", "website/examples", function(err) {
  if (err) return console.error(err);
  console.log("Success: examples copied to website directory");
});
