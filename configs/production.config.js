const path = require("path");

module.exports = () => ({
  output: {
    //devtool: "inline-source-map",
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
});
