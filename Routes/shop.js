    const path = require('path');
const viewPath = require('../utils/Path.js');
const express = require('express');
const adminData = require('./admin.js');
const router = express.Router();

// Path + method
router.get('/', (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(viewPath('Shop.html'));
});

module.exports = router;