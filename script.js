

const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  if (password) {
    passwordText.value = password;
  } else passwordText.value = "Error. Please refres the application";
}

function generatePassword() {
  // Define all possible characters for the password
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  // const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

  let possibleChars = '';
  let password = '';
  let passwordLength = 0;

  // Ask the user for password criteria ||  Include ? uppercase, lowercase, number, special character
  const includeLowercase = confirm('Include lowercase letters in your password? (Select OK for YES or CANCEL for NO) ');
  if (includeLowercase) possibleChars += lowercaseChars;

  const includeUppercase = confirm('Include uppercase letters in your password?  (Select OK for YES or CANCEL for NO)');
  if (includeUppercase) possibleChars += uppercaseChars;

  const includeNumeric = confirm('Include numbers in your password?  (Select OK for YES or CANCEL for NO)');
  if (includeNumeric) possibleChars += numericChars;

  const includeSpecial = confirm('Include special characters in your password?  (Select OK for YES or CANCEL for NO)');
  if (includeSpecial) possibleChars += specialChars;

  // Checks to see if NO password criteria was selected
  if (possibleChars === '') {
    alert('You must select at least one criteria type for your password.');

  }

  // Loop to continue asking user for a valid response until password is < 8 but > 128 chars
  while (true) {
    passwordLength = prompt('How many characters should the password be? (Enter a number between 8 and 128)');


    passwordLength = parseInt(passwordLength, 10);
    if (passwordLength >= 8 && passwordLength <= 128) {
      break;
    } else {
      alert('Invalid length. Please provide a number between 8 and 128.');

    }
  }

  // Create password randomly
  for (let i = 0; i < passwordLength; i++) {
    const x = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[x];
  }

  return password;
}
// *** Require the password generation to include at least one of each critera? / Validate



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
