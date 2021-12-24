/* eslint-disable global-require */
module.exports = (app) => {
  app.use('/users', require('./user'));
};
