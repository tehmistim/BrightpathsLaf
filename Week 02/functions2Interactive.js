// function add(x, y) {
//     return x + y
// }

// function subtract(x, y) {
//     return x - y
// }

// const numA = add(54, 627)
// const numB = add(235, 8654)

// const numC = subtract(numB, numA)

// console.log(numC) // 8208
// console.log(numA)
// console.log(numB)
// console.log(numA - numB)

// // 
// DECLARATION
function giveMeFive() {
    return 5
}
console.log(giveMeFive())

//
// EXPRESSION

const sayHi = function() {
    return 'Hi!'
}

//
// ARROW
const giveMeFive = () => {
    return 5
}
console.log(giveMeFive())

// // const giveMeFive = () => 5

// const makeArr = (one, two, three) => {
//     let arr = [one, two, three]
//     return arr
// }
// console.log(makeArr())

// //

const innerFn = () => 'I am a callback!'

const anotherInner = () => 'Hello there'

const outerFn = callback => console.log(callback())

outerFn(innerFn)

outerFn(anotherInner)

// //

const createAdder = x => (y) => x + y

// here's the same function written as a declaration
function createAdderDec(x) {
    return function(y) {
        return x + y
    }
}

const addFive = createAdder(5)
const addTen = createAdder(10)

addFive(12) // output: 17
console.log(addFive(10))
addFive(40) // output: 45
console.log(addFive(33))
addTen(3) // output: 13
console.log(addTen(100))
//

// let numArray = [0, 1, 2, 3, 4]

// //without arrow function
// numArray.forEach(function(element, index){
//     console.log(`${element} is at index ${index}`)
// })

// //with arrow function
// numArray.forEach((elem, i) => console.log(`${elem} is at index ${i}`))
//////////////////////////////----------------------------///////////////////////////////

//  HIGHER ORDER FUNCTION IN WORK  //
//  does not return a function     //
const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num2 - num1;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const calculator = (num1, num2, callback) =>{
    if (+num1 && +num2){  //"+" equals a string of num
        num1 = +num1 //can the string "+" be turned into a number from the parameter in the defined calculator input
        num2 = +num2 //can the string "+" be turned into a number from the parameter in the defined calculator input
        return callback(num1, num2) // returning the numbers
    } else {
        // console.log('you need to send in a number parameter')
    }
}

const result = calculator(83, '63', add)

//console.log(result);

// ARRAY

const dogProducts = [
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99, 
      displayPrice: 13.99
    }, 
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00, 
      displayPrice: 6.00
    }, 
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99, 
      displayPrice: 4.99
    }
]

const catProducts = [
  {
    name: 'mouse toy', 
    colors: ['pink', 'grey', 'black'], 
    category: 2, 
    inventory: 125, 
    basePrice: 2.50, 
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00, 
    displayPrice: 10.00
  }, 
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99, 
    displayPrice: 22.99
  }
];

const applyPercentDiscount = (product, discount) => {
    product.displayPrice = product.basePrice * (1 - discount) 
    // this is taking the original display price and change it to base price times the discount and subtract it from the display price
}

const applyFlatRateDiscount = (product, discount) => {
    product.displayPrice = product.basePrice - discount
    // makes the displayPrice the discount minus the base price
}

const applyDiscounts = (arr, callback, discount) => {
    arr.forEach(product => {
        callback(product, discount)
    })
}

// applyDiscounts(dogProducts, applyPercentDiscount, 0.25);

// console.log(dogProducts);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// const applyDiscountsByCategory = (arr, category, callback, discount) => {
//     arr.forEach(product =>{
//         if (product.category === category){
//             callback(product, discount)
//         } else {
//             console.log(`The ${product.name} is not in the discounted category`)
//         }
//     });
// };

// applyDiscountsByCategory(catProducts, 1, applyFlatRateDiscount, 1.00)

// console.log(catProducts);

//////////////---------------------------------///////////////////

function makeSandwich(bread){
    return function(ingredients){
        let order = `You ordered a ${bread} bread sandwich with ${ingredients}`;

        for (let i = 0; i < ingredients.length; i++) {
             if (i === ingredients.length - 1 && i !== 0) {
                order += `and ${ingredients[i]},`;                //multiple ingredients
            } else if (ingredients.length === 1) {
                order  += `${ingredients[i]},`;                    //only one ingredient
            } else {
                order += `${ingredients[i]}, `;
            }
        }
        return order
    };
}

const makeWheatSandwich = makeSandwich("wheat");
const makeWhiteSandwich = makeSandwich("White")
const results = makeWheatSandwich(['pickles', 'cheese', 'ham', 'lettuce']);

const results2 = makeWhiteSandwich(['turkey', 'mayo', 'onions', 'lettuce']);



console.log(results2);