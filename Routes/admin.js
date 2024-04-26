const path = require('path');
const viewPath = require('../utils/Path.js');
const express = require('express');

const router = express.Router();

const products = [];

// GET - /add-product
router.get('/Addproduct', (req, res, next) => {
  res.sendFile(viewPath('Addproduct.html'));
});

// POST - /add-product
router.post('/Addproduct', (req, res, next) => {
  console.log(req.body);
  products.push({title:req.body.title})
  res.redirect('/');
});
module.exports = {
  routes: router,
  products: products
}