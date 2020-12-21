const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 25', () => {
    let input = `F10
N3
F7
R90
F11`;
    assert.strictEqual(part1(input), 25);
  });
});

describe('Part 2', () => {
  it('should return 286', () => {
    let input = `F10
N3
F7
R90
F11`;
    assert.strictEqual(part2(input), 286);
  });
});