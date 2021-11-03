// Write your solution below:
// function pigLatin (string){
//     let userInput = 'Fridays seem to create a mental crash.'
//         for (let userInput[i] = 0; userInput[i] < userInput[i].length; i++){
//             userInput.splice()
//         }

// }
//-------------------------------------------------------------------------------------//

function pitLatin(str){
    let stringIntoList = str.split(' ')
    let consonants = 'bcdfghjklmnpqrstvwxyz'
    //console.log(stringIntoList)
    for(let i = 0; i < stringIntoList.length; i++){
        //console.log(stringIntoList[i])
        //console.log(stringIntoList[i][0])  //second brackets is the position of the string word
        if(consonants.includes(stringIntoList[i][0])){
            stringIntoList = stringIntoList[i].slice(1) + stringIntoList[i][0] + 'ay'
            //console.log(fixedWord)
        } else {
            stringIntoList[i] = stringIntoList[i] + 'yay'
            //console.log(fixedVowelWord)
        }
        //console.log(stringIntoList)
    } 
    let result = stringIntoList.join(' ')
    console.log(result)
    return result
}

pitLatin('break this string into pieces at all costs')


//--------------------------------------------------------------------------------------//

// let englishStr = "This is an attempt at the pig latin challenge";

// const pigLatinConverter = (str) => {

//     const openArr = str.split(" "); //array of each word based on spaces between them

//     for(let i = 0; i < openArr.length; i++){
//         let eachWord = openArr[i];
//         //console.log(eachWord[0]);

//         if((elem[0].includes('a'))  (elem[0].includes('i'))  (elem[0].includes('u'))){
//             let pigWord = elem[0];
//             console.log(pigWord); ///edit the pigWord to have yay
//         } else {
//             openStr[i] = //move vowel to the end and add ay
//         }
//     }
//     return openStr ;
// }

// pigLatinConverter(englishStr);

//-------------------------------------------------------------------------//

function pigLatin(str){
    let text = str.split(' ')
      if(text[0] !== ('a' || 'e' || 'i' || 'o' || 'u')){
        text.push(text[0])
        text.shift(text[0])
        text.push('ay')       //('a', 'y')
        console.log(text)
        return text
        } else {
          text.push('yay')    //('y', 'a', 'y')
          console.log(text)
          return text;
        }
}
  
pigLatin('apple')

//---------------------example below not related to pigLatin exercise----------------//
let flour = "cake flour"
let eggs = "duck eggs"
let milk = "goat milk"

function makeWaffles(){
    let flour = "rice flour"
    let milk = "almond milk"

    console.log(`I am making waffles with ${flour}, ${eggs} and ${milk}.`)
}
makeWaffles()
//------------------flour and such is just an example of where things are working from-----------//

