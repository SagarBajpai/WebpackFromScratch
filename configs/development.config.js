const path = require("path");

module.exports = () => ({
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    //https://webpack.js.org/configuration/dev-server/
    contentBase: "../dist",
    port: 3001,
    hot: true,
  },
});
