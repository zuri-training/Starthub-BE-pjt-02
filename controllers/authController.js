const User = require("../models/User");
const { hashPassword } = require("../services/bcryptServices");

exports.signUp = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  try {
    if (user) {
      res.status(400).json({
        message: "user with that email already exists, please log in!",
      });
    }
    const hashedPassword = hashPassword(req.body.password);
    const newUser = await User.create({
      firstName: req.body.firstName,
      LastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword,
      studentId: req.body.studentId,
    });
    newUser.save().then(() => {
      res.status(201).json({
        message: "User created successfully!",
      });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.signIn = (req, res) => {
  res.send("sign in");
};
