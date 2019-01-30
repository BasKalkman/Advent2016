const crypto = require('crypto');
const input = 'wtnhxymk';

// Hash function
function hashIt(str) {
  let test = crypto
    .createHash('md5')
    .update(str)
    .digest('hex');

  return test;
}

let result = [];
let i = 0;

while (result.length < 8) {
  let check = input + i;

  let str = hashIt(check);

  if (str.substr(0, 5) == '00000') {
    result.push(str.substr(5, 1));
  }
  i++;
}

console.log('Part 1: ', result.join(''));
