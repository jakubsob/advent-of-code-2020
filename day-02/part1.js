const part1 = (input) => {
  input = input.split('\n');
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    let line = input[i].trim();
    let regex = /^(\d+)-(\d+)\s([a-z]+):\s([a-z]+)$/g;
    let match = regex.exec(line);
    let min = match[1];
    let max = match[2];
    let letter= match[3];
    let pass = match[4];
    let re = new RegExp(letter, 'g');
    let matches = (pass.match(re) || []).length;
    if (min <= matches & matches <= max) {
      count += 1;
    }
  }
  return count;
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));