const { env, server: { host } } = require('./environments/default');
const UserSchema = require('../schemas/user');

const protocol = env === 'dev' ? 'http' : 'https';

module.exports = {
  swagger: '2.0',
  info: {
    title: 'Express API',
    description: 'Building a blazing fast REST API with Node.js, MongoDB, Redis, Express and Swagger',
    version: '1.0.0',
    contact: {
      name: 'Kürşat Burak Farız',
      email: 'kburakfariz@gmail.com',
    },
  },
  exposeRoute: true,
  host: `${host}`,
  schemes: [protocol],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths: {
    ...UserSchema,
  },
};
