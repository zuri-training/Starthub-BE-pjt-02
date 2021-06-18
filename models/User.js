const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  LastName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password:{
    type: String,
    require: true
  },
  studentId:{
    type: String,
    require: true
  },
  profilePicture: {
    data: Buffer,
    type: string,
    
  },
  bio: {
    type: string
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserSchema);