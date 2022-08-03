/* eslint-disable class-methods-use-this */
const redis = require('redis');
const bluebird = require('bluebird');
const { redis: { url, password } } = require('../../config/environments/default');

let client = redis.createClient({
  url,
  no_ready_check: true,
  auth_pass: password,
});

client = bluebird.promisifyAll(client);

const connected = false;

function start() {
  if (connected) {
    return client;
  }

  client.on('connect', () => {
    console.log('Redis connected...');
  });

  client.on('error', (err) => {
    console.log(err);
  });

  return client;
}

module.exports = {
  start,
  client,
};
