const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://testadmin:awCWUmGv8Doz6Ph1@parachute.pecmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        })

}
module.exports = mongoConnect;