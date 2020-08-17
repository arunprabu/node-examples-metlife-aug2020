// importing http module to power up the http server
const http = require('http');

// Server side rendering app -- traditional webapp 
http.createServer( ( req, res)=> {

  let templateContent;

  // req url, req method, req body, url params, query params and req header will be part of req object
  console.log(req.url);

  switch(req.url){
    case '/': 
      templateContent = `<h1>Home</h1>`;
      break;
    case '/about':
      templateContent = `<h1>About</h1>`;
      break;
    case '/contact':
      templateContent = `<h1>Contact</h1>`;
      break;
    default: 
      templateContent = `<h1>404 Page Not Found</h1>`;
  }

  res.writeHead(200, {"Content-Type": "text/html"});  
  res.write(`
      <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">My App</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div class='container'>
          ${templateContent}
        </div>
      </div>
  `);
  res.end();

}).listen('3000', () => {
  console.log('Wow! The server is started. You can access the app in this url http://localhost:3000');
})