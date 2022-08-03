const SERVICE = require('../../constants/services');

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  mongodb: {
    url: process.env.MONGO_URL || 'mongodb://mongodb:27017/api-restrict',
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost:3000',
  },
  redis: {
    url: process.env.REDIS_URL || 'redis://redis:6379',
    requestLimit: process.env.REQUEST_LIMIT || 5,
    ttl: process.env.TTL || '300', // seconds
    password: process.env.REDIS_AUTH_PASSWORD, // redis auth password for prod
  },
  serviceUrls: {
    [SERVICE.chuckNorris]: process.env.SERVICE_CHUCK_NORRIS_URL || 'https://api.chucknorris.io/jokes',
  },
  tokenKey: process.env.TOKEN_ACCESS || 'token',
};
