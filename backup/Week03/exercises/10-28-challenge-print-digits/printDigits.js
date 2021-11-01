function printDigits (num) {
    //console.log(num%10);
    while(num >= 10){
        digit = num % 10;
        console.log(digit);
        num = Math.floor(num / 10);
    }
    console.log(num)
}

printDigits(1563)
printDigits(644)
printDigits(33)
printDigits(84336) 