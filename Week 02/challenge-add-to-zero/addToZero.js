// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
//var sum = 0;
let value = "False"
// Write your solution below:

for (i = 0; i < array.length; i++){
//     sum += array[i]
//     console.log(true)
// if (sum > 0)
//     console.log(false)
// }
 for (let a = 0; a < array.length; a++){
    if (i !== a){
         if (array[i] + array[a] === 0){
        value = "True"
         }
    }
}
}
console.log(value)

