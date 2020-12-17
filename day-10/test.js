const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 220', () => {
    let input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;
    assert.strictEqual(part1(input), 220);
  });
});

describe('Part 2', () => {
  it('should return 62', () => {
    let input = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`;
    assert.strictEqual(part2(input), 19208);
  });
});