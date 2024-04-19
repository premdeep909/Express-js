// how to create server 
const http = require('http');

const express = require('express');
const handle = express();
const server = http.createServer(handle); 
server.listen(3000);

