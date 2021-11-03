let a = [1, 2, 3, 5, 8, 9, 10],
  count = 10;
let missing = new Array();

for (let i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);