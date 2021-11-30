// Panagram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(s) {
    
    let letters = "abcdefghijklmnopqrstuvwxyz"
    
    s = s.toLowerCase().replace(/[^a-z]/g,'')
    
    for (var i = 0; i < 26; i++)
        
    if (s.indexOf(letters[i]) < 0) 
    
    return false
    
        return true
}
 
console.log(isPangram("is this a pangram"))  // false
console.log(isPangram("Pack my box with five dozen liquor jugs"))  // true
console.log(isPangram("A wizard's job is to vex chumps quickly in fog"))  // true

// linear runtime O(n), space complexity is O(n).