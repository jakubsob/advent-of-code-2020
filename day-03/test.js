const assert = require('assert');
const part1 = require('./part1');
const part2 = require('./part2');

describe('Part 1', () => {
  it('should return 7', () => {
    let input = `..##.........##.........##.........##.........##.........##.......
      #...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
      .#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
      ..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
      .#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
      ..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....
      .#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
      .#........#.#........#.#........#.#........#.#........#.#........#
      #.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
      #...##....##...##....##...##....##...##....##...##....##...##....#
      .#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.# `;
    assert.equal(part1(input, 3, 1), 7);
  });
});

describe('Part 2', () => {
  it('should return 336', () => {
    let slopes = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2]
    ];
    let input = `..##.........##.........##.........##.........##.........##.......
      #...#...#..#...#...#..#...#...#..#...#...#..#...#...#..#...#...#..
      .#....#..#..#....#..#..#....#..#..#....#..#..#....#..#..#....#..#.
      ..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#..#.#...#.#
      .#...##..#..#...##..#..#...##..#..#...##..#..#...##..#..#...##..#.
      ..#.##.......#.##.......#.##.......#.##.......#.##.......#.##.....
      .#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#.#.#.#....#
      .#........#.#........#.#........#.#........#.#........#.#........#
      #.##...#...#.##...#...#.##...#...#.##...#...#.##...#...#.##...#...
      #...##....##...##....##...##....##...##....##...##....##...##....#
      .#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.#.#..#...#.# `;
    assert.equal(part2(input, slopes), 336);
  });
});