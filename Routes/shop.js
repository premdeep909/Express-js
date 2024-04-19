
const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    console.warn("middleware-3");    
    res.send('<h1>Hello</h1>')
    })

    module.exports = router