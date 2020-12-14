const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 3', () => {
		let input = `1-3 a: abcde
			1-3 b: cdefg
			2-9 c: ccccccccc
			10-20 d: dddd`;
		assert.equal(part1(input), 2);
	});
});

describe('Part 2', () => {
  it('should return ', () => {
    let input = `1-3 a: abcde
      1-3 b: cdefg
      2-9 c: ccccccccc`;
    assert.equal(part2(input), 1);
  })
})