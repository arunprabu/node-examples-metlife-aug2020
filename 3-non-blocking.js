// js works async'ly 

var fs = require('fs');


fs.readFile('sample.txt' , (err, data) => {  // error first callback 
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
  
  console.log('Read over');
}); // non blocking call -- async 

console.log('The End');

