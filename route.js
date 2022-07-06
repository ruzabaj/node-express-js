const express = require('express');
const route = require('./routes/api');

const app= express();

app.use(route);

app.listen(process.env.port || 3000, ()=>{
    console.log("listening and waiting for request")
})