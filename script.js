//prompts for password criteria
//select which criteria to use- if select else if, if

//prompt the length of password-choose 8-128

//prompt character type-choose lower, upper, numeric, or special character

//answer to each prompt-answer chould be validated and one character type should be selected

//when all prompts are answered-password is generated-either in alert or written on page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);