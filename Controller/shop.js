const { patch } = require('../Routes/shop');
const Product = require('../models/product')

  exports.getProduct = (req, res, next) => {
    Product.findAll({raw:true}).then(result =>{console.log(result);
      res.render('shop/product-list',{
        prod: result,
        pageTitle: "All Shop Product List",
        path:"/product-list", 
       
    });
    }).catch(err =>{console.log(err)});
   
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

  Product.findOne({
    where:{
      id : productId,
    },
    raw : true,
  }).then(result => {
    res.render('shop/product-details',{
            pageTitle: "My Product Details",
             path : "/product-details",
             product : result,
             })
  }).catch(err => {console.log(err)});
  
  // Product.findByPk(productId,{raw: true}).then((result) =>{console.log('my result is ',result);
  //   res.render('shop/product-details',{
  //        pageTitle: "My Product Details",
  //        path : "/product-details",
  //         product : result,
  //        })
  // }).catch((err) =>{console.log(err)})
}