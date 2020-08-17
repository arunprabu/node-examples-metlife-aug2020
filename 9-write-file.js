// writing a file
var fs = require('fs');
var event = require('events');
var eventEmitter = new event.EventEmitter();

const content = 'my example text';

// read file async'ly
eventEmitter.on( 'READ_FILE', () =>{
  // display the content of the file in console
  fs.readFile('demo.txt',(err,data)=>{    // async'ly 
      if(!err){
        console.log(data.toString());
      }
  });
})

fs.writeFile( 'demo.txt', content , (err) => {
  if (err) throw err;
  console.log('The file has been saved!');

  // emit an event without callback hell 
  eventEmitter.emit('READ_FILE');
});


