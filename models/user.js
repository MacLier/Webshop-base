const getDb = require("../util/database").getDb;
const mongoDb = require('mongodb');



class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
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