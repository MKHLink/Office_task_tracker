const router = require('express').Router();

const managerRoutes = require('./manager-routes.js');
const employeeRoutes = require('./employee-routes');

router.use('/manager',managerRoutes);
router.use('/employee',employeeRoutes);

module.exports = router;