const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split(',');

const dirs = {
  n: { L: 'w', R: 'e' },
  e: { L: 'n', R: 's' },
  s: { L: 'e', R: 'w' },
  w: { L: 's', R: 'n' }
};

let x = 0;
let y = 0;
currentDir = 'n';

data.forEach(item => {
  let instructions = item.trim();
  let dirChange = instructions.match(/[LR]/)[0];
  let steps = parseInt(instructions.match(/\d+/)[0]);
  let newDir = dirs[currentDir][dirChange];

  console.log(dirChange, steps);

  if (newDir === 'n') {
    y += steps;
  }
  if (newDir === 's') {
    y -= steps;
  }
  if (newDir === 'e') {
    x += steps;
  }
  if (newDir === 'w') {
    x -= steps;
  }

  currentDir = newDir;
});

console.log('Position: ', x, y);
console.log('Blocks from HQ: ', Math.abs(x) + Math.abs(y));
