const Product = require('../models/product')


exports.getAddProduct =  (req, res, next) => {
    res.render('admin/Addproduct',
    {pageTitle: "Addproduct",
    path:"/Addproduct",
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
  
  });
}

exports.getAdminProducts = (req,res,next) => {
  Product.fetchAll((products) =>{
    res.render('admin/products',{
      prod: products,
      pageTitle: "All Admin Product List",
      path:"/products"
    });
 
  });
} 


 exports.postAddProduct = (req, res, next) => {
    // console.log(req.body);
    // products.push({title:req.body.title})
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
  };
