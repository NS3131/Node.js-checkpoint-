// Task 4: Password Generator
// This program uses the 'generate-password' npm package to create random passwords

// Import the 'generate-password' package (must be installed via npm install generate-password)
const generator = require('generate-password');

// Function that generates random passwords and console.log() that password
function generateRandomPassword() {
  // Use the generator.generate() method to create a random password
  // The configuration object specifies the password requirements
  const password = generator.generate({
    length: 12,                    // Password will be 12 characters long
    numbers: true,                 // Include numbers (0-9)
    symbols: true,                 // Include symbols (!@#$%^&*)
    uppercase: true,               // Include uppercase letters (A-Z)
    lowercase: true,               // Include lowercase letters (a-z)
    excludeSimilarCharacters: true // Exclude similar characters like 0, O, l, 1
  });
  
  // Display the generated password in the console
  console.log('Generated Password:', password);
  
  // Return the password (useful if you want to use it elsewhere)
  return password;
}

// Call the function to generate and display a password
generateRandomPassword();
