// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
const isBalanced = (string) => {
    const arr = string.split('');
    let open = [];
    
    const openBrackets = {
      '(': true,
    };
      
    for (let i = 0, length = arr.length; i < length; i++) {
      if (openBrackets[arr[i]]) {
        open.push(arr[i]);
      } else {
        return false;
      }
    }
    
    return !open.length;
  }
  
  console.log(isBalanced('') === true);
  console.log(isBalanced('()') === true);
  console.log(isBalanced(')()') === false);
  console.log(isBalanced(')(') === false);
  console.log(isBalanced('()(()()()())') === true);
  console.log(isBalanced('[](){}') === true);
  console.log(isBalanced('[({})]') === true);
