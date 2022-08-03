const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { tokenKey } = require('../config/environments/default');

module.exports = class AuthLogic {
  static encryptPassword({ password }) {
    // Salted hash method ignored for test case.
    return bcrypt.hash(password, 10);
  }

  static comparePassword({ password, userPassword }) {
    return bcrypt.compare(password, userPassword);
  }

  static generateToken({ user }) {
    return jwt.sign(
      { id: user._id.toString() },
      tokenKey,
      { expiresIn: '365d' },
    );
  }

  static verifyToken({ token }) {
    return jwt.verify(token, tokenKey);
  }
};
