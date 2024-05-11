const path = require('path');
const viewPath = require('../utils/Path.js');
const express = require('express');
const adminControllers = require('../Controller/admin');
const router = express.Router();


// GET - /add-product
router.get('/Addproduct',adminControllers.getAddProduct);


// GET - /products 
router.get('/admin-product',adminControllers.getAdminProducts);
// POST - /add-product
router.post('/Addproduct', adminControllers.postAddProduct);
module.exports = router;