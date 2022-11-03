const router = require('express').Router();

const managerRoutes = require('./manager-routes.js');

router.use('/manager',managerRoutes);

module.exports = router;