const path = require('path');
const viewPath = require('../utils/Path.js');
const express = require('express');
const productControllers = require('../Controller/Products');
const router = express.Router();


// GET - /add-product
router.get('/Addproduct',productControllers.getAddProduct);

// POST - /add-product
router.post('/Addproduct', productControllers.postAddProduct);
module.exports = router;