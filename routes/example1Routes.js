const express = require('express');
const example1Controller = require('../controllers/example1Controller');
const router = express.Router();
const middleware = require('../middleware');

// Apply middleware to all routes in this router
router.use(middleware);

// Define the route and map it to the controller
router.get('/example1', example1Controller.getExample1);

module.exports = router;