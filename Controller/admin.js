const Product = require('../models/product')


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
    const product = new Product(title,description,price,imageUrl);
    product.save();
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