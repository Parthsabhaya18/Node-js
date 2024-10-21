console.log(__filename);   //full path
console.log(__dirname);    //full parth only folder


const path=require('path')
console.log(path.basename(__filename)); //path.js
console.log(path.basename(__dirname));  //path
console.log(path.extname(__filename));  //.js
console.log(path.extname(__dirname));   //   empty
console.log(path.isAbsolute('D:/Node js/modules/Built_in_module/path/path.js'));  //true

console.log(path.parse(__filename)); //inside object passes string or text
console.log(path.format({name:'node',ext:'json',dir:'D:\\Node js\\modules\\Built_in_module\\path'}));
//arrange format of path

console.log(path.join('folder1','folder2','folder3','node.js'));
console.log(path.join('/folder1','folder2','folder3','node.js'));
console.log(path.join('/folder1','//folder2','folder3','node.js'));
console.log(path.join('folder1','folder2','folder3','../node.js')); //neglate the front folder 3

console.log(path.resolve('folder1','folder2','node.js')); //full path create
console.log(path.resolve('/folder1','folder2','node.js'));//this is main folder only that path return 
console.log(path.resolve('/folder1','//folder2','node.js')); //only folder 2 
console.log(path.resolve('folder1','folder2','../node.js')); //neglate the front folder 3






