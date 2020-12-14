const part2 = (input, slopes) => {
  input = input.split('\n').map(x => x.trim());
  return slopes.reduce((currcount, slope) => {
    let xpos = 0;
    let count = 0;
    for (let ypos = 0; ypos < input.length; ypos += slope[1]) {
      if (input[ypos][xpos] === '#') {
        count++;
      }
      xpos = (xpos + slope[0]) % input[ypos].length;
    }
    return count * currcount;
  }, 1);
};

module.exports = part2;

// const slopes = [
//   [1, 1],
//   [3, 1],
//   [5, 1],
//   [7, 1],
//   [1, 2]
// ];
// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input, slopes));

