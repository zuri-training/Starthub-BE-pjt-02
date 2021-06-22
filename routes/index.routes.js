const router = require('express').Router();

router.use('/auth', require('./authRoute'));
router.use('/projects', require('./projectRoutes'));

module.exports = router;
