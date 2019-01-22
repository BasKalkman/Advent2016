const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\r\n');

let countValid = 0;

data.forEach(triangle => {
  let [a, b, c] = triangle.match(/\d+/g).map(Number);

  let valid = a + b > c && b + c > a && c + a > b;

  if (valid === true) {
    countValid++;
  }
});

console.log('Part 1: ', countValid);
