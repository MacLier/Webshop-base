const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();


router.get('/', userController.getIndex);
router.get('/products', userController.getProducts);
router.get('/cart', userController.getCart);
router.get('/checkout', userController.getCheckout);

module.exports = router;