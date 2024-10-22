const http=require('http')
const fs=require('fs')
const querystring=require('querystring')
const server=http.createServer((req,res)=>{
    
        if(req.method==='POST'){
            let formUrlEncoded='application/x-www-form-urlencoded'
            if(req.headers['content-type']===formUrlEncoded){
                let  body="";
                req.on('data',chunk=>{
                    body+=chunk.toString();
                })
                req.on('end',()=>{
                    console.log(body);
                    let payload=querystring.parse(body)
                    console.log(payload);
                    let name=payload.name
                    let email=payload.email
                    let password=payload.password

                    fs.appendFile('./form.txt',`\nname=${name},\nemail=${email},\npassword=${password}\n`
                        ,(err)=>{
                        if(err){
                            console.log(err);
                            res.writeHead(500,{'content-type':'text/html'})
                            res.end(`<h1>Internal server error</h1>`);
                        }
                        else{
                            res.writeHead(200,{'content-type':'text/html'})
                            res.end("<h1>Sucessfully Submitted..</h1>");
                        }
                        
                    })
                })
            }
            else{
                res.writeHead(400,{"content-type":"text/html"})
                res.end('<h1>Bad Request</h1>')
            }
        }
    else{
        if(req.url==='/'){
            res.writeHead(200,{'content-type':'text/html'})
            let form=fs.createReadStream('./form.html')
            form.pipe(res)
        }
        else if(req.url==='/txt'){
            res.writeHead(200,{'content-type':'text/html'})
            let form=fs.createReadStream('./form.txt')
            form.pipe(res)
        }   
        else if(req.url==='/css'){  
            res.writeHead(200,{'content-type':'text/css'})
            let form=fs.createReadStream('./form.css')
            form.pipe(res)
        }
        else{
            res.end("<h1>404 error found</h1>")
        }
    }
})
server.listen(5000,err=>{
    if(err) throw err;
    console.log("Server running port 5000...........");
    
})