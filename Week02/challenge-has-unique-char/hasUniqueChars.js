// Write your code below
//let word = 'Monday'

// const isUnique = input => {
//     if (input.length > 128) {
//       return false;
//     }
//       let char_set = Array(128).fill(false);// initialize array of size 128 with boolean value false
  
//     for (let i = 0; i < input.length; i++) {
//       let val = input[i];
//       if (char_set[val]) {
//         return false;
//       }
//       char_set[val] = true;
//     }
//     return true;
//   };
  
//   console.log(isUnique("abcdefghijklmopqrstuv")); // -> true
//   console.log(isUnique("abcdef")); // -> true  (pose question)
//   console.log(isUnique("89%df#$^a&x")); // -> true
//   console.log(isUnique("abcAdef")); // -> true
//   console.log(isUnique("abcaef")); // -> false
//   console.log(isUnique("aaaabbc")); 
//   console.log(isUnique("Moonday"));
//   console.log(isUnique("Monday"));

  // creating object

  function checkForUnique(str){
    var hashtable = {};
    for(var i=0,len=str.length;i<len;i++){
        if (hashtable[str[i]] != null){
            hashtable[str[i]] = 1;
            return false;
        }else{
            hashtable[str[i]] = 0;
        }
    }
    return true;
}
console.log(checkForUnique("Friiday"));
console.log(checkForUnique("hop"))
console.log(checkForUnique("dog"))
console.log(checkForUnique("sheep"))
