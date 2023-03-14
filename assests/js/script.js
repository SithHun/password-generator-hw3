// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define character sets
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Generate password function
function generatePassword() {
  // Ask for password length
  var passwordLength = prompt("How many characters should your password be? (Choose between 8 and 128)");

  // Check if input is valid
  if (passwordLength === null) {
    // User clicked Cancel
    return "";
  } else if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return "";
  } else {
    passwordLength = parseInt(passwordLength);
  }

  // Ask for character types
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useNumeric = confirm("Do you want to include numbers?");
  var useSpecial = confirm("Do you want to include special characters?");

  // Check if user has selected at least one character type
  if (!useLowercase && !useUppercase && !useNumeric && !useSpecial) {
    alert("Please select at least one character type.");
    return "";
  }

  // Build character set based on user selections
  var charset = "";
  if (useLowercase) {
    charset += lowercase;
  }
  if (useUppercase) {
    charset += uppercase;
  }
  if (useNumeric) {
    charset += numeric;
  }
  if (useSpecial) {
    charset += special;
  }

  // Generate password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);