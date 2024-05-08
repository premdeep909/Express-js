const products = [];

module.exports = class Product{
    constructor(IncomingTitle){
      this.title = IncomingTitle;
    }
    save(){
        products.push(this);
    }
    static fetchAll(){
        return products;
    }
}