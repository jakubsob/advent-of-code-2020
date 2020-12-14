const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 514579', () => {
    let input = `1721
      979
      366
      299
      675
      1456`; 
    assert.equal(part1(input, 2020), 514579);
  });
});

describe('Part 2', () => {
  it('should return 241861950', () => {
    let input = `979
      1
      366
      2
      675`;
    assert.equal(part2(input, 2020), 241861950);
  });
});