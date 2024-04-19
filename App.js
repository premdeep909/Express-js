// how to create server 
const http = require('http');

const express = require('express');
const bodyparser = require('body-parser');
const handle = express();



const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

handle.use(bodyparser.urlencoded({extended:false}));
handle.use(adminRoutes);
handle.use(shopRoutes)
        
const server = http.createServer(handle); 
server.listen(3000);

