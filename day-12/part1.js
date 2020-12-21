const part1 = (input) => {
  input = input.
    split('\n').
    map(x => [/[A-Z]/g.exec(x)[0], Number(/\d+/g.exec(x)[0])]);
  
  const makeDir = {
    0: 'E', 
    90: 'N',
    180: 'W',
    270: 'S'
  };

  let east = 0, north = 0;
  let currDir = 0;
  
  const move = {
    'E': (x) => east += x,
    'N': (x) => north += x,
    'W': (x) => east -= x,
    'S': (x) => north -= x,
    'R': (x) => (currDir = (currDir - x + 360) % 360),
    'L': (x) => (currDir = (currDir + x) % 360),
    'F': (x) => move[makeDir[currDir]](x)
  };

  input.forEach(pair => {
    move[pair[0]](pair[1]);
  });

  return Math.abs(east) + Math.abs(north);
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));


