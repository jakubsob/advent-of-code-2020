const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 127', () => {
    let input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
    assert.strictEqual(part1(input, 5), 127);
  });
});

describe('Part 2', () => {
  it('should return 62', () => {
    let input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;
    assert.strictEqual(part2(input, 127), 62);
  });
});