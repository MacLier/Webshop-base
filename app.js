const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

const app = express();

app.set('view engine', 'pug');

const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/404PageNotFound');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'bigsecret:D', resave: false, saveUninitialized: false, }))

app.use((req, res, next) => {
    User.findById("6210f9b8f6d296afae3bfe55")
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id)
            next();
        })
        .catch(err => console.log(err));
})

app.use(authRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('*', pageNotFound);

mongoConnect(() => {
    app.listen(3000);
});
