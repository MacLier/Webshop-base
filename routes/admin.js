const express = require('express');
const path = require('path');
const adminController = require('../controllers/admin')


const router = express.Router();

router.get('/add-product', adminController.getAddProduct);
// router.get('/edit-product/:id', adminController.getEditProduct);
// router.get('/products', adminController.getAdminProducts);

router.post('/add-product', adminController.postAddProduct);
// router.post('/edit-product', adminController.postEditProduct);
// router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;
