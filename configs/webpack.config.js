const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

module.exports = (webpackEnv) => {
  const mode = webpackEnv ? webpackEnv.mode : "production";
  const modeConfig = require(`./${mode}.config.js`);
  return merge(
    {
      mode,
      entry: "./src/index.js",
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
      },
      module: {
        rules: [
          {
            test: /\.(png|jpg|jpeg|svg|gif)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 10000,
                name: "[name].[ext]",
                outputPath: "images",
              },
            },
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: {
                        esmodules: true,
                      },
                      useBuiltIns: "usage",
                    },
                  ],
                ],
                plugins: [],
              },
            },
          },
        ],
      },
      plugins: [
        new htmlWebpackPlugin({
          title: "Social Media Website",
          meta: {
            course: "Webpack From Scratch from sagar",
          },
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
          VERSION: JSON.stringify("1.0.0"),
          "process.env.NODE_ENV": JSON.stringify(mode),
        }),
      ],
    },
    modeConfig(mode)
  );
};
