const path = require('path');
const viewPath = require('../utils/Path.js');
const express = require('express');

const router = express.Router();


// GET - /add-product
router.get('/Addproduct', (req, res, next) => {
  res.sendFile(viewPath('Addproduct.html'));
});

// POST - /add-product
router.post('/Addproduct', (req, res, next) => {
  res.redirect('/');
});
module.exports = router