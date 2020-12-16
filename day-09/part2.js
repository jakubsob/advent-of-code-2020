const part2 = (input, sumVal) => {
  input = input.
    split('\n').
    map(x => parseInt(x));
  
  for (let i = 2; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let range = input.slice(i, j);
      let partialSum = range.reduce((a, b) => a + b, 0);
      if (partialSum == sumVal) {
        return Math.max(...range) + Math.min(...range);
      }
    }
  }
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input, 1398413738));