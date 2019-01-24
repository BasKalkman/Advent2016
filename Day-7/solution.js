const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\r\n');

let result = 0;

data.forEach(str => {
  let currentHypernet = false;
  let abbaHypernet = false;
  let abbaFound = false;

  for (let i = 0; i < str.length - 3; i++) {
    if (str[i] === '[') {
      currentHypernet = true;
    }
    if (str[i] === ']') {
      currentHypernet = false;
    }

    if (str[i] === str[i + 3] && str[i + 1] === str[i + 2] && str[i] != str[i + 1]) {
      if (currentHypernet === false) {
        abbaFound = true;
      } else {
        abbaHypernet = true;
      }
    }
  }
  if (abbaFound && !abbaHypernet) {
    result++;
  }
});

console.log('Part 1: ', result);
