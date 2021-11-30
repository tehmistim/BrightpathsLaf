// Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function longestLength(str) {
    
    let lengths = str.split(' ').map(word => word.length)
    return Math.max(...lengths)

}
  
  longestLength("The quick brown fox jumped over the lazy dog");

