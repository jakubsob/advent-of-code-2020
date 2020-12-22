const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 25', () => {
    let input = `939
7,13,x,x,59,x,31,19`;
    assert.strictEqual(part1(input), 295);
  });
});

describe('Part 2', () => {
  it('should return 1068781', () => {
    let input = `939
7,13,x,x,59,x,31,19`;
    assert.strictEqual(part2(input), 1068781);
  });
});