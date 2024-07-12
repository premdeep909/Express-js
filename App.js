// how to create server 
const http = require('http');

const express = require('express');
const bodyparser = require('body-parser');
const sequelize = require('./connections/database');
const errorController = require('./Controller/404error');


const handle = express();

handle.set('view engine','ejs');
handle.set('views','views');
const path = require('path');
const viewPath = require('./utils/Path');


handle.use(bodyparser.urlencoded({extended:false}));
handle.use(express.static(path.join(__dirname,'public')));

console.log('book');
handle.use((req, res, next) => {
   // console.log("Running middleware");
    User.findByPk(12).then(user => {
            req.user = user;
          // console.log(req.user);
             next();
        })
});


const adminRoutes= require('./Routes/admin');
const shopRoutes = require('./Routes/shop');
const Product = require('./models/product');
const User = require('./models/user');
const Tag = require('./models/tag');

handle.use('/admin',adminRoutes);
handle.use(shopRoutes);


handle.use(errorController.get404);
        
const server = http.createServer(handle); 





// magic association method 
User.hasMany(Product);

Product.belongsTo(User,{
    constraints : true,
    onDelete : 'CASCADE'
})

Product.belongsToMany(Tag,{through: 'ProductTags'});
Tag.belongsToMany(Product,{through : 'ProductTags'});

sequelize.sync().then((result) =>{
    //console.log('sync success');
    return User.findByPk(12);
}).then(users => {
    if(!users){
        return User.create({
            name : 'premdee sing',
            email : 'prem@1231',
            password : '12333',
        })
    }
     
}).then(users =>{
    //console.log('user created',users);
    return Tag.findAll();
}).then((tags) =>{
    if(!tags || !tags.length){
        const tags = [
            'programming',
            'web development',
            'database',
            'networking',
            'algorithm',
            'computer'
        ]
        tags.forEach(tagName =>{
            Tag.create({name : tagName}).then(res =>{
                console.log('tag created');
            }).catch(err =>{
                console.log('failed to create tag');
            })
        }) 
    }
})
.catch((err) => {console.log(err)})
server.listen(3002);

