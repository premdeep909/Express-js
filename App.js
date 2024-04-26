// how to create server 
const http = require('http');

const express = require('express');
const bodyparser = require('body-parser');
const handle = express();
const path = require('path');



const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

handle.use(bodyparser.urlencoded({extended:false}));
handle.use('/admin',adminRoutes);
handle.use(shopRoutes);

handle.use((req,res,next) =>{
    res.status(404).sendFile(path.join(__dirname,'views','Page-Not-Found.html'));
})
        
const server = http.createServer(handle); 
server.listen(3000);

