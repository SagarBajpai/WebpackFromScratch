const path = require("path");

module.exports = () => ({
  devtool: "cheap-module-source-map",
  output: {
    filename: "[id].[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    //https://webpack.js.org/configuration/dev-server/
    contentBase: "../dist",
    port: 3001,
    hot: true,
  },
});
