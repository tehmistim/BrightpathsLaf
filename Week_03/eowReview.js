// helping break down functions and what to choose to create one

// let argument = 'this will be used'  ////used from line 3 to line 27

// function whatever(string) {
//     console.log(parameter + ' to do stuff')  ////don't forget line 3
// }

// whatever(argument)  // sometimes called "passing in an argument"


//------------------NOW lets use arrow function-------------//MOST COMMONLY USED AFTER FUNCTIONS 2

// const whatever = (parameter) => {
//     console.log(parameter + ' to do stuff')
// }                                                ////don't forget line 3

// whatever(argument)

//------------------now this will be an expression function----------//

// let whatever = function(parameter){
//     console.log(parameter + ' to do stuff')
// }                                                ////don't forget line 3

// whatever(argument)
// whatever('pass in an argument')

//----------------------------------console log vs. returning------------------------------------------//
// let argument = 'show me the string'

// const myFunction = (parameter) => {
//     parameter = parameter + '!'
//     console.log(`here's your smoothie`)       //// anything you want printed out must go before a return
//     return parameter                          //// nothing more in the function gets processed...end game with a return
// };

// // //myFunction('show me the string')
// // myFunction(argument) //returning the argument brings it outside of the function putting the ! into the string
// // console.log(argument)  //does not print out line 33 for the extra ! that parameter has added to it

// let updatedParameter = myFunction(argument);        //// assigning the function to a new variable for later use
// console.log(updatedParameter);                      //// this returns the value outside of the function


// console.log(myFunction(argument));                  //// to call the function 

//---------------------grabbing stuff out of arrays and objects------------------------//

// let mess = [1, 2, [3, 4, [5], 6], 7, 8 [9], 10]

// console.log(mess[0])  //starting at first number
// console.log(mess[1])
// console.log(mess[2][0]) // gives us just the number 3 without the rest of the array and array inside of it
// console.log(mess[2][1])
// console.log(mess[2][2][0])  // gives us the number 5 in the array inside of the array
// console.log(mess[2][3])  // gives us the number 6
// console.log(mess[3])
// console.log(mess[4])
// console.log(mess[5][0])
// console.log(mess[6])

//---------------------access objects------------------//

let mess2 = [
    {
        food: 'yeah',
        sleep: 'nah'

    },
    
    {
        food: 'yeah, please',
        sleep: 'nah friend'
        
    },
    
    {
        food: 'yeah, i wish',
        sleep: 'nah pal'
        
    },
    {
        food: 'yeah, duh',
        sleep: 'nah buddy'
        
    }
    
]

// console.log(mess2[0])  // is object 2 in the array
// console.log(mess2[0].food)  // is the object food inside of object 2 in the array using dot notation
// console.log(mess2[0]['sleep'])  // is object sleep inside of object 2 in the array using bracket notation

// const printForMe = (arrayOfObjects) => {
//     // loop through the array
//     for (let i = 0; i < arrayOfObjects.length; i++) {
//         //console.log(arrayOfObjects[i])  ----------> refer to line 109
//         // loop through every key value pair (object in the object)
//         for (let elem in arrayOfObjects[i]) {
//             console.log(arrayOfObjects[i][elem])  //elem is the object information in the main object
//             // ------------------------->  refer to line 111
//         }
//     }
        

//             // then print stuff and not returning
// }

// //printForMe(mess2)  //checks for the first loop of objects to print out
// printForMe(mess2) 

// let rainbow = {
//     first: 'red',
//     second: 'orange',
//     third: 'yellow',
//     fourth: 'green',
//     fifth: 'blue',
//     sixth: 'blue',
//     seventh: 'purple'
// };

// for (let color in rainbow) {        // this defines color as each key "first, second, third, etc." in rainbow.  
//                                     //USED FOR MORE THAN ONE KEY in the object rainbow
//     console.log(rainbow[color])
//     console.log('key is', color, 'value is', rainbow[color])  //can console out as keystrings or sentences
// };

// -----------------grab objects inside of object -----------------//

// let rainbow = {
//     first: 'red',
//     second: 'orange',
//     third: 'yellow',
//     fourth: 'green',
//     restOfColors: {
//         fifth: 'blue',
//         sixth: 'purple',
//         seventh: 'indigo'
//     }
// };

// // console.log(rainbow) // gives you the rainbow
// // console.log(rainbow.restOfColors)  //only gives you the restOfColors object
// console.log(rainbow.restOfColors.fifth)  // gives you just the fifth object in the restOfColors object

// rainbow.restOfColors.fifth = 'indigo' // reassigns the fifth object in the restOfColors object

// console.log(rainbow.restOfColors.fifth)  //gives you the reassigned color of blue to indigo

//-----------------------ARRAY METHOD-------------------------//

let myArray = [1, 2, 3, 4, 5, 6, 7, 8,]
    const addTogether = (counter, numberFromArray) => counter + numberFromArray
    let result = myArray.reduce(addTogether)
    console.log(result)
// console.log(addTogether(2,3))  ////adds only two numbers


// const array1 = [1, 2, 3, 4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;
//                                                   above is shorthand for 'return previousValue + currentValue'