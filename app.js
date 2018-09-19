const express = require('express');
const app = express();
const productsRoutes = require('./API/Routes/products');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect('mongodb://j4v15:1WCNW9CfHycHA0Uj@j4rv15-shard-00-00-r98dz.mongodb.net:27017,j4rv15-shard-00-01-r98dz.mongodb.net:27017,j4rv15-shard-00-02-r98dz.mongodb.net:27017/test?ssl=true&replicaSet=j4rv15-shard-0&authSource=admin&retryWrites=true',{ useNewUrlParser: true })


app.use(morgan('dev'));
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', productsRoutes);
app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status= 404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.send('Server Works')
})
module .exports = app;