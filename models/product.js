const fs = require('fs');
const path = require('path');

module.exports = class Product{
    constructor(IncomingTitle){
      this.title = IncomingTitle;
    }
    save(){
        const pathBuilt = path.join(path.dirname(require.main.filename),"data","product.json");
        fs.readFile(pathBuilt,(err,fileContent) =>{
            let products = [];
            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);

            fs.writeFile(pathBuilt,JSON.stringify(products),(err) =>{
                console.log('err',err);
            })
        })
    }
    static fetchAll(cb){
        const pathBuilt = path.join(path.dirname(require.main.filename),"data","product.json");
        fs.readFile(pathBuilt,(err,fileContent) =>{
            if(err){
                cb([]);
            }
             cb(JSON.parse(fileContent));
        })
    }
}