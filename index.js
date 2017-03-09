const express = require('express');
const server = require('./server');

const PORT = process.env.PORT || 3000;

const app = server.Run(express());

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});