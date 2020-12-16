const assert = require('assert');
const part1 = require('./part1');

describe('Part 1', () => {
  it('should return 567', () => {
    let input = `BFFFBBFRRR
      FFFBBBFRRR`;
    assert.equal(part1(input), 567);
  });
});
