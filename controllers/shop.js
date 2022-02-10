const Product = require("../models/product");


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', { prods: products, pageTitle: 'Products', path: '/products' })
    });
}

exports.getIndex = (req, res, next) => {
    res.render('shop/index', { pageTitle: 'Shop', path: '/' })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' })
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Cart', path: '/cart' })
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { pageTitle: 'Orders', path: '/orders' })
}