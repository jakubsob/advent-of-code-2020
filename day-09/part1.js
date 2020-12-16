const part1 = (input, lookback = 5) => {
  input = input.
    split('\n').
    map(x => parseInt(x));

  for (let i = lookback; i < input.length; i++) {
    let arr = input.slice(i - lookback, i);
    let flag = false;
    for (j of arr) {
      for (k of arr) {
        if (j !== k && j + k == input[i]) {
          flag = true;
        } 
      }
    }
    if (!flag) {
      return input[i];
    }
  }
    
  return input;
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input, 25));
