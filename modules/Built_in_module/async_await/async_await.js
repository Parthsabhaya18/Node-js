const fs=require('fs')

// let readfile=async()=>{
//    let data= await fs.readFile('./read.txt','utf-8',(err,data)=>{
//         if(err) throw err;
//         console.log(data); 
//     })
// }
// readfile()

let writefile=async()=>{
    await fs.writeFile('./write.txt','new write',(err)=>{
        if(err) throw err;
        console.log("file written");
        
    })
}
// writefile()

let append=async()=>{
    await fs.appendFile('./write.txt',' hello parth!!',(err)=>{
        if(err) throw err;
        console.log("append success");
        
    })
}


