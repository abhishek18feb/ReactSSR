// import path from 'path';
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js")

config = {
  // Tell webpack the root file of our server application
  entry: "./src/client/client.js",

  // Tell webpack i.e where to put the output file which is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  }
};

module.exports = merge(baseConfig, config);