const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //https://webpack.js.org/plugins/mini-css-extract-plugin/
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //https://webpack.js.org/plugins/mini-css-extract-plugin/
const terserPlugin = require("terser-webpack-plugin"); //https://webpack.js.org/plugins/terser-webpack-plugin/
module.exports = () => ({
  output: {
    //devtool: "inline-source-map",
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  optimization: {
    minimizer: [new terserPlugin(), new OptimizeCssAssetsPlugin()],
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
