const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { getThemeVariables } = require("antd/dist/theme");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
  },
  externals: {
    // electron: "require('electron')",
    // child_process: "require('child_process')",
    // fs: "require('fs')",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      src: path.resolve(__dirname, "src/"),
      screens: path.resolve(__dirname, "src/screens/"),
      components: path.resolve(__dirname, "src/components/"),
      assets: path.resolve(__dirname, "src/assets/"),
      utils: path.resolve(__dirname, "src/utils/"),
      styles: path.resolve(__dirname, "src/styles/"),
      services: path.resolve(__dirname, "src/services/"),
      navigations: path.resolve(__dirname, "src/navigations/"),
    },

    // modules: [path.join(__dirname, "./src")],
    // modules: [path.resolve(__dirname, "./src")],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: getThemeVariables({
                  dark: false, // Enable dark mode
                  compact: true, // Enable compact mode
                  "primary-color": "#FF7697",
                  "link-color": "#FF7697",
                }),
                javascriptEnabled: true,
              },
            },
          },
        ],
        // exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=10000&name=img/[name].[ext]",
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.svg$/,
        use: {
          loader: "@svgr/webpack",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "svgs",
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|node)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },

      {
        test: /\.mp3$/,
        loader: "file-loader",
        query: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },

      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  optimization: {
    moduleIds: "hashed",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    runtimeChunk: "single",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html",
      filename: "index.html",
      inject: "body",
      favicon: "./favicon.png",
    }),
  ],
  devServer: {
    stats: {
      children: false, // Hide children information
      maxModules: 0, // Set the maximum number of modules to be shown
    },
    historyApiFallback: true,
    port: 8080,
    hot: true,
    hotOnly: true,
  },

  node: {
    child_process: "empty",
    fs: "empty",
    crypto: "empty",
    net: "empty",
    tls: "empty",
  },
};
