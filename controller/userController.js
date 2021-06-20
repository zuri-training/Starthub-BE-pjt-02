const User = require('../models/User');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { SECRET } = process.env;

//@route POST api/auth/signup
//@desc Auth user(intern)
//@access Public
exports.signupUser = async(req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()});

    const user = new User(req.body);

    try {
        //save data to db
        await user.save();
        //send payload
        const payload = {
            intern: {
               id: user.studentId,
               FullName: user.firstName + ' ' + user.lastName
            }
        };

        res.status(200)
           .json({
               payload,
               message: 'Signup successfull'
           })

    } catch (error) {
        console.error(error.message);

        res.status(400)
           .json({statusCode: 400, error: error.message}); 
    }
};


//@route  POST api/auth/login
//@desc   Auth user(interns and get token )
//@access Public
exports.loginUser = async(req, res) => {
    //check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({errors: errors.array()})
    
    //body destructuring
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(!user) return res
                          .status(400)
                          .json({
                             statusCode: 400,
                             message: 'Invalid Email'
                        });
        
        //else ... check the password
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch)
            return res
                    .status(400)
                    .json({
                        statusCode: 400,
                        message: 'Invalid credentials'
                      });
        
         //else ...match exist
         //Send payload, and signed token
         const payload = {
             intern: {
                id: user.studentId,
             }
         };

         jwt.sign(
             payload,
             SECRET,
             {
                 expiresIn: 360000,
             },
             (error, token) => {
                 if(error) throw error
                 res.json({
                     statusCode: 200,
                     message: 'Logged in successfully',
                     intern: {
                         firstName: user.firstName,
                         lastName: user.lastName,
                         email: user.email
                     },
                     token
                 })
             }
         );


    } catch (error) {
        console.error(error.message);

        res.status(500)
           .send('Server error');
    }
    

}