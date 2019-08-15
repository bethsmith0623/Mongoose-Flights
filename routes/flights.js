const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');

// GET /flights/ => "see all the flights"
// Routers mat to controller action

router.get('/', flightCtlr.index);

module.exports = router;
