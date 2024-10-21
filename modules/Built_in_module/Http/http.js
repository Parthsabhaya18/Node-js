// http:

// hypertext tranfor protocol

// it is a protocol that allows you to communicate between a server and a client

// it is a statless protocol
// statless means that the server treats every request as new request i.e.it will not store the previous request in memory

// https is a built in module.
//it means no need to install it separatly.
//simply we can import it and we can use it

//it is used to create a server in node js














const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'plain/text'});
        res.end("Hello Node js")        
})
server.listen(5000,err=>{
    if(err) throw err;
    console.log("Server is Running 5000 port");
})