const fs=require('fs')

// 1.Read file 
fs.readFile('./promise.txt','utf-8')
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);  
})

//2.write file
