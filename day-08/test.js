const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 4', () => {
    let input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
    assert.strictEqual(part1(input), 5);
  });
});

describe('Part 2', () => {
  it('should return 8', () => {
    let input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;
    assert.strictEqual(part2(input), 8);
  });
});