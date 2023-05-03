const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10, // Length of the generated password
    numbers: true, // Include numbers in the password
    symbols: true, // Include symbols in the password
    uppercase: true, // Include uppercase letters in the password
    excludeSimilarCharacters: true, // Exclude similar characters like '1' and 'l'
  });

  console.log('Generated Password:', password);
}

generateRandomPassword();
