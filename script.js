// Assignment Code
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


var generateBtn = document.querySelector("#generate");

function getUserOptions () {
  var hasLowerCaseChar = false
  var hasUpperCaseChar = false
  var hasNumericChar = false
  var hasSpecialChar = false
  var length = parseInt (
    prompt("How long would you like your password to be?")
  );

  hasLowerCaseChar = confirm("Do you want to include lower case characters?");
  hasUpperCaseChar = confirm("Do you want to include upper case characters?");
  hasNumericChar = confirm("Do you want to include numeric characters?");
  hasSpecialChar = confirm("Do you want to include special characters?");

  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  if (length < 8 || length > 128) {
    alert("Please provide a number between 8 and 128");
    return;
  }
  if (
    hasLowerCaseChar === false &&
    hasUpperCaseChar === false &&
    hasNumericChar === false &&
    hasSpecialChar === false 
  ) {
    alert('Must select at least one character type');
    return;
  }

  var passworOptions = {
    length: length,
    hasLowerCaseChar: hasLowerCaseChar,
    hasUpperCaseChar: hasUpperCaseChar,
    hasNumericChar: hasNumericChar,
    hasSpecialChar: hasSpecialChar
  };
   
  return passworOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePasssword () {
  var result = [];
  var possibleChar = [];
  var definiteChar = [];
  var options = getUserOptions();

  if (options.hasLowerCaseChar) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
    definiteChar = push(getRandom(lowerCasedCharacters));
  }
  if (options.hasUpperCaseChar) {
    possibleChar = possibleChar.concat(upperCasedCharacters);
    definiteChar = push(getRandom(upperCasedCharacters));
  }
  if (options.hasNumericChar) {
    possibleChar = possibleChar.concat(numericCharacters);
    definiteChar = push(getRandom(numericCharacters));
  }
  if (options.hasSpecialChar) {
    possibleChar = possibleChar.concat(specialCharacters);
    definiteChar = push(getRandom(specialCharacters));
  }

  for ( var i = 0; i < options.length; i++) {
    var possibleChar = getRandom(possibleChar);
    result.push(possibleChar);
  }

  for ( var i = 0; i < definiteChar.length; i++) {
    result[i] = definiteChar[i];
  }

  return result.join('');
}

var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
