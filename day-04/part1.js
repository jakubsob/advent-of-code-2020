const part1 = (input) => {
  let fields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];
  return input.
    split('\n\n').
    reduce((validCount, current) => {
      let nValid = fields.reduce((idCount, idCurrent) => {
        if (new RegExp(idCurrent).test(current)) {
          return idCount + 1;
        }
        return idCount;
      }, 0);
      if (nValid == 7) {
        return validCount + 1;
      }
      return validCount;
    }, 0);
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));
