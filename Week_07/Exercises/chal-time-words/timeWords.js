const hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six',
         'seven', 'eight', 'nine', 'ten', 'eleven']

const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen']

const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty']


function timeWords(time) {
    if (time === '00:00') {
        return 'midnight'
    }

    if (time === '12:00') {
        return 'noon'
    }

    let [hrs, mins] = time.split(':')
    hrs = parseInt(hrs)
    mins = parseInt(mins)

    let str = hours[hrs % 12] + ' '

    if (mins >= 20) {
        str += tens[Math.floor(mins / 10)] + ones[mins % 10]
    } else if (mins >= 10) {
        str += ones[mins]
    } else if (mins > 0) {
        str += `oh ${ones[mins]}`
    } else {
        str += `o'clock`
    }

    if (hrs >= 12) {
        str += ' pm'
    } else {
        str += ' am'
    }
    
    return str
}

console.log (timeWords('15:05'))


// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     // add a zero in front of numbers greater than 10
//     document.getElementById('time').innerHTML = "The time is " + convertHourToName(h) + " o'clock and " + convertNumberToName(m) + " past";
//     setTimeout(startTime,500);
// }

// function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// } 

// function convertHourToName(num) {
//     if (num > 12) {
//         num -= 12;
//     }
//     return convertNumberToName(num);
// }

// function convertNumberToName(num) {
//     var lowNames = ["zero", "one", "two", "three", 
//                   "four", "five", "six", "seven", "eight", "nine", 
//                  "ten", "eleven", "twelve", "thirteen", "fourteen", 
//                   "fifteen", "sixteen", "seventeen", 
//                   "eighteen", "nineteen"];
//     var tensNames = ["twenty", "thirty", "forty", "fifty", 
//                 "sixty", "seventy", "eighty", "ninety"];
//     var tens, ones, result;
//     if (num < lowNames.length) {
//         result = lowNames[num];
//     } else {
//         tens = Math.floor(num / 10);
//         ones = num % 10;
//         if (tens <= 9) {
//             result = tensNames[tens - 2];
//             if (ones > 0) {
//                 result += " " + lowNames[ones];
//             }
//         } else {
//             result = "unknown"
//         }
//     }
//     return result;
// }

// convertNumberToName(1255)