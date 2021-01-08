var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');

//Then open up a browser and navigate to http://localhost:3000

//The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default.