const part2 = (input, sumVal) => {
  input = input.
    split('\n').
    map(x => parseInt(x)).
    sort((a, b) => a - b);
  input = [0, ...input];
  let step = [1];
  input.forEach((e, i) => {
    let j = i + 1;
    while (input[j] <= e + 3) {
      step[j] = (step[j] || 0) + step[i];
      j++;
    }
  });

  return step[step.length - 1];
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));