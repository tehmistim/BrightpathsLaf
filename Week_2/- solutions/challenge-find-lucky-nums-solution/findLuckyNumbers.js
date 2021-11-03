// Write your code below this line.
function findLuckyNumbers(n) {
  let possibleNumbers = [1,2,3,4,5,6,7,8,9,10]
  let luckyNumbers = []
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * possibleNumbers.length);
    luckyNumbers.push(possibleNumbers[x])
    possibleNumbers.splice(x, 1)
  }
  return luckyNumbers
}