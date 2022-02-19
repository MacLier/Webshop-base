const getDb = require("../util/database").getDb;
const mongoDb = require('mongodb');



class User {
    constructor(username, email, cart) {
        this.username = username;
        this.email = email;
        this.cart = cart;
        this._id = id ? new mongoDb.ObjectId(id) : null;
    }
    save() {
        const db = getDb();
        db.collection('users')
            .insertOne(this)
            .then()
            .catch(err => {
                console.log(err);
            });
    }
    addToCart(product) {
        const cartProducts = this.cart.items.findIndex(cp => {
            return cp._id === product._id;
        });
        const updatedCart = { items: [{ ...product, quantity: 1 }] };
        const db = getDb();
        return db.collection('users')
            .updateOne({ id: new mongoDb.ObjectId(this._id) },
                { $set: { cart: updatedCart } }
            );
    }
    static findById(userId) {
        const db = getDb();
        return db.collection('users')
            .find({ _id: new mongoDb.ObjectId(userId) })
            .next()
            .then(user => {
                console.log(user);
                return user;
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = User;