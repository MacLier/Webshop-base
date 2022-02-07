const express = require('express');
const path = require('path');

const router = express.Router();

router.get('', (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '..', 'views', 'pageNotFound.html'))
})

module.exports = router;