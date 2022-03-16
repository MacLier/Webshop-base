const express = require('express');

const shopController = require('../controllers/shop');
const isAuth = require('../middleware/is-auth');

const router = express.Router();


router.get('/', shopController.getIndex);
router.get('/cart', isAuth, shopController.getCart);
router.get('/orders', isAuth, shopController.getOrders);
router.get('/orders/:orderId', isAuth, shopController.getInvoice);
router.get('/products', shopController.getProducts);
router.get('/products/:id', shopController.getProduct);
router.post('/cart', isAuth, shopController.postCard);
router.post('/cart-delete-item', isAuth, shopController.postCardDeleteProduct);
router.post('/create-order', isAuth, shopController.postOrder);

module.exports = router;