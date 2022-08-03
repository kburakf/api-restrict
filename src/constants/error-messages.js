const { BadRequestGenericError } = require('../errors/generics');
const ERROR_LEVELS = require('../errors/levels');

module.exports = {
  UNKNOWN: {
    error: 'UnknownError',
    message: 'unknown error',
    code: -1,
  },
  VALIDATION: {
    error: 'ValidationError',
    code: -2,
  },
  MICROSERVICE: {
    error: 'MicroserviceError',
    message: 'microservice error',
    code: -3,
  },
  USER_NOT_FOUND: {
    parent: BadRequestGenericError,
    error: 'UserNotFoundError',
    level: ERROR_LEVELS.WARN,
    message: 'The account registered with this e-mail could not be found.',
    code: 100,
  },
  EMAIL_EXISTS: {
    parent: BadRequestGenericError,
    error: 'EmailExistsError',
    level: ERROR_LEVELS.WARN,
    message: 'There is an account for this e-mail.',
    code: 101,
  },
  WRONG_PASSWORD: {
    parent: BadRequestGenericError,
    error: 'WrongPasswordError',
    level: ERROR_LEVELS.WARN,
    message: 'Wrong password!',
    code: 102,
  },
  EXPIRED_TOKEN: {
    parent: BadRequestGenericError,
    error: 'ExpiredTokenError',
    level: ERROR_LEVELS.WARN,
    message: 'Token expired!',
    code: 103,
  },
  CHUCK_NORRIS_DATA_NOT_FOUND: {
    parent: BadRequestGenericError,
    error: 'ChuckNorrisDataNotFound',
    level: ERROR_LEVELS.ERROR,
    message: 'Chuck norris data not found.',
    code: 104,
  },
};
