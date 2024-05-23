const { patch } = require('../Routes/shop');
const Product = require('../models/product')

  exports.getProduct = (req, res, next) => {
    Product.fetchAll((products) =>{
      res.render('shop/product-list',{
        prod: products,
        pageTitle: "All Shop Product List",
        path:"/product-list", 
       
    });
   
 });
  }

  exports.getShopIndex = (req,res,next) => {
    Product.fetchAll((products) =>{
      res.render('shop/index',{
        prod: products,
        pageTitle: "My Shop",
        path:"/"
      });
   
    });
  } 


  exports.getMyCart = (req,res,next) => {
       res.render('shop/cart',{
        pageTitle: "My Cart",
        path:"/cart"
      });
  } 

  exports.getMyCart = (req,res,next) => {
    res.render('shop/cart',{
     pageTitle: "My Cart",
     path:"/cart"
   });
}

exports.getCheckouts = (req,res,next) => {
  res.render('shop/checkouts',{
   pageTitle: "My Cart",
   path:"/checkouts"
 });

} 

exports.getMyOrders = (req,res,next) => {
  res.render('shop/orders',{
   pageTitle: "My Orders",
   path:"/orders"
 });

} 
exports.getProductDetails = (req,res,next) =>{
  const productId = req.params.productId;
  
  Product.findProductById(productId,(product) =>{
    console.log('product is', product);
    res.render('shop/product-details',{
      pageTitle: "My Product Details",
      path : "/product-details",
      product : product,
    })
  });
  
}