const http =require('http');
const fs= require('fs');

const server= http.createServer((req, res)=>{
    // console.log(req)
    console.log(req.url,req.method)

    // set Header content type
    res.setHeader('Content-Type',"text/html")
    // res.write('<p>hello-users</p>')
    // res.write('<p>hello-again-users</p>')
    // res.end()

    //send an html file
    fs.readFile('./views/index.html', (err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }
        else{
           res.write(data)
           res.end()
        }
    })
});


server.listen(3000, 'localhost', ()=>{
    console.log('listening for req on port 3000')
})