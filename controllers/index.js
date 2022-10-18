const router = require("express").Router();
// this sets the connection for our server

const homeRoutes = require("./homeRoutes");
// connect the route for the homepage

const dashboardRoutes = require("./dashboardRoutes");
// connect the route for the dash 
const apiRoutes = require('./api');
// requires our api folder in the controller folder


// this issues our dependencies are used properly 
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;






