const path = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '..', 'src')
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, '..', "dist"),
    publicPath: '/dist/'
  },

  resolve: {
    modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
    extensions: ['.js', '.jsx']
  }
  // plugins: [HtmlWebpackPluginConfig]
};