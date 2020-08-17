//this example uses default path package and gets filename and extension
const path =require('path'); 

const fileName = __filename; //global object
console.log(fileName); //prints the whole file name with directory

const extn = path.extname(fileName);
console.log(extn); //prints only the file extension

const baseName = path.basename(fileName);
console.log(baseName); //prints only the filename