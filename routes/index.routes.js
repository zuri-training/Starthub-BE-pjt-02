const router = require('express').Router();

router.use('/auth', require('./authRoute'));
// router.use('/projects', require('./projectRoutes')); // add async handler then un comment this line.

module.exports = router;
