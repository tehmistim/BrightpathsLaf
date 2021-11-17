function convertToRoman(num) {
    var numeral = "";
     var arr = [
                {number:1, roman: "I"},
                {number:4, roman: "IV"},
                {number:5, roman: "V"},
                {number:9, roman: "IX"},
                {number:10, roman: "X"},
                {number:40, roman: "XL"},
                {number:50, roman: "L"},
                {number:90, roman: "XC"},
                {number:100, roman: "C"},
                {number:400, roman: "CD"},
                {number:500, roman: "D"},
                {number:900, roman: "CM"},
                {number:1000, roman: "M"}
     ]
     while(num > 0){
      var searching = arr.filter(function(myArr){
        if(myArr.number <= num){
          return myArr.number
        }
      })
      var latest = searching.pop()
      var full = Math.floor(num / latest.number)
      for(let i = 0; i<full; i++){
        numeral +=latest.roman
      }
      num = num % latest.number
     }
     return numeral 
    }
    
    console.log(convertToRoman(55));