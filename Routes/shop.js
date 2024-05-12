    const path = require('path');

const express = require('express');
const shopController = require('../Controller/shop')
const router = express.Router();

// Path + method
router.get('/',shopController.getShopIndex );

router.get('/products',shopController.getProduct);

router.get('/products/:productId',shopController.getProductDetails);

router.get('/cart',shopController.getMyCart);

router.get('/checkouts',shopController.getCheckouts);

router.get('/orders',shopController.getMyOrders);

module.exports = router;