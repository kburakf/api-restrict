const ServiceCaller = require('../utils/service-caller');
const { chuckNorris: serviceUrl } = require('../constants/services');

const serviceCaller = new ServiceCaller();

exports.getChuckNorrisData = async function () {
  return serviceCaller.request({ serviceUrl, method: 'GET', path: '/random' });
};
