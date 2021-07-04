const router = require('express').Router();

router.use('/auth', require('./authRoute'));
router.use('/users', require('./userRoute'));
router.use('/projects', require('./projectRoutes'));

module.exports = router;
