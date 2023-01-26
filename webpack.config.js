const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
    new CopyPlugin({
      patterns: [
        "public/index.html",
        { from: "public/assets/", to: "assets/" },
      ],
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },

  module: {
    rules: [
      {
        test: /.(sa|sc|c)ss$/,
        // test: /\.scss$/,

        use: [
          // {
          //   loader: "style-loader",
          // },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, "dist"),
            },
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        enforce: "pre",
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },

  devServer: {
    open: true,
    host: "localhost",
    static: path.join(__dirname, "dist"),
  },
};
