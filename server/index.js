const webpackDev = require('./config/webpackDev.js');
const express = require('express');
const path = require('path');

module.exports = {
  Run: (app) => {
    webpackDev(app);

    app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'index.html'));
    });

    return app;
  }
}
