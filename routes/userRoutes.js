const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

//router controller
const userController = require('../controllers/userController');


//signup user route
router.post('/signup', [
    check('firstName', 'Kindly input your first name').exists(),
    check('lastName', 'Kindly input your last name').exists(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Minimum length of 7 is required for a password').isLength({min: 7}),
    check('studentId', 'A studentId is required').exists()
],
userController.signupUser);



//login user route
router.post('/login', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'A valid password is required').exists()
],

userController.loginUser);



module.exports = router;