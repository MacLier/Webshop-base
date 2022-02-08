const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('', (req, res, next) => {
    res.render('pageNotFound', { pageTitle: 'Page Not Found!' })
})

module.exports = router;