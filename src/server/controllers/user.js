/* eslint-disable func-names */
const UserService = require('../../services/user');

exports.getUser = async function (req, res, next) {
  const { userId } = req.params;

  const response = await UserService.getUser({ userId })
    .catch((err) => {
      res.send({ code: err.code, message: err.message });
      next(err);
    });

  res.send(response);
};

exports.createUser = async function (req, res, next) {
  const user = req.body;

  const response = await UserService.createUser({ user })
    .catch((err) => {
      res.send({ code: err.code, message: err.message });
      next(err);
    });

  res.send(response);
};

exports.getChuckNorrisText = async function (_, res, next) {
  const response = await UserService.getChuckNorrisText()
    .catch((err) => {
      res.send({ code: err.code, message: err.message });
      next(err);
    });

  res.send(response);
};

exports.userLogin = async function (req, res, next) {
  const { email, password } = req.body;

  const response = await UserService.userLogin({ email, password })
    .catch((err) => {
      res.send({ code: err.code, message: err.message });
      next(err);
    });

  res.send(response);
};
