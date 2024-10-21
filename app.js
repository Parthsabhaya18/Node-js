setTimeout(()=>{
    console.log("first");
    console.log("we love node js");
},1500);
console.log("1");
const fs=require('fs');
fs.readFile('./index.html',(err,data)=>{
    console.log(data.toString());
    console.log("2");
})
console.log("3");

