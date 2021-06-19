const bcrypt = require("bcryptjs");
const saltRounds = 10;

exports.hashPassword = (password) => {
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) {
      return res.status(500).json({ message: err });
    }
    // returns salt
    bcrypt.hash(password, salt, function (err, hashedPassword) {
      // returns hash
      if (err) {
        return res.status(500).json({ message: err });
      } else {
        return hashedPassword;
      }
    });
  });
};
