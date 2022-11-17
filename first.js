// importing the built-in http module or nodejs core module
const http = require('http');

// declaring server details
const hostname = '127.0.0.1';
const port = 3000;

// creating server
const server = http.createServer((req, res) => {

    // handling incoming requests
    res.statusCode = 200;

    // set content type at web server
    res.setHeader('Content-Type', 'text/plain');
    /*res. write("This is the response from the server")
    res.end();*/
    res.end('Hello World');
});

// server listening to port 3000
/* server.listen((3000), () => {
    console.log("Server is running");});*/
server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});
