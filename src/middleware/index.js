const jwt = require('jsonwebtoken');
const moment = require('moment');
require('moment-precise-range-plugin');
const RedisCache = require('../utils/redis-cache');

const { tokenKey, redis: { requestLimit, ttl } } = require('../config/environments/default');
const { DATE_FORMAT } = require('../constants');

const {
  ExpiredTokenError,
} = require('../errors/types');

const redisCache = new RedisCache();

exports.verifyToken = (req, _, next) => {
  const { token } = req.headers;
  let user;

  try {
    user = jwt.verify(token, tokenKey);
  }
  catch (err) {
    throw new ExpiredTokenError();
  }

  req.params.userId = user.id;
  next();
};

exports.checkRequestLimit = async (req, res, next) => {
  const { userId } = req.params;
  const userIP = req.socket.remoteAddress;

  const cacheKey = [userId, userIP].join(':');

  let response = await redisCache.getCachedResponse({ cacheKey });

  const dateFormat = DATE_FORMAT;
  const startedAt = moment().format(dateFormat); // current datetime
  const endDate = moment().add(ttl, 'seconds').format(dateFormat); // add seconds as ttl time

  if (!response) {
    response = {
      count: 1,
      startedAt,
      endDate,
    };

    await redisCache.setResponseCache({ cacheKey, response });

    return next();
  }

  if (response.count >= requestLimit) {
    const timeDiff = moment.preciseDiff(response.endDate, moment().format(dateFormat)); // end datetime - current datetime
    return res.send(`You have reached the request limit (${requestLimit}). You can send a new request in ${timeDiff}`);
  }

  response.count += 1;

  await redisCache.setResponseCache({ cacheKey, response });

  return next();
};
