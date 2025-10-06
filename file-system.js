const fs = require('fs');

// First, create a file named "welcome.txt" containing one line "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error writing to welcome.txt:', err);
    return;
  }
  console.log('welcome.txt file created successfully!');
});

// Second, create a program that reads and console.log data from hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading hello.txt:', err);
    return;
  }
  console.log('Content from hello.txt:', data);
});
