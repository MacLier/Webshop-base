const express = require('express');

const expValidator = require('express-validator');
const isAuth = require('../middleware/is-auth');
const adminController = require('../controllers/admin');


const router = express.Router();

router.get('/add-product', isAuth, adminController.getAddProduct);
router.get('/edit-product/:id', isAuth, adminController.getEditProduct);
router.get('/products', isAuth, adminController.getAdminProducts);

router.post('/add-product',
    [
        expValidator.body('title')
            .isString()
            .isLength({ min: 10 })
            .trim(),
        expValidator.body('price').isFloat(),
        expValidator.body('description')
            .isLength({ min: 10 })
            .trim(),
    ],
    isAuth, adminController.postAddProduct);
router.post('/edit-product',
    [
        expValidator.body('title')
            .isString()
            .isLength({ min: 10 })
            .trim(),
        expValidator.body('imageUrl').isURL(),
        expValidator.body('price').isFloat(),
        expValidator.body('description')
            .isLength({ min: 10 })
            .trim(),
    ],
    isAuth, adminController.postEditProduct);
router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
