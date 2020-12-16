const part1 = (input) => {
  let ids = input.
    replace(/F/g, '0').
    replace(/B/g, '1').
    replace(/R/g, '1').
    replace(/L/g, '0').
    split('\n').
    map(x => parseInt(x, 2));
  return Math.max(...ids);
};

module.exports = part1;


// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));
