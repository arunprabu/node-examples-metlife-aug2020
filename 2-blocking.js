// read file sync'ly  
var fs = require('fs'); // require is === import 

var output = fs.readFileSync('sample.txt'); // blocking call 

console.log(output.toString());

console.log("The End");
