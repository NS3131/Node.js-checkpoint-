const generator = require('generate-password');

// Function that generates random passwords and console.log() that password
function generateRandomPassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    excludeSimilarCharacters: true
  });
  
  console.log('Generated Password:', password);
  return password;
}

// Call the function to generate and display a password
generateRandomPassword();
