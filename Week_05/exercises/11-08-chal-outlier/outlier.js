function oddOrEven(array, trigger) {
    if (trigger === "odd") {
       return array.filter(num => num % 2 !== 0)
    } else {
       return array.filter(num => num % 2 === 0)
    }
 }
 
 let integers = [4, 4, 2, 9, 11, 14, 77, 10]
 
 console.log(oddOrEven(integers, "odd"));
 console.log(oddOrEven(integers, "even"));

