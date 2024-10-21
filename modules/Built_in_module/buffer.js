// !Buffer 
// it is a class 
// it is used to store the data temporirly and transfer to other place
//data is stored in binary format i.e.,0;s and 1's
// buffer is used to manipulated the binary data 
//it includes video,audio and images etc...

//?How to Create Buffer

// 1.from :- 
// ?sysntax Buffer.from('Hello World')
// const buf=Buffer.from('hello world')
// console.log(buf.toString());

// 2.alloc (size,value)
// const buf=Buffer.alloc(22,'hello world ')
// console.log(buf.toString());

//3.isBuffer():-
// const buf=Buffer.alloc(10,"hello world")
// const buf2="hello world"
// console.log(Buffer.isBuffer(buf2));

//4 slice(starting pos,endling pos)
// let buf=Buffer.from('devlopers use node')
// console.log(buf.slice(0,10).toString());

//5.length:-
// const buf=Buffer.from('hello world')
// console.log(buf.length);


