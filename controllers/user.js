const Product = require("../models/product");


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('user/product-list', { prods: products, pageTitle: 'Products', path: '/products' })
    });
}

exports.getIndex = (req, res, next) => {
    res.render('user/index', { pageTitle: 'Shop', path: '/' })
}

exports.getCheckout = (req, res, next) => {
    res.render('user/checkout', { pageTitle: 'Checkout', path: '/checkout' })
}
exports.getCart = (req, res, next) => {
    res.render('user/cart', { pageTitle: 'Cart', path: '/cart' })
}