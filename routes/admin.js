const express = require('express');
const path = require('path');
const adminController = require('../controllers/admin')


const router = express.Router();

router.get('/add-product', adminController.getAddProductPage);
router.post('/add-product', adminController.postAddProduct);
router.get('/products', adminController.getAdminProducts);

module.exports = router;
