const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const assetsPath = commonConfig.output.path;
const publicPath = commonConfig.output.publicPath;
const entryPath = commonConfig.entry;

const loaders = commonConfig.module.loaders;

module.exports = {

  devtool: 'eval',

  entry: entryPath.concat('webpack-hot-middleware/client?reload=true'),

  output: {
    path: assetsPath,
    publicPath: publicPath,
    filename:'[name].js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: loaders
  }
}
