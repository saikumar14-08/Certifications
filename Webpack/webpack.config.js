const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  // entry: {
  //   about: "./src/about.js",
  //   contact: "./src/contact.js",
  // },
  entry: "./src/index.js",
  output: {
    // filename: "[name].bundle.js",
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  optimization: {
    // splitChunks: {
    //   chunks: "all",
    // },
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(jpeg|png|jpg)$/,
        use: [{ loader: "url-loader" }],
      },
    ],
  },
};
