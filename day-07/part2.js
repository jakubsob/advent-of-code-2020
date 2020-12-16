const part2 = (input) => {
  input = input.
    split('\n').
    map(x => x.split(', '));
  
  let tree = {};
  for (let i = 0; i < input.length; i++) {
    
    let root = /^(\w+\s\w+)/g.exec(input[i])[1]; 
    if (!tree[root]) tree[root] = {};
    
    input[i].forEach(x => {
      let match = (/(\d+)(\s)(\w+\s\w+)/gi.exec(x)||[]);
      if (match.length == 0) return;
      let n = match[1];
      let name = match[3];
      if (!tree[root][name]) {
        tree[root][name] = 0;
      }
      tree[root][name] += parseInt(n);
    })
  }
  
  let count = 0;
  function findPaths(root, curr = 1) {
    const children = tree[root];
    if (children.length === 0) return;
    for (const [key, value] of Object.entries(children)) {
      count += curr * value;
      findPaths(key, curr * value);
    }
  } 
  findPaths('shiny gold')
  return count;
};

module.exports = part2;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part2(input));