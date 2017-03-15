const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '..', "dist"),
    publicPath: '/dist/'
  },

  resolve: {
    modules: ['node_modules', path.join(__dirname, '..', 'src')]
  }
  // plugins: [HtmlWebpackPluginConfig]
};