const express = require('express');
const sumController = require('../controllers/sumController.js');

const router = express.Router();

router.route('/').get(sumController.main);

router.route('/data').get(sumController.getSum);

module.exports = router;
