const fs = require('fs');

const data = fs.readFileSync('./input.txt', { encoding: 'utf8' }).split('\r\n');

const ids = [];

data.forEach(item => {
  // Parse inputs
  let code = item.match(/.+-/g)[0].replace(/-/g, '');
  let sector = parseInt(item.match(/\d+/g)[0]);
  let checkSum = item.match(/\[.+\]/g)[0].replace(/[\[\]]/g, '');

  // Count values
  let obj = {};
  for (let i = 0; i < code.length; i++) {
    obj[code[i]] = (obj[code[i]] || 0) + 1;
  }

  // Sort counts - Tie breakers decided alphabetically
  let counts = Object.entries(obj).sort((a, b) => {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    }

    if (a[0] > b[0]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else {
      return 0;
    }
  });

  // If string matches check, item is valid
  let toCheck = counts.splice(0, 5).reduce((a, c) => {
    return a + c[0];
  }, '');

  let valid = toCheck === checkSum;

  // If valid, write sectorId to ids
  if (valid) {
    ids.push(sector);
  }
});

// Part 2
