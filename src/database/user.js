const UserModel = require('../models/user');

exports.getUser = async ({ userId }) => UserModel
  .findById({ _id: userId })
  .select('firstName lastName email')
  .lean();

exports.createUser = async ({ user }) => (await UserModel
  .create(user))
  .toObject();

exports.getUserByEMail = async ({ email }) => UserModel
  .findOne({ email })
  .select('email')
  .lean();

exports.userLogin = async ({ email }) => UserModel
  .findOneAndUpdate(
    { email },
    { $set: { lastLogin: new Date() } },
  )
  .lean();
