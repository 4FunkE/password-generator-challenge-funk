//prompt the length of password-choose 8-128, //prompt character type-choose lower, upper, numeric, or special character
var userChoice = {
    lowerCase: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z",
    upperCase: "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
    numeric: 1234567890,
    specialCharacter: "~`!@#$%^&*()_-=+{}[]\|/;:'<>,.?",
};

console.log(userChoice.lowerCase);
console.log(userChoice.upperCase);
console.log(userChoice.numeric);
console.log(userChoice.specialCharacter);
//prompts for password criteria


//answer to each prompt-answer chould be validated and one character type should be selected

//when all prompts are answered-password is generated-either in alert or written on page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//when you press the generate button a window prompts 
generateBtn = function() {
    var userChoice = window.prompt("How many characters would you like your password to have?") 
    if(!userChoice) { //if thr user choice (variable) NOT (!) cancled then end (return)
        return;
    }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);