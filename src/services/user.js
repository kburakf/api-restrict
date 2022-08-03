const UserDatabase = require('../database/user');
const ChuckNorrisServiceCaller = require('../service-caller/chuck-norris');
const AuthLogic = require('../logic/auth');

const {
  UserNotFoundError,
  EmailExistsError,
  WrongPasswordError,
  ChuckNorrisDataNotFound,
} = require('../errors/types');

exports.getUser = async ({ userId }) => {
  const user = await UserDatabase.getUser({ userId });

  if (!user) {
    throw new UserNotFoundError();
  }

  return user;
};

exports.createUser = async ({ user }) => {
  const userInfo = await UserDatabase.getUserByEMail({ email: user.email });

  if (userInfo) {
    throw new EmailExistsError();
  }

  const encryptedPassword = await AuthLogic.encryptPassword({ password: user.password });

  const createUser = { ...user, password: encryptedPassword };

  await UserDatabase.createUser({ user: createUser });

  return { success: 200, message: 'success' };
};

exports.getChuckNorrisText = async () => {
  const { data: { value } } = await ChuckNorrisServiceCaller.getChuckNorrisData();

  if (!value) {
    throw new ChuckNorrisDataNotFound();
  }

  return value;
};

exports.userLogin = async ({ email, password }) => {
  const user = await UserDatabase.userLogin({ email });

  if (!user) {
    throw new UserNotFoundError();
  }

  const result = await AuthLogic.comparePassword({ password, userPassword: user.password });

  if (!result) {
    throw new WrongPasswordError();
  }

  const token = AuthLogic.generateToken({ user });

  return { token, message: 'success' };
};
