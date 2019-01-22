const fs = require('fs');

const data = fs
  .readFileSync('./input.txt', { encoding: 'utf8' })
  .trim()
  .split('\r\n');

const keypad = {
  x0y0: 1,
  x1y0: 2,
  x2y0: 3,
  x0y1: 4,
  x1y1: 5,
  x2y1: 6,
  x0y2: 7,
  x1y2: 8,
  x2y2: 9
};

const code = [];

data.forEach(input => {
  let x = 1;
  let y = 1;

  for (char of input) {
    if (char === 'U' && y > 0) {
      y--;
    }
    if (char === 'D' && y < 2) {
      y++;
    }
    if (char === 'L' && x > 0) {
      x--;
    }
    if (char === 'R' && x < 2) {
      x++;
    }
  }

  let coords = `x${x}y${y}`;
  console.log(coords);
  let keyNumber = keypad[coords];
  code.push(keyNumber);
});

console.log('Part 1: ', code.join(''));

// Part 2
