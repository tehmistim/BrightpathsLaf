// This challenge, you’ll write a function, called best, that returns the 
// maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in 
// the order they happened throughout the day.

// It should return the maximum possible profit on the 
// stock for that day.

// For example, with the following prices, our best option 
// would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

//--------------higher order function----------------------//

// const stocks = [15, 10, 20, 22, 1, 9];
                // price[i] = 15
                // price[j+1] = 10
const best = (stocks) => {
    let best = 0
    for(let i = 0; i < stocks.length; i++){
        for(let j = i; j < stocks.length; j++){
            if(stocks[i] < stocks[j]){  // this is comparing profit from first number - next number
                if(stocks[j] - stocks[i] > best){  // this is the remainder from first # -2nd # and is it greater than 0
// 20 & 21 could be combined by be written as "if(stocks[i] < stocks[j] && stocks [j] - stocks[i] > best){"
                    best = stocks[j] - stocks[i];
                }
            }
        }
    }
    return best;
} 

console.log(best([15, 10, 20, 22, 1, 9]));
console.log(best([1, 2, 3, 4, 5]));
console.log(best([2, 3, 10, 6, 4, 8, 1]));
console.log(best([7, 9, 5, 6, 3, 2]));
console.log(best([0, 100]));

console.log(best([5, 4 , 3, 2, 1]));
console.log(best([100]));
console.log(best([100, 0]));

//---------------------declaration method----------------------//

function best(array){
    let best = 0;
    for(i = 0; i < array.length - 1; i++){
      for(j = 1; j < array.length - 1; j++){
        if(array[j] > array[i] && array[j] - array[i] > 0){ 
          best = array[j] - array[i]
        }
      }
    }
    return best
  }
  let test = best([1, 3, 5, 2])
  console.log(test)
