const Product = require('../models/product'); 


exports.getAddProduct = (req, res, next) => {
  res.render('admin/Addproduct', {
    pageTitle: 'Add Product',
    path: '/Addproduct',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true,
    isEdit :'',
  });
};
exports.getAdminProducts = (req, res, next) => {
 
  Product.fetchAll((products) => {
    res.render('admin/products', {
      prod: products,
      pageTitle: 'All Admin Product List',
      path: '/admin-product',
    });
  });
};


 exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
   Product.create({
    title : title,
    description : description,
    price : price,
    imageUrl : imageUrl,
   }).then((result) => {console.log("record completed")}).catch(err => {console.log("failed:record fail")})
    res.redirect('/');
  };


  exports.getEditMyProduct = (req,res,next) =>{
    const isEditMode = req.query.isEditing;
    const productId = req.params.productId;

    Product.findProductById(productId,(product) =>{
      res.render('admin/edit-product',{
        pageTitle: 'Editing Products',
        path :'',
        product : product,    
        isEdit: isEditMode,
        })
    })
  }
  exports.saveModifiedProduct = (req,res,next) =>{
      const reqbody = req.body;
      const productId = reqbody.productId;
      const modifiedTitle = reqbody.title;
      const modfiedImage = reqbody.imageUrl;
      const modifiedDescription = reqbody.description;
      const modifiedPrice = reqbody.price;
 
      const modifiedProduct =  new Product(
        productId,
        modifiedTitle,
        modifiedDescription,
        modifiedPrice,
        modfiedImage,
      );
      modifiedProduct.saveModifiedFile();
      res.redirect('/admin/admin-product');
  }
  exports.removeProduct = (req,res,next) =>{
    const productId = req.body.productId;
    

    Product.remove(productId);
    res.redirect('/admin/admin-product')
  }