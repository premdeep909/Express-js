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
    constructor(IncomingTitle){
      this.title = IncomingTitle;
    }
    save(){
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
}