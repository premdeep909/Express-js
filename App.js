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

const adminRoutes= require('./Routes/admin');
const shopRoutes = require('./Routes/shop');


handle.use('/admin',adminRoutes);
handle.use(shopRoutes);

handle.use(errorController.get404);
        
const server = http.createServer(handle); 
sequelize.sync().then((result) =>{
    console.log(result);
}).catch((err) => {console.log(err)})
server.listen(3002);

