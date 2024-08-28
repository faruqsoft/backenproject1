// server.js

const http = require('http');
const fs = require('fs');

// Define the port number
const port = 5500;

// Create a server object
const server = http.createServer((req, res) => {
    // Handle the Home Page
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is Home Page!\n');
    
    // Handle the About Page
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the About Page!\n');
    
    // Handle the Contact Page
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is the Contact Page\n');
    
       
    
    // Handle the File Write route
    } else if (req.url === '/file-write') {
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error writing to file\n');
            } else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('File demo.txt created successfully with "hello world"\n');
            }
        });
    
    // Handle 404 for any other routes
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
});

// The server listens on the specified port and logs a message to the console
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
});