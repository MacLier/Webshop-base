const fs = require('fs');
const path = require("path");

const p = path.join(path.dirname(require.main.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {

        fs.readFile(p, (err, data) => {
            let cart = { products: [], totalPrice: 0 }
            if (!err) {
                cart = JSON.parse(data);
            }
            const existingProductIndex = cart.products.findIndex(prod => prod.id == id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            });
        });
    }
    static deleteProductFromCart(id, productPrice) {
        fs.readFile(p, (err, data) => {
            if (err) {
                return;
            }
            const updatedCart = { ...JSON.parse(data) };
            const product = updatedCart.products.find(product => product.id === id);
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter(prod => { prod.id !== id })
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;

            fs.readFile(p, JSON.stringify(updatedProduct), err => {
                console.log(err);
            })
        })
    }
    static getCart(cb) {
        fs.readFile(p, (err, data) => {
            const cart = JSON.parse(data);
            if (err) {
                return null;
            } else {
                cb(cart);
            }
        });
    }
}