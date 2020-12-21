const part2 = (input) => {
  input = input.
    split('\n').
    map(x => x.split(''));

  const neighbors = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  function inside(pos, constr) {
    return pos[0] >= 0 && 
      pos[0] < constr[0] &&
      pos[1] >= 0 &&
      pos[1] < constr[1];
  };

  function countNeighbors(state, y, x, neighbors, find) {
    let count = 0;
    for ([dy, dx] of neighbors) {
      let i = 1;
      while(true) {
        let ny = y + dy * i, nx = x + dx * i;
        // console.log([ny, nx], i);
        if (!inside([ny, nx], [state.length, state[0].length])) break;
        // console.log(state[y][x], state[ny][nx]);
        if (state[ny][nx] === '.') {
          i++;
        }
        else if (state[ny][nx] === 'L') {
          break;
        }
        else if (state[ny][nx] === find) {
          count++;
          break;
        }
      }
    }
    return count;
  };
 
  let currState = input;
  let newState = input;
  let nChanges = -1;
  while (nChanges != 0) {
    nChanges = 0;
    newState = [...currState.map((x) => [...x])];
    for (let i = 0; i < currState.length; i++) {
      for (let j = 0; j < currState[0].length; j++) {
        if (currState[i][j] === 'L') {
          let n = countNeighbors(currState, i, j, neighbors, '#')
          if (n == 0) {
            newState[i][j] = '#';
            nChanges++;
          }
        }
        if (currState[i][j] == '#') {
          let n = countNeighbors(currState, i, j, neighbors, '#')
          if (n >= 5) {
            newState[i][j] = 'L';
            nChanges++;
          }
        }
        
      }
    }
    currState = newState;
  }

  return newState.reduce((a, b) => {
    return a + b.filter(x => x === '#').length;
  }, 0);
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));