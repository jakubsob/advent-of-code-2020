const part2 = (input) => {
  input = input.
    split('\n').
    map((x, i) => {
      let reg = /(\w{3})\s([+-]\d+)/g.exec(x);
      return [i, reg[1], parseInt(reg[2])];
    });

  function run(data) {
    let currIndex = 0; 
    let acc = 0;
    let visited = [];
    let curr = [];
    while (true) {
      curr = data[currIndex];
      visited.push(currIndex);
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
      if (visited.includes(currIndex)) {
        return [acc, false];
      } else if (currIndex == data.length) {
        return [acc, true];
      }
    }
    return [acc, true];
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i][1] == 'acc') {
      continue;
    } else if (input[i][1] == 'jmp') {
      let res = run(input);
      if (res[1]) {
        return res[0];
      }
      input[i][1] = 'nop';
      res = run(input);
      if (res[1]) {
        return res[0];
      }
      input[i][1] = 'jmp';
    } else if (input[i][1] == 'nop') {
      let res = run(input);
      if (res[1]) {
        return res[0];
      }
      input[i][1] = 'jmp';
      res = run(input);
      if (res[1]) {
        return res[0];
      }
      input[i][1] = 'nop';
    }
  }
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));