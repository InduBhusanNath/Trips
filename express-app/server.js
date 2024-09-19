var express = require('express');
var server=express();
var routes=require('./routes/routes');
server.use('/',routes);
server.listen(5000,()=>{
    console.log('Application Started At Port 5000');
})