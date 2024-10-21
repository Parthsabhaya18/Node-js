const fs=require('fs')

//1.ReadStream
// let readdata=fs.createReadStream('./stream1.txt','utf-8')
// readdata.on('data',data=>{
//     console.log(data);
    
// })
// readdata.on('end',end=>{
//     console.log("This message is after read printed!!!");
    
// })
// readdata.on('close',close=>{
//     console.log("This message is last printend");
    
// })
// readdata.on('error',err=>{
//     console.log("Any error so printed");
    
// })


// 2.WriteStream: 
let writedata=fs.createWriteStream('./stream1.txt')
writedata.write("Stream are collection of data like arraybor strings")

//3.DuplexStream:


