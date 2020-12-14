const part2 = (input, sum = 2020) => {
  let numbers = input.
    split('\n').
    map(x => parseInt(x));
  for (let i = 0; i <= numbers.length; i++) {
    let x1 = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let x2 = numbers[j];
      for (let k = j + 1; k < numbers.length; k++) {
        let x3 = numbers[k];
        if (x1 + x2 + x3 === sum) {
          return x1 * x2 * x3;
        }
      }
    }
  }
}

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync("./data/data.txt", 'utf-8');
// console.log(part2(input, 2020));
