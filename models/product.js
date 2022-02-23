const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Product', productSchema)
// const getDb = require('../util/database').getDb;
// const mongoDb = require('mongodb');
// class Product {
//     constructor(title, price, description, imageUrl, id, userId) {
//         this.title = title;
//         this.price = price;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this._id = id ? new mongoDb.ObjectId(id) : null;
//         this.userId = userId;
//     }

//     save() {
//         const db = getDb();
//         let dbOperator;
//         if (this._id) {
//             dbOperator = db.collection('products')
//                 .updateOne({ _id: this._id }, { $set: this })
//         } else {
//             dbOperator = db.collection('products')
//                 .insertOne(this);
//         }
//         return dbOperator
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }
//     static fetchAll() {
//         const db = getDb();
//         return db
//             .collection('products')
//             .find()
//             .toArray()
//             .then(products => {
//                 console.log(products);
//                 return products;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     static findById(prodId) {
//         const db = getDb();
//         console.log(prodId);
//         return db
//             .collection('products')
//             .find({ _id: mongoDb.ObjectId(prodId) })
//             .next()
//             .then(product => {
//                 console.log(product);
//                 return product;
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
//     static deleteById(prodId) {
//         const db = getDb();
//         return db.collection('products')
//             .deleteOne({ _id: new mongoDb.ObjectId(prodId) })
//             .then(result => {
//                 console.log('Deleted');
//                 res.redirect('/admin/products');
//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }
// }
// module.exports = Product;