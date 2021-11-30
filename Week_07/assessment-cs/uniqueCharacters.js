// Unique Characters 
// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function is_unique(str) {
    
    const obj = {};
    
    for (var z = 0; z < str.length; ++z) {
       
        var ch = str[z];
       
        if (obj[ch]) 
        
        return false;
       
        obj[ch] = true;
    }

    return true;
 }
 
 console.log(is_unique("The box")); // true
 console.log(is_unique("Poop")); // false

// Constant runtime O(1), space complexity is constant O(1)