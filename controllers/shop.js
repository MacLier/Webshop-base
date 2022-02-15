const Product = require("../models/product");
const Cart = require('../models/cart');


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list', { prods: products, pageTitle: 'Products', path: '/products' })
    });
}
exports.getProduct = (req, res, next) => {
    const prodId = req.params.id;
    Product.findByID(prodId, product => res.render('shop/product-detail', { product: product, pageTitle: product.title, path: '/products' }))

}

exports.getIndex = (req, res, next) => {
    res.render('shop/index', { pageTitle: 'Shop', path: '/' })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' })
}
exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (let product of products) {
                const cartProductData = cart.products.find(prod => prod.id === product.id);
                if (cartProductData) {
                    cartProducts.push({ productData: product, qty: cartProductData.qty });
                }
            }
            res.render('shop/cart', { pageTitle: 'Cart', path: '/cart', products: cartProducts })
        })
    })
}
exports.postCardDeleteProduct = (req, res, next) => {
    const prodId = req.body.id;
    Product.findByID(prodId, product => {
        Cart.deleteProductFromCart(prodId, product.price)
        res.redirect('/cart');
    })
}
exports.postCard = (req, res, next) => {
    const prodId = req.body.id
    Product.findByID(prodId, product => {
        console.log(product);
        Cart.addProduct(prodId, product.price)
    })
    res.redirect('/cart')
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', { pageTitle: 'Orders', path: '/orders' })
}