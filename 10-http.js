// importing http module to power up the http server
const http = require('http');

http.createServer( ( req, res)=> {
  // send the response 
  console.log("Processing Request");
  res.writeHead(200, {"Content-Type": "text/html"});  
  res.write('<H1>Home</H1>');
  res.end();
  console.log("Response Sent");

}).listen(3000, () => {
  console.log('Wow! The server is started. You can access the app in this url http://localhost:3000');
}); // which port the server should start

