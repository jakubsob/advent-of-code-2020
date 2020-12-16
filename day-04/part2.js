const validation = {
  byr: (x) => {
    let val = (/(byr:)(\d{4})/g.exec(x)||[])[2];
    return !!val && 1920 <= val && val <= 2020
  },
  iyr: (x) => {
    let val = (/(iyr:)(\d{4})/g.exec(x)||[])[2];
    return !!val && 2010 <= val && val <= 2020
  },
  eyr: (x) => {
    let val = (/(eyr:)(\d{4})/g.exec(x)||[])[2];
    return !!val && 2020 <= val && val <= 2030
  },
  hgt: (x) => {
    let val = (/(hgt:)(\d{3}cm|\d{2}in)/g.exec(x)||[]);
    if (!val.length) return false;
    val = /(\d{2,3})(cm|in)/g.exec(val);
    if (val[2] == "cm") {
      return val[1] >= 150 && val[1] <= 193;
    } 
    if (val[2] == "in") {
      return val[1] >= 59 && val[1] <= 76;
    }
    return false;
  },
  hcl: (x) => /hcl:#[0-9a-f]{6}/.test(x),
  ecl: (x) => /(ecl:)(amb|blu|brn|gry|grn|hzl|oth)/g.test(x),
  pid: (x) => /pid:\d{9}/.test(x),
};

const part2 = (input) => {
  return input.
    split('\n\n').
    reduce((validCount, current) => {
      let x = Object.values(validation).reduce((count, func) => {
        return count + func(current);
      }, 0);
      if (x == 7) {
        return validCount + 1;
      }
      return validCount;
    }, 0);
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));

