const express = require('express');
const router = express.Router();
const flightCtlr = require('../controllers/flights');
const destinationCtlr = require('../controllers/destinations');


// GET /flights/ => "see all the flights"
// Routers mat to controller action

router.get('/', flightCtlr.index);
router.get('/new', flightCtlr.new);
router.post('/', flightCtlr.create);
router.get('/:id', flightCtlr.show);
router.post('/:id/destinations', flightCtlr.addDestination);

module.exports = router;
