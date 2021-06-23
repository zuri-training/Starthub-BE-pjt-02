const router = require('express').Router();

const userController = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.get('/profile', protect, userController.getUserProfile);
router.get('/projects', protect, userController.getUserProjects);

module.exports = router;
