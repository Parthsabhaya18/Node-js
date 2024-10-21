const fs=require("fs");

//Task 1:_---------
//create routes folder---> create routes js file
// fs.mkdirSync('routes');
// console.log("create routes folder !!");

// fs.writeFileSync('./routes/routes.js',"Hello")
// console.log("file created !!");

// fs.renameSync('./routes/routes.js','modules.js')
// console.log("Rename sucess !");


//Task 2:------
// fs.mkdirSync('./controller');
// console.log("folder created");

// fs.writeFileSync('./controller/controller.js','helloooo')
// console.log("file create");

//  fs.mkdirSync('./views');
//  console.log("folder created");

//  fs.writeFileSync('./views/views.js','helloooo')
//  console.log("file create");

//   fs.mkdirSync('./model');
//  console.log("folder created");

//   fs.writeFileSync('./model/model.js','helloooo')
//  console.log("file create");

//   fs.mkdirSync('./node');
//  console.log("folder created");

//   fs.writeFileSync('./node/node.js','node.js is an open source server environment.node.js allows you to run javascript on the server.start learning node.js now')
//   console.log("file create");

// fs.mkdirSync('./express')
// console.log("folder created");

// fs.renameSync('./express','nodejs')

//  fs.mkdirSync('./nodejs/express')
//  console.log("folder created");

//  fs.mkdirSync('./nodejs/express/javascript')
//  console.log("folder created");

// fs.mkdirSync('./nodejs/express/javascript/data')
// console.log("folder created");

// fs.writeFileSync('./nodejs/express/javascript/data/data.js','hi')
// console.log("folder created");

let data=fs.readFileSync('./node/node.js','utf-8')
fs.appendFileSync('./nodejs/express/javascript/data/data.js',data)