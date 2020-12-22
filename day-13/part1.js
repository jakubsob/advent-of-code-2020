const part1 = (input) => {
  input = input.split('\n');

  let timestamp = parseInt(input[0]);
  let ids = input[1].split(',')
    .filter(x => x != 'x')
    .map(x => parseInt(x));

  let n = ids.map(x => Math.trunc(timestamp / x) * x + x);
  let min = Math.min(...n);
  let busId = ids[n.indexOf(min)];
  return busId * (min - timestamp);  
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));


