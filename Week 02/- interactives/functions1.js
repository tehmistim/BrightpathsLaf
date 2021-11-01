let jonSnowHealth = 100

//jonSnowHealth.toString()

//console.log(typeof jonSnowHealth)

//console.log('Jon\'s health is ' + jonSnowHealth)

let theWinnerIs = 'Jamie is the winner.'

let newWinner = theWinnerIs.replace('Jamie', 'Jon')

console.log(newWinner)

let newWinnerLower = newWinner.toLowerCase()
console.log(newWinner)

let newWinnerSplit = newWinnerLower.split(' ') // this splits the words into their own strings and not together
console.log(newWinner)

let newWinnerKebob = newWinnerSplit.join('-')
console.log(newWinner)

function isJonAlive(){
    if (jonSnowHealth > 0){
        console.log('Jon is alive!')
    }   else {
        console.log('RIP Jon Snow')
    }
}

isJonAlive()

function surpriseAttack(attack) {
    jonSnowHealth -= attack
    console.log(`Jon's health is now ${jonSnowHealth}`)
}

surpriseAttack('42')
isJonAlive()

function greeting(person1, person2){
    console.log(`${person1} and ${person2} say hello to each other.`)
}

greeting('Jon Snow', 'Ned Stark')

function rollDice() {
    let possibleRoles = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRoles.length)
    return possibleRoles[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()
console.log(firstRoll)
console.log(secondRoll)

function diceMultiplier() {
    let firstRoll = rollDice()
    let secondRoll = rollDice()
    return firstRoll * secondRoll
}

let multipliedNumber = diceMultiplier()

console.log(multipliedNumber)
