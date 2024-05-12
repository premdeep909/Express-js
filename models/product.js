const fs = require('fs');
const path = require('path');

const pathBuilt = path.join(path.dirname(require.main.filename),"data","product.json");
const getProductFromFile = (cb) =>{
    fs.readFile(pathBuilt,(err,fileContent) =>{
        if(err){
           return cb([]);
        }
       cb(JSON.parse(fileContent));
  })
}
module.exports = class Product{
    constructor(_title,_description,_price,_imageUrl){
      this.title = _title;
      this.description = _description;
      this.price = _price;
      this.imageUrl = _imageUrl;
    }
    save(){
        this.productId = Math.round(Math.random() * 1000).toString();
        getProductFromFile((products) =>{
            products.push(this);
            fs.writeFile(pathBuilt,JSON.stringify(products),(err) =>{
                console.log('err',err);
            })
        })
      
    }
    static fetchAll(cb){
        getProductFromFile(cb);
    }
    static findProductById(pid,callbackFn){
      getProductFromFile((products) =>{
        const product = products.find((product) => product.productId === pid);
        callbackFn(product);
      })
    }
}