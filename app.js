const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const mongoConnect = require('./util/database');

const app = express();

app.set('view engine', 'pug');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFound = require('./routes/404PageNotFound')



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('*', pageNotFound)

mongoConnect((client) => {
    console.log(client);
    app.listen(3000);
});
