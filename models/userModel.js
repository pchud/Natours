const mongoose = require('mongoose');
const validator = require('validator');
const { default: isEmail } = require('validator/lib/isemail');

// name, email, photo, password, passwordConfirm
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please tell us your name!'],
      //   unique: true,
      //   trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
      //   trim: true,
    },
    photo: String,
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      minlength: 8,
    },
  }
  //   {
  //     toJSON: { virtuals: true },
  //     toObject: { virtuals: true },
  //   }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
