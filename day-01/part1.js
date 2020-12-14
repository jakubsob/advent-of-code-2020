const part1 = (input, sum = 2020) => {
  let numbers = input.
    split('\n').
    map(x => parseInt(x));
  for (let i = 0; i <= numbers.length; i++) {
    let x1 = sum - numbers[i];
    let x2 = numbers.filter(x => x === x1);
    if (x2.length === 1) {
      return numbers[i] * x2;
    }
  }
}

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync("./data/data.txt", 'utf-8');
// console.log(part1(input, 2020));
