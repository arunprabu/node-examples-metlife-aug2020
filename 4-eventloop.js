// events 
var events = require('events'); // Import events module

var eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

// event listener  params -- name of the event, callback fn -listener 
eventEmitter.on( 'connected', (err, data ) => {  // connected is the Custom Event  
  console.log(err);
  console.log(data);
  console.log('Inside Callback');
} );

// triggering 
eventEmitter.emit('connected', null, 'wow');  // null is an error, wow is data

console.log('The End');

