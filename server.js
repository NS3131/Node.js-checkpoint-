// Task 2: HTTP Server
// This program creates a web server that runs on port 3000 and responds with HTML content

// Import the built-in 'http' module to create an HTTP server
const http = require('http');

// Create an HTTP server
// The callback function handles incoming requests and responses
const server = http.createServer((req, res) => {
  // Set the response header with status code 200 (OK) and content type as HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send the HTML response and end the connection
  // This will display "Hello Node!!!!" as a heading on the webpage
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Define the port number where the server will listen
const PORT = 3000;

// Start the server and listen on the specified port
// The callback function runs when the server starts successfully
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
