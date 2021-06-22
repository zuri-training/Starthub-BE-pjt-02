const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const students = require('../db/data');
const asyncHandler = require('../middleware/asyncHandler');

/**
 * @ {desc}   message  User sign up
 * @ {route}  message  POST /api/v1/auth/sign-up
 * @ {access} message Public
 */
const signupUser = asyncHandler(async (req, res) => {
  //  check errors
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  try {
    // check if user exists
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).json({ message: 'User already exists' });

    const student = students.map((student) => student.StudentId); // get all the ids of students

    if (student.includes(req.body.studentId) === false)
      // validate if user is a zuri intern
      return res.status(400).json({ message: 'Not a stundent' });

    user = new User(req.body); // create new user

    const token = jwt.sign({ id: user._id }, process.env.SECRET); // assign token to user on signup

    await user.save();

    const data = {
      id: user.studentId,
      name: `${user.firstName} ${user.lastName}`,
      token: token,
    };

    res
      .status(200)
      .json({ success: true, message: 'Signup successfull', data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @ {desc}   message User sign in
 * @ {route}  message  POST /api/v1/auth/sign-in
 * @ {access} message Public
 */
const loginUser = asyncHandler(async (req, res) => {
  //check for errors
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;

  try {
    // Check if user exist
    const user = await User.findOne({ email });
    if (!user) res.status(400).json({ message: 'Incorrect email or password' });

    //Check if user password is correct
    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect)
      res.status(400).json({ message: 'Incorrect email or password' });

    const token = jwt.sign({ id: user._id }, process.env.SECRET, {
      expiresIn: 360000,
    });

    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token,
    };

    res
      .status(200)
      .json({ success: true, message: 'Logged in successfully', data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { signupUser, loginUser };
