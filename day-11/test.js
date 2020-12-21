const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 37', () => {
    let input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;
    assert.strictEqual(part1(input), 37);
  });
});

describe('Part 2', () => {
  it('should return 26', () => {
    let input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;
    assert.strictEqual(part2(input), 26);
  });
});