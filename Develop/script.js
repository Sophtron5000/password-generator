// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // THEN I am presented with a series of prompts for password criteria
    //issue prompts to user
      //prompted for the length
        //at least 8 characters and no more than 128 characters
      //asked for character type
        // confirm whether or not to include lowercase, 
        // uppercase, 
        // numeric, 
        // and/or special characters
      //Input should be validated 
        //at least one character type should be selected
      //a password is generated that matches the selected criteria
        //How?
};
var characterLength = (>=8, <=128);
function issuePrompts("Please enter character length"){
   characterLengthPrompt("8-128");
   var passwordLength = 
   for (var i = 0; i = characterLength; i++); {
     
   }
}

function confirmLowercase(){
  var lowCase = "abcdefghijklmnopqrstuvwxyz"
  // confirm whether or not to include lowercase, ???
}


function validateUserChoice(){
  //make sure that at least one character type should be selected
}