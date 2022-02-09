const Product = require("../models/product");

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    console.log(req.body);
    product.save()
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('user/product-list', { prods: products, pageTitle: 'Shop', path: '/' })

    });
}