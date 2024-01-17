const path = require("path");

module.exports = (props) => {
  return {
    mode: props.mode,
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
  };
};
