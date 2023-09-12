const express = require('express');
const controller = require('../controllers/controller.js');

const router = express.Router();

router.route('/').get(controller.main);

router.route('/data').get(controller.getSum);
router.route('/myName').get(controller.getCookie);
router.route('/trackName').get(controller.setCookie);

module.exports = router;
