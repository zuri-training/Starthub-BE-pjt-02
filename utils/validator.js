const { check } = require('express-validator');

exports.signupValidator = [
  check('firstName', 'Kindly input your first name').exists(),
  check('lastName', 'Kindly input your last name').exists(),
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'Minimum length of 7 is required for a password').isLength({
    min: 7,
  }),
  check('studentId', 'A studentId is required').exists(),
];

exports.loginValidator = [
  check('email', 'Please enter a valid email').isEmail(),
  check('password', 'A valid password is required').exists(),
];
