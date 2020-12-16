const part2 = (input) => {
  let ids = input.
    replace(/F/g, '0').
    replace(/B/g, '1').
    replace(/R/g, '1').
    replace(/L/g, '0').
    split('\n').
    map(x => parseInt(x, 2)).
    sort()
  for (let i = 0; i < ids.length; i++) {
    if (ids[i + 1] === ids[i] + 2) return ids[i] + 1;
  }
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));

