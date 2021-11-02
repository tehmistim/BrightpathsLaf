// Write your solution below:

function removeDuplicateCharacters(string) {
    return string
       .split('')
       .filter(function(item, pos, self) {
          return self.indexOf(item) == pos;
       })
       .join('');
 }
 console.log(removeDuplicateCharacters('hoopsadinguslaaacd'));

 //-------------------------------------------------------

 let test = 'aaabbbcccaabbbcccaaaaaaaasa';
 let result = Array.from(new Set(test)).join('');
 
 console.log(result);

 //---------------------------------------------------------

// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = '';
// chars.forEach((c) => {
//     if (!uniqueChars.includes(c)) {
//         uniqueChars.push(c);
//     }
// });

// console.log(uniqueChars)
//------------------------------------------------------------

var x = "Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Int32,Double,Double,Double"

    x = Array.from(new Set(x.split(','))).toString();

console.log(x)