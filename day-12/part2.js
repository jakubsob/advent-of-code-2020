const part2 = (input) => {
  input = input.
    split('\n').
    map(x => [/[A-Z]/g.exec(x)[0], Number(/\d+/g.exec(x)[0])]);
  
  let east = 0, north = 0;
  let wEast = 10, wNorth = 1;
  let currDir = 0;
  
  const makeDir = {
    0: () => {}, 
    90: () => ([wEast, wNorth] = [-wNorth, wEast]),
    180: () => ([wEast, wNorth] = [-wEast, -wNorth]),
    270: () => ([wEast, wNorth] = [wNorth, -wEast])
  };
  const move = {
  'E': (x) => wEast += x,
  'N': (x) => wNorth += x,
  'W': (x) => wEast -= x,
  'S': (x) => wNorth -= x,
  'L': (x) => makeDir[x](),
  'R': (x) => makeDir[360 - x](),
  'F': (x) => {
    east += wEast * x;
    north += wNorth * x;
    }
  };
  input.forEach(pair => {
    move[pair[0]](pair[1]);
  });
  return Math.abs(east) + Math.abs(north);
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));


