// Welcome message

console.log("Welcome to the password validator tool.");

// Prompt

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//  console.log(`received: ${readline}`);

reader.question("Please input password to validate", function(answer) {
  let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;  
  if (answer >= 10 && spChars(answer) == true) {
        console.log("Accepted. Stand back, the code is processing");
      } else {
        console.log("Minimum of 10 characters required");
      }
});






//INVALID MUMBOJUMOB BELOW

// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");

// welcome.question("Please input password to validate");

// myInput.onfocus = function() {

//     document.getElementById('message').style.display = 'block';
  
//   }

//   myInput.onkeyup = function() {

// var lowerCaseLetters = /[a-z]/g;
//   if(myInput.value.match(lowerCaseLetters)) {
//     letter.classList.remove('invalid');
//     letter.classList.add('valid');
//   } else {
//     letter.classList.remove('valid');
//     letter.classList.add('invalid');
// }
// var upperCaseLetters = /[A-Z]/g;
//   if(myInput.value.match(upperCaseLetters)) {
//     capital.classList.remove('invalid');
//     capital.classList.add('valid');
//   } else {
//     capital.classList.remove('valid');
//     capital.classList.add('invalid');
//   }
// var numbers = /[0-9]/g;
//   if(myInput.value.match(numbers)) {
//     number.classList.remove('invalid');
//     number.classList.add('valid');
//   } else {
//     number.classList.remove('valid');
//     number.classList.add('invalid');
//   }
//   if(myInput.value.length >= 8) {
//     length.classList.remove('invalid');
//     length.classList.add('valid');
//   } else {
//     length.classList.remove('valid');
//     length.classList.add('invalid');
//   }
// }

