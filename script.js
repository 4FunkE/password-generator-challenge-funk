//prompt the length of password-choose 8-128, //prompt character type-choose lower, upper, numeric, or special character
var userChoiceOptions = {
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w','x', 'y', 'z'],
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numeric: [1,2,3,4,5,6,7,8,9,0],
    specialCharacter: ['!', '@' , '#', '$', '%', '^', '&', '*', '?'],
};
//var userChoiceSpecial = window.prompt("Would you like to include special characters in your password?");
//var userChoiceLower = window.prompt("Would you like to include lowercase letters in your password?");
//var userChoiceUpper = window.prompt("Would you like to include uppercase letters in your password?");
  
console.log(userChoiceOptions.lowerCase);
console.log(userChoiceOptions.upperCase);
console.log(userChoiceOptions.numeric);
console.log(userChoiceOptions.specialCharacter);
//answer to each prompt-answer chould be validated and one character type should be selected

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//generate a random password function
function getRandomCharacter(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

//when you press the generate button a window prompts 
var generateBtn = function() {
    //when click button start window prompt
    var onClick = window.prompt("How many characters would you like your password to have? Choose 8-128"); 
    
    //if thr user choice (variable) NOT (!) cancled then end (return)
    if (!onClick) {
        return;
    } 
    
    //used same conversion to help read answers easier
    var passwordLength = (length) => {
        while (length < 8 || length > 128 || isNaN(length)) {
            length = window.alert("invalid: Please choose a number from 8-128");
        }
        return length;
    };
    
    if (passwordLength === true) {
        window.prompt("Would you like to add lowercase letters?");
    }
}
//password length 8-128
  

//when all prompts are answered-password is generated-either in alert or written on page
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(length, allowedCharacterSets) {
    var password = "";
    for (let i = 0; i < allowedCharacterSets.length; ++i) {
  
    }
  
    for (var i = 0; i < length; i++) {
      password += getRandomCharacter(allowedCharacterSets[i % allowedCharacterSets.length]);
    }
    const UNIVERSAL_CHARACTER_SET = allowedCharacterSets.flat();
  
    for (let i = password.length;  i < length; ++i) {
      password += getRandomCharacter(UNIVERSAL_CHARACTER_SET);
    }
  
    return password; 
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);