const express = require('express');

const errorController = require('../controllers/error');

const router = express.Router();

router.get('/500', errorController.getErrorPage);
router.get('', errorController.getPageNotFound);

module.exports = router;