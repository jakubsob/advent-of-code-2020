const part1 = (input) => {
  input = input.
    split('\n').
    map((x, i) => {
      let reg = /(\w{3})\s([+-]\d+)/g.exec(x);
      return [i, reg[1], parseInt(reg[2])];
    });

  let currIndex = 0; 
  let acc = 0;
  let visited = [];
  while (!visited.includes(currIndex)) {
    curr = input[currIndex];
    visited.push(currIndex);
    console.log(curr);
    switch (curr[1]) {
      case 'nop':
        currIndex++;
        break;
      case 'acc':
        acc += curr[2];
        currIndex++;
        break;
      case 'jmp':
        currIndex += curr[2];
        break;
    }
  }
  
  return acc;
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));



