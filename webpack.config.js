const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    popup: "./src/popup/popup.ts",
    background: "./src/background.ts",
    content: "./src/content.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "." },
        { from: "src/popup/popup.html", to: "popup.html" },
        { from: "src/popup/style.css", to: "style.css" },
        { from: "dictionary", to: "dictionary" },
        { from: "_locales", to: "_locales" }
      ]
    })
  ]
};
