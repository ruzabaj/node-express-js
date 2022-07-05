const fs= require('fs');

const readStream= fs.createReadStream('./docs/read.txt');
    readStream.on('data',(chunk)=>{
        console.log("NEW CHUNK",chunk)
    })