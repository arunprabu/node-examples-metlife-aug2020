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
      res.write(`{pageName: 'Home'}`);
      break;
    case '/about': 
     res.write(`{pageName: 'About'}`);
      break;
    case '/contact': 
      res.write(`{pageName: 'Contact'}`);
      break;
    default: 
      res.write(`{pageName: '404'}`);
  }

  res.end();

}).listen(3000, () => {
  console.log('Wow! The server is started. You can access the app in this url http://localhost:3000');
}); // which port the server should start

