// how to create server 
const http = require('http');

const express = require('express');
const bodyparser = require('body-parser');
const handle = express();

handle.use(bodyparser.urlencoded({extended:false}))

    handle.use('/add-users',(req,res,next) =>{
        console.warn("middleware-2");
        res.send('<h1><form action="/users" method="POST"><input type="text" name="title" /><button type="submit">Submit</button></form></h1>')
        })
      handle.post('/users',(req,res,next)=>{
        console.log(req.body);
        res.redirect('/');
      })

        handle.use('/',(req,res,next) =>{
            console.warn("middleware-3");    
            res.send('<h1>Hello</h1>')
            })
        
const server = http.createServer(handle); 
server.listen(3000);

