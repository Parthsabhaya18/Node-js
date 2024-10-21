let add=((a,b)=>{
    return a+b;
})
let sub=((a,b)=>{
    return a-b;
})
//inside a object store the function so easily can access multiple function
module.exports={add,sub};