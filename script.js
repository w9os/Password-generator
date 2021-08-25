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
  var lowerCaseChar = false
  var upperCaseChar = false
  var numericChar = false
  var specialChar = false
  var length = parseInt (
    prompt("How long would you like your password to be?")
  );

  lowerCaseChar = confirm("Do you want to include lower case characters?");
  upperCaseChar = confirm("Do you want to include upper case characters?");
  numericChar = confirm("Do you want to include numeric characters?");
  specialChar = confirm("Do you want to include special characters?");

  if (isNaN(length) === true) {
    alert("Password length must be provided as a number");
    return;
  }
  if (length < 8 || length > 128) {
    alert("Please provide a number between 8 and 128");
    return;
  }
  if (
    lowerCaseChar === false &&
    upperCaseChar === false &&
    numericChar === false &&
    specialChar === false 
  ) {
    alert('Must select at least one character type');
    return;
  }

  var passworOptions = {
    length: length,
    lowerCaseChar: lowerCaseChar,
    upperCaseChar: upperCaseChar,
    numericChar: numericChar,
    specialChar: specialChar
  };
   
  return passworOptions;
}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePasssword () {

  var password = ""

  // 
  // 

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
