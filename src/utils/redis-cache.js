const md5 = require('md5');
const crypto = require('crypto');
const { client } = require('../bootstrap/modules/redis');

const { redis: { ttl } } = require('../config/environments/default');

module.exports = class RedisCache {
  constructor() {
    this.md5 = md5;
    this.crypto = crypto;
    this.ttl = ttl;
    this.connected = false;
    this.client = client;
  }

  async generateMD5({ cacheKey }) {
    return this.crypto.createHash('md5').update(cacheKey).digest('hex');
  }

  async generateKey({ cacheKey }) {
    return this.generateMD5({ cacheKey });
  }

  async getCachedResponse({ cacheKey }) {
    const key = await this.generateKey({ cacheKey });
    const response = await this.client.getAsync(key);

    if (!response) {
      return null;
    }

    return JSON.parse(response);
  }

  async setResponseCache({ cacheKey, response }) {
    const key = await this.generateKey({ cacheKey });
    const stringResponse = JSON.stringify(response);
    await this.client.setAsync(key, stringResponse);
    this.client.expire(key, this.ttl);
  }
};
