const part1 = (input) => {
  input = input.
    split('\n').
    map(x => x.split(', '));
  let tree = {};
  for (let i = 0; i < input.length; i++) {
    let root = /^(\w+\s\w+)/g.exec(input[i])[1]; 
    if (!tree[root]) tree[root] = [];
    input[i].forEach(x => {
      let child = (/(\d+\s)(\w+\s\w+)+/gi.exec(x)||[])[2];
      tree[root].push(child);
    })
  }
  
  let validBags = new Set();
  function findPaths(child, root) {
    const children = tree[child];
    if (!children || children.length === 0) return;
    if (children.includes('shiny gold')) {
      validBags.add(root);
      return;
    }
    for (let i = 0; i < children.length; i++) {
      findPaths(children[i], root);
    }
  } 
  const roots = Object.keys(tree);
  for (let i = 0; i < roots.length; i++) {
    findPaths(roots[i], roots[i]);
  }
  return validBags.size;
};

module.exports = part1;

// const fs = require('fs');
// let input = fs.readFileSync('data/data.txt', 'utf-8');
// console.log(part1(input));



