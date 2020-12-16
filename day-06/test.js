const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 11', () => {
    let input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    assert.strictEqual(part1(input), 11);
  });
});

describe('Part 2', () => {
  it('should return 6', () => {
    let input = `abc

a
b
c

ab
ac

a
a
a
a

b`;
    assert.strictEqual(part2(input), 6);
  });
});