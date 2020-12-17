const part1 = (input) => {
  input = input.
    split('\n').
    map(x => parseInt(x)).
    sort((a, b) => a - b);
  input = [0, ...input];
  let lags = {};
  for (let i = 1; i < input.length; i++) {
    let lag = (input[i] - input[i - 1]);
    if (!lags[lag]) lags[lag] = 0;
    lags[lag]++; 
  }
  lags[3]++; 
  return lags[1] * lags[3];
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));
