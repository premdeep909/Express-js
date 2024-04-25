    const path = require('path');

const express = require('express');

const router = express.Router();

// Path + method
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'Shop.html'));
});

module.exports = router;