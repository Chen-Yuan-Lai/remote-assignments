const express = require('express');
const sumController = require('../controllers/controller.js');

const router = express.Router();

router.route('/').get(sumController.main);

router.route('/data').get(sumController.getSum);
router.route('/userName').get();
router.route('/trackName').get();

module.exports = router;
