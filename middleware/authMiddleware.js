const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  // check if token exist in the header Auth
  if (!req.headers.authorization)
    res.status(401).json({ message: 'Unauthorized access: Token not found' });

  const token = req.headers.authorization.split(' ')[1];

  const decoded = jwt.verify(token, process.env.SECRET); // decode  token

  let user = await User.findById(decoded.id).select('-password');

  if (!user)
    res
      .status(401)
      .json({ message: 'Unauthorized access: User does not exist' });

  req.user = user; //assign user to request object

  next();
};

module.exports = protect;
