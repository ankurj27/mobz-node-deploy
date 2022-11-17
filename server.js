/* req.urls is used to check the url of the current request and based on that it sends the response. 
To send a response, first it sets the response header using writeHead() method and then writes a string 
as a response body using write() method. Finally Node.js web server sends the response using end() method.*/

// Import Node.js core module
var http = require('http');

var server = http.createServer(function (req, res) { //create web server
    if (req.url == '/') { // check the url of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content
        res.write('<html><body><p>This is home page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/student") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student page.</p></body></html>');
        res.end();
    }
    else if (req.url == "/admin") {
        req.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student page.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Password!');
});

server.listen(5000); // listen for any incoming requests
console.log('Node.js web server is running at Port 5000....')