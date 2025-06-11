const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  // By enabling source-map in production, you get full source maps
  // Which could potentially be a security concern (exposing your source code)
  // If concern about Security problems, switch to *cheap-module-source-map* instead
});
