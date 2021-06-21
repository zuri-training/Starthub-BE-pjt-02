const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
    trim: true,
    minlength: 7
  },
  studentId:{
    type: Number,
    required: true,
    unique: true
  },
  profilePicture: {
    data: Buffer,
    type: String,
    
  },
  bio: {
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  }
});

//Password hashing
userSchema.pre('save', async function (next){
  const user = this // this has access to data in req.body

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
})


module.exports = User = mongoose.model('User', userSchema);