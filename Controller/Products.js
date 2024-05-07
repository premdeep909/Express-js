const products = [];


exports.getAddProduct =  (req, res, next) => {
    res.render('Addproduct',
    {pageTitle: "Addproduct",
    path:"/Addproduct",
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  
  });
}

 exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    products.push({title:req.body.title})
    res.redirect('/');
  };

  exports.getProduct = (req, res, next) => {
   res.render('shop',{
     prod: products,
     pageTitle: "shop",
     path:"/", 
     hasProduct: products.length>0,
     formCSS: true,
     productCSS: true,
     activeShop: true,
 
 });
  }