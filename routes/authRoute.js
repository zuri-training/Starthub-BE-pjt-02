const router = require('express').Router();

// controller
const authController = require('../controllers/authController');
// validator
const { signupValidator, loginValidator } = require('../utils/validator');

router.post('/sign-up', signupValidator, authController.signupUser);
router.post('/sign-in', loginValidator, authController.loginUser);

module.exports = router;
