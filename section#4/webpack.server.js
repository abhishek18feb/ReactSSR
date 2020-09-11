// import path from 'path';
const path = require("path");
module.exports = {
  //Inform webpack i.e. we are building a bundle for nodejs, rather than for the browser
  target: "node",

  // Tell webpack the root file of our server application
  entry: "./src/index",

  // Tell webpack i.e where to put the output file which is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  // Tell webpack to run bable on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "es2015",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
