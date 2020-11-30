const express = require('express');
const accountant = require('./routes/accountant');
const admin = require('./routes/admin');
const customer = require('./routes/customer');
const plumber = require('./routes/plumber');
const salesRepresentative = require('./routes/salesRepresentative');
const schemeCoordinator = require('./routes/schemeCoordinator');
const storesClerk = require('./routes/storesClerk');
const user = require('./routes/user');
const home = require('./routes/home');

const app = express();

app.use('/accountant',accountant);
app.use('/admin',admin);
app.use('/customer',customer);
app.use('/plumber',plumber);
app.use('/salesRepresentative',salesRepresentative);
app.use('/schemeCoordinator',schemeCoordinator);
app.use('/storesClerk',storesClerk);
app.use('/user',user);
app.use('/',home);

app.listen(8000,()=>console.log('Started at port 8000'))