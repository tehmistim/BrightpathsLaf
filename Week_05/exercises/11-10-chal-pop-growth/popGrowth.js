numbers = [1500, 5, 100, 5000]

function nbYear(numbers) {
	var p0 = parseInt(numbers[0]);
	var percent = parseInt(numbers[1]);
	var aug = parseInt(numbers[2]);
	var p = parseInt(numbers[3]);
	
	for (var y = 0; p0 < p; y++) {
    p0 = ((p0 * (percent / 100)) + aug);
  }
  
  return y + "years";
}


console.log(nbYear(numbers))
//----------------------------------------------------//
numbers = [1500, 5, 100, 5000]

const pop = (p0, percent, aug, popSur) => {
    var p0 = parseInt(numbers[0]);
    var percent = parseInt(numbers[1]);
    var aug = parseInt(numbers[2]);
    var popSur = parseInt(numbers[3])
    for(nbYear = 0; p0 < popSur; nbYear++){
        p0 = ((p0 * (percent / 100)) + aug)
    }
    return nbYear + "years"
}


console.log(pop(numbers))


//--------------------------------------//
function nbYear(p0, percent, aug, p) {
    for (var y = 0; p0 < p; y++) {
        p0 = p0 * (1 + percent / 100) + aug;
    }
    return y;
}

console.log(nbYear(1000, 2, 50, 1200))
  