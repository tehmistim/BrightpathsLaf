// Write your solution below:

let size = ['s', 'm', 'l', 'l', 'l', 's', 's', 'm', 'm'];
    size.sort().reverse()

        console.log(size)
//-------------------------------------------------------------

const orders = (shirts) => {
    shirts.sort().reverse()
    return shirts
}

console.log(orders(size))