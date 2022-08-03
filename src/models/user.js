/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    index: true,
    lowercase: true,
    unique: true,
    validate: {
      validator(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: 'Please enter a valid email',
    },
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('User', UserSchema);
