const path = require("path");

module.exports = {
  mode: "production",
  entry: "./modules/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./"),
  },
};
