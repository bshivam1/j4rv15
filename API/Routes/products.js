  const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');
const mongoose = require('mongoose');
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'inside products'
    })
})
router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'inside GET products'
    })
})
router.post('/',(req,res,next)=>{
    console.log(req.body)
    const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,        
    }) 
    console.log('*******')    
    product.save().then(result=>{
        console.log(result);
    }).catch(err=>console.log(err))
    res.status(200).json({
        message: 'inside POST products'
    })
})
router.put('/',(req,res,next)=>{
    res.status(200).json({
        message: 'inside PUT products'
    })
})
router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message: 'inside PATCH products'
    })
})
router.get('/:param',(req,res,next)=>{
    res.status(200).json({
        ID : req.params.param,
        message: 'inside GET products'
    })
})
module.exports = router;