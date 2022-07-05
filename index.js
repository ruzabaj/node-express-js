const express = require('express');

const app= express();

app.get('/', function(req, res){
    console.log('GET request');
    res.send({name:'ruja', age:'23'})
    res.end();
})
app.get('/api', function(req, res){
    console.log('GET request');
    res.send({name:'ram', age:'33'})
    res.end();
})
app.listen(process.env.port || 4000, function(){
    console.log("lsitening for requests")
})