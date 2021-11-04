const axios = require('axios').default;

//GET METHOD
// axios.get('http://localhost:3000/Barksdale')
//     .then(response => {
//         console.log(response.data)
//     })

// axios.post('http://localhost:3000/Barksdale', {
//     "number": "7021234567"
// })
//     .then(response => {
//         console.log(response.data)
//     })
//     .catch(error => {
//         console.log(error)
//     })

let encrypted = []   ///defining an array
function skipFive(num) {            //creating the function
    let toSkip = num.toString().split("");  //cannot invoke numbers and must turn into a string then split it into the array
    for (let i = 0; i < toSkip.length; i++) {
        if  (toSkip[i] === '5'){            //takes 5
            encrypted.push(0)               //changes it to 0
        } else if (toSkip[i] === '0'){
            encrypted.push(5)
        }
        switch(toSkip[i]){
            case '1':
                encrypted.push(9)
            break;
            case '2':
                encrypted.push(8)
            break;
            case '3':
                encrypted.push(7)
            break;
            case '4':
                encrypted.push(6)
            break;
            case '6':
                encrypted.push(4)
            break;
            case '7':
                encrypted.push(3)
            break;
            case '8':
                encrypted.push(2)
            break;
            case '9':
                encrypted.push(1)
            break;
        }
    }
    // console.log(encrypted)
    let EncryptedNumber = encrypted.toString().replace(/,/g, '')  //takes the numbers puts them into a string then replaces globally all 
                                                                //      the ,'s to nothing
    console.log(encryptedNumber)
        axios.post('http://localhost:3000/Barksdale', {
            "number": encryptedNumber
        })
            .then(response => {
                console.log('API RESPONSE', response.data)
        })
            .catch(error => {
                console.log('API RESPONSE', error)
        })
}

skipFive(7021234567)