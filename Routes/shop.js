    const path = require('path');
const viewPath = require('../utils/Path.js');
const express = require('express');

const router = express.Router();

// Path + method
router.get('/', (req, res, next) => {
  res.sendFile(viewPath('Shop.html'));
});

module.exports = router;