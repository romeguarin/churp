const webpack = require('webpack')
const config = require('../../webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

module.exports = (app) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  const compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));

  return app;
};