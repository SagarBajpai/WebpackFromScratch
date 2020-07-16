const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //https://webpack.js.org/plugins/mini-css-extract-plugin/

module.exports = () => ({
  output: {
    //devtool: "inline-source-map",
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
  ], //https://webpack.js.org/plugins/mini-css-extract-plugin/#string
});
