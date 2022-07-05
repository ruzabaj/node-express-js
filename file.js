const fs= require('fs');

// reading
fs.readFile('./docs/blog2.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString())
})
console.log("last line ");


// writing files
fs.writeFile('./docs/blog1.txt',"hello Ruja", ()=>{
    console.log("file was written")
})

// Directories
fs.mkdir('./assets')


// Deleting
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', err=>{
        if(err){
            console.log(err)
        }
        console.log('already deleted')
    })
}