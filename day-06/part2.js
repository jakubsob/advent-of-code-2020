Set.prototype.intersection = function(setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}

const part2 = (input) => {
  return input.
    split('\n\n').
    map(x => x.split('\n')).
    map(x => x.map(y => new Set(y))).
    map(x => x.reduce((a, b) => new Set(b).intersection(a), x[0])).
    reduce((a, b) => b.size + a, 0);
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));