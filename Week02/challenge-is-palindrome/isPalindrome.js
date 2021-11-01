function isPalindrome(word) {
  let j = word.length - 1
  for (let i = 0; i < (word.length - 1) / 2; i++) {
    if (word[i] !== word[j]) {
      return false
    }
    j--
  }
  return true
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('a'));
console.log(isPalindrome('noon'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('Racecar'));
console.log(isPalindrome('Purple'));
console.log(isPalindrome('purple'));
console.log(isPalindrome('happy'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('tat'));
console.log(isPalindrome('pap'));





