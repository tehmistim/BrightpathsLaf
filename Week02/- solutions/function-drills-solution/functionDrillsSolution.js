////////////////// PROBLEM 1 ////////////////////
function helloWorld() {
  console.log('Hello, World!')
}

helloWorld()

////////////////// PROBLEM 2 ////////////////////
function printName(name) {
  console.log(name)
}

printName('Cameron')

////////////////// PROBLEM 3 ////////////////////
function greeting(name) {
  name = String(name)
  console.log(`Hello, ${name}`)
}

greeting('Sam')

////////////////// PROBLEM 4 ////////////////////
function add(num, num2) {
  num = +num
  num2 = +num2
  return num + num2
}

let sum = add(12, 24)

////////////////// PROBLEM 5 ////////////////////
function nameCheck(name) {
  if (name === "Steven") {
    return "What is up Steven?"
  } else if (name === "Bryan") {
    return "Hey Bryan!"
  } else {
    return `Cool name, ${name}`
  }
}

let nameGreeting = nameCheck('Steven')

////////////////// PROBLEM 6 ////////////////////
function faveColorFinder(color) {
  if (color === "red") {
    return "red is a great color"
  } else if (color === "green") {
    return "green is a solid favorite color"
  } else if (color === "black") {
    return "so trendy"
  } else {
    return "you need to evaluate your favorite color choice"
  }
}

let colorRating = faveColorFinder('green')

////////////////// PROBLEM 7 ////////////////////
let namesArr = ['Cameron', 'Riley', 'Eric', 'Brenna', 'Karl']

function printAllNames(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(names[i])
  }
}

printAllNames(namesArr)

////////////////// PROBLEM 8 ////////////////////
function thatsOdd(num) {
  if (num % 2 === 0) {
    return "That's not odd!"
  } else {
    return "That is odd indeed!"
  }
}

let oddChecker = thatsOdd(7)

////////////////// PROBLEM 9 ////////////////////
let bigOrSmallArray = [1,101, 102, 2, 103, 4, 5, 6, 107]

function bigOrSmall(arr) {
  let answers = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      answers.push("big")
    } else {
      answers.push("small")
    }
  }
  return answers
}

let arrayEvaluator = bigOrSmall(bigOrSmallArray)

////////////////// PROBLEM 10 ////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Glimmer'

function theEliminator(contestants, loser) {
  for (let i = 0; i < contestants.length; i++) {
    if (contestants[i] === loser) {
      contestants.splice(i, 1)
    }
  }
  return contestants
}

let updatedContestants = theEliminator(contestants, loser)

////////////////// PROBLEM 11 ////////////////////
let sampleString = "Hi, my name is Kylo."

function makeUppercase(str) {
  console.log(str.toUpperCase())
}

makeUppercase(sampleString)

////////////////// PROBLEM 12 ////////////////////
function emailCheck(email) {
  email = String(email).trim()

  if (email.includes('@')) {
    return 'email verified'
  } else {
    return 'must provide a valid email address'
  }
}


////////////////// PROBLEM 13 ////////////////////
function frogPurchaser(gold) {
  return gold / 3
}

let totalFrogs = frogPurchaser(100)

////////////////// PROBLEM 14 ////////////////////
function frogPurchaser2(gold) {
  if (gold % 3 === 0) {
    return gold / 3
  } else if ((gold - 1) % 3 === 0) {
    return (gold - 1) / 3
  } else {
    return (gold - 2) / 3
  }
}

let totalFrogs2 = frogPurchaser2(100)

////////////////// PROBLEM 15 ////////////////////
let sampleArray = [0,1,2,3,4,7,5,6,8,9]

function checkArrayAscending(arr) {
  let comparisonValue = arr[0]
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] <= comparisonValue) {
      return false
    } else {
      comparisonValue = arr[i]
    }
  }
  return true
}

let arrayIsAscending = checkArrayAscending(sampleArray)

////////////////// PROBLEM 16 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"]

//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "sailorDuck", "rubberDuck"]

//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["duck", "realDuck"]