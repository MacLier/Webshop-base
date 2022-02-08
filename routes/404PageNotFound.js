const express = require('express');

const pageNotFoundController = require('../controllers/pageNotFound');

const router = express.Router();

router.get('', pageNotFoundController.getPageNotFound)

module.exports = router;