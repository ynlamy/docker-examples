'use strict';

const express = require('express');
const app = express();

const PORT = 80;

const os = require("os");
const hostname = os.hostname();

app.get('/', (request, response) => {
  response.send('Running on the container ' + String(hostname) + '\n');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
