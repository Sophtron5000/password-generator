
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCase = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const or a let ... new javascript 
// => ... new javascript 
  // means function 
  // function generatePassword() {}, instead you could do generatePassword() => {}
// var test += tangerine, that the same thing as var test = test + tangerine
  // you want update test so that it has tangerine added it to it 
// == vs ===, the three checks for value & type, the two only checks for value



function generatePassword(){

var length = prompt("How long do you want your pass to be?");

if(length<8 && length>128){
  alert("Password needs to be in between 8 and 128");
  return null;
}

var wantsLower = confirm("Do you want lower case letters?");
var wantsUpper = confirm("Do you want lower case letters?");
var wantsSpecial = confirm("Do you want special characters?");
var wantsNumber = confirm("Do you want to include? numbers");



var myStore = {
  wantsLower: wantsLower,
  wantsUpper: wantsUpper,
  length: length,
}
console.log()



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
// var characterLength = (>=8, <=128);
// function issuePrompts("Please enter character length"){
//   characterLengthPrompt("8-128");
//   var passwordLength = 
//   ; {
    
//   }
// }

// function confirmLowercase(){
//   var lowCase = "abcdefghijklmnopqrstuvwxyz"
//   // confirm whether or not to include lowercase, ???
// }


// function validateUserChoice(){
//   //make sure that at least one character type should be selected
// }



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