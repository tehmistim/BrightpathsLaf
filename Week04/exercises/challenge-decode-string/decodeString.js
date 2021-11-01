// function decode(str) {
    
//     var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
//     var alphabets2 = ['H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];
    
//     var resultStr = [];
//     for(let i=0; i<str.length; i++){
//         for(let j =0; j<alphabets.length; j++){
//             if(str[i] === alphabets[j]){
//             resultStr.push(alphabets2[j]);
//             }
//         }
//     }
//     return resultStr.join("");
//   };

//   decode("SERR CVMMN!");
//-----------------------------------------------------------------//
// function encrypt(char, shift) {
//     // let include =        
//     //  alphabet.includes(
//     //     char.toUpperCase()); 
       
//     if (include){      
//      let position =         
//       alphabet.indexOf(
//        char.toUpperCase());
        
//      let newPosition = 
//       (position + shift) %  
//         alphabet.length;
//      return alphabet[newPosition];
//    } else  return char;
// }

// console.log(encrypt('The quick brown fox jumped over the lazy dog', 26));
//----------------------------------------------------------------------------------------------

// var myCipher = [];
//       var myArray = []; 
      
//       for (i=0; i < str.length; i++) {
//         // convert character - or don't if it's a punctuation mark.  Ignore spaces.
//         if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
//              myArray.push(String.fromCharCode(str.charCodeAt(i) + 13));
//          } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) { 
//              myArray.push(String.fromCharCode(77 - (90 - str.charCodeAt(i))));
//          } else if (str.charCodeAt(i) > 32 && str.charCodeAt(i) < 65) {
//              myArray.push(str.charAt(i));
//          }
//                // push word onto array when encountering a space or reaching the end of the string
//                 if (str.charCodeAt(i) == 32) {
//           myCipher.push(myArray.join(''));
//           myArray.length = 0;      
//         }
//                 if (i == (str.length - 1)) {
//            myCipher.push(myArray.join(''));
//         }
//         return myCipher.join(" ");
// }

// console.log(myCiper('The brown cow moos'))     
//--------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------SOLUTION THAT WORKS
// function decodeString(code) {
//     // Capture the number to decode the string
//     let decipher = Number(code[0])
//     // Create a solution string to add letters to one-by-one
//     let solution = ""
//     // Start iterating through the string, starting at index 1 to avoid the decipher
//     for (let i = 1; i < code.length; i++) {
//       // Capture the ascii code for the given letter, plus the value of the decipher
//       let strValue = code[i].charCodeAt() + decipher
//       // Add the letter the belongs to the updated ascii value to the solution string
//       solution += String.fromCharCode(strValue)
//     }
//     // return the solution string
//     return solution
//   }
  
//   console.log(decodeString('1a'))