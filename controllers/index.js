const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const employeeDashRoutes = require('./employee-dash_routes.js');

router.use('/api',apiRoutes);
router.use('/',homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/employee-dashboard',employeeDashRoutes);

router.use((req,res)=>{
    res.status(404).end();
});

module.exports = router;