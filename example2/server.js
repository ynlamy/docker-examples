'use strict';

const express = require('express');
const app = express();

const redis = require('ioredis');
const redisClient = new redis({host: 'redis', port: 6379});

const PORT = 80;

redisClient.set('count', '0');

app.get('/', (request, response) => {
  redisClient.get('count').then((result) => {
    result++;
    response.send(result + ' requests\n');
    redisClient.set('count', result);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
