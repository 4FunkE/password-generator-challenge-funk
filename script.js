//prompt character type-choose lower, upper, numeric, or special character
var userChoiceOptions = {
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'],
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numeric: [1,2,3,4,5,6,7,8,9,0],
    specialCharacter: ['!', '@' , '#', '$', '%', '^', '&', '*', '?'],
};

//named variables
var chosenLower;
var chosenUpper;
var chosenNumeric;
var chosenSpecial;

var userChoice;

console.log(userChoiceOptions.lowerCase);
console.log(userChoiceOptions.upperCase);
console.log(userChoiceOptions.numeric);
console.log(userChoiceOptions.specialCharacter);


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//when you press the generate button a window prompts 
var generateBtn = function() {
    //when click button start window prompt
    var onClick = window.prompt("How many characters would you like your password to have? Choose 8-128"); 
    
    //must use 8-128
    if (onClick < 8 || onClick > 128) {
        onClick = parseInt(alert("Invalid: Please choose a number from 8-128."));
    } else {
    //all the other criteria choices
        var userChoiceSpecial = confirm("Would you like to include special characters in your password?");
        var userChoiceLower = confirm("Would you like to include lowercase letters in your password?");
        var userChoiceUpper = confirm("Would you like to include uppercase letters in your password?");
    } 
};

//how will code read input?
if (chosenLower && chosenUpper && chosenNumeric && chosenSpecial) {
    userChoice = (userChoiceOptions.numeric + userChoiceOptions.lowerCase + userChoiceOptions.upperCase + userChoiceOptions.specialCharacter);
}

//generate a random password function for computer
for (var i = 0; i < enter; i++) {
    var userChoiceList = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}


// Write password to the #password input
function writePassword(password) {
  var password = generatePassword.join("");
  var passwordText = document.querySelector("#password");
    //where is the data?
    //userInput(password);
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//answer to each prompt-answer chould be validated and one character type should be selected
//when all prompts are answered-password is generated-either in alert or written on page