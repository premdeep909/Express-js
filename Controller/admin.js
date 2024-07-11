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
  Product.findAll()
      .then(products => {
          res.render('admin/products', {
              prod: products,
              pageTitle: 'All Admin Product List',
              path: '/admin-product',
          });
      })
      .catch((err) => console.log(err));
};


 exports.postAddProduct = (req, res, next) => {

  console.log(req.user);
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageUrl = req.body.imageUrl;
  const user = req.user;
  user.createProduct({
    title: title,  
    description: description,
    price: price,
    imageUrl: imageUrl
  })
  .then(result => {
    console.log("Record completed");
    res.redirect('/');
  }).catch(err => {console.log("failed:record fail")})
   
  };


  exports.getEditMyProduct = (req,res,next) =>{
    const isEditMode = req.query.isEditing;
    const productId = req.params.productId;
    Product.findOne({
    where:{
      id : productId,
    },
    raw : true,
  }).then(result => {
    res.render('admin/edit-product',{
          pageTitle: 'Editing Products',
          path :'',
          product : result,    
          isEdit: isEditMode,
           })
  }).catch(err => {console.log(err)});
    // Product.findProductById(productId,(product) =>{
    //   res.render('admin/edit-product',{
    //     pageTitle: 'Editing Products',
    //     path :'',
    //     product : product,    
    //     isEdit: isEditMode,
    //     })
    // })
  }
  exports.saveModifiedProduct = (req, res, next) => {
    const reqbody = req.body;
    const productId = reqbody.productId;
    const modifiedTitle = reqbody.title;
    const modifiedImage = reqbody.imageUrl;
    const modifiedDescription = reqbody.description;
    const modifiedPrice = reqbody.price;
      
    Product.update({
        title: modifiedTitle,
        imageUrl: modifiedImage,
        description: modifiedDescription,
        price: modifiedPrice,
    }, {
        where: {
            id: productId,
        },
    })
    .then(result => {
        res.redirect('/admin/admin-product');
    })
    .catch(err => console.log(err));
};


  
  exports.removeProduct = (req,res,next) =>{
    const productId = req.body.productId;
    Product.destroy({
      where : {
        id : productId,
      },
    }).then(result =>{
      res.redirect('/admin/admin-product')
    }).catch(err => {console.log(err)});
    
  }