// Write your code below this line.

function luckyNumbers(n){
    let array = [];

    for (let i = 1; i < (n + 1); i++){
       randomNum = ((Math.floor(Math.random() * 10) + 1));
    }
    array.push(randomNum);
    return array;
}
console.log(luckyNumbers(5))
