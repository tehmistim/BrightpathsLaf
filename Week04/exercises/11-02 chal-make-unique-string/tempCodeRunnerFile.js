let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = '';
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});

console.log(uniqueChars)