// Task 3: File System Operations
// This program demonstrates how to write to and read from files using Node.js

// Import the built-in 'fs' (file system) module to handle file operations
const fs = require('fs');

// STEP 1: Create a file named "welcome.txt" containing one line "Hello Node"
// fs.writeFile() is an asynchronous function that writes data to a file
// Parameters: filename, data to write, callback function
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  // Handle any errors that occur during file writing
  if (err) {
    console.error('Error writing to welcome.txt:', err);
    return; // Exit the callback function if there's an error
  }
  // If successful, log a confirmation message
  console.log('welcome.txt file created successfully!');
});

// STEP 2: Read and display data from hello.txt
// fs.readFile() is an asynchronous function that reads data from a file
// Parameters: filename, encoding (utf8 for text), callback function
fs.readFile('hello.txt', 'utf8', (err, data) => {
  // Handle any errors that occur during file reading
  if (err) {
    console.error('Error reading hello.txt:', err);
    return; // Exit the callback function if there's an error
  }
  // If successful, display the file content
  console.log('Content from hello.txt:', data);
});
