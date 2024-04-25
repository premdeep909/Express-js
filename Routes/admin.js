const path = require('path');

const express = require('express');

const router = express.Router();

// GET - /add-product
router.get('/Addproduct', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'Addproduct.html'));
});

// POST - /add-product
router.post('/Addproduct', (req, res, next) => {
  res.redirect('/');
});
module.exports = router