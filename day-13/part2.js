const part2 = (input) => {
  let ids = input
    .split('\n')[1]
    .split(',')
    .map((x, i) => [x === 'x' ? x : parseInt(x), i])
    .filter(x => x[0] !== 'x');

  let result = 0;
  let step = 1;
  ids.forEach(([id, offset]) => {
    while ((result + offset) % id !== 0) {
      result += step;
    }
    step *= id;
  });
  return result;
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));


