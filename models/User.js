const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    username: {
      type: String,
      required: true,
      minLength: 6,
      maxLength: 30
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    phoneNumber:{
        type: Number,
        required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6
    },
  });
  
module.exports = mongoose.model('User', UserSchema);
