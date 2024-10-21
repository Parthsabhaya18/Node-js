const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.end("<h1>This is My main Page</h1>")
    }
    else if(req.url==='/home'){
        res.end("<h1>This is my Home page</h1>")
    }
    
    else if(req.url==='/about'){
        res.end("<h1>This is My about Page</h1>")
    }
    else if(req.url==='/contact'){
        res.end("<h1>This is My contact Page</h1>")
    }
    else{
        res.end("<h1>404 error found</h1>")
    }
})
server.listen(5000,err=>{
    if(err)throw err;
    console.log("server running on port 5000");
    
})