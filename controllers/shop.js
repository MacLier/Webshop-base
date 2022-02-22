const Product = require("../models/product");
const Cart = require('../models/cart');


exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then((products) => {
            res.render('shop/product-list', {
                prods: products,
                pageTitle: 'Products',
                path: '/products',
                isAuthenticated: req.session.isLoggedIn,
            });
        })
        .catch(err => console.log(err));
}
exports.getProduct = (req, res, next) => {
    const prodId = req.params.id;
    Product.findById(prodId)
        .then(product => {
            res.render('shop/product-detail', {
                product: product,
                pageTitle: product.title,
                path: '/products',
                isAuthenticated: req.session.isLoggedIn,
            });
        })
        .catch(err => console.log(err));
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll()
        .then(products => {
            res.render('shop/index', {
                prods: products,
                pageTitle: 'Shop',
                path: '/',
                isAuthenticated: req.session.isLoggedIn,
            })
        })
        .catch(err => console.log(err))
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',
        {
            pageTitle: 'Checkout',
            path: '/checkout',
            isAuthenticated: req.session.isLoggedIn,
        })
}
exports.getCart = (req, res, next) => {
    req.user.getCart()
        .then(products => {
            res.render('shop/cart',
                {
                    pageTitle: 'Cart',
                    path: '/cart',
                    products: products,
                    isAuthenticated: req.session.isLoggedIn,
                });
        })
        .catch(err => console.log(err));

}
exports.postCardDeleteProduct = (req, res, next) => {
    const prodId = req.body.id;
    req.user.deleteItemFromCart(prodId)
        .then(result => {
            res.redirect('/cart');
        })
        .catch(err => console.log(err));
}
exports.postCard = (req, res, next) => {
    const prodId = req.body.id;
    Product.findById(prodId)
        .then(product => {
            return req.user.addToCart(product);
        }).then(result => {
            res.redirect('/cart');
        })
        .catch(err => {
            console.log(err);
        })
}
exports.getOrders = (req, res, next) => {
    req.user.getOrders()
        .then(orders => {
            res.render('shop/orders',
                {
                    pageTitle: 'Orders',
                    path: '/orders',
                    orders: orders,
                    isAuthenticated: req.session.isLoggedIn,
                })
        })
        .catch(err => console.log(err));
}
exports.postOrder = (req, res, next) => {
    req.user.addOrder()
        .then(result => {
            res.redirect('/orders');
        })
        .catch(err => console.log(err));
}