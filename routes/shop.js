const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();


router.get('/', shopController.getIndex);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCard);
router.post('/cart-delete-item', shopController.postCardDeleteProduct);
router.get('/orders', shopController.getOrders);
router.post('/create-order', shopController.postOrder);
// router.get('/checkout', shopController.getCheckout);
router.get('/products', shopController.getProducts);
router.get('/products/:id', shopController.getProduct);

module.exports = router;