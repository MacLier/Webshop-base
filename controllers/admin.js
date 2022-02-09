const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    console.log(req.body);
    product.save()
    res.redirect('/');
}

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
}

exports.getAdminProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('admin/products', { prods: products, pageTitle: 'Admin Products', path: '/admin/products' })
    });
}