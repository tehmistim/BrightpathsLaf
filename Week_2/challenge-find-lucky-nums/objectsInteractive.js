let person = {
    firstName: "Chandler",
    lastName: "Bong",
    age: 34
}

//console.log(person.firstName)

let meal = {
    appetizer: 'chips & salsa',
    entree: 'al pastor burrito',
    dessert: 'churros',
    drink: 'dr. pepper',
}

//const {appetizer, entree, drink, dessert} = meal

//console.log(drink)

const {appetizer, entree} = meal

// console.log(appetizer)
// console.log(entree)

const {drink: bestSodaEver} = meal

// console.log(bestSodaEver)

// const myAppetizer = meal.appetizer
// const myEntree = meal.entree
// const myDessert = meal.dessert
// const myDrink = meal.drink

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal

// console.log(bestSodaEver)
// console.log(myDrink)

// for (let key in person){
//     console.log(key)
// }

// for (key in person){
//     console.log(key + "-" + person[key])
// }

person.job = "Statistical Analysis and Data Reconfiguration"

person['pets'] = ['Chicken', 'Duck']

// for (let key in person){
//     console.log(key)
// }

// for (key in person){
//     console.log(key + "-" + person[key])
// }

let teams = {
    teamOne: ['ryan', 'alex', 'jennifer'],
    teamTwo: ['henry', 'cole', 'janice'],
    teamThree: ['goldie', 'carter', 'blake'],
    teamFour: ['amy', 'holly', 'ray'],
    teamFive: ['susan', 'david', 'wallace']
}

delete teams.teamTwo

// for (let team in teams){
//     console.log(team)
// }

class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting() {
        console.log(`Hi, my name is ${this.name} and I am a(n) ${this.age} year(s) old ${this.breed}`)
    }
}

let lassie = new Dog('Lassie', 'Collie', 18)
// console.log(lassie.name)

let beethoven = new Dog('Beethoven', 'St. Bernard', 12)
// console.log(beethoven.breed)

lassie.greeting()
beethoven.greeting()

for (key in lassie){
    console.log(lassie[key])
}
