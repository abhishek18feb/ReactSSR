// import path from 'path';
const path = require("path");
module.exports = {
  // Tell webpack the root file of our server application
  entry: "./src/client/client.js",

  // Tell webpack i.e where to put the output file which is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
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
