// how to create server 
const http = require('http');

const express = require('express');
const handle = express();

handle.use('/',(req,res,next) =>{
    console.warn("middleware-1");
//send respomse 
next();
    })


    handle.use('/add-users',(req,res,next) =>{
        console.warn("middleware-2");
  //send respomse 
  res.send('<h1>Hello From Express JS </h1>')
        })

        handle.use('/',(req,res,next) =>{
            console.warn("middleware-3");    
        //send respomse 
        res.send('<h1>Hello</h1>')
            })
        
const server = http.createServer(handle); 
server.listen(3000);

