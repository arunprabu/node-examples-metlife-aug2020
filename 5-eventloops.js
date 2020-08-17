var event = require('events');
var fs = require('fs');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('read_over',(err,data)=>{
  if(!err){
    console.log('File reading is succesfull  ');
    console.log(data.toString() )
  }
});

eventEmitter.on('file_read', () =>{
  console.log("Reading a file");
  fs.readFile('sample.txt',(err,data)=>{    // async'ly 
      if(!err){
        eventEmitter.emit('read_over',null,data);
      }
  });
});

eventEmitter.emit('file_read', 'sample.txt');
