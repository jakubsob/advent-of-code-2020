const part1 = (input) => {
  return input.
    split('\n\n').
    map(x => x.replace(/\n/g, '')).
    map(x => String.prototype.concat(...new Set(x)).length).
    reduce((a, b) => a + b, 0);
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));

