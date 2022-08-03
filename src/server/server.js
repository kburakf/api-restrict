/* eslint-disable global-require */
/* eslint-disable class-methods-use-this */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');
const swagger = require('../config/swagger');

const { server: { port } } = require('../config/environments/default');

module.exports = class Server {
  async start() {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use('/documentation', swaggerUI.serve, swaggerUI.setup(swagger));

    require('./routes')(app);

    app.listen(port, () => {
      console.log(`Server started and listening on ${port}...`);
    });
  }
};
