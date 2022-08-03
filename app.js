require('dotenv').config();
const Server = require('./src/server/server');
const MongooseConnection = require('./src/bootstrap/modules/mongoose');
const RedisConnection = require('./src/bootstrap/modules/redis');

async function app() {
  const server = new Server();
  const mongooseConnection = new MongooseConnection();

  await mongooseConnection.start();
  RedisConnection.start();
  server.start();
}

app().catch(console.log);
