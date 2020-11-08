const express = require('express');
const accountant = require('./entities/accountant');
const admin = require('./entities/admin');
const customer = require('./entities/customer');
const plumber = require('./entities/plumber');
const salesRepresentative = require('./entities/salesRepresentative');
const schemeCoordinator = require('./entities/schemeCoordinator');
const storesClerk = require('./entities/storesClerk');
const supervisor = require('./entities/supervisor');
const user = require('./entities/user');
const home = require('./entities/home');

const app = express();

app.use('/accountant',accountant);
app.use('/admin',admin);
app.use('/customer',customer);
app.use('/plumber',plumber);
app.use('/salesRepresentative',salesRepresentative);
app.use('/schemeCoordinator',schemeCoordinator);
app.use('/storesClerk',storesClerk);
app.use('/supervisor',supervisor);
app.use('/user',user);
app.use('/',home);

app.listen(8000,()=>console.log('Started at port 8000'))