//? FS: if we need to intract with the files in our operating system then will use
//  fs module

//import fs module
const fs=require('fs')
// console.log(fs1);

//? File Operation--------------------------------------------------------

//!Read a file : It just Read The file....---------------------
// Syntax: fs.readFileSync('path of title','utf-8')
// let data1=fs.readFileSync('./read.txt','utf-8')
// console.log(data1);

//!Write file: file are earase and new data added-------------------
// syntax: fs.writeFileSync('path of title','data you want to write')
// let data2=fs.writeFileSync('./read.txt','Erase the whole line and added new..')
// console.log(data2);
// console.log("write file succesfully !!");


//!Append file: inside a file add the data..----------------------
// sysntax: fs.appendFileSync('path of file','data you want to write')
// let data3=fs.appendFileSync('node1.txt','i am something hah hah...\n')
// console.log(data3);
// console.log("data is appended ");
// note: if file is not present it will create a new file and write the data to it 


//!read and append data in file: file read and something add the data and craete a new file inside whole new je man ma aave e krvanu ama 
// ---------------
// let data4=fs.readFileSync('./read.txt','utf-8')
// console.log("Read file Sucesfully..");
// fs.appendFileSync('./newCereate.txt',data4)
// console.log("data is appended");


// !delete a file:(only for file)------------------
// fs.unlinkSync('./dummy.txt')
// console.log("Delete succesfully !!");

// !rename a file name------------
// fs.renameSync('./rename.txt','express.txt')
// console.log("File Renamed !!");

// ! create a new folder (only for folder)---------------
// fs.mkdirSync('./dummy')
// console.log("Folder create succesfully");

// !rename folder---------------------- 
// fs.renameSync('./dummy','./most')
// console.log("rename");

//!create nested folder---------------------
// fs.mkdirSync('./most/hello')
// console.log("nested folder success");

//create file  inside a folder---------------------
// fs.writeFileSync('./most/hello.js',"i am from...")
// console.log("file created");


// !remove folder (only for folder) ---------------------
// fs.rmdirSync('./dummy')
// console.log("folder deleted");

