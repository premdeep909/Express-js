    const path = require('path');

const express = require('express');
const productsController = require('../Controller/Products')
const router = express.Router();

// Path + method
router.get('/',productsController.getProduct);

module.exports = router;