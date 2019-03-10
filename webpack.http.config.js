const path = require("path")
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');

const {
  NODE_ENV = 'development',
} = process.env;

const httpServerConfig = {
  entry: "./src/index",
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: "ts-loader",
        exclude: /node_modules/
      }

    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    // this plugin is to spawn a separate process to run the server
    // currently it's using some legacy code which is not compatible with webpack 4. 
    // need to update this plugin later
    new WebpackShellPlugin({
      onBuildEnd: ['npm run run:httpserver']
    })
  ],
  externals: [ nodeExternals() ]
}

module.exports = httpServerConfig
