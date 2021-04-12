/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array(matrix.length).fill(0).map((idx) => Array(matrix[idx].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let mines = 0;

      const xStart = j - 1 < 0 ? 0 : j - 1;
      const xEnd = j + 1 < matrix[i].length ? j + 1 : j;
      const yStart = i - 1 < 0 ? 0 : i - 1;
      const yEnd = i + 1 < matrix.length ? i + 1 : i;

      for (let y = yStart; y <= yEnd; y++) {
        for (let x = xStart; x <= xEnd; x++) {
          if (matrix[y][x] === true && !(x === j && y === i)) mines++;
        }
      }

      result[i][j] = mines;
    }
  }
  return result;
}

module.exports = minesweeper;
