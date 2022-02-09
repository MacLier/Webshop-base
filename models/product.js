const fs = require('fs');
const path = require('path');


const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, data) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(data));
    })
}

const p = path.join(path.dirname(require.main.filename), 'data', 'products.json');
module.exports = class Product {

    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;

    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
        fs.readFile(p, (err, data) => {
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
};