const part1 = (input, xiter, yiter) => {
  input = input.split('\n').map(x => x.trim());
  let xpos = 0;
  let count = 0;
  for (let ypos = 0; ypos < input.length; ypos += yiter) {
    if (input[ypos][xpos] === '#') {
      count++;
    }
    xpos = (xpos + xiter) % input[ypos].length;
  }
  return count;
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input, 3, 1));

