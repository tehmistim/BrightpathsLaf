// Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

let arr = [1, -1];
let arr2 = [42, -84, 66];


function addToZero (arr) {
    
    let sum = arr.reduce((a, b) => a+b, 0)
    
    for (let i = 0; i <arr.length; i++) {
        
        if (sum == 0) {
         return true   
        } else if (sum !== 0) {
            return false
        }
    } 
        
}
    
console.log(addToZero(arr)); // is true
console.log(addToZero(arr2)); // is false

// linear runtime, O(n) and it's space complexity is linear O(n).