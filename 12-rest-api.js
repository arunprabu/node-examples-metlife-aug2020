// importing http module to power up the http server
const http = require('http');

http.createServer( ( req, res)=> {
  // send the response 
  

  res.writeHead(200, { 'content-type': 'application/json' });

  // HTTP Methods: GET, POST, PUT, PATCH, DELETE
  console.log(req.method);  // http method
  switch(req.url){
    case '/':
      // send json
      res.write(JSON.stringify({pageName:'Home'}));
      break;
    case '/about': 
     res.write(JSON.stringify({pageName:'About'}));
      break;
    case '/contact': 
      res.write(JSON.stringify({pageName:'Contact'}));
      break;
    default: 
      res.write(JSON.stringify({pageName:'404'}));
  }

  res.end();

}).listen(3000, () => {
  console.log('Wow! The server is started. You can access the app in this url http://localhost:3000');
}); // which port the server should start

