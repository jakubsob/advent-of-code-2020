const part2 = (input) => {
  return input.
    split('\n').
    reduce((count, curr) => {
      let line = curr.trim();
      let regex = /^(\d+)-(\d+)\s([a-z]+):\s([a-z]+)$/g;
      let match = regex.exec(line);
      let min = match[1];
      let max = match[2];
      let letter= match[3];
      let pass = match[4];

      if (pass[min - 1] == letter ^ pass[max - 1] == letter) {
        return count + 1; 
      }
      return count;
    }, 0);
};


module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));