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
  const result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let mines = 0;
      // const xStart = i-1 < 0 ? 0 : i-1;
      // const xEnd = i+1 < matrix[i].length ? i+1 : i;
      // for (let x = xStart; x < xEnd; x++ ) {
      for (let y = i - 1; y < i + 1; y++) {
        for (let x = j - 1; x < j + 1; x++) {
          if (matrix[y][x] === true) {
            mines++;
          }
        }
      }
      row.push(mines);
    }
    result.push(row);
  }
  return result;
}

module.exports = minesweeper;
