const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('', (req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'pageNotFound.html'))
})

module.exports = router;