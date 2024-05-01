// how to create server 
const http = require('http');

const express = require('express');
const bodyparser = require('body-parser');
const handle = express();
handle.set('view engine','pug');
handle.set('views','views');
const path = require('path');
const viewPath = require('./utils/Path');


handle.use(bodyparser.urlencoded({extended:false}));
handle.use(express.static(path.join(__dirname,'public')));

const adminData= require('./Routes/admin');
const shopRoutes = require('./Routes/shop');


handle.use('/admin',adminData.routes);
handle.use(shopRoutes);

handle.use((req,res,next) =>{
    res.status(404).render('404');
})
        
const server = http.createServer(handle); 
server.listen(3005);

