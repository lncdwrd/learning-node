/**
 * http, fs - a core node module
 */
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  // Accessing req object
  console.log(req.url, req.method);
  
  // Set Header
  res.setHeader('Content-Type', 'text/html');

  // Routing
  let path = './views/';

  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // Send HTML using res
  // res.write('<h1>hello world</h1>');
  // res.end();

  // Send HTML using fs
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // Use res.write if using multiple files
      // res.write(data);
      res.end(data);
    }
  });

  // Testing Lodash
  const num = _.random(0, 20);

  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });

  greet();
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});